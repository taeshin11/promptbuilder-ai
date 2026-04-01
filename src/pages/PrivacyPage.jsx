import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

function PrivacyPage() {
  const { localePath } = useLanguage();
  return (
    <>
      <Helmet>
        <title>Privacy Policy - PromptBuilder AI</title>
        <meta
          name="description"
          content="Privacy Policy for PromptBuilder AI. Learn how we handle your data, cookies, and third-party services like Google AdSense and Adsterra on our free AI prompt generator."
        />
        <meta
          name="keywords"
          content="PromptBuilder AI privacy policy, data privacy, cookie policy, AdSense privacy, AI tool privacy"
        />
        <link rel="canonical" href="https://promptbuilder-ai.vercel.app/privacy" />
        <meta property="og:title" content="Privacy Policy - PromptBuilder AI" />
        <meta property="og:description" content="Privacy Policy for PromptBuilder AI. Learn how we handle your data on our free AI prompt generator." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://promptbuilder-ai.vercel.app/privacy" />
        <meta property="og:image" content="https://promptbuilder-ai.vercel.app/og-image.svg" />
        <meta property="og:site_name" content="PromptBuilder AI" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <Link to={localePath("/")} className="hover:text-indigo-400 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">Privacy Policy</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">Last updated: March 30, 2025</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              Welcome to PromptBuilder AI ("we," "our," or "us"). We are committed to protecting your privacy and being transparent about how we handle information when you use our website at <strong className="text-white">promptbuilder-ai.vercel.app</strong> (the "Service").
            </p>
            <p className="mt-3">
              This Privacy Policy explains what information is collected, how it is used, and your rights regarding your data. By using our Service, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <h3 className="text-lg font-medium text-slate-200 mt-4 mb-2">2.1 Information You Provide</h3>
            <p>
              PromptBuilder AI is designed to work without requiring any personal information from you. We do not require account creation, login, email addresses, or any personally identifiable information (PII) to use the Service.
            </p>

            <h3 className="text-lg font-medium text-slate-200 mt-4 mb-2">2.2 Automatically Collected Information</h3>
            <p>
              When you visit our website, certain information may be collected automatically through cookies and similar technologies used by our third-party advertising and analytics partners:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
              <li><strong className="text-white">Device information:</strong> Browser type, operating system, screen resolution, and device type (mobile, tablet, desktop).</li>
              <li><strong className="text-white">Usage data:</strong> Pages visited, time spent on the site, referral source, and general interaction patterns.</li>
              <li><strong className="text-white">IP address:</strong> Your IP address may be collected by third-party services for geolocation (country/region level) and fraud prevention purposes.</li>
              <li><strong className="text-white">Cookies and tracking identifiers:</strong> Used by advertising networks to serve relevant ads and measure ad performance.</li>
            </ul>

            <h3 className="text-lg font-medium text-slate-200 mt-4 mb-2">2.3 Local Storage Data</h3>
            <p>
              PromptBuilder AI stores your prompt history and user preferences (such as selected platform and recent prompts) in your browser's <code className="bg-white/10 px-1 rounded text-sm">localStorage</code>. This data never leaves your device — it is not transmitted to our servers or any third party. You can clear this data at any time through your browser's settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Information</h2>
            <p>
              We use the limited information described above for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
              <li>To operate and maintain the Service.</li>
              <li>To display advertisements through our advertising partners (Google AdSense, Adsterra) that help fund the free operation of the Service.</li>
              <li>To understand general usage patterns and improve the user experience.</li>
              <li>To detect and prevent abuse, fraud, or technical issues.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Cookies and Tracking Technologies</h2>
            <p>
              Our Service uses cookies and similar tracking technologies. Here is a breakdown of the types of cookies used:
            </p>

            <h3 className="text-lg font-medium text-slate-200 mt-4 mb-2">4.1 Essential Cookies</h3>
            <p>
              These are strictly necessary for the website to function. They enable core features like page navigation and do not collect personal information.
            </p>

            <h3 className="text-lg font-medium text-slate-200 mt-4 mb-2">4.2 Advertising Cookies</h3>
            <p>
              We use third-party advertising services to display ads on the Service:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
              <li>
                <strong className="text-white">Google AdSense:</strong> Google uses cookies to serve ads based on your prior visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">Google Ads Settings</a>.
              </li>
              <li>
                <strong className="text-white">Adsterra:</strong> Adsterra may use cookies and web beacons to collect non-personally identifiable information in order to serve relevant advertisements. You can learn more about Adsterra's privacy practices on their <a href="https://adsterra.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">Privacy Policy</a> page.
              </li>
            </ul>

            <h3 className="text-lg font-medium text-slate-200 mt-4 mb-2">4.3 Analytics Cookies</h3>
            <p>
              We may use privacy-friendly analytics tools to understand how visitors interact with the Service. These tools collect aggregate, anonymized data and do not track individual users across websites.
            </p>

            <h3 className="text-lg font-medium text-slate-200 mt-4 mb-2">4.4 Managing Cookies</h3>
            <p>
              You can control and delete cookies through your browser settings. Most browsers allow you to block or delete cookies, though doing so may affect the functionality of some features. For more information on managing cookies, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">aboutcookies.org</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Third-Party Services</h2>
            <p>
              Our Service integrates the following third-party services, each of which has its own privacy policy:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
              <li><strong className="text-white">Google AdSense</strong> — Advertising platform. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">Google Privacy Policy</a>.</li>
              <li><strong className="text-white">Adsterra</strong> — Advertising network. <a href="https://adsterra.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">Adsterra Privacy Policy</a>.</li>
              <li><strong className="text-white">Vercel</strong> — Website hosting. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">Vercel Privacy Policy</a>.</li>
              <li><strong className="text-white">hits.sh</strong> — Anonymous visitor counter. Collects only page view counts; no personal data.</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your personal information with any third party for their own marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention</h2>
            <p>
              Since PromptBuilder AI does not collect or store personal data on our servers, there is no user data to retain or delete on our end. Browser-based local storage data remains on your device until you clear it manually or through your browser settings.
            </p>
            <p className="mt-3">
              Third-party services (advertising networks, analytics providers) may retain data according to their own retention policies, as described in their respective privacy policies linked above.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Children's Privacy</h2>
            <p>
              Our Service is not directed at children under the age of 13 (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will take steps to remove such information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Your Rights</h2>
            <p>
              Depending on your location, you may have the following rights regarding your data:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
              <li><strong className="text-white">Right to Access:</strong> Request information about what data, if any, we hold about you.</li>
              <li><strong className="text-white">Right to Deletion:</strong> Request deletion of any personal data we may hold.</li>
              <li><strong className="text-white">Right to Opt-Out:</strong> Opt out of personalized advertising through the mechanisms described in Section 4.</li>
              <li><strong className="text-white">Right to Restrict Processing:</strong> Request that we limit how we use your data.</li>
            </ul>
            <p className="mt-3">
              Since we do not collect personal data directly, most of these rights are exercised through the third-party services listed in Section 5. To manage cookies and advertising preferences, use the links provided above or your browser's built-in controls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. International Users</h2>
            <p>
              PromptBuilder AI is accessible worldwide. If you are accessing the Service from the European Union, European Economic Area, United Kingdom, or any jurisdiction with data protection laws, please be aware that data may be processed in countries that may not have the same data protection standards as your jurisdiction. By using the Service, you consent to the transfer of information as described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, third-party services, or applicable laws. When we make changes, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to us through our <a href="https://github.com/taeshin11/promptbuilder-ai/issues" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">GitHub Issues page</a>.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}

export default PrivacyPage;
