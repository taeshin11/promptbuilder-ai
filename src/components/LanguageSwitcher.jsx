import { useState, useRef, useEffect } from "react";
import { supportedLanguages } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

function LanguageSwitcher() {
  const { lang, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const current = supportedLanguages.find((l) => l.code === lang) || supportedLanguages[0];

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.06] text-slate-300 text-sm hover:bg-white/[0.1] transition-all"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <span className="text-base">{current.flag}</span>
        <span className="hidden sm:inline text-xs">{current.code.toUpperCase()}</span>
        <svg
          className={`w-3 h-3 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-xl bg-[#1a1d2e] border border-white/[0.08] shadow-xl z-[60] overflow-hidden animate-slide-down">
          {supportedLanguages.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setLanguage(l.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2.5 flex items-center gap-3 text-sm hover:bg-white/[0.06] transition-colors ${
                l.code === lang ? "text-indigo-300 bg-indigo-500/10" : "text-slate-300"
              }`}
            >
              <span className="text-base">{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
