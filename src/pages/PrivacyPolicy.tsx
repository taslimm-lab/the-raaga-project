import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link to="/" className="text-sm text-primary hover:underline flex items-center gap-1 mb-6">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Back to Home
        </Link>
        <h1 className="font-serif text-4xl font-semibold text-on-background mb-2">Privacy Policy</h1>
        <p className="text-sm text-on-surface-variant">Last updated: September 2026</p>
      </div>

      <div className="space-y-8 text-on-surface-variant leading-relaxed">
        <section>
          <h2 className="font-serif text-xl font-semibold text-on-background mb-3">Overview</h2>
          <p>
            The Raag Project ("we", "our", "us") is committed to protecting your privacy. This policy explains
            what information is collected when you visit this site and how it is used.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-on-background mb-3">Information We Collect</h2>
          <p className="mb-3">We do not directly collect or store any personal information. However, third-party
          services used on this site may collect data as described below.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-on-surface">Usage data</strong> — pages visited, time on site, browser
              type, and device type may be collected by analytics services.
            </li>
            <li>
              <strong className="text-on-surface">Cookies</strong> — advertising and analytics partners may
              place cookies on your device to personalise ads and measure traffic.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-on-background mb-3">Google AdSense</h2>
          <p className="mb-3">
            This site uses Google AdSense to display advertisements. Google may use cookies and web beacons
            to serve ads based on your prior visits to this and other websites.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Google's use of advertising cookies enables it and its partners to serve ads based on your visits to this site and/or other sites on the Internet.</li>
            <li>You may opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ads Settings</a>.</li>
            <li>You can also opt out via the <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Network Advertising Initiative opt-out page</a>.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-on-background mb-3">Affiliate Links</h2>
          <p>
            This site contains affiliate links to Amazon Music and Apple Music. If you click a link and
            make a purchase or sign up for a subscription, we may earn a small commission at no extra
            cost to you. These links are clearly associated with music playback buttons on song cards.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-on-background mb-3">Third-Party Links</h2>
          <p>
            This site links to YouTube and other external platforms. We are not responsible for the
            privacy practices of those sites. We encourage you to read their privacy policies.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-on-background mb-3">Cookies</h2>
          <p className="mb-3">
            Cookies are small text files stored on your device. This site uses cookies only through
            third-party services (Google AdSense, analytics). We do not set first-party cookies.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being
            sent. However, some site features may not function properly without cookies.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-on-background mb-3">Children's Privacy</h2>
          <p>
            This site does not knowingly collect personal information from children under 13. If you
            believe a child has provided personal information, please contact us so we can remove it.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-on-background mb-3">Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Changes will be reflected by updating
            the "Last updated" date at the top of this page.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-on-background mb-3">Contact</h2>
          <p>
            If you have any questions about this privacy policy, you can reach us via the{' '}
            <Link to="/contribute" className="text-primary hover:underline">Contribute page</Link>.
          </p>
        </section>
      </div>
    </div>
  )
}
