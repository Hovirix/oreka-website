import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="inline-flex items-center">
      <Button variant="outline" size="sm" asChild>
        <div className="relative flex items-center gap-2 px-2 py-1">
          <select
            aria-label="Select language"
            value={lang}
            onChange={(e) => setLang(e.target.value as any)}
            className="appearance-none bg-transparent pr-6 pl-1 text-sm outline-none"
          >
            <option value="en">English</option>
            <option value="it">Italiano</option>
          </select>
          <ChevronDown className="w-4 h-4 absolute right-2 pointer-events-none text-primary-foreground" />
        </div>
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
