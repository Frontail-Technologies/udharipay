import Link from 'next/link'
import { Smartphone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const pageLinks = [
    { label: 'How It Works', href: '#platform' },
    { label: 'For Businesses', href: '#businesses' },
    { label: 'FAQs', href: '#faq' },
  ]

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Settlement Policy', href: '/settlement' },
    { label: 'Refund & Cancellation', href: '/refund' },
  ]

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* ── Brand ── */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center font-bold text-xl tracking-tight">
              <span className="text-foreground">UDHARI</span>
              <span className="text-primary">PAY</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[14rem]">
              The complete SaaS platform for automated EMI collections and merchant management.
            </p>
          </div>

          {/* ── Quick Links ── */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Product</h4>
            <ul className="space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Legal ── */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Mobile App Coming Soon ── */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Mobile App</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Manage collections on the go. Our mobile app is coming soon.
            </p>

            <div className="flex flex-col gap-2.5">

              {/* Play Store */}
              <div className="flex items-center gap-3 rounded-xl border border-border bg-secondary px-4 py-3 opacity-60 cursor-not-allowed select-none">
                <Smartphone className="w-5 h-5 text-foreground flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-muted-foreground leading-none mb-0.5">Coming Soon</p>
                  <p className="text-sm font-semibold text-foreground leading-none">Google Play</p>
                </div>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              In Development
            </span>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {currentYear} UdhariPay. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with ♥ for Indian businesses
          </p>
        </div>
      </div>
    </footer>
  )
}
