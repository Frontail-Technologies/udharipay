'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Wallet, ShieldCheck, CalendarClock, CircleCheckBig,
  UserCheck, AlertTriangle, TrendingUp, Clock, ShieldAlert,
} from 'lucide-react'

const cards = [
  {
    icon: Wallet,
    badge: 'Today',
    badgeVariant: 'primary',
    title: '₹84,034',
    subtitle: 'Collected',
    footer: { icon: TrendingUp, text: '12% vs yesterday' },
    footerVariant: 'primary',
    highlight: 'title',
  },
  {
    icon: ShieldCheck,
    badge: 'Active',
    badgeVariant: 'primary',
    title: 'Mandate',
    subtitle: 'Active',
    footer: { icon: CircleCheckBig, text: 'UPI Autopay Enabled' },
    footerVariant: 'primary',
    highlight: 'subtitle',
  },
  {
    icon: CalendarClock,
    badge: 'Upcoming',
    badgeVariant: 'warning',
    title: 'Next EMI',
    subtitle: '₹15,000',
    footer: { icon: CalendarClock, text: 'Due on 25 May 2024' },
    footerVariant: 'warning',
    highlight: 'subtitle',
  },
  {
    icon: CircleCheckBig,
    badge: 'Success',
    badgeVariant: 'success',
    title: 'Payment',
    subtitle: 'Successful',
    footer: { icon: Clock, text: '25 May 2024, 10:45 AM' },
    footerVariant: 'success',
    highlight: 'subtitle',
  },
  {
    icon: UserCheck,
    badge: 'Verified',
    badgeVariant: 'primary',
    title: 'Customer',
    subtitle: 'Verified',
    footer: { icon: ShieldCheck, text: 'Aadhaar OTP Verified' },
    footerVariant: 'primary',
    highlight: 'subtitle',
  },
  {
    icon: AlertTriangle,
    badge: 'Overdue',
    badgeVariant: 'danger',
    title: 'Overdue',
    subtitle: 'Alert',
    footer: { icon: ShieldAlert, text: '3 days overdue' },
    footerVariant: 'danger',
    highlight: 'subtitle',
  },
]

const badgeStyles: Record<string, string> = {
  primary: 'bg-primary/10 text-primary',
  success:  'bg-success/10 text-success',
  warning:  'bg-warning/10 text-warning',
  danger:   'bg-destructive/10 text-destructive',
}
const footerStyles: Record<string, string> = {
  primary: 'bg-primary/8 text-primary',
  success:  'bg-success/8 text-success',
  warning:  'bg-warning/8 text-warning',
  danger:   'bg-destructive/8 text-destructive',
}
const highlightStyles: Record<string, string> = {
  primary: 'text-primary',
  success:  'text-success',
  warning:  'text-warning',
  danger:   'text-destructive',
}

function StatCard({ card, index }: { card: typeof cards[number]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const FooterIcon = card.footer.icon
  const CardIcon = card.icon
  const subtitleColor = highlightStyles[card.badgeVariant] ?? 'text-primary'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      className="bg-card rounded-xl border border-border p-4 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <CardIcon className="w-4 h-4 text-primary" strokeWidth={1.75} />
        </div>
        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${badgeStyles[card.badgeVariant]}`}>
          {card.badge}
        </span>
      </div>

      {/* Metric */}
      <div className="space-y-0.5">
        {card.highlight === 'title' ? (
          <>
            <p className="text-2xl font-bold text-foreground tracking-tight leading-none">{card.title}</p>
            <p className="text-xs text-muted-foreground mt-1">{card.subtitle}</p>
          </>
        ) : (
          <>
            <p className="text-xs text-muted-foreground">{card.title}</p>
            <p className={`text-2xl font-bold tracking-tight leading-none ${subtitleColor}`}>{card.subtitle}</p>
          </>
        )}
      </div>

      {/* Footer pill */}
      <div className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[11px] font-medium ${footerStyles[card.footerVariant]}`}>
        <FooterIcon className="w-3 h-3 flex-shrink-0" strokeWidth={2} />
        {card.footer.text}
      </div>
    </motion.div>
  )
}

export default function StatsCards() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-40px' })

  return (
    <section className="bg-background px-3 md:px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.p
          ref={headRef}
          initial={{ opacity: 0, y: 12 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center text-xs font-semibold text-primary uppercase tracking-widest mb-8"
        >
          Everything at a glance
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <StatCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
