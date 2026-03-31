import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { translations, supportedLanguages } from "./translations";

const LanguageContext = createContext();

const langCodes = supportedLanguages.map((l) => l.code);
const LANG_STORAGE_KEY = "promptbuilder_lang";

export function getLanguageFromPath(pathname) {
  const seg = pathname.split("/")[1];
  return langCodes.includes(seg) ? seg : null;
}

export function detectBrowserLanguage() {
  // 1. Check localStorage for user's previous choice
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && langCodes.includes(saved)) return saved;
  } catch {}

  // 2. Check browser language
  const nav = navigator.language || navigator.userLanguage || "en";
  const short = nav.split("-")[0].toLowerCase();
  return langCodes.includes(short) ? short : "en";
}

export function localePath(lang, path) {
  if (lang === "en") return path || "/";
  return `/${lang}${path || ""}` || `/${lang}`;
}

export function LanguageProvider({ children }) {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Determine language: URL param > localStorage > browser detection
  const urlLang = params.lang && langCodes.includes(params.lang) ? params.lang : null;
  const detectedLang = useMemo(() => detectBrowserLanguage(), []);
  const initialLang = urlLang || detectedLang;

  const [lang, setLangState] = useState(initialLang);

  // Sync when URL changes
  useEffect(() => {
    if (urlLang && urlLang !== lang) {
      setLangState(urlLang);
    }
  }, [urlLang]);

  const t = useMemo(() => translations[lang] || translations.en, [lang]);

  const setLanguage = (newLang) => {
    // Save preference
    try {
      localStorage.setItem(LANG_STORAGE_KEY, newLang);
    } catch {}

    setLangState(newLang);

    const currentPath = location.pathname;
    const pathLang = getLanguageFromPath(currentPath);

    let basePath;
    if (pathLang) {
      basePath = currentPath.replace(`/${pathLang}`, "") || "/";
    } else {
      basePath = currentPath;
    }

    if (newLang === "en") {
      navigate(basePath);
    } else {
      navigate(`/${newLang}${basePath === "/" ? "" : basePath}`);
    }
  };

  const value = useMemo(
    () => ({ lang, t, setLanguage, localePath: (path) => localePath(lang, path) }),
    [lang, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
