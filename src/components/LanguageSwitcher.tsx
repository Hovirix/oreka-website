import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { ChevronDown } from "lucide-react";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="inline-flex items-center">
      <div className="relative flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
        <select
          aria-label="Select language"
          value={lang}
          onChange={(e) => setLang(e.target.value as any)}
          className="appearance-none bg-transparent pr-8 pl-1 text-sm text-primary-foreground outline-none"
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <ChevronDown className="w-4 h-4 absolute right-3 pointer-events-none text-primary-foreground" />
      </div>
    </div>
  );
};

export default LanguageSwitcher;
