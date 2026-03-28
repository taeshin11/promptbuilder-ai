const platforms = [
  {
    id: "midjourney",
    name: "Midjourney",
    icon: "🎨",
    description: "Uses --ar, --v, --no flags",
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    icon: "🖼️",
    description: "Weighted tokens with (keyword:1.3)",
  },
  {
    id: "dall-e",
    name: "DALL-E",
    icon: "🤖",
    description: "Natural language descriptions",
  },
];

function PlatformSelector({ selected, onSelect }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Format for:</span>
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
          title={platform.description}
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
