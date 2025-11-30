import { Content, Language } from './types';
import { Cloud, Shield, Zap, Globe, Lock, BarChart3 } from 'lucide-react';

export const FORMSPREE_ID = "xyzlylak";

export const CONTENT: Record<Language, Content> = {
  en: {
    nav: {
      home: "Home",
      features: "Solutions",
      contact: "Contact",
      waitlist: "Join Waitlist"
    },
    hero: {
      badge: "Oreka Finance Cloud v1.0 Coming Soon",
      titleLine1: "Financial Clarity",
      titleLine2: "Native to the Cloud.",
      subtitle: "Experience the next generation of financial orchestration. Seamless, secure, and built for modern Business management.",
      ctaPrimary: "Get Early Access",
      ctaSecondary: "Learn More"
    },
    features: {
      title: "Why Oreka?",
      subtitle: "Built for speed, designed for trust.",
      items: [
        {
          title: "Cloud Native",
          description: "Born in the cloud, for the cloud. Scalable infrastructure that grows with your business needs.",
          icon: Cloud
        },
        {
          title: "Bank-Grade Security",
          description: "Enterprise-level encryption and compliance standards to keep your financial data secure.",
          icon: Shield
        },
        {
          title: "Real-time Analytics",
          description: "Instant insights into your cash flow and financial health with zero latency.",
          icon: Zap
        },
        {
          title: "Global Compliance",
          description: "Ready for international markets with built-in multi-currency and tax handling.",
          icon: Globe
        },
        {
          title: "Automated Ledgers",
          description: "Smart contracts and automated reconciliation reduce human error to zero.",
          icon: BarChart3
        },
        {
          title: "Privacy First",
          description: "Your data is yours. We employ zero-knowledge architecture where it matters most.",
          icon: Lock
        }
      ]
    },
    contact: {
      title: "Try Oreka Before We Launch",
      subtitle: "We are currently in private beta. Sign up to be notified when we launch.",
      form: {
        nameLabel: "Full Name",
        emailLabel: "Email Address",
        messageLabel: "Tell us about your needs (Optional)",
        submitButton: "Join Waitlist",
        submitting: "Joining...",
        success: "Welcome to Oreka. You're on the list!",
        namePlaceholder: "John Doe",
        emailPlaceholder: "name@company.com",
        messagePlaceholder: "I'm interested in...",
        errors: {
          required: "This field is required",
          invalidEmail: "Please enter a valid email address"
        }
      }
    },
    footer: {
      copyright: "Oreka Finance",
      rights: "All rights reserved."
    }
  },
  it: {
    nav: {
      home: "Home",
      features: "Soluzioni",
      contact: "Contatti",
      waitlist: "Lista d'attesa"
    },
    hero: {
      badge: "Oreka Finance Cloud v1.0 In Arrivo",
      titleLine1: "Chiarezza Finanziaria",
      titleLine2: "Nativa nel Cloud.",
      subtitle: "Scopri la nuova generazione dell'orchestrazione finanziaria. Fluida, sicura e costruita per le Gestione aziendale moderne.",
      ctaPrimary: "Accesso Anticipato",
      ctaSecondary: "Scopri di più"
    },
    features: {
      title: "Perché Oreka?",
      subtitle: "Costruito per la velocità, progettato per la fiducia.",
      items: [
        {
          title: "Cloud Native",
          description: "Nato nel cloud, per il cloud. Infrastruttura scalabile che cresce con il tuo business.",
          icon: Cloud
        },
        {
          title: "Sicurezza Bancaria",
          description: "Crittografia di livello enterprise e standard di conformità per proteggere i tuoi dati.",
          icon: Shield
        },
        {
          title: "Analisi in Tempo Reale",
          description: "Insight istantanei sul flusso di cassa e sulla salute finanziaria a latenza zero.",
          icon: Zap
        },
        {
          title: "Conformità Globale",
          description: "Pronto per i mercati internazionali con gestione multi-valuta e fiscale integrata.",
          icon: Globe
        },
        {
          title: "Mastri Automatizzati",
          description: "Smart contract e riconciliazione automatizzata riducono gli errori umani a zero.",
          icon: BarChart3
        },
        {
          title: "Privacy al Primo Posto",
          description: "I tuoi dati sono tuoi. Utilizziamo un'architettura zero-knowledge dove conta di più.",
          icon: Lock
        }
      ]
    },
    contact: {
      title: "Prova Oreka prima del lancio",
      subtitle: "Siamo attualmente in beta privata. Iscriviti per ricevere una notifica al lancio.",
      form: {
        nameLabel: "Nome Completo",
        emailLabel: "Indirizzo Email",
        messageLabel: "Parlaci delle tue esigenze (Opzionale)",
        submitButton: "Unisciti alla Lista",
        submitting: "Invio in corso...",
        success: "Benvenuto in Oreka. Sei in lista!",
        namePlaceholder: "Mario Rossi",
        emailPlaceholder: "nome@azienda.it",
        messagePlaceholder: "Sono interessato a...",
        errors: {
          required: "Questo campo è obbligatorio",
          invalidEmail: "Inserisci un indirizzo email valido"
        }
      }
    },
    footer: {
      copyright: "Oreka Finance",
      rights: "Tutti i diritti riservati."
    }
  }
};
