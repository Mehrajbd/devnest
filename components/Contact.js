'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="contact">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Let's Build Something Together
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or just want to connect? Drop us a message below, and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-8">
            {/* Contact Form */}
            <div className="col-span-1 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900 md:col-span-3 md:p-8">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <label className="flex flex-col">
                    <span className="pb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Full Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., John Doe"
                      className="h-11 w-full rounded-lg border border-gray-300 bg-white p-3 text-sm font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-0 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
                      required
                    />
                  </label>
                  
                  <label className="flex flex-col">
                    <span className="pb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email Address
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g., john.doe@example.com"
                      className="h-11 w-full rounded-lg border border-gray-300 bg-white p-3 text-sm font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-0 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
                      required
                    />
                  </label>
                </div>
                
                <label className="flex flex-col">
                  <span className="pb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </span>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g., Project Inquiry"
                    className="h-11 w-full rounded-lg border border-gray-300 bg-white p-3 text-sm font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-0 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
                    required
                  />
                </label>
                
                <label className="flex flex-col">
                  <span className="pb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or idea..."
                    rows="6"
                    className="w-full resize-y rounded-lg border border-gray-300 bg-white p-3 text-sm font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-0 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
                    required
                  />
                </label>
                
                <button
                  type="submit"
                  className="flex h-11 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-blue-600 px-6 text-sm font-bold text-white transition-colors hover:bg-blue-700 sm:w-auto sm:self-end"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="col-span-1 flex flex-col gap-6 md:col-span-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Contact Information
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Find us on these platforms.
                </p>
                
                <div className="mt-6 flex flex-col gap-4">
                  <a 
                    href="mailto:hello@softrevoX.com" 
                    className="group flex items-center gap-3"
                  >
                    <div className="flex size-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Email</p>
                      <p className="text-sm text-gray-600 transition-colors group-hover:text-blue-600 dark:text-gray-400">
                        hello@softrevoX.com
                      </p>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="group flex items-center gap-3"
                  >
                    <div className="flex size-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path clipRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.389 0-1.601 1.086-1.601 2.206v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-3.096 0 1.548 1.548 0 013.096 0zM6.55 7.765H3.456v8.59h3.094v-8.59zM17.887 2H6.113A4.113 4.113 0 002 6.113v11.774A4.113 4.113 0 006.113 22h11.774A4.113 4.113 0 0022 17.887V6.113A4.113 4.113 0 0017.887 2z" fillRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">LinkedIn</p>
                      <p className="text-sm text-gray-600 transition-colors group-hover:text-blue-600 dark:text-gray-400">
                        /company/softrevoX
                      </p>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="group flex items-center gap-3"
                  >
                    <div className="flex size-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.491.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fillRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">GitHub</p>
                      <p className="text-sm text-gray-600 transition-colors group-hover:text-blue-600 dark:text-gray-400">
                        /softrevoX
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Office Hours
                </h3>
                <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}