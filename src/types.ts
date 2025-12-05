export type Language = 'en' | 'it';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Content {
  nav: {
    home: string;
    features: string;
    contact: string;
    waitlist: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: Feature[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      messageLabel: string;
      submitButton: string;
      submitting: string;
      success: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      errors: {
        required: string;
        invalidEmail: string;
      }
    };
  };
  footer: {
    copyright: string;
    rights: string;
  };
}