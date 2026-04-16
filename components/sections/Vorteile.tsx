'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { VORTEILE } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader'

const EMIL: [number, number, number, number] = [0.32, 0.72, 0, 1]

const ICONS: Record<string, string> = {
  'OP-Schutz': '/images/icons/stethoscope.jpg',
  Vollschutz: '/images/icons/health.jpg',
  'Flexible Selbstbeteiligung': '/images/icons/moneybag.jpg',
}

export default function Vorteile() {
  const intro = 'intro' in VORTEILE ? (VORTEILE as { intro?: string }).intro : undefined

  return (
    <section id="vorteile" className="relative overflow-hidden bg-brand-beige py-20 md:py-32">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-accent/[0.06] blur-3xl animate-float"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-1/4 h-[460px] w-[460px] rounded-full bg-brand-accentDark/[0.05] blur-3xl animate-float-delayed"
      />

      <div className="relative mx-auto max-w-content px-6">
        <SectionHeader
          eyebrow="Produkte"
          title={VORTEILE.title}
          subtitle={intro ?? VORTEILE.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {VORTEILE.items.map((item, index) => {
            const iconSrc = ICONS[item.title]

            return (
              <motion.div
                key={item.title}
                className="group gradient-border relative flex flex-col items-center overflow-hidden rounded-2xl border border-brand-border/60 bg-white/85 p-8 text-center shadow-brand-sm backdrop-blur-sm transition-all duration-500 ease-emil hover:-translate-y-2 hover:border-brand-accent/40 hover:shadow-brand-lg"
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: EMIL, delay: index * 0.1 }}
              >
                {/* Top stripe */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand-accent via-brand-accentDark to-brand-accent bg-[length:220%_100%] animate-gradient-drift"
                />

                {iconSrc && (
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-beige/70 ring-1 ring-brand-border/60 transition-all duration-500 ease-emil group-hover:bg-brand-accent/10 group-hover:ring-brand-accent/30 group-hover:shadow-brand-glow">
                    <Image
                      src={iconSrc}
                      alt={item.title}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-xl object-cover transition-transform duration-500 ease-spring group-hover:-rotate-6 group-hover:scale-110"
                    />
                  </div>
                )}

                <h3 className="mt-6 font-heading text-h3 font-semibold text-brand-text">
                  {item.title}
                </h3>

                <p className="mt-3 font-heading text-base leading-[1.75] text-brand-grayMid">
                  {item.description}
                </p>

                {item.bullets && (
                  <ul className="mt-5 w-full space-y-2.5 text-left">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 ring-1 ring-brand-accent/30">
                          <Check size={11} className="text-brand-accent" />
                        </span>
                        <span className="font-heading text-sm text-brand-text">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
