// app/contact/page.js - Updated with proper metadata
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Contact SoftrevoX - Get in Touch for IT Solutions',
  description: 'Reach out to SoftrevoX for web development, mobile apps, and custom software solutions. Contact us via phone, email, or visit our office.',
  keywords: 'contact SoftrevoX, web development contact, software development company, IT solutions contact',
  openGraph: {
    title: 'Contact SoftrevoX - Get in Touch for IT Solutions',
    description: 'Reach out to SoftrevoX for web development, mobile apps, and custom software solutions.',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}