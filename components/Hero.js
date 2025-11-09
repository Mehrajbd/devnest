// components/Hero.js - Premium Redesign with Company Logo
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Mouse move effect for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Advanced particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `hsla(${Math.random() * 60 + 200}, 70%, 65%, ${Math.random() * 0.4})`;
        this.oscillation = Math.random() * Math.PI * 2;
        this.oscillationSpeed = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.oscillation += this.oscillationSpeed;

        // Gentle oscillation
        this.x += this.speedX + Math.sin(this.oscillation) * 0.3;
        this.y += this.speedY + Math.cos(this.oscillation) * 0.3;

        // Boundary wrap
        if (this.x > canvas.width + 10) this.x = -10;
        else if (this.x < -10) this.x = canvas.width + 10;
        if (this.y > canvas.height + 10) this.y = -10;
        else if (this.y < -10) this.y = canvas.height + 10;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Connection lines between particles
    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      drawConnections();
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Floating code elements
  const CodeSnippet = ({ code, top, left, delay }) => (
    <div
      className="absolute hidden lg:block glass rounded-lg p-3 text-xs font-mono text-gray-700 dark:text-gray-300 opacity-60 animate-float"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        transform: 'rotate(5deg)'
      }}
    >
      <div className="text-purple-500">function</div>
      <div className="text-blue-500 ml-4">return</div>
      <div className="text-green-500 ml-4">"success"</div>
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/10">
      {/* Advanced Animated Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Dynamic Gradient Orbs */}
      <div
        className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full filter blur-3xl opacity-15 animate-pulse-slow"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl opacity-15 animate-pulse-slow delay-1000"
        style={{
          transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
        }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-400 to-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow delay-500"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      ></div>

      {/* Floating Code Snippets */}
      <CodeSnippet code="<Code />" top={20} left={10} delay={0} />
      <CodeSnippet code="{ dev: true }" top={70} left={85} delay={2} />
      <CodeSnippet code="npm create success" top={30} left={80} delay={4} />
      <CodeSnippet code="AI Powered" top={80} left={15} delay={6} />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
          {/* Main Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
                <span className="block text-gray-900 dark:text-white">We Build</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                  Digital Dreams
                </span>
              </h1>

              {/* Tagline */}
              <div className="relative">
                <div className="absolute -left-4 top-3 w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <h2 className="text-xl md:text-2xl font-light leading-relaxed text-gray-600 dark:text-gray-300 pl-6 border-l-2 border-gray-200 dark:border-gray-700">
                  Transforming visionary ideas into{' '}
                  <span className="font-semibold text-gray-700 dark:text-gray-200">
                    scalable digital experiences
                  </span>{' '}
                  that drive innovation and business growth through cutting-edge technology.
                </h2>
              </div>

            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 max-w-md">
              {[
                { number: '150+', label: 'Projects Delivered', suffix: '' },
                { number: '99%', label: 'Client Satisfaction', suffix: '' },
                { number: '24/7', label: 'AI Support', suffix: '' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="relative">
                    <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      {stat.number}
                    </span>
                    <div className="absolute -top-1 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                      {stat.suffix}
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group relative overflow-hidden flex items-center justify-center rounded-2xl h-16 px-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              </Link>

              <Link
                href="/projects"
                className="group flex items-center justify-center rounded-2xl h-16 px-10 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-lg font-semibold transition-all duration-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg transform hover:scale-105"
              >
                <span className="flex items-center gap-3">
                  View Portfolio
                  <span className="group-hover:rotate-90 transition-transform duration-300">✧</span>
                </span>
              </Link>
            </div>
          </div>

          {/* 3D Hero Visual (Removed Floating Badges) */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="relative w-full h-96 group perspective-1000">
                <div className="relative w-full h-full transform-style-3d transition-transform duration-700 group-hover:rotate-y-10">
                  {/* Front Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-xl transform rotate-3 transition-transform duration-500 group-hover:rotate-0">
                    <div className="absolute inset-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center overflow-hidden">
                      {/* Animated Code Background */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="animate-float-slow">
                          <div className="text-green-400 text-xs font-mono">Success</div>
                          <div className="text-blue-400 text-xs font-mono ml-4"> Deployed</div>
                          <div className="text-purple-400 text-xs font-mono ml-8"> Live</div>
                        </div>
                      </div>

                      {/* Central Logo */}
                      <div className="relative z-10 text-center">
                        <div className="relative w-32 h-32 mb-6 mx-auto group/logo">
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl opacity-20 group-hover/logo:opacity-30 transition-opacity duration-500 blur-xl"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl p-1 animate-gradient">
                            <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                              <div className="relative w-full h-full transform group-hover/logo:scale-110 transition-transform duration-500 overflow-hidden rounded-2xl">
                                <Image
                                  src="/Companylogo.jpeg"
                                  alt="DevNest Logo"
                                  fill
                                  className="object-cover rounded-xl"
                                  priority
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-cyan-500/20 rounded-xl opacity-0 group-hover/logo:opacity-100 blur-md transition-opacity duration-500"></div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
                          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-1000 opacity-60"></div>
                        </div>

                        {/* Animated Progress Bars */}
                        <div className="space-y-2">
                          <div className="w-32 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
                          <div className="w-24 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
                        </div>

                        {/* Company Name */}
                        <div className="mt-4">
                          <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Your Partner with IT Solution
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl filter blur-3xl opacity-20 -z-10 animate-pulse-slow group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-widest animate-pulse">
            EXPLORE MORE
          </span>
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2 animate-bounce absolute"></div>
          </div>
        </div>
      </div>

      {/* Mouse Follow Gradient */}
      <div
        className="fixed pointer-events-none w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full filter blur-3xl opacity-10 -z-5 transition-all duration-100"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>
    </section>
  );
}
