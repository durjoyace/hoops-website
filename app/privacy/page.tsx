import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Hoops Creating Hope.',
}

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display text-5xl md:text-6xl gradient-text mb-8">
          Privacy Policy
        </h1>
        <p className="text-white/50 text-sm mb-12">
          Last updated: February 2026
        </p>

        <div className="prose-invert space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Information We Collect</h2>
            <p className="text-white/70 leading-relaxed">
              When you interact with Hoops Creating Hope through our website, we may collect
              information you voluntarily provide, including your name, email address, and any
              messages you send through our contact or volunteer forms. We also collect standard
              web analytics data such as page views, browser type, and referring pages to improve
              our website experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">How We Use Your Information</h2>
            <p className="text-white/70 leading-relaxed">
              We use the information you provide to respond to your inquiries, process volunteer
              applications, send you updates about our programs (if you opt in), and improve our
              website and services. We do not sell, rent, or trade your personal information to
              third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Donations</h2>
            <p className="text-white/70 leading-relaxed">
              Donations are processed through Givebutter, a third-party payment platform. We do
              not store credit card or payment information on our servers. Please refer to
              Givebutter&apos;s privacy policy for details on how your payment information is handled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Cookies &amp; Analytics</h2>
            <p className="text-white/70 leading-relaxed">
              Our website may use cookies and similar technologies to enhance your browsing
              experience and gather anonymous usage statistics. You can control cookie preferences
              through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Third-Party Services</h2>
            <p className="text-white/70 leading-relaxed">
              We may use third-party services such as Formspree for form submissions, Vimeo for
              video hosting, and social media platforms. These services have their own privacy
              policies, and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Data Security</h2>
            <p className="text-white/70 leading-relaxed">
              We take reasonable measures to protect your personal information from unauthorized
              access, use, or disclosure. However, no method of transmission over the internet is
              100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Children&apos;s Privacy</h2>
            <p className="text-white/70 leading-relaxed">
              Our website is not directed at children under 13. We do not knowingly collect
              personal information from children under 13 without parental consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Your Rights</h2>
            <p className="text-white/70 leading-relaxed">
              You may request access to, correction of, or deletion of your personal information
              at any time by contacting us at info@hoopscreatinghope.org.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Changes to This Policy</h2>
            <p className="text-white/70 leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be posted on
              this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Contact Us</h2>
            <p className="text-white/70 leading-relaxed">
              If you have questions about this privacy policy, please contact us at{' '}
              <a
                href="mailto:info@hoopscreatinghope.org"
                className="text-orange-primary hover:underline"
              >
                info@hoopscreatinghope.org
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
