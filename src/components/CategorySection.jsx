import { useState } from "react";

const WEIGHT_LEVELS = [
  { label: "Low", value: 0.7, color: "text-slate-400 bg-slate-500/20" },
  { label: "Normal", value: 1.0, color: "text-indigo-300 bg-indigo-500/15" },
  { label: "High", value: 1.3, color: "text-amber-300 bg-amber-500/20" },
  { label: "Max", value: 1.6, color: "text-red-300 bg-red-500/20" },
];

function CategorySection({ category, selected, customValue, onSelect, onCustomInput, weight, onWeightChange, defaultExpanded = false }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [showCustom, setShowCustom] = useState(false);

  const hasSelection = selected || customValue?.trim();
  const currentWeight = WEIGHT_LEVELS.find((w) => w.value === weight) || WEIGHT_LEVELS[1];

  return (
    <section className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden backdrop-blur-sm transition-all">
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
            <span className="ml-2 px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 text-xs font-medium truncate max-w-[150px] sm:max-w-[200px]">
              {customValue?.trim() ? `✏️ ${customValue.trim()}` : selected}
            </span>
          )}
          {hasSelection && weight !== 1.0 && (
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${currentWeight.color}`}>
              {currentWeight.label}
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
                    ? "bg-indigo-600 text-white shadow-md scale-105"
                    : "bg-white/[0.06] text-slate-400 hover:bg-white/[0.1] hover:text-slate-200"
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
                  ? "border-indigo-500/50 text-indigo-400"
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
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
            </div>
          )}

          {/* Weight control - only visible when something is selected */}
          {hasSelection && (
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs text-slate-500 shrink-0">Emphasis:</span>
              <div className="flex gap-1">
                {WEIGHT_LEVELS.map((w) => (
                  <button
                    type="button"
                    key={w.value}
                    onClick={(e) => {
                      e.stopPropagation();
                      onWeightChange(category.id, w.value);
                    }}
                    className={`px-2 py-0.5 rounded text-xs font-medium transition-all ${
                      weight === w.value
                        ? w.color + " ring-1 ring-white/20"
                        : "bg-white/5 text-slate-500 hover:bg-white/10 hover:text-slate-300"
                    }`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default CategorySection;
