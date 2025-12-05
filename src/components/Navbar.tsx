import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { Language, Content } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content['nav'];
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, content }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'it' : 'en');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="nav-logo-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2563EB" />
                  <stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
              <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.132 20.177 10.204 17.85 10.03C17.48 6.63 14.62 4 11 4C7.79 4 5.11 6.06 4.31 9.03C1.9 9.55 0 11.83 0 14.5C0 17.5376 2.46243 20 5.5 20H17.5" stroke="url(#nav-logo-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 16L10 12L13 15L18 8" stroke="url(#nav-logo-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 8H14" stroke="url(#nav-logo-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 8V12" stroke="url(#nav-logo-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-oreka-text font-bold text-xl tracking-tight">Oreka</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium px-3 py-2 border border-slate-200 rounded-lg hover:bg-slate-50"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'en' ? 'EN' : 'IT'}</span>
            </button>
            <a 
              href="#contact"
              className="bg-oreka-text text-white hover:bg-slate-800 px-4 py-2 rounded-lg text-sm font-bold transition-all transform hover:scale-105 shadow-md"
            >
              {content.waitlist}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};