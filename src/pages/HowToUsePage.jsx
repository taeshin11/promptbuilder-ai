import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function HowToUsePage() {
  return (
    <>
      <Helmet>
        <title>How to Use PromptBuilder AI - Step-by-Step Guide & FAQ</title>
        <meta
          name="description"
          content="Learn how to craft the perfect AI image prompt in 3 easy steps. Includes detailed FAQ about Midjourney, Stable Diffusion, DALL-E prompting techniques and best practices."
        />
        <meta
          name="keywords"
          content="how to write AI prompts, Midjourney prompt guide, Stable Diffusion tutorial, AI art prompt tips, prompt engineering guide, DALL-E prompt FAQ"
        />
        <link rel="canonical" href="https://promptbuilder-ai.vercel.app/how-to-use" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is an AI image prompt and why does it matter?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An AI image prompt is a text description that instructs an AI model to generate a specific image. The quality and specificity of your prompt directly determines the quality of the output. A well-crafted prompt includes details about subject, style, lighting, composition, and mood."
                }
              },
              {
                "@type": "Question",
                name: "Do I need to pay to use PromptBuilder AI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. PromptBuilder AI is completely free to use with no sign-up required. All features including prompt history, templates, platform-specific formatting, and batch generation are available at no cost."
                }
              },
              {
                "@type": "Question",
                name: "Which AI image generation platforms does PromptBuilder AI support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PromptBuilder AI supports Midjourney, Stable Diffusion (SDXL, SD 1.5), and DALL-E 3. It automatically formats your prompt with the correct syntax for each platform."
                }
              },
              {
                "@type": "Question",
                name: "How do negative prompts work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Negative prompts tell the AI what to avoid in the generated image. For Midjourney, they use the --no flag. For Stable Diffusion, they go in a separate negative prompt field. Common negatives include blurry, low quality, extra fingers, and watermarks."
                }
              },
              {
                "@type": "Question",
                name: "Can I save my prompts and share them with others?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. PromptBuilder AI automatically saves your last 50 generated prompts in your browser's local storage. You can also generate a shareable URL that encodes your selections, allowing others to load your exact prompt configuration."
                }
              },
              {
                "@type": "Question",
                name: "What makes a good AI image prompt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A good AI image prompt is specific, structured, and layered. Start with a clear subject, add artistic style and medium, define lighting conditions, specify camera settings for realism, set the color palette and mood, and include negative prompts to exclude unwanted elements."
                }
              },
              {
                "@type": "Question",
                name: "Is my data private when using PromptBuilder AI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. PromptBuilder AI runs entirely in your browser. Your prompts, history, and preferences are stored locally on your device using localStorage and are never transmitted to any server."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">How to Use & FAQ</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent mb-4">
            How to Use PromptBuilder AI
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Master the art of AI image prompting with our simple 3-step process. Plus, find answers to the most common questions about prompt engineering.
          </p>
        </header>

        <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed">
          {/* 3-Step Guide */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-8">Craft the Perfect Prompt in 3 Steps</h2>

            {/* Step 1 */}
            <div className="relative pl-16 pb-12 border-l-2 border-indigo-500/30 ml-4">
              <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Select Your Platform & Subject</h3>
              <p>
                Begin by choosing your target AI platform — <strong className="text-white">Midjourney</strong>, <strong className="text-white">Stable Diffusion</strong>, or <strong className="text-white">DALL-E</strong> — from the platform selector at the top of the builder. Each platform has its own syntax rules, and PromptBuilder AI will automatically format your final prompt accordingly.
              </p>
              <p className="mt-3">
                Next, select or type your <strong className="text-white">Subject</strong>. This is the most important element of your prompt — it defines what the image is about. Choose from our curated options like "a majestic dragon," "futuristic cityscape," or "portrait of a woman," or type your own custom subject in the text input field.
              </p>
              <p className="mt-3">
                You can also jumpstart your creative process by clicking the <strong className="text-white">"Surprise Me"</strong> button to generate a completely random prompt, or by selecting one of the pre-built <strong className="text-white">templates</strong> (Epic Fantasy, Cyberpunk Street, Serene Landscape, and more).
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative pl-16 pb-12 border-l-2 border-indigo-500/30 ml-4">
              <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Customize Style, Lighting & Details</h3>
              <p>
                This is where the magic happens. Expand the category panels and click options to add layers of detail to your prompt:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                <li><strong className="text-white">Art Style:</strong> Choose from photorealistic, digital painting, watercolor, anime, oil painting, 3D render, pixel art, and dozens more.</li>
                <li><strong className="text-white">Lighting:</strong> Set the mood with golden hour, studio lighting, neon glow, Rembrandt lighting, moonlight, or dramatic shadows.</li>
                <li><strong className="text-white">Camera Lens:</strong> For photorealistic work, specify 50mm, 85mm portrait, wide-angle, macro, or tilt-shift to control depth and perspective.</li>
                <li><strong className="text-white">Color Palette:</strong> Guide the overall color scheme — warm earth tones, cool blues, vibrant neons, muted pastels, or monochromatic.</li>
                <li><strong className="text-white">Mood:</strong> Set the emotional tone — serene, dramatic, mysterious, joyful, melancholic, or ethereal.</li>
                <li><strong className="text-white">Detail Level:</strong> Control the level of intricacy — highly detailed, minimalist, abstract, or hyperrealistic.</li>
              </ul>
              <p className="mt-3">
                Use the <strong className="text-white">weight controls</strong> (Low, Normal, High, Max) on each category to emphasize or de-emphasize specific aspects. For Stable Diffusion, weights are applied as numerical multipliers; for Midjourney, high-weight elements are placed first in the prompt for priority.
              </p>
              <p className="mt-3">
                Don't forget to set your <strong className="text-white">aspect ratio</strong> and add <strong className="text-white">negative prompts</strong> to exclude unwanted artifacts like blurry images, extra limbs, watermarks, or low resolution.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative pl-16 pb-4 ml-4">
              <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Copy, Share & Create</h3>
              <p>
                Your finished prompt appears in real time in the prompt output area at the top of the page. When you're satisfied with your prompt:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                <li><strong className="text-white">Copy:</strong> Click the <strong className="text-white">"Copy Prompt"</strong> button (or press <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs">Ctrl</kbd> + <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs">Enter</kbd>) to copy the prompt to your clipboard. Paste it directly into your AI platform of choice.</li>
                <li><strong className="text-white">Share:</strong> Click the <strong className="text-white">Share</strong> button to generate a unique URL. Anyone who opens this link will see your exact selections pre-loaded, making it easy to collaborate or share your prompt configurations with friends and colleagues.</li>
                <li><strong className="text-white">History:</strong> Your last 50 prompts are automatically saved in your browser. Scroll down to the Prompt History section to revisit, copy, or build upon previous prompts.</li>
                <li><strong className="text-white">Batch Generate:</strong> Use the Batch Generator to create multiple variations of your prompt at once — perfect for exploring different styles or finding the perfect composition.</li>
              </ul>
              <p className="mt-3">
                That's it! Paste your prompt into Midjourney, Stable Diffusion, or DALL-E and watch your vision come to life.
              </p>
            </div>
          </section>

          {/* Pro Tips */}
          <section className="mb-16 p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Pro Tips for Better Results</h2>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li><strong className="text-white">Be specific, not generic.</strong> "A red 1967 Ford Mustang on a wet city street at night" is far better than "a car."</li>
              <li><strong className="text-white">Combine unexpected elements.</strong> Some of the most striking AI art comes from pairing unrelated concepts — "a Viking warrior in a Monet garden" or "cyberpunk samurai in a snowstorm."</li>
              <li><strong className="text-white">Use quality boosters.</strong> Add keywords like "highly detailed," "8K resolution," "award-winning," or "trending on ArtStation" to push quality higher.</li>
              <li><strong className="text-white">Iterate and refine.</strong> Your first prompt is rarely your best. Use the batch generator to explore variations, then fine-tune the one that comes closest to your vision.</li>
              <li><strong className="text-white">Learn from templates.</strong> Study the pre-built templates to understand how professionals structure their prompts. Notice how they layer subject, style, lighting, and mood.</li>
            </ul>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-8">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <details className="group rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden" open>
                <summary className="flex items-center justify-between cursor-pointer p-5 text-white font-medium hover:bg-white/[0.02] transition-colors">
                  <span>What is an AI image prompt and why does it matter?</span>
                  <span className="text-slate-500 group-open:rotate-180 transition-transform text-xl">&#9662;</span>
                </summary>
                <div className="px-5 pb-5 text-slate-400 leading-relaxed">
                  <p>
                    An AI image prompt is a text description that you provide to an artificial intelligence model (such as Midjourney, Stable Diffusion, or DALL-E) to instruct it on what kind of image to generate. Think of it as a detailed creative brief — the more specific and structured your description, the closer the output will match your vision.
                  </p>
                  <p className="mt-3">
                    Prompting matters because AI models are extremely literal interpreters. They don't "understand" your intent the way a human artist would. Without explicit guidance about style, lighting, composition, and mood, the model makes its own choices — which may not align with what you had in mind. A well-crafted prompt bridges the gap between your imagination and the AI's output, giving you creative control over every aspect of the generated image.
                  </p>
                </div>
              </details>

              <details className="group rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-white font-medium hover:bg-white/[0.02] transition-colors">
                  <span>Do I need to pay to use PromptBuilder AI?</span>
                  <span className="text-slate-500 group-open:rotate-180 transition-transform text-xl">&#9662;</span>
                </summary>
                <div className="px-5 pb-5 text-slate-400 leading-relaxed">
                  <p>
                    No. PromptBuilder AI is completely free to use with no sign-up, no account creation, and no usage limits. Every feature — including prompt history, pre-built templates, platform-specific formatting, weight controls, negative prompts, batch generation, and shareable URLs — is available at zero cost. We believe creative tools should be accessible to everyone.
                  </p>
                </div>
              </details>

              <details className="group rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-white font-medium hover:bg-white/[0.02] transition-colors">
                  <span>Which AI image generation platforms does PromptBuilder AI support?</span>
                  <span className="text-slate-500 group-open:rotate-180 transition-transform text-xl">&#9662;</span>
                </summary>
                <div className="px-5 pb-5 text-slate-400 leading-relaxed">
                  <p>
                    PromptBuilder AI currently supports three major platforms:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                    <li><strong className="text-white">Midjourney:</strong> Prompts are formatted with Midjourney-specific flags including <code className="bg-white/10 px-1 rounded text-sm">--ar</code> for aspect ratios, <code className="bg-white/10 px-1 rounded text-sm">--no</code> for negative prompts, <code className="bg-white/10 px-1 rounded text-sm">--v</code> for model version, <code className="bg-white/10 px-1 rounded text-sm">--stylize</code>, <code className="bg-white/10 px-1 rounded text-sm">--chaos</code>, and <code className="bg-white/10 px-1 rounded text-sm">--sref</code> for style references.</li>
                    <li><strong className="text-white">Stable Diffusion (SDXL / SD 1.5):</strong> Supports weighted token syntax like <code className="bg-white/10 px-1 rounded text-sm">(keyword:1.5)</code> and generates a separate negative prompt block.</li>
                    <li><strong className="text-white">DALL-E 3:</strong> Formats prompts in natural language with "Avoid:" sections for negative instructions, matching DALL-E's conversational input style.</li>
                  </ul>
                  <p className="mt-3">
                    When you select a platform, PromptBuilder AI automatically applies the correct syntax and formatting rules for that platform — no manual adjustment needed.
                  </p>
                </div>
              </details>

              <details className="group rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-white font-medium hover:bg-white/[0.02] transition-colors">
                  <span>How do negative prompts work?</span>
                  <span className="text-slate-500 group-open:rotate-180 transition-transform text-xl">&#9662;</span>
                </summary>
                <div className="px-5 pb-5 text-slate-400 leading-relaxed">
                  <p>
                    Negative prompts tell the AI model what to <em>exclude</em> from the generated image. They are just as important as positive prompts because they help eliminate common artifacts and unwanted elements that AI models tend to produce.
                  </p>
                  <p className="mt-3">
                    Common negative prompts include: blurry, low quality, low resolution, extra fingers, extra limbs, deformed hands, watermark, text, signature, cropped, out of frame, and worst quality. PromptBuilder AI provides a curated list of the most effective negative prompts, and each one is applied using the correct syntax for your selected platform.
                  </p>
                  <p className="mt-3">
                    For Midjourney, negatives are appended with the <code className="bg-white/10 px-1 rounded text-sm">--no</code> flag. For Stable Diffusion, they appear in a dedicated "Negative prompt:" section. For DALL-E, they are woven into the prompt as "Avoid:" instructions.
                  </p>
                </div>
              </details>

              <details className="group rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-white font-medium hover:bg-white/[0.02] transition-colors">
                  <span>Can I save my prompts and share them with others?</span>
                  <span className="text-slate-500 group-open:rotate-180 transition-transform text-xl">&#9662;</span>
                </summary>
                <div className="px-5 pb-5 text-slate-400 leading-relaxed">
                  <p>
                    Yes, PromptBuilder AI includes both saving and sharing features:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                    <li><strong className="text-white">Prompt History:</strong> Every time you copy a prompt, it is automatically saved to your browser's local storage. Your last 50 prompts are preserved and accessible from the Prompt History section at the bottom of the page. History persists across browser sessions — it's still there when you come back tomorrow.</li>
                    <li><strong className="text-white">Shareable URLs:</strong> Click the Share button to generate a unique URL that encodes all your current selections (categories, weights, aspect ratio, negatives, and platform). Anyone who opens this link will see your exact configuration pre-loaded, ready to use or modify.</li>
                  </ul>
                  <p className="mt-3">
                    All data is stored locally in your browser. Nothing is uploaded to any server, ensuring your creative process remains completely private.
                  </p>
                </div>
              </details>

              <details className="group rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-white font-medium hover:bg-white/[0.02] transition-colors">
                  <span>What makes a good AI image prompt?</span>
                  <span className="text-slate-500 group-open:rotate-180 transition-transform text-xl">&#9662;</span>
                </summary>
                <div className="px-5 pb-5 text-slate-400 leading-relaxed">
                  <p>
                    A good AI image prompt follows a structured, layered approach. Here's the formula that professional prompt engineers use:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 mt-3 ml-4">
                    <li><strong className="text-white">Clear Subject:</strong> Define exactly what the image should depict. Be specific — "a weathered lighthouse on a rocky cliff during a storm" beats "a lighthouse."</li>
                    <li><strong className="text-white">Artistic Style:</strong> Specify the visual treatment — photorealistic, oil painting, watercolor, anime, 3D render, etc.</li>
                    <li><strong className="text-white">Lighting:</strong> Describe the light source and quality — golden hour, studio softbox, dramatic side lighting, moonlight, etc.</li>
                    <li><strong className="text-white">Camera/Composition:</strong> For photos, name a lens and angle — "85mm portrait lens, shallow depth of field, shot from below."</li>
                    <li><strong className="text-white">Color & Mood:</strong> Set the emotional tone and color palette — "warm earth tones, melancholic atmosphere."</li>
                    <li><strong className="text-white">Quality Boosters:</strong> Add "highly detailed," "8K," "masterpiece," or "trending on ArtStation" to push quality.</li>
                    <li><strong className="text-white">Negative Prompts:</strong> Exclude unwanted elements — "no blurry, no watermark, no extra fingers."</li>
                  </ol>
                  <p className="mt-3">
                    PromptBuilder AI automates this entire process. Each step corresponds to a category in the builder, so you're always following best practices.
                  </p>
                </div>
              </details>

              <details className="group rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-white font-medium hover:bg-white/[0.02] transition-colors">
                  <span>Is my data private when using PromptBuilder AI?</span>
                  <span className="text-slate-500 group-open:rotate-180 transition-transform text-xl">&#9662;</span>
                </summary>
                <div className="px-5 pb-5 text-slate-400 leading-relaxed">
                  <p>
                    Yes. PromptBuilder AI is a client-side application that runs entirely in your web browser. All data — including your prompt selections, history, and preferences — is stored locally on your device using the browser's <code className="bg-white/10 px-1 rounded text-sm">localStorage</code> API. No data is transmitted to any external server or third-party service.
                  </p>
                  <p className="mt-3">
                    The only external requests made by the application are for displaying visitor count badges (via hits.sh) and loading advertisement scripts. These services do not have access to your prompts or usage data. For full details, please review our <Link to="/privacy" className="text-indigo-400 hover:text-indigo-300 underline">Privacy Policy</Link>.
                  </p>
                </div>
              </details>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">Start Building Your Prompt Now</h3>
            <p className="text-slate-400 mb-5">Put these tips into practice — open the builder and create your first masterpiece.</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold hover:from-indigo-400 hover:to-violet-400 transition-all shadow-lg"
            >
              Open Prompt Builder
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

export default HowToUsePage;
