'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const EMIL: [number, number, number, number] = [0.32, 0.72, 0, 1]

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'center' | 'left'
  theme?: 'light' | 'dark'
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  const titleColor = theme === 'dark' ? 'text-white' : 'text-brand-text'
  const subtitleColor = theme === 'dark' ? 'text-white/70' : 'text-brand-grayMid'

  return (
    <motion.div
      className={`flex flex-col ${alignment}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: EMIL }}
    >
      {eyebrow && (
        <motion.span
          className="eyebrow text-brand-accent"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: EMIL, delay: 0.05 }}
        >
          {eyebrow}
        </motion.span>
      )}

      <h2 className={`${eyebrow ? 'mt-3' : ''} font-heading text-h2 font-semibold ${titleColor}`}>
        {title}
      </h2>

      <div
        className={`mt-4 h-px w-16 bg-gradient-to-r from-transparent via-brand-accent to-transparent ${
          align === 'left' ? 'ml-0' : 'mx-auto'
        }`}
      />

      {subtitle && (
        <p
          className={`mt-5 max-w-2xl font-heading text-base leading-[1.75] ${subtitleColor} ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
