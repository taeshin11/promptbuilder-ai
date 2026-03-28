import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-white/[0.03] backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top section: Navigation links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-2">Product</h3>
            <ul className="space-y-1.5">
              <li>
                <Link to="/" className="text-sm text-slate-500 hover:text-indigo-400 transition-colors">
                  Prompt Builder
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-slate-500 hover:text-indigo-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-2">Resources</h3>
            <ul className="space-y-1.5">
              <li>
                <Link to="/how-to-use" className="text-sm text-slate-500 hover:text-indigo-400 transition-colors">
                  How to Use & FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/taeshin11/promptbuilder-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-indigo-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-2">Legal</h3>
            <ul className="space-y-1.5">
              <li>
                <Link to="/privacy" className="text-sm text-slate-500 hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-slate-500 hover:text-indigo-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-2">Platforms</h3>
            <ul className="space-y-1.5 text-sm text-slate-500">
              <li>Midjourney</li>
              <li>Stable Diffusion</li>
              <li>DALL-E</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] pt-5">
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
      </div>
    </footer>
  );
}

export default Footer;
