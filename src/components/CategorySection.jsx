import { useState } from "react";

function CategorySection({ category, selected, customValue, onSelect, onCustomInput, defaultExpanded = false }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [showCustom, setShowCustom] = useState(false);

  const hasSelection = selected || customValue?.trim();

  return (
    <section className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm transition-all">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
        aria-expanded={isExpanded}
        aria-controls={`category-${category.id}`}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-2xl shrink-0" role="img" aria-label={category.label}>
            {category.icon}
          </span>
          <div className="text-left min-w-0">
            <h2 className="text-lg font-semibold text-white">{category.label}</h2>
            <p className="text-sm text-slate-400 hidden sm:block">{category.description}</p>
          </div>
          {hasSelection && (
            <span className="ml-2 px-2 py-0.5 rounded-full bg-purple-500/30 text-purple-300 text-xs font-medium truncate max-w-[150px] sm:max-w-[200px]">
              {customValue?.trim() ? `✏️ ${customValue.trim()}` : selected}
            </span>
          )}
        </div>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform shrink-0 ${isExpanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div id={`category-${category.id}`} className="px-4 sm:px-6 pb-4 animate-slide-down">
          <div className="flex flex-wrap gap-2">
            {category.options.map((option) => (
              <button
                type="button"
                key={option}
                onClick={() => {
                  onSelect(category.id, option);
                  if (customValue) onCustomInput(category.id, "");
                  setShowCustom(false);
                }}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  selected === option && !customValue?.trim()
                    ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25 scale-105"
                    : "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {option}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setShowCustom(!showCustom)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all border border-dashed ${
                showCustom
                  ? "border-purple-500 text-purple-400"
                  : "border-white/20 text-slate-400 hover:border-white/40 hover:text-white"
              }`}
            >
              + Custom
            </button>
          </div>
          {showCustom && (
            <div className="mt-3">
              <label htmlFor={`custom-${category.id}`} className="sr-only">
                Custom {category.label}
              </label>
              <input
                id={`custom-${category.id}`}
                type="text"
                placeholder={`Type your own ${category.label.toLowerCase()}...`}
                value={customValue}
                onChange={(e) => onCustomInput(category.id, e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default CategorySection;
