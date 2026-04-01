import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

function AboutPage() {
  const { localePath } = useLanguage();
  return (
    <>
      <Helmet>
        <title>About Us - PromptBuilder AI | Free AI Image Prompt Generator</title>
        <meta
          name="description"
          content="Learn about PromptBuilder AI, the free productivity tool that helps artists, designers, and creators craft perfect prompts for Midjourney, Stable Diffusion, and DALL-E."
        />
        <meta
          name="keywords"
          content="about PromptBuilder AI, AI prompt generator, AI art tool, Midjourney prompt builder, Stable Diffusion prompt tool, free AI productivity tool"
        />
        <link rel="canonical" href="https://promptbuilder-ai.vercel.app/about" />
        <meta property="og:title" content="About Us - PromptBuilder AI" />
        <meta property="og:description" content="Learn about PromptBuilder AI, the free productivity tool that helps artists and creators craft perfect prompts for Midjourney, Stable Diffusion, and DALL-E." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://promptbuilder-ai.vercel.app/about" />
        <meta property="og:image" content="https://promptbuilder-ai.vercel.app/og-image.svg" />
        <meta property="og:site_name" content="PromptBuilder AI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - PromptBuilder AI" />
        <meta name="twitter:description" content="Learn about PromptBuilder AI, the free AI image prompt generator for Midjourney, Stable Diffusion, and DALL-E." />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <Link to={localePath("/")} className="hover:text-indigo-400 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">About Us</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent mb-4">
            About PromptBuilder AI
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            The free, intuitive prompt engineering tool designed to help anyone create stunning AI-generated images — no experience required.
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-10 text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">What Is PromptBuilder AI?</h2>
            <p>
              PromptBuilder AI is a free, browser-based productivity tool that empowers artists, designers, photographers, and hobbyists to create high-quality text prompts for the world's leading AI image generation platforms — including <strong className="text-white">Midjourney</strong>, <strong className="text-white">Stable Diffusion (SDXL, SD 1.5)</strong>, and <strong className="text-white">DALL-E 3</strong>.
            </p>
            <p className="mt-4">
              Instead of staring at a blank text box and guessing which keywords might produce the image you envision, PromptBuilder AI presents you with carefully curated categories — Subject, Art Style, Lighting, Camera Lens, Color Palette, Mood, Medium, and Detail Level — each filled with options that professional prompt engineers actually use in production workflows. Simply click the options that match your creative vision, and the tool instantly assembles a well-structured, platform-optimized prompt you can copy with one click.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Why AI Prompting Matters</h2>
            <p>
              The quality of an AI-generated image depends almost entirely on the quality of the prompt that produces it. A vague prompt like "a cat" will yield a generic result, while a detailed, structured prompt like <em className="text-indigo-300">"a majestic Persian cat, cinematic lighting, golden hour, shot with a 85mm lens, oil painting style, warm color palette, highly detailed fur texture"</em> will produce a breathtaking, gallery-worthy piece of art.
            </p>
            <p className="mt-4">
              The challenge is that most people — even experienced designers — don't know the full vocabulary of parameters that AI models respond to. Concepts like "Rembrandt lighting," "chromatic aberration," or "tilt-shift photography" are powerful modifiers that dramatically change the output, but they require domain knowledge that takes months to acquire through trial and error.
            </p>
            <p className="mt-4">
              PromptBuilder AI eliminates this learning curve. By organizing hundreds of proven keywords into intuitive, clickable categories, the tool lets beginners produce expert-level prompts from day one. For experienced users, it serves as a rapid workflow accelerator — saving minutes on every prompt while ensuring no important parameter is overlooked.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">The Logic Behind Great Prompts</h2>
            <p>
              Our prompt-building methodology is based on a structured, layered approach that mirrors how professional AI artists construct their prompts:
            </p>
            <ol className="list-decimal list-inside space-y-3 mt-4 ml-4">
              <li>
                <strong className="text-white">Subject First:</strong> Every great image starts with a clear subject. Whether it's a portrait, landscape, still life, or abstract concept, the subject anchors the entire composition and tells the AI model what to focus on.
              </li>
              <li>
                <strong className="text-white">Style & Medium:</strong> Next, we define the artistic style (photorealistic, anime, watercolor, oil painting, 3D render) and medium. These parameters shape the fundamental look and feel of the output — the difference between a photograph and a Ghibli-style illustration.
              </li>
              <li>
                <strong className="text-white">Lighting & Atmosphere:</strong> Lighting is arguably the single most impactful modifier after the subject. Options like golden hour, studio lighting, neon glow, or volumetric fog can transform an ordinary scene into something cinematic and emotionally compelling.
              </li>
              <li>
                <strong className="text-white">Camera & Composition:</strong> For photorealistic outputs, specifying a lens (85mm portrait lens, wide-angle, macro) and camera angle gives the AI model concrete visual instructions that dramatically improve realism and depth of field.
              </li>
              <li>
                <strong className="text-white">Color & Mood:</strong> The final layer adds emotional depth. A warm, earthy palette evokes nostalgia; cool blues suggest tranquility; neon colors create cyberpunk energy. Combined with mood keywords like "serene," "dramatic," or "ethereal," this layer gives the image its soul.
              </li>
              <li>
                <strong className="text-white">Negative Prompts & Refinement:</strong> Just as important as telling the AI what you want is telling it what to avoid. Our negative prompt system helps you exclude common artifacts like extra fingers, blurry backgrounds, or watermarks — producing cleaner, more polished results.
              </li>
            </ol>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Platform-Specific Optimization</h2>
            <p>
              Not all AI platforms interpret prompts the same way. Midjourney uses aspect ratio flags like <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm">--ar 16:9</code> and negative prompts with <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm">--no</code>, while Stable Diffusion uses weighted token syntax like <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm">(keyword:1.5)</code> and a separate negative prompt field. DALL-E takes a more natural language approach.
            </p>
            <p className="mt-4">
              PromptBuilder AI automatically formats your prompt for your selected platform, applying the correct syntax, parameter structure, and best practices for each model. You select your platform once, and the tool handles the rest — so you can focus on creativity, not syntax.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Who Is This For?</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Digital artists and illustrators</strong> looking to rapidly prototype visual concepts before committing to hours of manual work.</li>
              <li><strong className="text-white">Graphic designers and marketers</strong> who need on-brand AI-generated visuals for campaigns, social media, and presentations.</li>
              <li><strong className="text-white">Game developers and concept artists</strong> exploring character designs, environments, and assets at scale.</li>
              <li><strong className="text-white">Photographers and filmmakers</strong> using AI as a previsualization and mood-boarding tool.</li>
              <li><strong className="text-white">Hobbyists and enthusiasts</strong> who want to create beautiful AI art without mastering complex prompt syntax.</li>
              <li><strong className="text-white">Educators and students</strong> learning about AI art generation and prompt engineering fundamentals.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Our Commitment</h2>
            <p>
              PromptBuilder AI is and will always remain <strong className="text-white">completely free to use</strong>. There are no hidden paywalls, no mandatory sign-ups, and no usage limits. We believe that creative tools should be accessible to everyone, regardless of budget or technical skill level.
            </p>
            <p className="mt-4">
              The tool runs entirely in your browser — your prompts, history, and preferences are stored locally on your device and are never sent to our servers. Your creative process is private by default.
            </p>
            <p className="mt-4">
              We are continuously improving PromptBuilder AI with new features, expanded prompt libraries, and support for emerging AI platforms. If you have suggestions, feedback, or feature requests, we'd love to hear from you.
            </p>
          </section>

          {/* CTA */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">Ready to Create Something Amazing?</h3>
            <p className="text-slate-400 mb-5">Start building your perfect AI image prompt in seconds — no sign-up required.</p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link
                to={localePath("/")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold hover:from-indigo-400 hover:to-violet-400 transition-all shadow-lg"
              >
                Open Prompt Builder
              </Link>
              <Link
                to={localePath("/gallery")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.07] text-slate-300 font-medium hover:bg-white/[0.12] transition-all"
              >
                Browse Prompt Gallery
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Have suggestions or feedback? We'd love to hear from you at{" "}
              <a href="mailto:taeshinkim11@gmail.com?subject=PromptBuilder AI Feedback" className="text-indigo-400 hover:text-indigo-300 underline">
                taeshinkim11@gmail.com
              </a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

export default AboutPage;
