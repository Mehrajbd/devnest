// app/layout.js - Enhanced with Complete SEO
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
 })

export const metadata = {
  title: {
    default: 'SoftrevoX - Your Partner for Innovative IT Solutions & Web Development',
    template: '%s | SoftrevoX - Expert IT Solutions'
  },
  description: 'SoftrevoX transforms ideas into powerful digital products with expertise in modern web technologies. We specialize in web development, mobile apps, eCommerce, and custom software solutions.',
  keywords: 'web development, mobile apps, software solutions, IT services, digital transformation, React, Next.js, Node.js, eCommerce, LMS, booking systems, enterprise applications',
  authors: [{ name: 'SoftrevoX Team' }],
  creator: 'SoftrevoX',
  publisher: 'SoftrevoX',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://softrevox.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'SoftrevoX - Your Partner for Innovative IT Solutions',
    description: 'Transform your ideas into powerful digital products with SoftrevoX expertise in modern web technologies.',
    url: 'https://softrevox.com',
    siteName: 'SoftrevoX',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SoftrevoX - Professional IT Solutions and Web Development Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoftrevoX - Your Partner for Innovative IT Solutions',
    description: 'Transform your ideas into powerful digital products with SoftrevoX.',
    images: ['/twitter-image.jpg'],
    creator: '@softrevox',
    site: '@softrevox',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    me: ['hello@softrevox.com'],
  },
  category: 'technology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* DNS Prefetch for external domains */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        
        {/* Schema.org structured data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SoftrevoX",
              "alternateName": "SoftrevoX IT Solutions",
              "url": "https://softrevox.com",
              "logo": "https://softrevox.com/Soft.png",
              "description": "SoftrevoX transforms ideas into powerful digital products with expertise in modern web technologies.",
              "foundingDate": "2023",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BD"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+880-1533045910",
                "contactType": "customer service",
                "areaServed": "Worldwide",
                "availableLanguage": ["en"]
              },
              "sameAs": [
                "https://www.facebook.com/softrevox",
                "https://github.com/softrevox"
              ],
              "knowsAbout": [
                "Web Development",
                "Mobile App Development",
                "eCommerce Solutions",
                "Learning Management Systems",
                "Custom Software Development",
                "React",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}