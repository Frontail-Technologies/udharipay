'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How quickly can I get started with UdhariPay?',
      answer: 'You can sign up and get started in just 5 minutes. Our onboarding process is designed to be simple and quick. Once verified, you can immediately start adding customers and setting up collections.'
    },
    {
      question: 'What payment methods do you support?',
      answer: 'We support UPI, Credit/Debit Cards, Net Banking, eNACH for recurring payments, and more. We continuously add new payment methods to serve our merchants better.'
    },
    {
      question: 'How secure is my data with UdhariPay?',
      answer: 'Security is our top priority. We use industry-grade encryption, are PCI DSS compliant, tokenize sensitive data, and conduct regular security audits to ensure your data is always protected.'
    },
    {
      question: 'What are your settlement times?',
      answer: 'Our standard settlement time is T+1 Working Day. Funds from successful payments are settled to your bank account on the next working day. Transactions processed on weekends or bank holidays will be settled on the following working day.'
    },
    {
      question: 'Do you charge hidden fees?',
      answer: 'No, we believe in complete transparency. All our pricing is clearly listed upfront with no hidden charges. You only pay for what you use.'
    },
    {
      question: 'Can I integrate UdhariPay with my existing system?',
      answer: 'Yes! We provide comprehensive APIs and webhooks for seamless integration with your existing systems. Our technical team can also help you with custom integrations.'
    },
  ]

  return (
    <section id="faq" className="px-6 py-20 md:py-28">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">FAQ</span>
          <h2 className="text-4xl  font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about UdhariPay
          </p>
        </div>

        <div className="space-y-3">
          {faqs.slice(0, 6).map((faq, idx) => (
            <div key={idx} className="rounded-lg border border-border bg-card overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-primary transition-transform ${openIdx === idx ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
              {openIdx === idx && (
                <div className="px-6 py-4 border-t border-border bg-secondary text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
