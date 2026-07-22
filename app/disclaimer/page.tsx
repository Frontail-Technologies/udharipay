import { LegalLayout } from '@/components/legal-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer - UdhariPay',
  description: 'Disclaimer for UdhariPay payment platform',
}

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer" lastUpdated="July 2026">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">1. General Disclaimer</h2>
          <p>
            The information provided on this website is for informational purposes only. While we strive to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website.
          </p>
          <p className="text-sm text-yellow-600 bg-yellow-50/10 border border-yellow-500/20 rounded p-3 mt-4">
            <strong>Draft Notice:</strong> This is a draft disclaimer. Please consult with a legal professional to ensure compliance with applicable regulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Financial Information Disclaimer</h2>
          <p>
            UdhariPay is a payment processing platform. The information on our website is not intended as financial, legal, or investment advice. Before making any financial decisions, please consult with qualified professionals. Past performance is not indicative of future results.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">3. No Professional Advice</h2>
          <p>
            Nothing on this website should be construed as providing financial, legal, accounting, tax, or other professional advice. The use of our services and reliance on any information provided is at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitation of Liability</h2>
          <p>
            In no event shall UdhariPay, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill arising out of or in connection with your use of or inability to use the services provided.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites. Your use of third-party websites is at your own risk and subject to their terms and conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">6. Service Availability</h2>
          <p>
            We make no guarantee regarding the availability or continuity of our services. Our platform may be subject to maintenance, updates, or temporary outages. We are not liable for any damages resulting from service interruptions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">7. User Responsibility</h2>
          <p>
            Users are responsible for maintaining the confidentiality of their login credentials and for all activities that occur under their account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">8. Regulatory Compliance</h2>
          <p>
            This disclaimer does not constitute any representation that UdhariPay is a regulated financial institution or holds any specific licenses or certifications. Users are responsible for ensuring their use of our platform complies with all applicable laws and regulations in their jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to Disclaimer</h2>
          <p>
            We reserve the right to modify this disclaimer at any time without notice. Continued use of the website following any such modification constitutes your acceptance of the updated disclaimer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact</h2>
          <p>
            For questions regarding this disclaimer, please contact us at: support@udhariplay.com
          </p>
        </section>
      </div>
    </LegalLayout>
  )
}
