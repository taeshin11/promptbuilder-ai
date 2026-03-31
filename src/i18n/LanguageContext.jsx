import { createContext, useContext, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { translations, supportedLanguages } from "./translations";

const LanguageContext = createContext();

const langCodes = supportedLanguages.map((l) => l.code);

export function getLanguageFromPath(pathname) {
  const seg = pathname.split("/")[1];
  return langCodes.includes(seg) ? seg : "en";
}

export function detectBrowserLanguage() {
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

  const lang = params.lang && langCodes.includes(params.lang) ? params.lang : "en";

  const t = useMemo(() => translations[lang] || translations.en, [lang]);

  const setLanguage = (newLang) => {
    const currentPath = location.pathname;
    const currentLang = getLanguageFromPath(currentPath);

    let basePath;
    if (currentLang !== "en") {
      basePath = currentPath.replace(`/${currentLang}`, "") || "/";
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
