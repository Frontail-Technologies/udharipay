import { LegalLayout } from '@/components/legal-layout'

export default function RefundPolicy() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="October 2023">
      <h2>1. Subscription Fees</h2>
      <p>
        All subscription fees paid for UdhariPay plans are non-refundable once the subscription has been activated.
      </p>

      <h2>2. Transaction Fees</h2>
      <p>
        Transaction processing fees, payment gateway charges, and third-party service fees are non-refundable, even if a transaction is cancelled or fails due to customer or banking issues.
      </p>

      <h2>3. Cancellation</h2>
      <p>
        You may cancel your subscription at any time. Your subscription will remain active until the end of the current billing cycle. No partial or prorated refunds will be provided.
      </p>

      <h2>4. Duplicate Payments</h2>
      <p>
        If you are charged twice for the same subscription due to a technical error, UdhariPay will verify the transaction and refund the duplicate amount within 7–10 business days.
      </p>

      <h2>5. Service Unavailability</h2>
      <p>
        If UdhariPay is unable to activate your subscription due to a technical issue caused solely by UdhariPay and the issue cannot be resolved within a reasonable time, you may be eligible for a refund after verification.
      </p>

      <h2>6. Chargebacks</h2>
      <p>
        Customers are encouraged to contact UdhariPay Support before initiating a chargeback. Fraudulent or unauthorized chargeback claims may result in suspension or termination of the account.
      </p>

      <h2>7. Refund Processing</h2>
      <p>
        Approved refunds will be credited to the original payment method within 7–10 business days, depending on the payment provider and banking partner.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        For refund-related questions, please contact:
        <br /><br />
        <strong>UdhariPay</strong><br />
        Email: udharipay@gmail.com
      </p>
    </LegalLayout>
  )
}
