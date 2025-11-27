// app/about/page.js - SEO Optimized
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'About SoftrevoX - Our Mission, Vision & Team',
  description: 'Learn about SoftrevoX - a passionate team of developers dedicated to building exceptional digital experiences and transforming ideas into powerful digital products.',
  keywords: 'about SoftrevoX, our mission, our vision, development team, company values',
  openGraph: {
    title: 'About SoftrevoX - Our Mission, Vision & Team',
    description: 'Learn about SoftrevoX - a passionate team of developers dedicated to building exceptional digital experiences.',
  },
}

export default function About() {
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About SoftrevoX",
    "description": "Learn about SoftrevoX - a passionate team of developers dedicated to building exceptional digital experiences",
    "publisher": {
      "@type": "Organization",
      "name": "SoftrevoX"
    }
  };

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main className="pt-16">
          <section className="py-16">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="flex flex-col gap-8">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
                    About SoftrevoX
                  </h1>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    We are a team of passionate developers dedicated to building exceptional digital experiences that drive business growth and innovation.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      To transform innovative ideas into powerful, scalable digital products that drive business growth and create meaningful, engaging user experiences through cutting-edge technology solutions.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      To be the leading development partner for businesses worldwide, delivering innovative, scalable, and high-performance digital solutions that set new standards in technology excellence.
                    </p>
                  </div>
                </div>

                {/* Company Values */}
                <div className="mt-12">
                  <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                    Our Values
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Innovation",
                        description: "We embrace cutting-edge technologies and creative solutions to deliver exceptional results.",
                        icon: "💡"
                      },
                      {
                        title: "Quality",
                        description: "We maintain the highest standards in every project, ensuring robust and reliable solutions.",
                        icon: "⭐"
                      },
                      {
                        title: "Collaboration",
                        description: "We work closely with our clients to understand their vision and bring it to life.",
                        icon: "🤝"
                      }
                    ].map((value, index) => (
                      <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <div className="text-3xl mb-4">{value.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {value.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}