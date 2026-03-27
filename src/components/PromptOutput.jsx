function PromptOutput({ prompt, copied, onCopy, onReset, selectionCount }) {
  return (
    <section className="sticky top-[73px] z-40 mt-6">
      <div className="rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-md p-4 sm:p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-white">Generated Prompt</h2>
            {selectionCount > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-purple-500/30 text-purple-300 text-xs font-medium">
                {selectionCount} selected
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={onReset}
              className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all"
              aria-label="Reset all selections"
            >
              Reset
            </button>
            <button
              onClick={onCopy}
              disabled={!prompt}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
                copied
                  ? "bg-green-500 text-white"
                  : prompt
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                    : "bg-white/10 text-slate-500 cursor-not-allowed"
              }`}
              aria-label="Copy prompt to clipboard"
            >
              {copied ? "Copied!" : "Copy Prompt"}
            </button>
          </div>
        </div>
        <div
          className="min-h-[60px] rounded-xl bg-black/30 border border-white/10 p-4 text-sm leading-relaxed"
          aria-live="polite"
        >
          {prompt ? (
            <p className="text-slate-200">{prompt}</p>
          ) : (
            <p className="text-slate-600 italic">
              Select options from the categories below to build your AI image prompt...
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default PromptOutput;
