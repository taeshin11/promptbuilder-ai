import { useLanguage } from "../i18n/LanguageContext";

const platforms = [
  { id: "midjourney", name: "Midjourney", icon: "🎨", descKey: "mjDesc" },
  { id: "stable-diffusion", name: "Stable Diffusion", icon: "🖼️", descKey: "sdDesc" },
  { id: "dall-e", name: "DALL-E", icon: "🤖", descKey: "dalleDesc" },
];

function PlatformSelector({ selected, onSelect }) {
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{t.formatFor}</span>
      {platforms.map((platform) => (
        <button
          type="button"
          key={platform.id}
          onClick={() => onSelect(platform.id)}
          className={`px-3 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
            selected === platform.id
              ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
              : "bg-white/[0.06] text-slate-400 hover:bg-white/[0.1] hover:text-white"
          }`}
          title={t[platform.descKey]}
        >
          <span>{platform.icon}</span>
          <span>{platform.name}</span>
        </button>
      ))}
    </div>
  );
}

export { platforms };
export default PlatformSelector;
