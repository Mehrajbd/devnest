import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="pt-16">
        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
                  About DevNest
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  We are a team of passionate developers dedicated to building exceptional digital experiences.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    To transform ideas into powerful digital products that drive business growth and create meaningful user experiences.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    To be the leading development partner for businesses seeking innovative, scalable, and high-performance digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}