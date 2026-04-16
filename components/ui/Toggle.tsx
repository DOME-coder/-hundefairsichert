'use client'

import { motion } from 'framer-motion'

interface ToggleProps {
  options: readonly [string, string] | [string, string]
  value: string
  onChange: (value: string) => void
  /** Unique id so multiple Toggles on one page animate independently */
  layoutId?: string
}

export default function Toggle({
  options,
  value,
  onChange,
  layoutId = 'togglePill',
}: ToggleProps) {
  return (
    <div className="relative inline-flex items-center rounded-full border border-brand-border/60 bg-white/60 p-1 shadow-brand-sm backdrop-blur-md">
      {options.map((option) => {
        const isActive = value === option
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className="relative rounded-full px-6 py-2 font-heading text-sm font-semibold transition-colors duration-500 ease-emil"
            aria-pressed={isActive}
          >
            {isActive && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-accent to-brand-accentDark shadow-brand-glow ring-1 ring-brand-accentDark/20"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-500 ease-emil ${
                isActive ? 'text-white' : 'text-brand-grayMid hover:text-brand-text'
              }`}
            >
              {option}
            </span>
          </button>
        )
      })}
    </div>
  )
}
