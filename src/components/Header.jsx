import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const { t, localePath } = useLanguage();

  return (
    <header className="border-b border-white/[0.06] backdrop-blur-md bg-[#0f1117]/80 sticky top-0 z-50">
      <a href="#prompt-output" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg">
        Skip to prompt builder
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to={localePath("/")} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-xl font-bold shadow-md group-hover:scale-105 transition-transform">
            P
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent leading-tight">
              PromptBuilder AI
            </h1>
            <p className="text-xs text-slate-500 hidden sm:block">AI Image Prompt Generator</p>
          </div>
        </Link>
        <nav className="flex items-center gap-3 sm:gap-4" aria-label="Main navigation">
          <Link
            to={localePath("/gallery")}
            className="text-slate-500 hover:text-slate-300 transition-colors text-sm hidden sm:inline"
          >
            {t.gallery}
          </Link>
          <Link
            to={localePath("/how-to-use")}
            className="text-slate-500 hover:text-slate-300 transition-colors text-sm hidden sm:inline"
          >
            {t.guide}
          </Link>
          <Link
            to={localePath("/about")}
            className="text-slate-500 hover:text-slate-300 transition-colors text-sm hidden sm:inline"
          >
            {t.about}
          </Link>
          <LanguageSwitcher />
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-medium border border-indigo-500/20">
            {t.free}
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
