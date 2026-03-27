import { useState } from "react";

const tips = [
  {
    title: "Be Specific with Your Subject",
    content: "Instead of 'a cat', try 'a fluffy orange tabby cat sitting on a windowsill'. The more detail you provide, the better the AI can match your vision.",
  },
  {
    title: "Layer Your Descriptors",
    content: "Combine multiple categories for richer results. A subject + style + lighting + mood combination creates much more compelling images than any single descriptor alone.",
  },
  {
    title: "Use Negative Prompts Wisely",
    content: "Negative prompts help remove unwanted elements. Common negatives like 'blurry', 'low quality', and 'distorted faces' can dramatically improve output quality.",
  },
  {
    title: "Match Aspect Ratio to Content",
    content: "Use 16:9 for landscapes and cinematic scenes, 3:2 for portraits, 1:1 for social media, and 21:9 for ultra-wide panoramic shots.",
  },
  {
    title: "Experiment with Art Styles",
    content: "Try mixing unexpected combinations — like 'Cyberpunk' style with 'Watercolor' medium, or 'Studio Ghibli' with 'Photorealistic' detail. Surprising combos often produce the most unique results.",
  },
  {
    title: "Platform-Specific Tips",
    content: "Midjourney responds well to mood keywords and aspect ratios. Stable Diffusion benefits from weighted tokens (higher weight = more emphasis). DALL-E prefers natural, conversational descriptions.",
  },
];

function PromptTips() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-label="Tips">💡</span>
          <div className="text-left">
            <h2 className="text-lg font-semibold text-white">Prompt Writing Tips</h2>
            <p className="text-sm text-slate-400 hidden sm:block">Learn how to craft better AI image prompts</p>
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="px-4 sm:px-6 pb-6 animate-slide-down">
          <div className="grid gap-4 sm:grid-cols-2">
            {tips.map((tip) => (
              <article key={tip.title} className="p-4 rounded-xl bg-black/20 border border-white/5">
                <h3 className="text-sm font-semibold text-purple-300 mb-2">{tip.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{tip.content}</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default PromptTips;
