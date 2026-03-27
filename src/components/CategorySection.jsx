import { useState } from "react";

function CategorySection({ category, selected, customValue, onSelect, onCustomInput }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showCustom, setShowCustom] = useState(false);

  return (
    <section className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-label={category.label}>
            {category.icon}
          </span>
          <div className="text-left">
            <h2 className="text-lg font-semibold text-white">{category.label}</h2>
            <p className="text-sm text-slate-400 hidden sm:block">{category.description}</p>
          </div>
          {(selected || customValue?.trim()) && (
            <span className="ml-2 px-2 py-0.5 rounded-full bg-purple-500/30 text-purple-300 text-xs font-medium">
              {customValue?.trim() || selected}
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
            {category.options.map((option) => (
              <button
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
            <input
              type="text"
              placeholder={`Type your own ${category.label.toLowerCase()}...`}
              value={customValue}
              onChange={(e) => onCustomInput(category.id, e.target.value)}
              className="mt-3 w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            />
          )}
        </div>
      )}
    </section>
  );
}

export default CategorySection;
