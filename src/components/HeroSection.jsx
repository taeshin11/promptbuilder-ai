import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

function HeroSection({ onRandomize }) {
  const { t, localePath } = useLanguage();

  return (
    <section className="text-center py-8 sm:py-12 animate-fade-in-up">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-amber-200 bg-clip-text text-transparent">
          {t.heroTitle1}
        </span>
        <br />
        <span className="text-slate-100 text-2xl sm:text-3xl lg:text-4xl">{t.heroTitle2}</span>
      </h2>
      <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base mb-6 px-4">
        {t.heroDesc}
      </p>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <button
          type="button"
          onClick={onRandomize}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 hover:scale-105 transition-all"
        >
          {t.surpriseMe}
        </button>
        <a
          href="#prompt-output"
          className="px-5 py-2.5 rounded-xl bg-white/[0.07] text-slate-300 font-medium text-sm hover:bg-white/[0.12] transition-all"
        >
          {t.startBuilding}
        </a>
        <Link
          to={localePath("/gallery")}
          className="px-5 py-2.5 rounded-xl bg-white/[0.07] text-slate-300 font-medium text-sm hover:bg-white/[0.12] transition-all"
        >
          {t.browseGallery}
        </Link>
      </div>
      <div className="flex items-center justify-center gap-6 mt-8 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500/70"></span>
          {t.freeLabel}
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-blue-500/70"></span>
          {t.noLogin}
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-violet-500/70"></span>
          {t.optionsCount}
        </span>
      </div>
    </section>
  );
}

export default HeroSection;
