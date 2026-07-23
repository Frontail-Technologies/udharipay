import { LegalLayout } from '@/components/legal-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - UdhariPay',
  description: 'Privacy policy for UdhariPay payment platform',
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="July 2026">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
          <p>
            UdhariPay (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
          <p className="text-sm text-yellow-600 bg-yellow-50/10 border border-yellow-500/20 rounded p-3 mt-4">
            <strong>Draft Notice:</strong> This is a draft privacy policy. Please consult with a legal professional to ensure compliance with applicable regulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
          <p>We collect information you voluntarily provide to us, such as:</p>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li>Name, email address, and contact information</li>
            <li>Business details and company information</li>
            <li>Payment and banking information</li>
            <li>Customer data you upload to our platform</li>
            <li>Communication records with our support team</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
          <p>We use the collected information for:</p>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li>Providing and improving our services</li>
            <li>Processing transactions</li>
            <li>Sending transactional emails</li>
            <li>Compliance with legal obligations</li>
            <li>Fraud prevention and security</li>
            <li>Customer support and research</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Retention</h2>
          <p>
            We retain your personal data for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy, or as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at: udharipay@gmail.com
          </p>
        </section>
      </div>
    </LegalLayout>
  )
}
