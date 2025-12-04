// components/WorkflowProcess.js
'use client';

import { useRef, useState, useEffect } from 'react';

export default function WorkflowProcess() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We begin by understanding your vision, goals, and requirements through in-depth discussions and market research.',
      icon: DiscoveryIcon,
      color: 'from-blue-500 to-cyan-500',
      features: ['Requirement Analysis', 'Project Scope', 'Timeline Planning', 'Resource Allocation']
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'Our design team creates wireframes, mockups, and interactive prototypes to visualize the final product.',
      icon: DesignIcon,
      color: 'from-purple-500 to-pink-500',
      features: ['UI/UX Design', 'Wireframing', 'Prototyping', 'User Testing']
    },
    {
      number: '03',
      title: 'Development & Coding',
      description: 'Our developers bring designs to life using cutting-edge technologies and best coding practices.',
      icon: DevelopmentIcon,
      color: 'from-green-500 to-emerald-500',
      features: ['Agile Development', 'Code Review', 'Version Control', 'Quality Assurance']
    },
    {
      number: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your product is bug-free, secure, and performs optimally across all platforms.',
      icon: TestingIcon,
      color: 'from-orange-500 to-red-500',
      features: ['Unit Testing', 'Integration Testing', 'Security Audit', 'Performance Testing']
    },
    {
      number: '05',
      title: 'Deployment & Launch',
      description: 'We handle the entire deployment process, ensuring a smooth transition to production environments.',
      icon: DeploymentIcon,
      color: 'from-indigo-500 to-purple-500',
      features: ['CI/CD Pipeline', 'Server Configuration', 'Database Setup', 'SSL Certification']
    },
    {
      number: '06',
      title: 'Support & Maintenance',
      description: 'Our relationship continues with ongoing support, updates, and maintenance for long-term success.',
      icon: SupportIcon,
      color: 'from-teal-500 to-blue-500',
      features: ['24/7 Monitoring', 'Regular Updates', 'Security Patches', 'Performance Optimization']
    }
  ];

  /* ========= SVG ICONS ========= */
  function DiscoveryIcon({ className = "w-6 h-6" }) {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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

  function DevelopmentIcon({ className = "w-6 h-6" }) {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    );
  }

  function TestingIcon({ className = "w-6 h-6" }) {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }

  function DeploymentIcon({ className = "w-6 h-6" }) {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
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

  /* ========= INTERSECTION OBSERVER ========= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ========= AUTO ROTATE STEPS ========= */
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, processSteps.length]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/5"
      id="workflow-process"
    >

      {/* HEADER */}
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Workflow</span> Process
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            A structured, transparent process that ensures quality, efficiency, and successful project delivery.
          </p>
        </div>

        {/* ---------- DESKTOP VIEW ---------- */}
        <div className="hidden lg:block mb-20">
          <div className="relative mb-16">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-20"></div>
            <div
              className="absolute left-0 top-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
              style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-6 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              const isCompleted = index < activeStep;

              return (
                <div
                  key={step.number}
                  className={`relative transition-all cursor-pointer ${isActive ? 'scale-110' : 'scale-100'}`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Top dot */}
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                    <div
                      className={`w-4 h-4 rounded-full border-4 transition-all ${
                        isCompleted
                          ? `bg-gradient-to-r ${step.color} border-white`
                          : isActive
                          ? 'bg-white border-blue-500'
                          : 'bg-gray-300'
                      }`}
                    ></div>
                  </div>

                  {/* Card */}
                  <div
                    className={`rounded-2xl p-6 transition-all ${
                      isActive ? 'bg-white dark:bg-gray-800 shadow-xl -translate-y-4' : 'bg-white/50 dark:bg-gray-800/50'
                    }`}
                  >
                    <div
                      className={`text-2xl font-black mb-4 ${
                        isActive ? `bg-gradient-to-r ${step.color} bg-clip-text text-transparent` : 'text-gray-400'
                      }`}
                    >
                      {step.number}
                    </div>

                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all ${
                        isActive
                          ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>

                    <h3 className={`text-xl font-bold mb-3 ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-600'}`}>
                      {step.title}
                    </h3>

                    <p className={`text-sm mb-4 ${isActive ? 'text-gray-600 dark:text-gray-300' : 'text-gray-500'}`}>
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className={`${isActive ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'} transition-all`}>
                      {step.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* ---------- MOBILE VIEW ---------- */}
        <div className="lg:hidden space-y-8 mb-16">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;

            return (
              <div
                key={step.number}
                className={`rounded-2xl p-6 transition-all ${
                  isActive ? 'bg-white dark:bg-gray-800 shadow-xl border-2 border-blue-500' : 'bg-white/50 dark:bg-gray-800/50'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isActive ? `bg-gradient-to-r ${step.color} text-white` : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <p
                      className={`text-lg font-black ${
                        isActive ? `bg-gradient-to-r ${step.color} bg-clip-text text-transparent` : 'text-gray-400'
                      }`}
                    >
                      {step.number}
                    </p>

                    <h3 className={`text-lg font-bold ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-600'}`}>
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className={`text-sm mb-4 ${isActive ? 'text-gray-600 dark:text-gray-300' : 'text-gray-500'}`}>
                  {step.description}
                </p>

                <div className={`grid grid-cols-2 gap-2 transition-all ${isActive ? 'opacity-100' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                  {step.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`}></div>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700 disabled:opacity-40"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {processSteps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`w-3 h-3 rounded-full ${
                  i === activeStep ? 'bg-blue-500 scale-125' : i < activeStep ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            disabled={activeStep === processSteps.length - 1}
            onClick={() => setActiveStep((prev) => Math.min(processSteps.length - 1, prev + 1))}
            className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700 disabled:opacity-40"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
