// app/page.js - FIXED VERSION
'use client';
import { lazy, Suspense, useEffect, useState, useRef } from 'react'; // Added useRef here
import Header from '@/components/Header';
import Hero from '@/components/Hero';

// Immediate imports for critical components
import TechStack from '@/components/TechStack';

// Lazy imports with preloading
const WhyChooseUs = lazy(() => import('@/components/WhyChooseUs'));
const WorkflowProcess = lazy(() => import('@/components/WorkflowProcess'));
const Services = lazy(() => import('@/components/Services'));
const Projects = lazy(() => import('@/components/Projects'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

// Optimized loading component
const OptimizedLoader = ({ minHeight = "h-40" }) => (
  <div className={`w-full ${minHeight} flex items-center justify-center`}>
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <div className="text-sm text-gray-500 dark:text-gray-400">Loading content...</div>
    </div>
  </div>
);

// Intersection-based loading component
const LazySection = ({ children, componentName, minHeight = "min-h-[400px]" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null); // This was causing the error - now useRef is imported

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={minHeight}>
      {isVisible ? children : <OptimizedLoader minHeight={minHeight} />}
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Critical components - loaded immediately */}
      <Header />
      
      <main>
        {/* Above the fold - critical for SEO and user experience */}
        <Hero />
        <TechStack />
        
        {/* Lazy loaded sections with intersection observer */}
        <LazySection componentName="Why Choose Us">
          <Suspense fallback={<OptimizedLoader minHeight="min-h-[400px]" />}>
            <WhyChooseUs />
          </Suspense>
        </LazySection>
        
        <LazySection componentName="Our Process">
          <Suspense fallback={<OptimizedLoader minHeight="min-h-[400px]" />}>
            <WorkflowProcess />
          </Suspense>
        </LazySection>
        
        <LazySection componentName="Services">
          <Suspense fallback={<OptimizedLoader minHeight="min-h-[400px]" />}>
            <Services />
          </Suspense>
        </LazySection>
        
        <LazySection componentName="Projects">
          <Suspense fallback={<OptimizedLoader minHeight="min-h-[400px]" />}>
            <Projects />
          </Suspense>
        </LazySection>
        
        <LazySection componentName="Testimonials">
          <Suspense fallback={<OptimizedLoader minHeight="min-h-[400px]" />}>
            <Testimonials />
          </Suspense>
        </LazySection>
        
        <LazySection componentName="Contact">
          <Suspense fallback={<OptimizedLoader minHeight="min-h-[400px]" />}>
            <Contact />
          </Suspense>
        </LazySection>
      </main>
      
      {/* Footer - lazy loaded but important for layout */}
      <Suspense fallback={
        <footer className="w-full border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 py-8">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex justify-between items-center">
              <div className="text-gray-600 dark:text-gray-400">Loading...</div>
            </div>
          </div>
        </footer>
      }>
        <Footer />
      </Suspense>
    </div>
  );
}