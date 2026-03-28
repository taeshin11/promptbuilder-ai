import { useState } from "react";

const faqs = [
  {
    q: "What is PromptBuilder AI?",
    a: "PromptBuilder AI is a free online tool that helps you create detailed AI image generation prompts through an intuitive click-based interface. Instead of typing complex prompts from scratch, you select options across categories like Subject, Style, Lighting, and Camera to build professional-quality prompts for tools like Midjourney, Stable Diffusion, and DALL-E.",
  },
  {
    q: "Is PromptBuilder AI free to use?",
    a: "Yes, PromptBuilder AI is 100% free with no login required, no usage limits, and no hidden costs. All features including templates, batch generation, weight controls, and shareable URLs are completely free.",
  },
  {
    q: "Which AI image generators does this work with?",
    a: "PromptBuilder AI supports Midjourney, Stable Diffusion (including SDXL and SD 1.5), DALL-E 3, Leonardo AI, and most other text-to-image AI tools. Use the platform selector to format your prompt specifically for each tool.",
  },
  {
    q: "How do prompt weights work?",
    a: "Prompt weights let you control how much emphasis the AI puts on each part of your prompt. 'Low' reduces emphasis, 'Normal' is default, 'High' increases emphasis, and 'Max' gives maximum priority. For Stable Diffusion, weights are applied as numerical values like (keyword:1.3). For Midjourney, high-weight items are placed first in the prompt for priority.",
  },
  {
    q: "Can I save and share my prompts?",
    a: "Yes! Every prompt you copy is automatically saved to your prompt history (stored locally in your browser). You can also click the share button (🔗) to generate a shareable URL that anyone can open to see your exact prompt configuration.",
  },
  {
    q: "What are negative prompts and why should I use them?",
    a: "Negative prompts tell the AI what to avoid in the generated image. Common negative prompts like 'blurry', 'low quality', and 'distorted faces' help produce cleaner, higher-quality results. They're especially effective with Stable Diffusion and Midjourney.",
  },
  {
    q: "How do I write better AI image prompts?",
    a: "The key is layering details: start with a specific subject, add an art style and medium, set the lighting and mood, then specify camera angle and quality boosters. Use our templates as starting points and check the Prompt Writing Tips section for more detailed guidance.",
  },
  {
    q: "What's the difference between Midjourney, Stable Diffusion, and DALL-E prompt formats?",
    a: "Midjourney uses flags like --ar for aspect ratio and --no for negative prompts. Stable Diffusion uses weighted tokens in parentheses like (keyword:1.3) and separate negative prompt fields. DALL-E prefers natural language descriptions without special syntax. PromptBuilder AI automatically formats your prompt for each platform.",
  },
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm">
      <div className="px-4 sm:px-6 py-4">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl" role="img" aria-label="FAQ">❓</span>
          <div>
            <h2 className="text-lg font-semibold text-white">Frequently Asked Questions</h2>
            <p className="text-sm text-slate-400 hidden sm:block">Everything you need to know about AI prompt building</p>
          </div>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl bg-black/20 border border-white/5 overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                aria-expanded={openIdx === i}
              >
                <span className="text-sm font-medium text-slate-200 pr-4">{faq.q}</span>
                <svg
                  className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ${openIdx === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIdx === i && (
                <div className="px-4 pb-3 animate-slide-down">
                  <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </section>
  );
}

export default FAQ;
