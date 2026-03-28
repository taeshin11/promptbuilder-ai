function AspectRatioSelector({ ratios, selected, onSelect }) {
  return (
    <section className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden backdrop-blur-sm">
      <div className="px-4 sm:px-6 py-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl" role="img" aria-label="Aspect ratio">📐</span>
          <div>
            <h2 className="text-lg font-semibold text-white">Aspect Ratio</h2>
            <p className="text-sm text-slate-400 hidden sm:block">Choose image dimensions</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {ratios.map((ratio) => (
            <button
              type="button"
              key={ratio.value}
              onClick={() => onSelect(selected === ratio.value ? "" : ratio.value)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                selected === ratio.value
                  ? "bg-indigo-600 text-white"
                  : "bg-white/[0.06] text-slate-300 hover:bg-white/[0.1] hover:text-white"
              }`}
            >
              {ratio.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AspectRatioSelector;
