import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import WhyChooseUs from '@/components/WhyChooseUs';
import WorkflowProcess from '@/components/WorkflowProcess';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <TechStack />
         <WhyChooseUs />
         <WorkflowProcess />
        <Services />
        <Projects />
         <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}