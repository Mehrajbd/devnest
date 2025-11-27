// app/services/page.js - SEO Optimized
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Script from 'next/script';

export const metadata = {
  title: 'Our Services - Web Development, Mobile Apps & Custom Solutions',
  description: 'SoftrevoX offers comprehensive IT services including eCommerce platforms, Learning Management Systems, custom booking systems, and enterprise applications.',
  keywords: 'web development services, mobile app development, eCommerce solutions, LMS development, custom software, booking systems',
  openGraph: {
    title: 'Our Services - Web Development, Mobile Apps & Custom Solutions',
    description: 'Comprehensive IT services including eCommerce, LMS, booking systems, and enterprise applications.',
  },
}

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IT Development Services",
    "provider": {
      "@type": "Organization",
      "name": "SoftrevoX"
    },
    "description": "Comprehensive IT services including web development, mobile apps, eCommerce solutions, and custom software",
    "serviceType": [
      "Web Development",
      "Mobile App Development",
      "eCommerce Solutions",
      "Learning Management Systems",
      "Custom Booking Systems",
      "Enterprise Applications"
    ],
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://softrevox.com/contact"
    }
  };

  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main className="pt-16">
          {/* Hero Section for Services Page */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto max-w-6xl px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Our <span className="text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions tailored to your business needs. From concept to deployment, we deliver excellence.
              </p>
            </div>
          </section>
          
          <Services />
        </main>
        <Footer />
      </div>
    </>
  );
}