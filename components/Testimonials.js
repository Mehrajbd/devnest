// components/Testimonials.js
'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechInnovate Inc.',
      image: '/testimonial-1.jpg', // Replace with actual images
      logo: '/company-logo-1.png', // Replace with company logos
      rating: 5,
      text: 'SoftrevoX transformed our digital infrastructure completely. Their team delivered a scalable solution that handles 10x more traffic while reducing costs by 40%. The attention to detail and technical expertise is exceptional.',
      stats: '40% Cost Reduction',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Director',
      company: 'GlobalRetail Pro',
      image: '/testimonial-2.jpg',
      logo: '/company-logo-2.png',
      rating: 5,
      text: 'Working with SoftrevoX was a game-changer for our e-commerce platform. They delivered a seamless user experience that increased our conversion rate by 35%. Their agile approach and constant communication made the process smooth.',
      stats: '35% Conversion Increase',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      position: 'CEO',
      company: 'StartUpScale',
      image: '/testimonial-3.jpg',
      logo: '/company-logo-3.png',
      rating: 5,
      text: 'As a startup, we needed a partner who could move fast without compromising quality. SoftrevoX exceeded our expectations, delivering a robust MVP in record time that helped us secure Series A funding.',
      stats: 'Series A Secured',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      name: 'David Kim',
      position: 'Head of Digital',
      company: 'FinanceCorp Global',
      image: '/testimonial-4.jpg',
      logo: '/company-logo-4.png',
      rating: 5,
      text: 'The security and compliance standards implemented by SoftrevoX for our financial platform were impeccable. They handled complex regulatory requirements while delivering a user-friendly interface our customers love.',
      stats: '100% Compliance',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      position: 'Operations Manager',
      company: 'HealthTech Solutions',
      image: '/testimonial-5.jpg',
      logo: '/company-logo-5.png',
      rating: 5,
      text: 'SoftrevoX built our healthcare platform with precision and care. The system handles sensitive patient data securely while providing an intuitive experience for both patients and medical staff.',
      stats: '99.9% Uptime',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const partners = [
    { name: 'TechInnovate', logo: '/partners/techinnovate.png' },
    { name: 'GlobalRetail', logo: '/partners/globalretail.png' },
    { name: 'StartUpScale', logo: '/partners/startupscale.png' },
    { name: 'FinanceCorp', logo: '/partners/financecorp.png' },
    { name: 'HealthTech', logo: '/partners/healthtech.png' },
    { name: 'CloudSystems', logo: '/partners/cloudsystems.png' },
    { name: 'DataFlow', logo: '/partners/dataflow.png' },
    { name: 'InnovateLabs', logo: '/partners/innovatelabs.png' },
  ];

  // Auto-play testimonials
  useEffect(() => {
    if (isAutoPlaying && isVisible) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isVisible, testimonials.length]);

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

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 overflow-hidden"
      id="testimonials"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 right-10 w-80 h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-20 animate-float-slow delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-amber-200 dark:bg-amber-900/10 rounded-full filter blur-3xl opacity-15 animate-float-slow delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg mb-8">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-700"></div>
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Testimonials</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            What Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">Partners</span> Say
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            Trusted by industry leaders and innovative startups alike
          </p>

          {/* Stats Highlight */}
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl">
            <div className="text-3xl font-black">30+</div>
            <div className="text-sm font-medium text-blue-100">Leading Brands Rely On Our Expertise</div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Testimonial Content */}
          <div className="relative">
            <div 
              className="relative rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 p-8 shadow-2xl transition-all duration-500"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <div className="mb-6">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light italic">
                  "{testimonials[activeTestimonial].text}"
                </p>
              </div>

              {/* Stats Highlight */}
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r ${testimonials[activeTestimonial].color} text-white text-sm font-semibold mb-6`}>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                {testimonials[activeTestimonial].stats}
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  {/* Online Indicator */}
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <StarRating rating={testimonials[activeTestimonial].rating} />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonials[activeTestimonial].position} • {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Testimonial Progress */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Partners Grid */}
          <div className="lg:pl-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
              Trusted By Industry Leaders
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={partner.name}
                  className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Company Logo Placeholder */}
                  <div className="w-full h-12 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                      {partner.name}
                    </span>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/20 transition-all duration-300"></div>
                </div>
              ))}
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Client Retention
                </div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-3xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  4.9/5
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Average Rating
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Become our next success story. Let's build something amazing together.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Start Your Project
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 whitespace-nowrap">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}