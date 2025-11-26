'use client';

import { useRef, useState, useEffect } from 'react';

const expertiseCards = [
  {
    title: 'Frontend Development',
    description: 'Modern, responsive web applications built with cutting-edge frameworks and tools for optimal user experience and performance.',
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    gradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
    border: 'border-blue-100 dark:border-blue-800/30',
    bgCircle: 'bg-blue-200 dark:bg-blue-800/30',
    badgeColor: 'bg-blue-100 dark:bg-blue-800/40 text-blue-700 dark:text-blue-300'
  },
  {
    title: 'Backend Development',
    description: 'Robust server-side solutions and API development ensuring scalability, security, and seamless data management for your applications.',
    technologies: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'API Integration','Golang', 'Django'],
    gradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
    border: 'border-green-100 dark:border-green-800/30',
    bgCircle: 'bg-green-200 dark:bg-green-800/30',
    badgeColor: 'bg-green-100 dark:bg-green-800/40 text-green-700 dark:text-green-300'
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security measures and protocols to protect your digital assets from threats and vulnerabilities.',
    technologies: ['SSL/TLS', 'Firewalls', 'Encryption', 'Network & Server Pentesting', 'Web, API, and Mobile Application Pen Testing'],
    gradient: 'from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20',
    border: 'border-red-100 dark:border-red-800/30',
    bgCircle: 'bg-red-200 dark:bg-red-800/30',
    badgeColor: 'bg-red-100 dark:bg-red-800/40 text-red-700 dark:text-red-300'
  },
  {
    title: 'WordPress Development',
    description: 'Custom WordPress solutions including theme development, plugin creation, and e-commerce integration for powerful content management.',
    technologies: ['Themes', 'Plugins', 'WooCommerce', 'Customization'],
    gradient: 'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20',
    border: 'border-purple-100 dark:border-purple-800/30',
    bgCircle: 'bg-purple-200 dark:bg-purple-800/30',
    badgeColor: 'bg-purple-100 dark:bg-purple-800/40 text-purple-700 dark:text-purple-300'
  },
  {
    title: 'Quality Assurance & Testing',
    description: 'Comprehensive testing strategies ensuring software quality, performance, and reliability through automated and manual testing processes.',
    technologies: ['Vibium', 'Cypress', 'Selenium', 'Load Testing', 'CI/CD','Python','Automation','Manual Testing'],
    gradient: 'from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20',
    border: 'border-teal-100 dark:border-teal-800/30',
    bgCircle: 'bg-teal-200 dark:bg-teal-800/30',
    badgeColor: 'bg-teal-100 dark:bg-teal-800/40 text-teal-700 dark:text-teal-300'
  },
  {
    title: 'UI/UX & Graphic Design',
    description: 'User-centered design approach creating intuitive, accessible, and engaging experiences that drive conversion and user satisfaction.',
    technologies: ['Figma', 'Wireframing', 'Prototyping', 'A/B Testing'],
    gradient: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
    border: 'border-pink-100 dark:border-pink-800/30',
    bgCircle: 'bg-pink-200 dark:bg-pink-800/30',
    badgeColor: 'bg-pink-100 dark:bg-pink-800/40 text-pink-700 dark:text-pink-300'
  },
  {
    title: 'AWS & DevOps',
    description: 'Streamline infrastructure and deployments using AWS services, Docker, Kubernetes, and CI/CD pipelines for high availability and scalability.',
    technologies: ['AWS EC2', 'S3', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
    gradient: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
    border: 'border-yellow-100 dark:border-yellow-800/30',
    bgCircle: 'bg-yellow-200 dark:bg-yellow-800/30',
    badgeColor: 'bg-yellow-100 dark:bg-yellow-800/40 text-yellow-700 dark:text-yellow-300'
  }
];

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedText, setAnimatedText] = useState('');
  const sectionRef = useRef(null);
  const fullText = "Our Stack Services";

  // Intersection Observer for animation
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

  // Text animation effect
  useEffect(() => {
    if (isVisible) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setAnimatedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Technology Stack</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {animatedText}
              <span className="inline-block w-1 h-12 bg-blue-600 ml-1 animate-pulse"></span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We master a comprehensive suite of modern technologies to deliver 
            <span className="font-semibold text-gray-700 dark:text-gray-200"> scalable, secure, and high-performance </span>
            digital solutions tailored to your business needs.
          </p>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {expertiseCards.map((card, index) => (
            <div
              key={card.title}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.gradient} ${card.border} p-8 transform hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${card.bgCircle} rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700`}></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {card.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {card.technologies.map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1 ${card.badgeColor} text-xs font-medium rounded-full`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Let's discuss how our technology expertise can bring your vision to life.
              </p>
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}