import { useState } from "react";

function NegativePrompts({ options, selected, onToggle }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden backdrop-blur-sm">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-white/[0.03] transition-colors"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-label="Negative prompts">🚫</span>
          <div className="text-left">
            <h2 className="text-lg font-semibold text-white">Negative Prompts</h2>
            <p className="text-sm text-slate-400 hidden sm:block">What to exclude from the image</p>
          </div>
          {selected.length > 0 && (
            <span className="ml-2 px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 text-xs font-medium">
              {selected.length} excluded
            </span>
          )}
        </div>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="px-4 sm:px-6 pb-4">
          <div className="flex flex-wrap gap-2">
            {options.map((option) => (
              <button
                type="button"
                key={option}
                onClick={() => onToggle(option)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  selected.includes(option)
                    ? "bg-red-500/20 text-red-300 border border-red-500/30"
                    : "bg-white/[0.06] text-slate-300 hover:bg-white/[0.1] hover:text-white"
                }`}
              >
                {selected.includes(option) ? "✕ " : ""}{option}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default NegativePrompts;
