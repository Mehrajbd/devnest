'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  // WhatsApp message function
  const openWhatsApp = () => {
    const message = "Hello SoftRevoX! I'm interested in your services.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, '_blank');
  };

  // Call function
  const makeCall = () => {
    window.open('tel:+1234567890', '_self');
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
                  disabled={isSubmitting}
                  className={`flex h-11 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg px-6 text-sm font-bold text-white transition-all duration-300 sm:w-auto sm:self-end ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
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
                  Get in touch with us through any of these channels.
                </p>
                
                <div className="mt-6 flex flex-col gap-4">
                  {/* Email */}
                  <a 
                    href="mailto:hello@softrevoX.com" 
                    className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    <div className="flex size-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400 transition-all duration-300 group-hover:scale-110">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  
                  {/* Phone Number */}
                  <button 
                    onClick={makeCall}
                    className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-900/20 text-left w-full"
                  >
                    <div className="flex size-12 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400 transition-all duration-300 group-hover:scale-110">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Phone</p>
                      <p className="text-sm text-gray-600 transition-colors group-hover:text-green-600 dark:text-gray-400">
                        +880 1533045910
                      </p>
                    </div>
                  </button>
                  
                  {/* WhatsApp */}
                  <button 
                    onClick={openWhatsApp}
                    className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-900/20 text-left w-full"
                  >
                    <div className="flex size-12 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400 transition-all duration-300 group-hover:scale-110">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.209-3.553-8.485"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">WhatsApp</p>
                      <p className="text-sm text-gray-600 transition-colors group-hover:text-green-600 dark:text-gray-400">
                        +880 1533045910
                      </p>
                    </div>
                  </button>
                  
                  {/* Facebook */}
<a 
  href="https://www.facebook.com/softrevox" 
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
>
  <div className="flex size-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400 transition-all duration-300 group-hover:scale-110">
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  </div>
  <div>
    <p className="text-sm font-semibold text-gray-900 dark:text-white">Facebook</p>
    <p className="text-sm text-gray-600 transition-colors group-hover:text-blue-600 dark:text-gray-400">
      /softrevoX
    </p>
  </div>
</a>
                  
                  {/* GitHub */}
                  <a 
                    href="#" 
                    className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700/20"
                  >
                    <div className="flex size-12 items-center justify-center rounded-lg bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 transition-all duration-300 group-hover:scale-110">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.491.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fillRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">GitHub</p>
                      <p className="text-sm text-gray-600 transition-colors group-hover:text-gray-600 dark:text-gray-400">
                        /softrevoX
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Quick Action Buttons */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button 
                    onClick={openWhatsApp}
                    className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-green-700 transform hover:scale-105"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.209-3.553-8.485"/>
                    </svg>
                    Message on WhatsApp
                  </button>
                  
                  <button 
                    onClick={makeCall}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 transform hover:scale-105"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </button>
                </div>
              </div>
              
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Office Hours
                </h3>
                <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium text-red-500">Closed</span>
                  </p>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">
                    💡 <strong>Pro Tip:</strong> For urgent matters, WhatsApp is the fastest way to reach us!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}