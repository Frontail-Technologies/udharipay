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
    title: '₹84,034',
    subtitle: 'Collected',
    footer: { icon: TrendingUp, text: '12% vs yesterday' },
  },
  {
    icon: ShieldCheck,
    iconColor: 'text-success',
    iconBg: 'bg-success/10',
    badge: 'Active',
    title: '1,204',
    subtitle: 'Active Mandates',
    footer: { icon: CircleCheckBig, text: 'UPI Autopay Enabled' },
  },
  {
    icon: CalendarClock,
    badge: 'Upcoming',
    title: '₹15,000',
    subtitle: 'Next EMI',
    footer: { icon: CalendarClock, text: 'Due on 25 May' },
  },
  {
    icon: CircleCheckBig,
    iconColor: 'text-success',
    iconBg: 'bg-success/10',
    solidFill: true,
    badge: 'Success',
    title: 'High',
    subtitle: 'Success Percentage',
    footer: { icon: Clock, text: 'Last 30 days' },
  },
  {
    icon: UserCheck,
    iconColor: 'text-success',
    iconBg: 'bg-success/10',
    badge: 'Verified',
    title: '842',
    subtitle: 'Verified Customers',
    footer: { icon: ShieldCheck, text: 'Aadhaar OTP Verified' },
  },
  {
    icon: AlertTriangle,
    iconColor: 'text-destructive',
    iconBg: 'bg-destructive/10',
    badge: 'Alerts',
    title: 'Very Low',
    subtitle: 'Overdue Percentage',
    footer: { icon: ShieldAlert, text: 'Below industry average' },
  },
]

function StatCard({ card, index }: { card: typeof cards[number] & { iconColor?: string, iconBg?: string, solidFill?: boolean }; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const FooterIcon = card.footer.icon
  const CardIcon = card.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      className="group relative overflow-hidden bg-card rounded-2xl border border-border/50 p-4 md:p-5 flex flex-col justify-between gap-3 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-colors ${card.iconBg || 'bg-primary/10'}`}>
          <CardIcon 
            className={`w-4 h-4 md:w-5 md:h-5 ${card.iconColor || 'text-primary'}`} 
            strokeWidth={1.75} 
            fill={card.solidFill ? "currentColor" : "none"}
            style={{ stroke: card.solidFill ? "white" : undefined }}
          />
        </div>
        <span className="text-[10px] md:text-[11px] font-medium px-2 py-0.5 rounded-md bg-secondary/80 text-muted-foreground border border-border/50">
          {card.badge}
        </span>
      </div>

      {/* Metric */}
      <div className="space-y-0.5 md:space-y-1 mt-1">
        <p className="text-xl md:text-3xl font-bold text-foreground tracking-tight leading-none">{card.title}</p>
        <p className="text-[11px] md:text-sm text-muted-foreground font-medium">{card.subtitle}</p>
      </div>

      {/* Footer text */}
      <div className="mt-1 md:mt-2 flex items-center gap-1.5 text-[10px] md:text-xs font-medium text-muted-foreground">
        <FooterIcon className="w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0 opacity-70" strokeWidth={2} />
        <span className="truncate">{card.footer.text}</span>
      </div>
    </motion.div>
  )
}

export default function StatsCards() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-40px' })

  return (
    <section className="bg-background px-6 py-12">
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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {cards.map((card, i) => (
            <StatCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
