import { LegalLayout } from '@/components/legal-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - UdhariPay',
  description: 'Cookie policy for UdhariPay payment platform',
}

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="July 2026">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used in order to make websites work more efficiently as well as to provide information to the owners of the site.
          </p>
          <p className="text-sm text-yellow-600 bg-yellow-50/10 border border-yellow-500/20 rounded p-3 mt-4">
            <strong>Draft Notice:</strong> This is a draft cookie policy. Please consult with a legal professional to ensure compliance with applicable regulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly</li>
            <li><strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website</li>
            <li><strong>Functional Cookies:</strong> These cookies enable personalized features and content</li>
            <li><strong>Targeting Cookies:</strong> These cookies are used to deliver targeted advertisements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Types of Cookies We Use</h2>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li><strong>Session Cookies:</strong> Expire when you close your browser</li>
            <li><strong>Persistent Cookies:</strong> Remain on your device for a specified period</li>
            <li><strong>First-Party Cookies:</strong> Set by UdhariPay</li>
            <li><strong>Third-Party Cookies:</strong> Set by service providers on our behalf</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Your Cookie Choices</h2>
          <p>
            Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or alert you when cookies are being sent. However, blocking cookies may affect your ability to access certain features of our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Links</h2>
          <p>
            Our platform may contain links to third-party websites. This Cookie Policy applies only to UdhariPay and does not apply to third-party websites. We recommend reviewing the cookie policies of any third-party sites before providing any information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">6. Updating This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will be effective immediately upon posting to our website. Your continued use of our platform following the posting of updated terms means that you accept and agree to the changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
          <p>
            If you have questions about this Cookie Policy, please contact us at: udharipay@gmail.com
          </p>
        </section>
      </div>
    </LegalLayout>
  )
}
