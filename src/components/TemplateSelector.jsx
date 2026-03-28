import { promptTemplates } from "../data/promptTemplates";

function TemplateSelector({ onApply }) {
  return (
    <section className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden backdrop-blur-sm">
      <div className="px-4 sm:px-6 py-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl" role="img" aria-label="Templates">🎬</span>
          <div>
            <h2 className="text-lg font-semibold text-white">Quick Templates</h2>
            <p className="text-sm text-slate-400 hidden sm:block">One-click preset combinations to get started fast</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {promptTemplates.map((template) => (
            <button
              type="button"
              key={template.id}
              onClick={() => onApply(template)}
              className="group p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all text-left"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{template.emoji}</span>
                <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">
                  {template.name}
                </span>
              </div>
              <p className="text-xs text-slate-500 line-clamp-1">{template.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TemplateSelector;
