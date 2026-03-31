import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";

function PromptOutput({ prompt, copied, onCopy, onReset, onRandomize, onShare, selectionCount, children }) {
  const { t } = useLanguage();

  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        onCopy();
      }
      if (e.key === "r" && !e.ctrlKey && !e.metaKey && e.target.tagName !== "INPUT") {
        e.preventDefault();
        onRandomize();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onCopy, onRandomize]);

  const charCount = prompt.length;

  return (
    <section id="prompt-output" className="sticky top-[73px] z-40 mt-6">
      <div className="rounded-2xl bg-[#151721]/95 border border-white/[0.06] backdrop-blur-md p-4 sm:p-6 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-lg font-semibold text-white">{t.generatedPrompt}</h2>
            {selectionCount > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium">
                {selectionCount} {t.selected}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onRandomize}
              className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/[0.06] text-slate-300 hover:bg-white/[0.1] hover:text-white transition-all hidden sm:inline-flex"
              aria-label={t.randomTitle}
              title={t.randomTitle}
            >
              🎲
            </button>
            {prompt && (
              <button
                type="button"
                onClick={onShare}
                className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/[0.06] text-slate-300 hover:bg-white/[0.1] hover:text-white transition-all hidden sm:inline-flex"
                aria-label={t.shareTitle}
                title={t.shareTitle}
              >
                🔗
              </button>
            )}
            <button
              type="button"
              onClick={onReset}
              className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/[0.06] text-slate-300 hover:bg-white/[0.1] hover:text-white transition-all"
              aria-label={t.reset}
            >
              {t.reset}
            </button>
            <button
              type="button"
              onClick={onCopy}
              disabled={!prompt}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
                copied
                  ? "bg-green-500 text-white"
                  : prompt
                    ? "bg-indigo-600 text-white hover:bg-indigo-500 hover:scale-105"
                    : "bg-white/[0.06] text-slate-500 cursor-not-allowed"
              }`}
              aria-label={`${t.copy}${prompt ? " (Ctrl+Enter)" : ""}`}
            >
              {copied ? t.copied : t.copy}
            </button>
          </div>
        </div>
        <div
          className="min-h-[60px] rounded-xl bg-black/20 border border-white/[0.06] p-4 text-sm leading-relaxed"
          aria-live="polite"
          aria-atomic="true"
        >
          {prompt ? (
            <p className="text-slate-200 whitespace-pre-line">{prompt}</p>
          ) : (
            <p className="text-slate-600 italic">
              {t.promptPlaceholder}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between mt-3 px-1 flex-wrap gap-2">
          <div>{children}</div>
          {prompt && (
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500">{charCount} {t.chars}</span>
              <span className="text-xs text-slate-600 hidden sm:inline">
                {t.ctrlEnterHint}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PromptOutput;
