'use client'

import Image from 'next/image'
import { Smartphone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle background tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--primary) 5%, transparent), transparent 60%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[90vh]">

          {/* ── Left Content ── */}
          {/* pt-24 offsets the floating navbar height */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 pt-32 pb-16"
          >

            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.08] tracking-tight text-foreground">
              Automate Collections.
              <br />
              <span className="text-primary">Improve Cash Flow.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
              Onboard merchants, verify customers, create recurring mandates and track every EMI — all from one powerful platform.
            </p>

            {/* Mobile App Coming Soon */}
            <div className="space-y-3 flex flex-col items-center md:items-start w-full">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Download the App — Coming Soon
              </p>
              <div className="flex flex-col sm:flex-row gap-3">

                {/* Play Store */}
                <div className="flex items-center gap-3 rounded-2xl border-2 border-border bg-foreground px-5 py-3 opacity-70 cursor-not-allowed select-none w-full sm:w-fit">
                  <Smartphone className="w-6 h-6 text-background flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-background/60 leading-none mb-0.5">Coming soon on</p>
                    <p className="text-sm font-bold text-background leading-none">Google Play</p>
                  </div>
                </div>

                {/* Contact Button */}
                <a
                  href="mailto:udharipay@gmail.com"
                  className="flex items-center justify-center gap-2.5 rounded-2xl border-2 border-border bg-background px-6 py-3 text-sm font-bold text-foreground hover:bg-secondary transition-colors w-full sm:w-fit"
                >
                  <Mail className="w-5 h-5" strokeWidth={2.5} />
                  Contact Us
                </a>
              </div>
              {/* Pulsing live badge */}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1.5 text-xs font-semibold text-primary">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                App in development · Web platform live now
              </span>
            </div>
          </motion.div>

          {/* ── Right — Hero Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative flex items-center justify-center lg:justify-end h-full pt-10 lg:pt-0"
          >
            <div
              className="absolute inset-0 rounded-3xl blur-3xl opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, var(--primary), transparent 70%)' }}
            />
            <div className="relative w-full max-w-2xl">
              <Image
                src="/images/visuals/hero.png"
                alt="UdhariPay mobile app showing collections dashboard"
                width={900}
                height={760}
                priority
                quality={100}
                unoptimized
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
