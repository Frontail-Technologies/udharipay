import { LegalLayout } from '@/components/legal-layout'

export default function SettlementPolicy() {
  return (
    <LegalLayout title="Settlement Policy" lastUpdated="October 2023">
      <h2>1. Settlement Time</h2>
      <p>
        <strong>Standard Settlement: T+1 Working Day</strong><br />
        Funds from successful customer payments will be settled to the merchant's registered bank account on the next working day.
      </p>

      <h2>2. Weekends & Bank Holidays</h2>
      <p>
        Transactions processed on Sundays or bank holidays will be settled on the next working day.
      </p>

      <h2>3. Settlement Schedule</h2>
      <p>
        Settlements are processed once daily during the designated settlement cycle.
      </p>

      <h2>4. Settlement Delays</h2>
      <p>
        In exceptional cases, settlements may be delayed due to bank holidays, technical issues, regulatory requirements, fraud review, KYC verification, or other circumstances beyond UdhariPay's control.
      </p>

      <div className="bg-secondary/50 p-4 rounded-lg mt-8">
        <p className="text-sm m-0">
          <strong>Note:</strong> Settlement timelines may vary depending on the payment method, banking partner, and applicable regulatory requirements. UdhariPay will make reasonable efforts to ensure timely settlements.
        </p>
      </div>
    </LegalLayout>
  )
}
