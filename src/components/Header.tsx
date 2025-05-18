"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleSectionClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'About' },
    { id: 'technology', label: 'Technology' },
    { id: 'tokenomics', label: 'Tokenomics' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button 
            onClick={() => handleSectionClick('hero')} 
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image 
              src="/hd.png" 
              alt="Fans.pump Logo" 
              width={150} 
              height={42}
              className="w-auto h-8 sm:h-10"
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className="px-3 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-50 transition-colors font-[family-name:var(--font-big-shoulders)] tracking-wide uppercase"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="https://x.com/Fans_pump_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Image src="/twitter.svg" alt="Twitter" width={20} height={20} />
            </Link>
            <Link 
              href="https://t.me/Fans_pump_Official" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Image src="/telegram.svg" alt="Telegram" width={20} height={20} />
            </Link>
            <Link 
              href=""
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Image src="/dextools.svg" alt="Dextools" width={20} height={20} />
            </Link>
            <Link 
              href=""
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Image src="/dex-screener.svg" alt="Dexscreener" width={20} height={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Simple Dropdown */}
      <div 
        className={`md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg transform transition-transform duration-200 ease-in-out origin-top ${
          isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      >
        <div className="px-4 py-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {/* Navigation Items */}
          <div className="py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-800 font-[family-name:var(--font-big-shoulders)] tracking-wide uppercase font-medium hover:bg-gray-100 rounded-lg my-1"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="py-3 border-t border-gray-200 mt-2">
            <p className="px-4 py-1 text-sm text-gray-500 font-medium">Connect with us</p>
            <div className="flex px-4 py-2 space-x-4">
              <Link 
                href="https://x.com/Fans_pump_" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600"
              >
                <Image src="/twitter.svg" alt="Twitter" width={20} height={20} />
              </Link>
              <Link 
                href="https://t.me/Fans_pump_Official" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600"
              >
                <Image src="/telegram.svg" alt="Telegram" width={20} height={20} />
              </Link>
              <Link 
                href=""
                className="text-gray-600 hover:text-blue-600"
              >
                <Image src="/dextools.svg" alt="Dextools" width={20} height={20} />
              </Link>
              <Link 
                href=""
                className="text-gray-600 hover:text-blue-600"
              >
                <Image src="/dex-screener.svg" alt="Dexscreener" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 