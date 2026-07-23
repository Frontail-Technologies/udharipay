'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Onboard & Verify',
    description:
      'Complete merchant KYC digitally — no paperwork, no delays. UdhariPay guides every merchant through a secure, fully compliant onboarding flow.',
    points: [
      'Personal & business details in one flow',
      'PAN, GST and Gumasta verification',
      'Document upload & review',
      'Secure · Fast · Trusted',
    ],
    image: '/images/visuals/process/Setup.png',
    imageAlt: 'UdhariPay KYC onboarding screen',
    imageRight: true,
    tilt: '',
  },
  {
    number: 2,
    title: 'Create Collection Plan',
    description:
      'Define a custom plan for each customer — choose the amount, set a schedule, and enable UPI AutoPay so payments happen automatically every cycle.',
    points: [
      'Set amount per instalment',
      'Choose daily, weekly or monthly frequency',
      'Customer approves mandate via UPI',
      'Secure. Automated. Hassle-free.',
    ],
    image: '/images/visuals/process/Onboard.png',
    imageAlt: 'UdhariPay collection plan and AutoPay mandate screen',
    imageRight: false,
    tilt: '',
  },
  {
    number: 3,
    title: 'Collect & Track',
    description:
      'Monitor every EMI in one place — paid, pending, failed and upcoming. Get instant alerts and full payment history for every customer.',
    points: [
      'Live EMI status — paid, pending, failed, upcoming',
      'Total collected amount at a glance',
      'Per-customer payment history',
      'Mandate status & smart retry alerts',
    ],
    image: '/images/visuals/process/History.png',
    imageAlt: 'UdhariPay EMI collection history screen',
    imageRight: true,
    tilt: '-rotate-3',
  },
]

const fadeLeft = { hidden: { opacity: 0, x: -48 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } }
const fadeRight = { hidden: { opacity: 0, x: 48 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

function StepBlock({ step }: { step: typeof steps[number] }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const textAnim = step.imageRight ? fadeLeft : fadeRight
  const imgAnim = step.imageRight ? fadeRight : fadeLeft

  return (
    /* All steps white background */
    <div ref={ref} className="bg-background px-6 py-6  md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${!step.imageRight ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
          }`}>
          <motion.div
            variants={textAnim}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-sm font-bold text-primary">{step.number}</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {step.title}
            </h3>



            <ul className="space-y-2.5">
              {step.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.07, ease: 'easeOut' }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-foreground">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={imgAnim}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className={`flex justify-center ${step.imageRight ? 'lg:justify-end' : 'lg:justify-start'}`}
          >
            <div className="bg-card rounded-3xl  p-5 w-80 md:w-96 lg:w-[420px]">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, color-mix(in srgb, var(--primary) 6%, var(--secondary)), var(--secondary))',
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"

                />
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  width={500}
                  height={1020}
                  quality={100}
                  unoptimized
                  className={`relative w-full h-auto object-contain drop-shadow-2xl ${step.tilt}`}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default function ProductShowcase() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="platform" className="overflow-hidden bg-background">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="px-6 pt-20 pb-2 text-center max-w-2xl mx-auto"
      >
        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">How It Works</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          See UdhariPay in Action
        </h2>
        <p className="mt-4 text-base text-muted-foreground">
          Three simple steps to automate your entire collections workflow.
        </p>
      </motion.div>

      {steps.map((step) => (
        <StepBlock key={step.number} step={step} />
      ))}
    </section>
  )
}
