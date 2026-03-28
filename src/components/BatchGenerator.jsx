import { useState, useCallback } from "react";
import { promptCategories } from "../data/promptOptions";

function BatchGenerator({ selections, customInputs, platform, onCopyAll }) {
  const [variations, setVariations] = useState([]);
  const [copiedIdx, setCopiedIdx] = useState(null);

  const hasSelections = Object.keys(selections).length > 0 || Object.values(customInputs).some((v) => v?.trim());

  const generateVariations = useCallback(() => {
    const count = 5;
    const results = [];

    for (let i = 0; i < count; i++) {
      const parts = promptCategories.map((cat) => {
        const custom = customInputs[cat.id]?.trim();
        const base = custom || selections[cat.id];

        if (!base) {
          // 30% chance to add a random option for empty categories
          if (Math.random() < 0.3) {
            return cat.options[Math.floor(Math.random() * cat.options.length)];
          }
          return null;
        }

        // 40% chance to swap a selected option for a different one in that category
        if (!custom && Math.random() < 0.4) {
          const others = cat.options.filter((o) => o !== base);
          return others[Math.floor(Math.random() * others.length)];
        }

        return base;
      }).filter(Boolean);

      results.push(parts.join(", "));
    }

    setVariations(results);
  }, [selections, customInputs]);

  const handleCopySingle = useCallback(async (text, idx) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1500);
    } catch {
      // fallback
    }
  }, []);

  const handleCopyAll = useCallback(async () => {
    const all = variations.join("\n\n---\n\n");
    try {
      await navigator.clipboard.writeText(all);
      setCopiedIdx(-1);
      setTimeout(() => setCopiedIdx(null), 1500);
    } catch {
      // fallback
    }
  }, [variations]);

  if (!hasSelections) return null;

  return (
    <section className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden backdrop-blur-sm mt-6">
      <div className="px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl" role="img" aria-label="Batch generator">⚡</span>
            <div>
              <h2 className="text-lg font-semibold text-white">Batch Variations</h2>
              <p className="text-sm text-slate-400 hidden sm:block">Generate 5 variations based on your selections</p>
            </div>
          </div>
          <div className="flex gap-2">
            {variations.length > 0 && (
              <button
                type="button"
                onClick={handleCopyAll}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  copiedIdx === -1
                    ? "bg-green-500 text-white"
                    : "bg-white/[0.06] text-slate-300 hover:bg-white/[0.1]"
                }`}
              >
                {copiedIdx === -1 ? "Copied All!" : "Copy All"}
              </button>
            )}
            <button
              type="button"
              onClick={generateVariations}
              className="px-4 py-1.5 rounded-lg text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-all"
            >
              {variations.length > 0 ? "Regenerate" : "Generate 5 Variations"}
            </button>
          </div>
        </div>

        {variations.length > 0 && (
          <div className="space-y-2 animate-slide-down">
            {variations.map((v, i) => (
              <div
                key={i}
                className="flex items-start gap-2 p-3 rounded-xl bg-black/20 border border-white/[0.04] group hover:border-indigo-500/20 transition-all"
              >
                <span className="text-xs text-slate-600 font-mono shrink-0 mt-0.5">#{i + 1}</span>
                <p className="text-sm text-slate-300 flex-1">{v}</p>
                <button
                  type="button"
                  onClick={() => handleCopySingle(v, i)}
                  className={`shrink-0 px-2 py-1 rounded-lg text-xs font-medium transition-all ${
                    copiedIdx === i
                      ? "bg-green-500/30 text-green-300"
                      : "bg-indigo-500/15 text-indigo-300 opacity-0 group-hover:opacity-100 hover:bg-indigo-500/30"
                  }`}
                >
                  {copiedIdx === i ? "Copied!" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default BatchGenerator;
