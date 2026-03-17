'use client'

import { motion } from 'framer-motion'
import {
  Stethoscope,
  FileText,
  Send,
  MessageSquare,
  CheckCircle,
} from 'lucide-react'
import { VERSICHERUNGSFALL } from '@/lib/constants'
import type { LucideIcon } from 'lucide-react'

const STEP_ICONS: LucideIcon[] = [
  Stethoscope,
  FileText,
  Send,
  MessageSquare,
  CheckCircle,
]

export default function Versicherungsfall() {
  return (
    <section id="versicherungsfall" className="bg-brand-beige py-12 md:py-20">
      <div className="max-w-content mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="font-heading text-[1.625rem] md:text-[2.25rem] font-semibold text-brand-text">
            {VERSICHERUNGSFALL.title}
          </h2>
          <p className="mt-3 font-body text-base text-brand-grayMid">
            {VERSICHERUNGSFALL.subtitle}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {VERSICHERUNGSFALL.steps.map((step, index) => {
            const Icon = STEP_ICONS[index] ?? CheckCircle

            return (
              <div key={step.step} className="relative">
                {/* Mobile connector line */}
                {index > 0 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-brand-border md:hidden" />
                )}

                <motion.div
                  className="bg-white border border-brand-border rounded-xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                >
                  {/* Step number + Icon */}
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center">
                      <span className="font-heading text-sm font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                    <Icon size={28} className="text-brand-accent shrink-0" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-heading text-[1.25rem] font-semibold text-brand-text">
                    {step.title}
                  </h3>

                  {/* Text */}
                  <p className="mt-2 font-body text-sm text-brand-grayMid leading-[1.7]">
                    {step.text}
                  </p>

                  {/* Bullets (Schritt 2) */}
                  {step.bullets && (
                    <ul className="mt-3 space-y-1.5">
                      {step.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 font-body text-sm text-brand-text"
                        >
                          <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-accent" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
