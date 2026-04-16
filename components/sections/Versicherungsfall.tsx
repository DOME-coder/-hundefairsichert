'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { VERSICHERUNGSFALL } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader'

const EMIL: [number, number, number, number] = [0.32, 0.72, 0, 1]
const MAX_CHARS = 140

export default function Versicherungsfall() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="versicherungsfall" className="relative overflow-hidden bg-brand-beige py-20 md:py-32">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-brand-accent/[0.06] blur-3xl animate-float"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-1/4 h-[460px] w-[460px] rounded-full bg-brand-accentDark/[0.05] blur-3xl animate-float-delayed"
      />

      <div className="relative mx-auto max-w-content px-6">
        <SectionHeader
          eyebrow="Ablauf"
          title={VERSICHERUNGSFALL.title}
          subtitle={VERSICHERUNGSFALL.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {VERSICHERUNGSFALL.steps.map((step, index) => {
            // Center the last two cards when there are exactly 5 steps
            const totalSteps = VERSICHERUNGSFALL.steps.length
            const colSpanClass = 'lg:col-span-2'
            const startClass =
              totalSteps === 5 && index === 3 ? 'lg:col-start-2' : ''
            const isExpanded = expandedIndex === index
            const fullText = step.text + (step.bullets ? ' ' + step.bullets.join(', ') : '')
            const needsTruncation = fullText.length > MAX_CHARS
            const displayText =
              isExpanded || !needsTruncation
                ? step.text
                : step.text.slice(0, MAX_CHARS) + '…'

            return (
              <motion.div
                key={step.step}
                className={`group gradient-border relative flex flex-col overflow-hidden rounded-2xl border border-brand-border/60 bg-white/85 shadow-brand-sm backdrop-blur-sm transition-all duration-500 ease-emil hover:-translate-y-2 hover:border-brand-accent/40 hover:shadow-brand-lg ${colSpanClass} ${startClass}`}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.9, ease: EMIL, delay: index * 0.08 }}
              >
                {/* Top accent stripe */}
                <span
                  aria-hidden
                  className="pointer-events-none h-[3px] bg-gradient-to-r from-brand-accent via-brand-accentDark to-brand-accent bg-[length:220%_100%] animate-gradient-drift"
                />

                <div className="flex flex-1 flex-col p-7">
                  {/* Premium number container */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-beige ring-1 ring-brand-border/60 transition-all duration-500 ease-emil group-hover:bg-brand-accent/10 group-hover:ring-brand-accent/30 group-hover:shadow-brand-glow">
                    <span className="font-heading text-xl font-bold text-brand-accent transition-transform duration-500 ease-spring group-hover:scale-110">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-lg font-bold leading-tight text-brand-text">
                    {step.title}
                  </h3>

                  <div className="mt-3 h-px w-10 bg-brand-accent/40 transition-all duration-500 ease-emil group-hover:w-16 group-hover:bg-brand-accent" />

                  <p className="mt-4 flex-1 font-heading text-sm leading-[1.75] text-brand-grayMid">
                    {displayText}
                  </p>

                  {isExpanded && step.bullets && (
                    <ul className="mt-4 space-y-2">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 font-heading text-sm text-brand-text">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {needsTruncation && (
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="mt-4 flex items-center gap-1.5 self-start font-heading text-sm font-semibold text-brand-accent transition-colors duration-500 ease-emil hover:text-brand-accentDark"
                    >
                      {isExpanded ? 'Weniger' : 'Mehr erfahren'}
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.45, ease: EMIL }}
                        className="flex"
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
