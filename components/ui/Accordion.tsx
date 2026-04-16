'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

const EMIL: [number, number, number, number] = [0.32, 0.72, 0, 1]

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div
            key={index}
            className="group relative gradient-border overflow-hidden rounded-2xl border border-brand-border/60 bg-white/85 backdrop-blur-sm shadow-brand-sm transition-all duration-500 ease-emil hover:border-brand-accent/40 hover:shadow-brand-md"
          >
            {/* Left accent bar */}
            <span
              aria-hidden
              className="absolute left-0 top-0 h-full w-[3px] origin-top bg-gradient-to-b from-brand-accent to-brand-accentDark transition-transform duration-500 ease-emil"
              style={{ transform: isOpen ? 'scaleY(1)' : 'scaleY(0)' }}
            />

            <button
              className="relative flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-500 ease-emil hover:bg-brand-beige/40"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span className="pr-4 font-heading text-base font-semibold text-brand-text">
                {item.question}
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-white shadow-brand-xs transition-all duration-500 ease-emil ${
                  isOpen
                    ? 'border-brand-accent text-brand-accent shadow-brand-glow'
                    : 'border-brand-border text-brand-grayMid'
                }`}
              >
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.5, ease: EMIL }}
                  className="flex"
                >
                  <ChevronDown size={18} />
                </motion.span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: EMIL }}
                >
                  <div className="px-6 pb-6">
                    <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />
                    <p className="whitespace-pre-line font-heading text-sm leading-[1.75] text-brand-grayMid">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
