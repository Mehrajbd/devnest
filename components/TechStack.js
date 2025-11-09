'use client';

import { useState, useEffect, useRef } from 'react';

const techStack = [
  { name: 'React.js', icon: '⚛️', category: 'frontend', color: 'from-blue-500 to-cyan-400' },
  { name: 'Next.js', icon: '▲', category: 'frontend', color: 'from-gray-800 to-gray-600' },
  { name: 'Node.js', icon: '🟢', category: 'backend', color: 'from-green-500 to-green-400' },
  { name: 'TypeScript', icon: '📘', category: 'language', color: 'from-blue-600 to-blue-400' },
  { name: 'Python', icon: '🐍', category: 'language', color: 'from-yellow-500 to-blue-500' },
  { name: 'Express', icon: '🚂', category: 'backend', color: 'from-gray-600 to-gray-400' },
  { name: 'PHP', icon: '🐘', category: 'backend', color: 'from-purple-500 to-indigo-400' },
  { name: 'Laravel', icon: '🔶', category: 'backend', color: 'from-red-500 to-orange-400' },
  { name: 'WordPress', icon: '🔗', category: 'cms', color: 'from-blue-700 to-blue-500' },
  { name: 'MySQL', icon: '🐬', category: 'database', color: 'from-orange-500 to-blue-500' },
  { name: 'MongoDB', icon: '🍃', category: 'database', color: 'from-green-600 to-green-400' },
  { name: 'PostgreSQL', icon: '🐘', category: 'database', color: 'from-blue-700 to-blue-500' },
  { name: 'HTML5', icon: '🌐', category: 'frontend', color: 'from-orange-500 to-orange-400' },
  { name: 'CSS3', icon: '🎨', category: 'frontend', color: 'from-blue-500 to-blue-400' },
  { name: 'JavaScript', icon: '📜', category: 'language', color: 'from-yellow-400 to-yellow-300' },
  { name: 'AWS', icon: '☁️', category: 'devops', color: 'from-orange-500 to-yellow-400' },
  { name: 'Docker', icon: '🐳', category: 'devops', color: 'from-blue-500 to-cyan-400' },
  { name: 'Cybersecurity', icon: '🛡️', category: 'security', color: 'from-red-500 to-pink-400' },
  { name: 'UI/UX Design', icon: '🎯', category: 'design', color: 'from-purple-500 to-pink-400' },
  { name: 'SQA', icon: '✅', category: 'testing', color: 'from-green-500 to-emerald-400' },
];

const categories = [
  { id: 'all', name: 'All Technologies' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'language', name: 'Languages' },
  { id: 'database', name: 'Database' },
  { id: 'devops', name: 'DevOps' },
  { id: 'design', name: 'Design' },
  { id: 'security', name: 'Security' },
  { id: 'testing', name: 'Testing' },
  { id: 'cms', name: 'CMS' },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleItems, setVisibleItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const filteredTechStack = activeCategory === 'all' 
    ? techStack 
    : techStack.filter(tech => tech.category === activeCategory);

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

  // Animate items sequentially
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setVisibleItems(filteredTechStack.map((_, index) => index));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, filteredTechStack]);

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
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technology</span> Expertise
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We master a comprehensive suite of modern technologies to deliver 
            <span className="font-semibold text-gray-700 dark:text-gray-200"> scalable, secure, and high-performance </span>
            digital solutions tailored to your business needs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-16">
          {filteredTechStack.map((tech, index) => (
            <div
              key={tech.name}
              className={`
                group relative flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-gray-800 
                border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl transition-all duration-500
                transform hover:-translate-y-2 backdrop-blur-sm
                ${visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }
              `}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              
              {/* Animated Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                <div className="absolute inset-[1px] bg-white dark:bg-gray-800 rounded-2xl"></div>
              </div>

              {/* Tech Icon */}
              <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              
              {/* Tech Name */}
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white text-center leading-tight">
                {tech.name}
              </h3>

              {/* Category Badge */}
              <div className="absolute -top-2 -right-2">
                <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full capitalize">
                  {tech.category}
                </span>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cybersecurity Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-100 dark:border-red-800/30 p-8 transform hover:-translate-y-2 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-200 dark:bg-red-800/30 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Cybersecurity
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Advanced security protocols, vulnerability assessments, and secure coding practices to protect your digital assets from modern threats.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {['SSL/TLS', 'OAuth', 'Encryption', 'Firewalls', 'Pen Testing'].map((item) => (
                  <span key={item} className="px-3 py-1 bg-red-100 dark:bg-red-800/40 text-red-700 dark:text-red-300 text-xs font-medium rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* UI/UX Design Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-100 dark:border-purple-800/30 p-8 transform hover:-translate-y-2 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 dark:bg-purple-800/30 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                UI/UX Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                User-centered design approach creating intuitive, accessible, and engaging experiences that drive conversion and user satisfaction.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {['Figma', 'Prototyping', 'User Research', 'Wireframing', 'A/B Testing'].map((item) => (
                  <span key={item} className="px-3 py-1 bg-purple-100 dark:bg-purple-800/40 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>


 {/* AWS & DevOps Card */}
<div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-100 dark:border-yellow-800/30 p-8 transform hover:-translate-y-2 transition-all duration-500">
  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 dark:bg-yellow-800/30 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
  
  <div className="relative z-10">
    <div className="text-4xl mb-4"></div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      AWS & DevOps
    </h3>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
      Streamline infrastructure and deployments using AWS services, Docker, Kubernetes, and CI/CD pipelines for high availability, scalability, and automation.
    </p>

    <div className="flex flex-wrap gap-2 mt-4">
      {['AWS EC2', 'S3', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'].map((item) => (
        <span
          key={item}
          className="px-3 py-1 bg-yellow-100 dark:bg-yellow-800/40 text-yellow-700 dark:text-yellow-300 text-xs font-medium rounded-full"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
</div>




          {/* Quality Assurance Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-100 dark:border-green-800/30 p-8 transform hover:-translate-y-2 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 dark:bg-green-800/30 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Comprehensive testing strategies including automation, performance testing, and CI/CD integration ensuring flawless product delivery.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {['Jest', 'Cypress', 'Selenium', 'Load Testing', 'CI/CD'].map((item) => (
                  <span key={item} className="px-3 py-1 bg-green-100 dark:bg-green-800/40 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
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