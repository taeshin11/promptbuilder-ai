const versions = [
  { label: "v 7", value: "--v 7" },
  { label: "v 6.1", value: "--v 6.1" },
  { label: "v 6", value: "--v 6" },
  { label: "v 5.2", value: "--v 5.2" },
  { label: "Niji 6", value: "--niji 6" },
  { label: "Niji 5", value: "--niji 5" },
];

const stylizePresets = [
  { label: "Low (50)", value: "--s 50" },
  { label: "Default (100)", value: "--s 100" },
  { label: "High (250)", value: "--s 250" },
  { label: "Very High (750)", value: "--s 750" },
];

const chaosPresets = [
  { label: "None", value: "" },
  { label: "Low (20)", value: "--c 20" },
  { label: "Medium (50)", value: "--c 50" },
  { label: "High (80)", value: "--c 80" },
];

function MidjourneyParams({ version, onVersionChange, stylize, onStylizeChange, chaos, onChaosChange, sref, onSrefChange }) {
  return (
    <section className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden backdrop-blur-sm">
      <div className="px-4 sm:px-6 py-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl" role="img" aria-label="Midjourney parameters">🎨</span>
          <div>
            <h2 className="text-lg font-semibold text-white">Midjourney Parameters</h2>
            <p className="text-sm text-slate-400 hidden sm:block">Fine-tune your Midjourney output</p>
          </div>
        </div>

        <div className="space-y-3">
          {/* Version */}
          <div>
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1.5 block">Version</span>
            <div className="flex flex-wrap gap-1.5">
              {versions.map((v) => (
                <button
                  type="button"
                  key={v.value}
                  onClick={() => onVersionChange(version === v.value ? "" : v.value)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    version === v.value
                      ? "bg-indigo-600 text-white"
                      : "bg-white/[0.06] text-slate-400 hover:bg-white/[0.1] hover:text-slate-200"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Stylize */}
          <div>
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1.5 block">Stylize (--s)</span>
            <div className="flex flex-wrap gap-1.5">
              {stylizePresets.map((s) => (
                <button
                  type="button"
                  key={s.value}
                  onClick={() => onStylizeChange(stylize === s.value ? "" : s.value)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    stylize === s.value
                      ? "bg-indigo-600 text-white"
                      : "bg-white/[0.06] text-slate-400 hover:bg-white/[0.1] hover:text-slate-200"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Chaos */}
          <div>
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1.5 block">Chaos (--c)</span>
            <div className="flex flex-wrap gap-1.5">
              {chaosPresets.map((c) => (
                <button
                  type="button"
                  key={c.label}
                  onClick={() => onChaosChange(chaos === c.value ? "" : c.value)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    chaos === c.value
                      ? "bg-indigo-600 text-white"
                      : "bg-white/[0.06] text-slate-400 hover:bg-white/[0.1] hover:text-slate-200"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Style Reference */}
          <div>
            <label htmlFor="sref-input" className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1.5 block">
              Style Reference (--sref)
            </label>
            <input
              id="sref-input"
              type="text"
              placeholder="Paste image URL for style reference..."
              value={sref}
              onChange={(e) => onSrefChange(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.06] text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MidjourneyParams;
