import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const OPTIONS: { value: "en" | "it"; label: string }[] = [
  { value: "en", label: "English" },
  { value: "it", label: "Italiano" },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [focusIndex, setFocusIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!open) setFocusIndex(null);
  }, [open]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!open) return;
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target) && triggerRef.current && !triggerRef.current.contains(target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const onTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
      setTimeout(() => {
        setFocusIndex(0);
        const first = menuRef.current?.querySelector<HTMLButtonElement>("[data-index='0']");
        first?.focus();
      }, 0);
    }
  };

  const onMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
      return;
    }
    const max = OPTIONS.length - 1;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusIndex((s) => (s === null ? 0 : Math.min(max, s + 1)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusIndex((s) => (s === null ? max : Math.max(0, s - 1)));
    } else if (e.key === "Home") {
      e.preventDefault();
      setFocusIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setFocusIndex(max);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (focusIndex != null) {
        const opt = OPTIONS[focusIndex];
        setLang(opt.value);
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    if (focusIndex != null) {
      const el = menuRef.current?.querySelector<HTMLButtonElement>(`[data-index='${focusIndex}']`);
      el?.focus();
    }
  };

  const toggle = () => setOpen((v) => !v);

  return (
    <div className="relative w-full sm:w-auto flex items-center justify-end text-sm">
      <div className="relative inline-block">
        <Button
          ref={triggerRef}
          variant="outline"
          size="sm"
          onClick={toggle}
          onKeyDown={onTriggerKeyDown}
          aria-haspopup="menu"
          aria-expanded={open}
          className="border-primary text-primary hover:bg-primary/5 px-3 py-1.5"
        >
          {OPTIONS.find((o) => o.value === lang)?.label}
          <ChevronDown className="w-4 h-4" />
        </Button>

        {open && (
          <div
            ref={menuRef}
            role="menu"
            tabIndex={-1}
            aria-label="Select language"
            onKeyDown={onMenuKeyDown}
            className="absolute right-0 top-full mt-2 w-full z-50 flex flex-col gap-0 bg-background p-0 rounded-md shadow-lg border border-border"
          >
            {OPTIONS.map((opt, idx) => (
              <button
                key={opt.value}
                role="menuitemradio"
                aria-checked={lang === opt.value}
                data-index={idx}
                onClick={() => {
                  setLang(opt.value);
                  setOpen(false);
                  triggerRef.current?.focus();
                }}
                className={`w-full text-left h-9 px-3 rounded-md border ${lang === opt.value ? "border-primary bg-primary/5" : "border-transparent"} text-primary hover:bg-primary/10 text-sm`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
