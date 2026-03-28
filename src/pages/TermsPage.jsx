import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - PromptBuilder AI</title>
        <meta
          name="description"
          content="Terms of Service for PromptBuilder AI. Read the terms and conditions for using our free AI image prompt generator tool."
        />
        <meta
          name="keywords"
          content="PromptBuilder AI terms of service, terms and conditions, AI tool terms, free tool terms of use"
        />
        <link rel="canonical" href="https://promptbuilder-ai.vercel.app/terms" />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">Terms of Service</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500">Last updated: March 28, 2026</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using PromptBuilder AI (the "Service"), available at <strong className="text-white">promptbuilder-ai.vercel.app</strong>, you agree to be bound by these Terms of Service ("Terms"). If you do not agree with any part of these Terms, you must not use the Service.
            </p>
            <p className="mt-3">
              These Terms apply to all visitors, users, and others who access or use the Service. We reserve the right to update or modify these Terms at any time. Continued use of the Service after any changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
            <p>
              PromptBuilder AI is a free, browser-based productivity tool that assists users in generating text prompts for AI image generation platforms such as Midjourney, Stable Diffusion, and DALL-E. The Service provides a visual interface for selecting prompt parameters across multiple categories and outputs a formatted text string that users can copy and use in their preferred AI platform.
            </p>
            <p className="mt-3">
              The Service is provided free of charge and is supported by third-party advertising. No account registration or personal information is required to use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Eligibility</h2>
            <p>
              You must be at least 13 years of age (or the minimum age of digital consent in your jurisdiction) to use this Service. By using the Service, you represent and warrant that you meet this age requirement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Permitted Use</h2>
            <p>
              You are granted a limited, non-exclusive, non-transferable, and revocable license to use the Service for its intended purpose — generating text prompts for AI image generation. You agree to use the Service only for lawful purposes and in accordance with these Terms.
            </p>
            <p className="mt-3">
              You may:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
              <li>Use the generated prompts for personal, educational, or commercial projects.</li>
              <li>Share generated prompts and shareable URLs with others.</li>
              <li>Use the Service on any device with a modern web browser.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Prohibited Conduct</h2>
            <p>
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
              <li>Use the Service to generate prompts intended to create illegal, harmful, abusive, defamatory, obscene, or otherwise objectionable content, including but not limited to content that exploits minors, promotes violence, or infringes on the rights of others.</li>
              <li>Attempt to reverse-engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Service for malicious purposes.</li>
              <li>Use automated tools, bots, or scripts to scrape, crawl, or otherwise extract data from the Service at a volume or frequency that impairs its performance for other users.</li>
              <li>Interfere with or disrupt the integrity, security, or performance of the Service or its associated infrastructure.</li>
              <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices displayed on the Service.</li>
              <li>Use the Service in any manner that could damage, disable, overburden, or impair the Service or interfere with any other party's use of the Service.</li>
              <li>Circumvent, disable, or otherwise interfere with advertising displayed on the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Intellectual Property</h2>
            <h3 className="text-lg font-medium text-slate-200 mt-4 mb-2">6.1 Service Content</h3>
            <p>
              The Service, including its design, layout, graphics, user interface, and underlying code, is the intellectual property of PromptBuilder AI and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of the Service or its content without prior written permission.
            </p>

            <h3 className="text-lg font-medium text-slate-200 mt-4 mb-2">6.2 User-Generated Prompts</h3>
            <p>
              The text prompts you generate using the Service are your own. We do not claim ownership over the prompts you create. You retain full rights to use, modify, distribute, or commercialize any prompts generated through the Service.
            </p>
            <p className="mt-3">
              Please note that the images generated by third-party AI platforms using your prompts are subject to the terms of service and licensing agreements of those respective platforms (Midjourney, Stability AI, OpenAI, etc.). PromptBuilder AI is not responsible for the copyright status of AI-generated images.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Advertising</h2>
            <p>
              The Service is funded by third-party advertising provided by Google AdSense, Adsterra, and potentially other advertising networks. By using the Service, you acknowledge and agree that:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
              <li>Advertisements will be displayed on the Service as part of the user experience.</li>
              <li>We are not responsible for the content, accuracy, or practices of third-party advertisers.</li>
              <li>Clicking on advertisements may redirect you to third-party websites that are governed by their own terms and privacy policies.</li>
              <li>Using ad-blocking software may affect the appearance and functionality of certain elements of the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Third-Party Platforms</h2>
            <p>
              PromptBuilder AI generates prompts for use with third-party AI image generation platforms. We are not affiliated with, endorsed by, or sponsored by Midjourney, Stability AI (Stable Diffusion), OpenAI (DALL-E), or any other AI platform.
            </p>
            <p className="mt-3">
              The use of generated prompts on these platforms is subject to their respective terms of service. We do not guarantee that any prompt generated by the Service will produce a specific result on any platform, as AI image generation is inherently variable and dependent on the platform's model, version, and settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
            </p>
            <p className="mt-3">
              We do not warrant that: (a) the Service will function uninterrupted, be secure, or be available at any particular time or location; (b) any errors or defects will be corrected; (c) the Service is free of viruses or other harmful components; or (d) the results of using the Service will meet your expectations or requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL PROMPTBUILDER AI, ITS CREATORS, CONTRIBUTORS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM: (A) YOUR ACCESS TO OR USE OF (OR INABILITY TO ACCESS OR USE) THE SERVICE; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (C) ANY CONTENT OBTAINED FROM THE SERVICE; OR (D) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless PromptBuilder AI and its creators from and against any claims, damages, obligations, losses, liabilities, costs, or expenses (including attorney's fees) arising from: (a) your use of the Service; (b) your violation of these Terms; (c) your violation of any third-party right, including any intellectual property or privacy right; or (d) any claim that content you generated using the Service caused damage to a third party.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Modifications to the Service</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the Service operator resides, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved through good-faith negotiation, and if necessary, through binding arbitration or in the courts of competent jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">14. Severability</h2>
            <p>
              If any provision of these Terms is held to be unenforceable or invalid, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">15. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us through our <a href="https://github.com/taeshin11/promptbuilder-ai/issues" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">GitHub Issues page</a>.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}

export default TermsPage;
