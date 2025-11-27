// components/Contact.js - Fixed Google Maps Integration
'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMaps = () => {
      // Check if script is already loaded
      if (window.google && window.google.maps) {
        setMapLoaded(true);
        return;
      }

      // Check if script is already being loaded
      if (document.querySelector('script[src*="maps.googleapis.com"]')) {
        const checkLoaded = setInterval(() => {
          if (window.google && window.google.maps) {
            setMapLoaded(true);
            clearInterval(checkLoaded);
          }
        }, 100);
        return;
      }

      const script = document.createElement('script');
      // Using a free API key (replace with your own for production)
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBFw0Qbyq9zTFTd-tUY6TZQgfUUlOV14-E&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setMapLoaded(true);
        setMapError(false);
      };
      script.onerror = () => {
        setMapError(true);
        setMapLoaded(false);
      };
      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, []);

  useEffect(() => {
    if (mapLoaded && !mapError) {
      initializeMap();
    }
  }, [mapLoaded, mapError]);

  const initializeMap = () => {
    try {
      const mapElement = document.getElementById('google-map');
      if (!mapElement) return;

      const mapOptions = {
        center: { lat: 40.7580, lng: -73.9855 }, // Times Square coordinates
        zoom: 15,
        styles: [
          {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [{ "color": "#f5f5f5" }]
          },
          {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{ "gamma": 0.01 }, { "lightness": 20 }]
          },
          {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{ "saturation": -31 }, { "lightness": -33 }, { "weight": 2 }, { "gamma": 0.8 }]
          },
          {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{ "visibility": "off" }]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [{ "color": "#fefefe" }]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{ "lightness": 30 }, { "saturation": 30 }, { "color": "#f0f0f0" }]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{ "saturation": 20 }]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{ "lightness": 20 }, { "saturation": -20 }]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{ "lightness": 10 }, { "saturation": -30 }]
          },
          {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{ "saturation": 25 }, { "lightness": 25 }]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{ "lightness": -20 }]
          }
        ],
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true
      };

      const map = new window.google.maps.Map(mapElement, mapOptions);

      // Add marker for office location
      const marker = new window.google.maps.Marker({
        position: { lat: 40.7580, lng: -73.9855 },
        map: map,
        title: 'SoftrevoX Office',
        animation: window.google.maps.Animation.DROP,
      });

      // Add info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div class="p-2 max-w-xs">
            <h3 class="font-bold text-gray-900 text-sm">SoftrevoX Office</h3>
            <p class="text-xs text-gray-600 mt-1">Times Square Area</p>
            <p class="text-xs text-gray-600">New York, NY 10036</p>
            <p class="text-xs text-blue-600 mt-2">📍 Near Broadway Theater</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      // Open info window by default
      infoWindow.open(map, marker);

    } catch (error) {
      console.error('Error initializing Google Maps:', error);
      setMapError(true);
    }
  };

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
    window.open(`https://wa.me/8801533045910?text=${encodedMessage}`, '_blank');
  };

  // Call function
  const makeCall = () => {
    window.open('tel:+8801533045910', '_self');
  };

  // Retry loading map
  const retryMapLoad = () => {
    setMapError(false);
    setMapLoaded(false);
    // Remove existing script
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript) {
      existingScript.remove();
    }
    // Reload
    setTimeout(() => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBFw0Qbyq9zTFTd-tUY6TZQgfUUlOV14-E&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setMapLoaded(true);
        setMapError(false);
      };
      script.onerror = () => {
        setMapError(true);
        setMapLoaded(false);
      };
      document.head.appendChild(script);
    }, 500);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="contact">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Get In Touch
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or just want to connect? Drop us a message below, and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Information Card */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  Get in touch with us through any of these channels.
                </p>
                
                <div className="space-y-4">
                  {/* Email */}
                  <a 
                    href="mailto:hello@softrevox.com" 
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
                        hello@softrevox.com
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
                        /softrevox
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Office Hours */}
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
            </div>

            {/* Contact Form & Map */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Form */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                  Send us a Message
                </h3>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <label className="flex flex-col">
                      <span className="pb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Full Name *
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
                        Email Address *
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
                      Subject *
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
                      Message *
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
                    className={`flex h-11 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg px-6 text-sm font-bold text-white transition-all duration-300 ${
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

              {/* Google Map */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Find Us
                </h3>
                <div className="h-80 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                  {!mapLoaded && !mapError && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                        <p className="text-sm text-gray-500">Loading map...</p>
                      </div>
                    </div>
                  )}
                  
                  {mapError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-red-50 dark:bg-red-900/10">
                      <div className="text-center p-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Map Loading Failed
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 max-w-sm">
                          We couldn't load the Google Maps. This might be due to network issues or API restrictions.
                        </p>
                        <button
                          onClick={retryMapLoad}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                        >
                          Retry Loading Map
                        </button>
                      </div>
                    </div>
                  )}
                  
                  <div 
                    id="google-map" 
                    className={`w-full h-full ${!mapLoaded || mapError ? 'opacity-0' : 'opacity-100'}`}
                  ></div>
                </div>
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <p>📍 BANGLADESH, Chattogram,Oxyegn</p>
                  <p className="mt-1">We're located in the heart of the city, easily accessible from all major transportation hubs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}