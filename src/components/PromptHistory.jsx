function PromptHistory({ history, onLoad, onClear }) {
  return (
    <section className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm">
      <div className="px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📜</span>
            <h2 className="text-lg font-semibold text-white">Prompt History</h2>
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-slate-400 text-xs">
              {history.length}
            </span>
          </div>
          <button
            onClick={onClear}
            className="px-3 py-1 rounded-lg text-xs font-medium bg-white/10 text-slate-400 hover:bg-red-500/20 hover:text-red-300 transition-all"
          >
            Clear All
          </button>
        </div>
        <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
          {history.slice(0, 20).map((item, i) => (
            <div
              key={item.timestamp + i}
              className="flex items-start gap-2 p-3 rounded-xl bg-black/20 border border-white/5 group hover:border-purple-500/30 transition-all"
            >
              <p className="text-sm text-slate-300 flex-1 line-clamp-2">{item.prompt}</p>
              <button
                onClick={() => onLoad(item.prompt)}
                className="shrink-0 px-2 py-1 rounded-lg text-xs font-medium bg-purple-500/20 text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-purple-500/40"
              >
                Copy
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PromptHistory;
