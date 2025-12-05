import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ContactForm } from './components/ContactForm';
import { CONTENT } from './constants';
import { Language } from './types';
import { ArrowRight, Check } from 'lucide-react';

const App: React.FC = () => {
  // Determine initial language (could be enhanced with browser detection)
  const [lang, setLang] = useState<Language>('en');
  
  const content = CONTENT[lang];

  return (
    <div className="min-h-screen font-sans selection:bg-oreka-accent/30 selection:text-oreka-text">
      <Navbar lang={lang} setLang={setLang} content={content.nav} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-oreka-accent text-sm font-medium mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            {content.hero.badge}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-oreka-text mb-6">
            <span className="block mb-2">{content.hero.titleLine1}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              {content.hero.titleLine2}
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-oreka-muted mb-10 leading-relaxed">
            {content.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-oreka-text text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all transform hover:scale-105 shadow-xl shadow-slate-200"
            >
              {content.hero.ctaPrimary}
            </a>
            <a 
              href="#features"
              className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-oreka-text rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              {content.hero.ctaSecondary}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-oreka-text mb-4">{content.features.title}</h2>
            <p className="text-xl text-oreka-muted">{content.features.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.features.items.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-oreka-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-oreka-text mb-3">{feature.title}</h3>
                  <p className="text-oreka-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact / Waitlist Section */}
      <section id="contact" className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-oreka-text mb-6">
                {content.contact.title}
              </h2>
              <p className="text-xl text-oreka-muted mb-8">
                {content.contact.subtitle}
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  lang === 'en' ? 'Priority access to beta features' : 'Accesso prioritario alle funzioni beta',
                  lang === 'en' ? 'Direct line to development team' : 'Linea diretta con il team di sviluppo',
                  lang === 'en' ? 'Exclusive community invite' : 'Invito esclusivo alla community',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-oreka-muted">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="w-full max-w-md mx-auto lg:ml-auto">
              <ContactForm content={content.contact.form} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2563EB" />
                  <stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
              <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.132 20.177 10.204 17.85 10.03C17.48 6.63 14.62 4 11 4C7.79 4 5.11 6.06 4.31 9.03C1.9 9.55 0 11.83 0 14.5C0 17.5376 2.46243 20 5.5 20H17.5" stroke="url(#footer-logo-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 16L10 12L13 15L18 8" stroke="url(#footer-logo-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 8H14" stroke="url(#footer-logo-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 8V12" stroke="url(#footer-logo-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-oreka-text font-semibold">Oreka Finance</span>
          </div>
          <p className="text-oreka-muted text-sm">
            &copy; {new Date().getFullYear()} {content.footer.copyright}. {content.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;