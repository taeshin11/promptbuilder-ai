import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const galleryPrompts = [
  {
    id: "fantasy-dragon",
    title: "Majestic Dragon at Sunset",
    category: "Fantasy",
    prompt: "A majestic dragon perched on a mountain peak, golden hour, dramatic side lighting, volumetric fog, dark fantasy style, digital painting, warm tones, epic and grandiose mood, highly detailed, 8K ultra HD --ar 16:9 --v 6.1",
    platform: "Midjourney",
    tags: ["dragon", "fantasy", "epic", "golden hour", "digital painting"],
  },
  {
    id: "cyberpunk-street",
    title: "Neon Cyberpunk Alley",
    category: "Sci-Fi",
    prompt: "A cyberpunk city alley at night, neon signs reflecting on wet pavement, neon glow lighting, 3D render, cyberpunk style, neon colors, futuristic mood, cinematic quality, ray tracing --ar 16:9 --v 6.1",
    platform: "Midjourney",
    tags: ["cyberpunk", "neon", "city", "night", "futuristic"],
  },
  {
    id: "ghibli-forest",
    title: "Studio Ghibli Enchanted Forest",
    category: "Anime",
    prompt: "An enchanted forest with glowing mushrooms and floating particles, soft diffused light, anime style, Studio Ghibli, pastel colors, dreamlike atmosphere, masterpiece quality --ar 3:2 --v 6.1 --niji 6",
    platform: "Midjourney",
    tags: ["ghibli", "anime", "forest", "magical", "pastel"],
  },
  {
    id: "portrait-cinematic",
    title: "Cinematic Portrait Photography",
    category: "Portrait",
    prompt: "A beautiful woman with freckles looking into camera, cinematic lighting, 85mm f/1.4 bokeh, photorealistic, hyper-realistic style, warm tones, elegant and refined mood, professional photography, sharp focus --ar 3:2",
    platform: "Midjourney",
    tags: ["portrait", "photography", "cinematic", "bokeh", "realistic"],
  },
  {
    id: "sd-landscape",
    title: "Impressionist Mountain Lake",
    category: "Landscape",
    prompt: "(serene mountain lake at dawn:1.3), (oil painting:1.2), impressionist style, golden hour, wide-angle panorama, warm tones, peaceful and serene, masterpiece quality, (intricate details:1.1)\nNegative prompt: blurry, low quality, watermark, text, distorted",
    platform: "Stable Diffusion",
    tags: ["landscape", "mountains", "impressionist", "oil painting", "serene"],
  },
  {
    id: "horror-mansion",
    title: "Gothic Haunted Mansion",
    category: "Horror",
    prompt: "A haunted Victorian mansion in dense fog, moonlight, concept art, gothic style, dark and moody colors, horror and dread atmosphere, cinematic quality, volumetric fog, dramatic side lighting --ar 16:9 --v 6.1 --no blurry, low quality, watermark",
    platform: "Midjourney",
    tags: ["horror", "gothic", "mansion", "fog", "dark"],
  },
  {
    id: "dalle-underwater",
    title: "Underwater Crystal Kingdom",
    category: "Fantasy",
    prompt: "An underwater kingdom with crystal spires and bioluminescent coral, soft ethereal glow, digital painting, art nouveau style, cool blue tones with gold accents, dreamlike and mysterious atmosphere, highly detailed, 8K resolution. Avoid: blurry, low quality, text, watermark",
    platform: "DALL-E",
    tags: ["underwater", "crystal", "fantasy", "bioluminescent", "kingdom"],
  },
  {
    id: "vaporwave-city",
    title: "Retro Vaporwave Sunset",
    category: "Retro",
    prompt: "A retro vaporwave sunset over a grid landscape with palm trees, neon glow, digital painting, vaporwave style, neon colors, nostalgic mood, trending on ArtStation --ar 1:1 --v 6.1",
    platform: "Midjourney",
    tags: ["vaporwave", "retro", "neon", "sunset", "80s"],
  },
  {
    id: "steampunk-inventor",
    title: "Steampunk Inventor's Workshop",
    category: "Steampunk",
    prompt: "A steampunk inventor's workshop filled with brass gears, copper pipes, and glowing vials, candlelight and warm lamp glow, concept art, steampunk style, warm tones, cozy and mysterious mood, extreme texture detail, octane render --ar 16:9",
    platform: "Midjourney",
    tags: ["steampunk", "workshop", "brass", "gears", "cozy"],
  },
  {
    id: "space-nebula",
    title: "Cosmic Nebula Station",
    category: "Sci-Fi",
    prompt: "A space station orbiting near a colorful nebula, stars and cosmic dust, volumetric lighting, concept art, retro futurism style, cool blue tones with purple accents, alien and otherworldly mood, Unreal Engine 5, cinematic quality --ar 21:9",
    platform: "Midjourney",
    tags: ["space", "nebula", "sci-fi", "cosmic", "station"],
  },
  {
    id: "sd-anime-warrior",
    title: "Anime Warrior in Cherry Blossoms",
    category: "Anime",
    prompt: "(mysterious samurai warrior standing under cherry blossom tree:1.3), (anime style:1.2), soft diffused light, pastel pink and white colors, peaceful yet powerful mood, masterpiece quality, (sharp focus:1.1), intricate armor details\nNegative prompt: blurry, low quality, extra fingers, bad anatomy, watermark",
    platform: "Stable Diffusion",
    tags: ["anime", "samurai", "cherry blossom", "warrior", "japanese"],
  },
  {
    id: "macro-nature",
    title: "Macro Dewdrop on Leaf",
    category: "Nature",
    prompt: "A crystal-clear dewdrop on a green leaf reflecting the morning sun, macro lens extreme detail, photorealistic, soft diffused light, vibrant and saturated colors, peaceful and serene, 8K ultra HD, professional photography --ar 4:3",
    platform: "Midjourney",
    tags: ["macro", "nature", "dewdrop", "photography", "detail"],
  },
];

function PromptGalleryPage() {
  const { t, localePath } = useLanguage();
  const handleCopy = (promptText) => {
    navigator.clipboard.writeText(promptText).catch(() => {
      const textarea = document.createElement("textarea");
      textarea.value = promptText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    });
  };

  const categories = [...new Set(galleryPrompts.map((p) => p.category))];

  return (
    <>
      <Helmet>
        <title>AI Prompt Gallery - 50+ Curated Prompts for Midjourney, Stable Diffusion & DALL-E</title>
        <meta
          name="description"
          content="Browse our curated gallery of AI image prompts. Copy-ready examples for Midjourney, Stable Diffusion, and DALL-E. Fantasy, cyberpunk, anime, portrait, landscape prompts and more."
        />
        <meta
          name="keywords"
          content="midjourney prompt examples, stable diffusion prompt ideas, DALL-E prompt gallery, AI art prompts, best AI image prompts, prompt inspiration, cyberpunk prompt, fantasy prompt, anime prompt, landscape prompt"
        />
        <link rel="canonical" href="https://promptbuilder-ai.vercel.app/gallery" />
      </Helmet>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Breadcrumb with Schema */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <Link to={localePath("/")} className="hover:text-indigo-400 transition-colors">{t.home}</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">{t.promptGallery}</span>
        </nav>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://promptbuilder-ai.vercel.app/" },
                { "@type": "ListItem", position: 2, name: "Prompt Gallery", item: "https://promptbuilder-ai.vercel.app/gallery" },
              ],
            }),
          }}
        />

        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent mb-4">
            {t.galleryTitle}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
            {t.galleryDesc}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((cat) => (
              <span key={cat} className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-medium border border-indigo-500/20">
                {cat}
              </span>
            ))}
          </div>
        </header>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPrompts.map((item) => (
            <GalleryCard key={item.id} item={item} onCopy={handleCopy} />
          ))}
        </div>

        {/* SEO Content Section */}
        <section className="mt-16 prose prose-invert max-w-none text-slate-300 leading-relaxed">
          <h2 className="text-2xl font-semibold text-white mb-4">How to Use These AI Image Prompts</h2>
          <p>
            Each prompt in our gallery has been carefully crafted using professional prompt engineering techniques. They follow the
            proven structure of <strong className="text-white">Subject + Style + Lighting + Camera + Color + Mood + Quality</strong>,
            which consistently produces the best results across all major AI image generation platforms.
          </p>
          <p className="mt-4">
            To use any prompt, simply click the <strong className="text-white">"Copy Prompt"</strong> button and paste it directly
            into your AI tool of choice. Each prompt is tagged with its target platform (Midjourney, Stable Diffusion, or DALL-E)
            and uses the correct syntax for that platform.
          </p>
          <p className="mt-4">
            Want to customize these prompts? Open our <Link to={localePath("/")} className="text-indigo-400 hover:text-indigo-300 underline">Prompt Builder</Link> to
            modify any aspect — swap the lighting, change the art style, adjust weights, or add negative prompts. The builder
            automatically formats everything for your chosen platform.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-10">Tips for Modifying Gallery Prompts</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Replace the subject while keeping the style, lighting, and mood for a completely different image with the same visual feel.</li>
            <li>Try switching between platforms — a Midjourney prompt often works great in Stable Diffusion with minor syntax adjustments.</li>
            <li>Add more negative prompts (like "blurry, low quality, watermark") to improve output quality.</li>
            <li>Experiment with aspect ratios — change <code className="bg-white/10 px-1 rounded text-sm">--ar 16:9</code> to <code className="bg-white/10 px-1 rounded text-sm">--ar 1:1</code> for a completely different composition.</li>
            <li>Increase the <code className="bg-white/10 px-1 rounded text-sm">--stylize</code> value in Midjourney for more artistic interpretations.</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 text-center">
          <h3 className="text-xl font-semibold text-white mb-3">{t.buildCustom}</h3>
          <p className="text-slate-400 mb-5">{t.buildCustomDesc}</p>
          <Link
            to={localePath("/")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold hover:from-indigo-400 hover:to-violet-400 transition-all shadow-lg"
          >
            {t.openBuilder}
          </Link>
        </div>
      </article>
    </>
  );
}

function GalleryCard({ item, onCopy }) {
  const { t } = useLanguage();
  const platformColors = {
    Midjourney: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Stable Diffusion": "bg-green-500/20 text-green-300 border-green-500/30",
    "DALL-E": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  };

  return (
    <article className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden hover:border-indigo-500/20 transition-colors group">
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${platformColors[item.platform]}`}>
            {item.platform}
          </span>
          <span className="text-xs text-slate-500">{item.category}</span>
        </div>
        <h3 className="text-base font-semibold text-white mb-3">{item.title}</h3>
        <div className="rounded-xl bg-black/30 border border-white/[0.04] p-3 mb-4 max-h-32 overflow-y-auto custom-scrollbar">
          <p className="text-xs text-slate-400 leading-relaxed whitespace-pre-line font-mono">{item.prompt}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-500 text-[10px]">
              {tag}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={() => onCopy(item.prompt)}
          className="w-full py-2 rounded-lg bg-indigo-600/80 text-white text-sm font-medium hover:bg-indigo-500 transition-all group-hover:bg-indigo-600"
        >
          {t.copyPrompt}
        </button>
      </div>
    </article>
  );
}

export default PromptGalleryPage;
