'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Apple, Smartphone } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="px-3 md:px-6 py-12 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden"
      >
        {/* Dotted primary background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'var(--primary)',
            backgroundImage: 'radial-gradient(circle, color-mix(in srgb, var(--primary-foreground) 25%, transparent) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
          }}
        />
        {/* Edge vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, var(--primary) 55%, transparent) 100%)',
          }}
        />

        {/* Content — reduced vertical padding */}
        <div className="relative z-10 px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left text */}
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground leading-tight">
              Ready to Automate Your Collections?
            </h2>
            <p className="text-primary-foreground/70 text-sm md:text-base max-w-lg">
              Join hundreds of businesses already using UdhariPay to collect faster and grow confidently.
            </p>
          </div>

          {/* Right buttons */}
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            {/* App Store */}
            <div className="flex items-center gap-3 rounded-2xl border-2 border-border bg-foreground px-5 py-3 opacity-70 cursor-not-allowed select-none w-full sm:w-fit">
              <Apple className="w-6 h-6 text-background flex-shrink-0" />
              <div>
                <p className="text-[10px] text-background/60 leading-none mb-0.5">Coming soon on</p>
                <p className="text-sm font-bold text-background leading-none">App Store</p>
              </div>
            </div>
            {/* Play Store */}
            <div className="flex items-center gap-3 rounded-2xl border-2 border-border bg-foreground px-5 py-3 opacity-70 cursor-not-allowed select-none w-full sm:w-fit">
              <Smartphone className="w-6 h-6 text-background flex-shrink-0" />
              <div>
                <p className="text-[10px] text-background/60 leading-none mb-0.5">Coming soon on</p>
                <p className="text-sm font-bold text-background leading-none">Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
