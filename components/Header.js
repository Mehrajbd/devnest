// components/Header.js - Enhanced
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        {/* Logo with Animation */}
        <Link 
          href="/" 
          className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
        >
          <div className="relative w-10 h-10">
            <Image
              src="/Companylogo.jpeg"
              alt="DevNest Logo"
              width={40}
              height={40}
              className="object-contain transition-transform duration-300 group-hover:rotate-12"
              priority
            />
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            DevNest
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="relative text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-all duration-300 hover:scale-110"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <Link 
            href="/contact" 
            className="relative overflow-hidden group flex h-12 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 text-sm font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          <button 
            className="relative w-6 h-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`absolute w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 top-3' : 'top-1'
            }`}></span>
            <span className={`absolute w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 top-3 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`absolute w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 top-3' : 'top-5'
            }`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container mx-auto px-4 py-6 space-y-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="block text-lg font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 py-3 transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="block text-center h-12 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 text-lg font-bold text-white transition-all duration-300 hover:shadow-lg mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}