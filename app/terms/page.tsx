import { LegalLayout } from '@/components/legal-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - UdhariPay',
  description: 'Terms of Service for UdhariPay payment platform',
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="July 2026">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing and using the UdhariPay platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
          <p className="text-sm text-yellow-600 bg-yellow-50/10 border border-yellow-500/20 rounded p-3 mt-4">
            <strong>Draft Notice:</strong> These are draft terms. Please consult with a legal professional to ensure compliance with applicable regulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on UdhariPay&apos;s platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li>Modifying or copying the materials</li>
            <li>Using the materials for any commercial purpose or for any public display</li>
            <li>Attempting to decompile or reverse engineer any software contained on the platform</li>
            <li>Transferring the materials to another person or &quot;mirroring&quot; the materials on any other server</li>
            <li>Removing any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
          <p>
            The materials on UdhariPay&apos;s platform are provided on an &apos;as is&apos; basis. UdhariPay makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
          <p>
            In no event shall UdhariPay or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on UdhariPay&apos;s platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
          <p>
            The materials appearing on UdhariPay&apos;s platform could include technical, typographical, or photographic errors. UdhariPay does not warrant that any of the materials on its platform are accurate, complete, or current.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">6. Links</h2>
          <p>
            UdhariPay has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by UdhariPay of the site. Use of any such linked website is at the user&apos;s own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">7. Modifications</h2>
          <p>
            UdhariPay may revise these terms of service for its platform at any time without notice. By using this platform, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>
      </div>
    </LegalLayout>
  )
}
