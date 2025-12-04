'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // MailJS Configuration
  const emailjsConfig = {
    serviceId: process.env.NEXT_PUBLIC_MAILJS_SERVICE_ID || 'service_68btvy5',
    templateId: process.env.NEXT_PUBLIC_MAILJS_TEMPLATE_ID || 'template_amxdewg',
    publicKey: process.env.NEXT_PUBLIC_MAILJS_PUBLIC_KEY || 'sLjpi3LaaBeu9i0rq'
  };

  useEffect(() => {
    emailjs.init(emailjsConfig.publicKey);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'SoftrevoX Team',
          reply_to: formData.email,
        },
        emailjsConfig.publicKey
      );

      if (result.text === 'OK') {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = "Hello SoftRevoX! I'm interested in your services.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/8801533045910?text=${encodedMessage}`, '_blank');
  };

  const makeCall = () => {
    window.open('tel:+8801533045910', '_self');
  };

  return (
    <section className="py-24 bg-background" id="contact">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse"></div>
              <span className="text-sm font-medium text-foreground/80">Contact Us</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In <span className="heading-gradient">Touch</span>
            </h1>
            
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Have a project in mind or just want to connect? Drop us a message below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Information Card */}
              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Contact Information
                </h3>
                <p className="text-sm text-foreground/70 mb-6">
                  Get in touch with us through any of these channels.
                </p>
                
                <div className="space-y-4">
                  {/* Email */}
                  <a 
                    href="mailto:hello@softrevox.com" 
                    className="group flex items-center gap-3 p-3 rounded-lg border border-border hover:border-foreground/30 transition-colors"
                  >
                    <div className="flex w-12 h-12 items-center justify-center rounded-lg border border-border">
                      <svg className="w-6 h-6 text-foreground/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm text-foreground/70">
                        hello@softrevox.com
                      </p>
                    </div>
                  </a>
                  
                  {/* Phone */}
                  <button 
                    onClick={makeCall}
                    className="group flex items-center gap-3 p-3 rounded-lg border border-border hover:border-foreground/30 transition-colors text-left w-full"
                  >
                    <div className="flex w-12 h-12 items-center justify-center rounded-lg border border-border">
                      <svg className="w-6 h-6 text-foreground/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <p className="text-sm text-foreground/70">
                        +880 1533045910
                      </p>
                    </div>
                  </button>
                  
                  {/* WhatsApp */}
                  <button 
                    onClick={openWhatsApp}
                    className="group flex items-center gap-3 p-3 rounded-lg border border-border hover:border-foreground/30 transition-colors text-left w-full"
                  >
                    <div className="flex w-12 h-12 items-center justify-center rounded-lg border border-border">
                      <svg className="w-6 h-6 text-foreground/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.209-3.553-8.485"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">WhatsApp</p>
                      <p className="text-sm text-foreground/70">
                        +880 1533045910
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Office Hours */}
              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm text-foreground/70">
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
                    <span className="text-foreground/50">Closed</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-background p-8">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Send us a Message
                </h3>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <label className="flex flex-col">
                      <span className="pb-2 text-sm font-medium text-foreground/80">
                        Full Name *
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g., John Doe"
                        className="h-12 w-full rounded-lg border border-border bg-background px-4 text-foreground placeholder:text-foreground/40 focus:border-foreground focus:outline-none"
                        required
                      />
                    </label>
                    
                    <label className="flex flex-col">
                      <span className="pb-2 text-sm font-medium text-foreground/80">
                        Email Address *
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g., john.doe@example.com"
                        className="h-12 w-full rounded-lg border border-border bg-background px-4 text-foreground placeholder:text-foreground/40 focus:border-foreground focus:outline-none"
                        required
                      />
                    </label>
                  </div>
                  
                  <label className="flex flex-col">
                    <span className="pb-2 text-sm font-medium text-foreground/80">
                      Subject *
                    </span>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g., Project Inquiry"
                      className="h-12 w-full rounded-lg border border-border bg-background px-4 text-foreground placeholder:text-foreground/40 focus:border-foreground focus:outline-none"
                      required
                    />
                  </label>
                  
                  <label className="flex flex-col">
                    <span className="pb-2 text-sm font-medium text-foreground/80">
                      Message *
                    </span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or idea..."
                      rows="6"
                      className="w-full resize-y rounded-lg border border-border bg-background p-4 text-foreground placeholder:text-foreground/40 focus:border-foreground focus:outline-none"
                      required
                    />
                  </label>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`h-12 w-full rounded-lg border border-foreground bg-background text-foreground font-medium transition-colors ${
                      isSubmitting 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-foreground hover:text-background'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}