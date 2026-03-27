function Header() {
  return (
    <header className="border-b border-white/10 backdrop-blur-sm bg-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl font-bold shadow-lg shadow-purple-500/25">
            P
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              PromptBuilder AI
            </h1>
            <p className="text-xs text-slate-400 hidden sm:block">AI Image Prompt Generator</p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <a
            href="https://github.com/taeshin11/promptbuilder-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-sm hidden sm:inline"
          >
            GitHub
          </a>
          <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium border border-purple-500/30">
            Free
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
