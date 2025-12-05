import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FORMSPREE_ID } from '../constants';
import { Content } from '../types';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  content: Content['contact']['form'];
}

export const ContactForm: React.FC<ContactFormProps> = ({ content }) => {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const [validationErrors, setValidationErrors] = useState<{name?: string, email?: string}>({});

  const validateAndSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    
    const errors: {name?: string, email?: string} = {};
    
    // Name validation
    if (!name || name.trim() === '') {
      errors.name = content.errors.required;
    }
    
    // Email validation
    if (!email || email.trim() === '') {
      errors.email = content.errors.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = content.errors.invalidEmail;
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});
    handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-xl animate-fade-in flex flex-col items-center justify-center min-h-[300px]">
        <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-oreka-text mb-2">Grazie!</h3>
        <p className="text-oreka-muted">{content.success}</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xl shadow-slate-200/50">
      <form onSubmit={validateAndSubmit} className="space-y-6" noValidate>
        {/* Full Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            {content.nameLabel} <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder={content.namePlaceholder}
            className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:ring-2 focus:ring-oreka-accent focus:border-transparent text-slate-900 placeholder-slate-400 transition-all outline-none ${validationErrors.name ? 'border-red-500 bg-red-50' : 'border-slate-200'}`}
            required
          />
          {validationErrors.name && (
            <div className="flex items-center gap-1 mt-1 text-sm text-red-500 animate-fade-in">
              <AlertCircle className="w-4 h-4" />
              <span>{validationErrors.name}</span>
            </div>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            {content.emailLabel} <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder={content.emailPlaceholder}
            className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:ring-2 focus:ring-oreka-accent focus:border-transparent text-slate-900 placeholder-slate-400 transition-all outline-none ${validationErrors.email ? 'border-red-500 bg-red-50' : 'border-slate-200'}`}
            required
          />
           {validationErrors.email && (
            <div className="flex items-center gap-1 mt-1 text-sm text-red-500 animate-fade-in">
              <AlertCircle className="w-4 h-4" />
              <span>{validationErrors.email}</span>
            </div>
          )}
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="mt-1 text-sm text-red-500"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            {content.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={content.messagePlaceholder}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-oreka-accent focus:border-transparent text-slate-900 placeholder-slate-400 transition-all outline-none resize-none"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="mt-1 text-sm text-red-500"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full group flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
        >
          {state.submitting ? content.submitting : content.submitButton}
          {!state.submitting && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
        </button>
      </form>
    </div>
  );
};