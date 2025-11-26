'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


const services = [
  {
    title: 'eCommerce Platforms',
    description:
      'Building custom online stores with integrated payment gateways for seamless user shopping experiences.',
    icon: '🛒',
    features: ['Custom CMS', 'Payment Integration', 'Inventory Management', 'Analytics Dashboard'],
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Learning Management Systems',
    description:
      'Developing intuitive and scalable e-learning platforms for educational institutions and corporate training.',
    icon: '🎓',
    features: ['Course Management', 'Progress Tracking', 'Certification', 'Multi-tenancy'],
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    title: 'Custom Booking Systems',
    description:
      'Creating efficient and reliable scheduling systems for services, appointments, and rentals.',
    icon: '📅',
    features: ['Calendar Integration', 'Payment Processing', 'Notifications', 'Multi-user Access'],
    gradient: 'from-green-400 to-teal-400',
  },
  {
    title: 'Enterprise Applications',
    description:
      'Designing robust, secure, and scalable applications to streamline complex business operations.',
    icon: '🏢',
    features: ['Workflow Automation', 'Data Security', 'Scalability', 'Integration APIs'],
    gradient: 'from-indigo-500 to-blue-400',
  },
];

export default function Services() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Glowing background orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full filter blur-3xl opacity-20 animate-pulse-slow delay-700"></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Development Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transforming visionary ideas into scalable, high-performance digital products — designed for the future.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative group rounded-3xl border border-white/20 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Floating glowing border */}
              <div
                className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-500`}
              ></div>

              <div className="relative z-10 flex flex-col gap-5">
                {/* Icon and Title */}
                <div className="flex items-center gap-4">
                  <div
                    className={`text-4xl bg-gradient-to-r ${service.gradient} text-white rounded-2xl p-3 shadow-lg transition-transform duration-500 group-hover:scale-110`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features with animation */}
                <motion.div
                  className="flex flex-wrap gap-2 mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1 text-xs font-medium text-blue-800 dark:from-blue-900 dark:to-indigo-900 dark:text-blue-200 hover:scale-105 transform transition-all"
                    >
                      {feature}
                    </span>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  className="mt-6 self-start text-sm font-semibold text-blue-600 dark:text-blue-400 relative group-hover:underline transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  Learn More →
                </motion.button>
              </div>

              {/* Subtle Animated Glow */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-3xl"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ repeat: Infinity, duration: 5 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
