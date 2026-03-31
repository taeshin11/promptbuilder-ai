import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { detectBrowserLanguage, getLanguageFromPath } from "../i18n/LanguageContext";

function LanguageRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only redirect if user hasn't already chosen a language (no lang prefix in URL)
    const currentLang = getLanguageFromPath(location.pathname);
    if (currentLang !== "en") return; // Already has a language prefix

    // Check if the path starts with a known language code
    const segments = location.pathname.split("/").filter(Boolean);
    const knownLangs = ["ko", "ja", "zh", "es"];
    if (segments.length > 0 && knownLangs.includes(segments[0])) return;

    const browserLang = detectBrowserLanguage();
    if (browserLang !== "en") {
      navigate(`/${browserLang}${location.pathname === "/" ? "" : location.pathname}${location.search}`, { replace: true });
    }
  }, []);

  return null;
}

export default LanguageRedirect;
