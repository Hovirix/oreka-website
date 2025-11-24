import React, { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "it";

const translations: Record<string, any> = {
  en: {
    hero: {
      title: "Oreka Finance Cloud",
      subtitle: "Next-generation cloud financial infrastructure for modern businesses",
      support:
        "Streamline your financial operations with secure, scalable, and intelligent cloud solutions designed for the future of B2B finance.",
      ctaPrimary: "Get Early Access",
      ctaSecondary: "Learn More",
    },
    features: {
      heading: "Built for Modern Finance",
      subheading: "Everything you need to manage your financial operations in the cloud",
      items: [
        {
          title: "Enterprise Security",
          description:
            "Bank-grade encryption and compliance standards to keep your financial data safe and secure.",
        },
        {
          title: "Lightning Fast",
          description:
            "Real-time processing and instant insights powered by cutting-edge cloud infrastructure.",
        },
        {
          title: "Cloud Native",
          description:
            "Built for the cloud from the ground up, ensuring scalability and reliability at every level.",
        },
        {
          title: "Smart Analytics",
          description:
            "Advanced financial analytics and reporting tools to drive data-informed decisions.",
        },
      ],
    },
    contact: {
      heading: "Let's Connect",
      subheading: "Ready to transform your financial operations? Get in touch with our team.",
      successTitle: "Thank you for reaching out!",
      successText: "We'll get back to you as soon as possible.",
      formTitle: "Get in Touch",
      formDescription: "Send us a message and we'll respond within 24 hours",
      labels: {
        name: "Name",
        email: "Email Address",
        company: "Company",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        email: "your.email@company.com",
        company: "Your company name",
        message: "Tell us about your needs...",
      },
      send: "Send Message",
      sending: "Sending...",
    },
    newsletter: {
      successTitle: "You're all set!",
      successText: "Thanks for subscribing. We'll keep you updated on our launch.",
      title: "Stay Updated",
      subtitle: "Be the first to know when we launch. No spam, just valuable updates.",
      placeholder: "Enter your email",
      subscribe: "Subscribe",
      subscribing: "Subscribing...",
    },
    footer: {
      title: "Oreka Finance Cloud",
      subtitle: "Next-generation cloud financial infrastructure",
      copyright: "© {year} Oreka Finance Cloud. All rights reserved.",
    },
  },
  it: {
    hero: {
      title: "Oreka Finance Cloud",
      subtitle:
        "Infrastruttura finanziaria cloud di nuova generazione per le aziende moderne",
      support:
        "Semplifica le tue operazioni finanziarie con soluzioni cloud sicure, scalabili e intelligenti progettate per il futuro della finanza B2B.",
      ctaPrimary: "Accesso Anticipato",
      ctaSecondary: "Scopri di più",
    },
    features: {
      heading: "Progettato per la finanza moderna",
      subheading: "Tutto ciò di cui hai bisogno per gestire le tue operazioni finanziarie nel cloud",
      items: [
        {
          title: "Sicurezza Aziendale",
          description:
            "Crittografia di livello bancario e standard di conformità per mantenere i tuoi dati finanziari al sicuro.",
        },
        {
          title: "Estremamente Veloce",
          description:
            "Elaborazione in tempo reale e informazioni istantanee grazie a infrastrutture cloud all'avanguardia.",
        },
        {
          title: "Cloud Native",
          description:
            "Progettato per il cloud fin dall'inizio, garantendo scalabilità e affidabilità a ogni livello.",
        },
        {
          title: "Analisi Intelligente",
          description:
            "Strumenti avanzati di analisi e reporting finanziario per prendere decisioni basate sui dati.",
        },
      ],
    },
    contact: {
      heading: "Mettiamoci in contatto",
      subheading: "Pronto a trasformare le tue operazioni finanziarie? Contatta il nostro team.",
      successTitle: "Grazie per averci contattato!",
      successText: "Ti risponderemo il prima possibile.",
      formTitle: "Contattaci",
      formDescription: "Inviaci un messaggio e ti risponderemo entro 24 ore",
      labels: {
        name: "Nome",
        email: "Email",
        company: "Azienda",
        message: "Messaggio",
      },
      placeholders: {
        name: "Il tuo nome",
        email: "tuo.email@azienda.com",
        company: "Nome della tua azienda",
        message: "Parlaci delle tue esigenze...",
      },
      send: "Invia messaggio",
      sending: "Invio in corso...",
    },
    newsletter: {
      successTitle: "Sei a posto!",
      successText: "Grazie per esserti iscritto. Ti terremo aggiornato sul lancio.",
      title: "Rimani aggiornato",
      subtitle: "Sii il primo a sapere quando lanciamo. Niente spam, solo aggiornamenti utili.",
      placeholder: "Inserisci la tua email",
      subscribe: "Iscriviti",
      subscribing: "Iscrizione in corso...",
    },
    footer: {
      title: "Oreka Finance Cloud",
      subtitle: "Infrastruttura finanziaria cloud di nuova generazione",
      copyright: "© {year} Oreka Finance Cloud. Tutti i diritti riservati.",
    },
  },
};

const LanguageContext = createContext<any>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    return (localStorage.getItem("oreka_lang") as Lang) || (navigator.language.startsWith("it") ? "it" : "en");
  });

  useEffect(() => {
    localStorage.setItem("oreka_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const get = (path: string) => {
    const parts = path.split(".");
    let cur: any = translations[lang] || {};
    for (const p of parts) {
      if (cur == null) return undefined;
      cur = cur[p];
    }
    return cur;
  };

  const t = (path: string, vars?: Record<string, string | number>) => {
    const value = get(path);
    if (typeof value === "string" && vars) {
      return Object.keys(vars).reduce((s, k) => s.replace(new RegExp(`\\{${k}\\}`, "g"), String(vars[k])), value);
    }
    return value ?? path;
  };

  return <LanguageContext.Provider value={{ lang, setLang, t, get }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx as { lang: Lang; setLang: (l: Lang) => void; t: (k: string, v?: any) => any; get: (k: string) => any };
};

export default useLanguage;
