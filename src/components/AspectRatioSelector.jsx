function AspectRatioSelector({ ratios, selected, onSelect }) {
  return (
    <section className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm">
      <div className="px-4 sm:px-6 py-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">📐</span>
          <div>
            <h2 className="text-lg font-semibold text-white">Aspect Ratio</h2>
            <p className="text-sm text-slate-400 hidden sm:block">Choose image dimensions</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {ratios.map((ratio) => (
            <button
              key={ratio.value}
              onClick={() => onSelect(selected === ratio.value ? "" : ratio.value)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                selected === ratio.value
                  ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"
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
