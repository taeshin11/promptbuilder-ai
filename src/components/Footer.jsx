function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-white/[0.03] backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} PromptBuilder AI. Free AI image prompt generator.
            </p>
            <p className="text-xs text-slate-600 mt-1">
              Works with Midjourney, Stable Diffusion, DALL-E, and more.
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs text-slate-500" aria-label="Visitor statistics">
            <div className="flex items-center gap-1">
              <span>Today:</span>
              <img
                src="https://hits.sh/promptbuilder-ai.vercel.app/today.svg?style=flat&label=&color=6b21a8&labelColor=transparent"
                alt="Today's visitors"
                className="h-5 inline-block"
                loading="lazy"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
            <div className="flex items-center gap-1">
              <span>Total:</span>
              <img
                src="https://hits.sh/promptbuilder-ai.vercel.app.svg?style=flat&label=&color=6b21a8&labelColor=transparent"
                alt="Total visitors"
                className="h-5 inline-block"
                loading="lazy"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
