// components/WhyChooseUsEnhanced.js
'use client';

import { useEffect, useRef, useState } from 'react';

export default function WhyChooseUsEnhanced() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    support: 0
  });
  const sectionRef = useRef(null);

  const stats = [
    { number: 5, suffix: '+', label: 'Projects Completed', duration: 2000 },
    { number: 100, suffix: '%', label: 'Client Satisfaction', duration: 1500 },
    { number: 5, suffix: '+', label: 'Years Experience', duration: 2500 },
    { number: 24, suffix: '/7', label: 'Support Available', duration: 1800 }
  ];

  const features = [
    {
      icon: CodeIcon,
      title: 'Cutting-Edge Technology',
      description: 'We leverage the latest technologies and frameworks to build future-proof solutions that scale with your business.',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'blue'
    },
    {
      icon: InnovationIcon,
      title: 'Innovation-Driven Approach',
      description: 'Our team thrives on innovation, constantly exploring new possibilities to deliver unique and impactful digital experiences.',
      color: 'from-purple-500 to-pink-500',
      gradient: 'purple'
    },
    {
      icon: SecurityIcon,
      title: 'Enterprise Security',
      description: 'Security is our top priority. We implement enterprise-grade security measures to protect your data and applications.',
      color: 'from-green-500 to-emerald-500',
      gradient: 'green'
    },
    {
      icon: RocketIcon,
      title: 'Agile Development',
      description: 'We follow agile methodologies to deliver high-quality solutions faster without compromising on quality.',
      color: 'from-orange-500 to-red-500',
      gradient: 'orange'
    },
    {
      icon: DesignIcon,
      title: 'Pixel-Perfect Design',
      description: 'Every pixel matters. We create visually stunning interfaces that provide exceptional user experiences.',
      color: 'from-indigo-500 to-purple-500',
      gradient: 'indigo'
    },
    {
      icon: SupportIcon,
      title: 'Continuous Support',
      description: 'Our relationship doesn\'t end at delivery. We provide ongoing support and maintenance for your peace of mind.',
      color: 'from-teal-500 to-blue-500',
      gradient: 'teal'
    }
  ];

  // Authentic SVG Icons
  function CodeIcon({ className = "w-6 h-6" }) {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    );
  }

  function InnovationIcon({ className = "w-6 h-6" }) {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    );
  }

  function SecurityIcon({ className = "w-6 h-6" }) {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }

  function RocketIcon({ className = "w-6 h-6" }) {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }

  function DesignIcon({ className = "w-6 h-6" }) {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    );
  }

  function SupportIcon({ className = "w-6 h-6" }) {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );
  }

  // Animate counters
  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat) => {
        const duration = stat.duration;
        const stepTime = Math.abs(Math.floor(duration / stat.number));
        let current = 0;
        
        const timer = setInterval(() => {
          current += 1;
          setCounters(prev => ({
            ...prev,
            [stat.label.toLowerCase().replace(/\s+/g, '')]: current
          }));
          
          if (current >= stat.number) {
            clearInterval(timer);
          }
        }, stepTime);
      });
    }
  }, [isVisible]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/5 overflow-hidden"
      id="why-choose-us"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30 animate-float-slow delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-200 dark:bg-cyan-900/20 rounded-full filter blur-3xl opacity-20 animate-float-slow delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg mb-8">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-700"></div>
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Why Choose Us</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            Why <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">SoftrevoX</span>?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            We don't just build software - we craft digital experiences that drive growth, 
            innovation, and lasting success for your business.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative text-center p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute inset-[2px] rounded-3xl bg-white dark:bg-gray-800 -z-10"></div>
              
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                {counters[stat.label.toLowerCase().replace(/\s+/g, '')] || 0}{stat.suffix}
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative overflow-hidden rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 p-8 transition-all duration-700 transform hover:-translate-y-3 hover:shadow-2xl ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100 + 600}ms`,
                }}
              >
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Floating Icon Container */}
                <div className="relative z-10 mb-8">
                  <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <IconComponent className="w-8 h-8" />
                    
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500`}></div>
                  </div>
                  
                  {/* Floating Particles */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-300 transition-opacity duration-500"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg font-light">
                    {feature.description}
                  </p>
                  
                  {/* Animated Learn More */}
                  <div className="flex items-center justify-between">
                    <button className="group/btn flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:gap-3 transition-all duration-300">
                      Learn More
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    {/* Progress Indicator */}
                    <div className="w-12 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className={`w-0 h-full bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-1000 delay-300`}></div>
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 p-1 shadow-2xl">
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-12">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 rounded-full translate-y-12 -translate-x-12"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
                  Ready to Transform Your Digital Presence?
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join 150+ satisfied clients who have experienced the SoftrevoX difference.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="group relative overflow-hidden px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
                    <span className="relative z-10">Start Your Project Today</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                  
                  <button className="group px-10 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold rounded-2xl hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center gap-2">
                      View Our Work
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                </div>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
                  ✨ No upfront costs • Free consultation • 30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}