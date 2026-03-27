function HeroSection({ onRandomize }) {
  return (
    <section className="text-center py-8 sm:py-12 animate-fade-in-up">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
          Build AI Image Prompts
        </span>
        <br />
        <span className="text-white text-2xl sm:text-3xl lg:text-4xl">with Just a Few Clicks</span>
      </h2>
      <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base mb-6 px-4">
        Stop struggling with complex prompt syntax. Select options from intuitive categories
        to craft perfect prompts for Midjourney, Stable Diffusion, DALL-E, and more.
      </p>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <button
          onClick={onRandomize}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all"
        >
          Surprise Me (Random Prompt)
        </button>
        <a
          href="#prompt-output"
          className="px-5 py-2.5 rounded-xl bg-white/10 text-slate-300 font-medium text-sm hover:bg-white/20 transition-all"
        >
          Start Building
        </a>
      </div>
      <div className="flex items-center justify-center gap-6 mt-8 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          100% Free
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          No Login Required
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          144+ Options
        </span>
      </div>
    </section>
  );
}

export default HeroSection;
