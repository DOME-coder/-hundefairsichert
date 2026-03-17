'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dog, BarChart3 } from 'lucide-react'
import { WISSENSWERTES } from '@/lib/constants'
import Accordion from '@/components/ui/Accordion'

export default function Wissenswertes() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const closeHotspot = useCallback(() => setActiveHotspot(null), [])

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeHotspot()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeHotspot])

  // Close on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeHotspot()
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [closeHotspot])

  // Map hotspots to accordion items for mobile
  const accordionItems = WISSENSWERTES.hotspots.map((h) => ({
    question: `${h.id}. ${h.title} – ${h.bodyPart}`,
    answer: `${h.description} — ${h.frequency}`,
  }))

  return (
    <section id="wissenswertes" className="bg-white py-12 md:py-20">
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
            {WISSENSWERTES.title}
          </h2>
          <p className="mt-3 font-body text-base text-brand-grayMid">
            {WISSENSWERTES.subtitle}
          </p>
        </motion.div>

        {/* Desktop: Image with hotspots */}
        <motion.div
          ref={containerRef}
          className="mt-10 hidden md:block relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          {/* Placeholder image container */}
          <div className="relative w-full aspect-[16/10] bg-brand-grayLight rounded-xl overflow-hidden">
            {/* Placeholder content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-grayMid">
              <Dog size={64} strokeWidth={1.5} />
              <p className="mt-3 font-body text-sm">Hundebild-Platzhalter</p>
            </div>

            {/* Hotspots */}
            {WISSENSWERTES.hotspots.map((hotspot) => (
              <div
                key={hotspot.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${hotspot.position.x}%`, top: `${hotspot.position.y}%` }}
              >
                {/* Pulse ring */}
                <span className="absolute inset-0 w-8 h-8 rounded-full bg-brand-accent/40 animate-ping" />

                {/* Hotspot button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)
                  }}
                  className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-125 ${
                    activeHotspot === hotspot.id
                      ? 'bg-brand-accentDark'
                      : 'bg-brand-accent'
                  }`}
                  aria-label={`Hotspot ${hotspot.id}: ${hotspot.title}`}
                >
                  <span className="font-heading text-xs font-bold text-white">
                    {hotspot.id}
                  </span>
                </button>

                {/* Bubble */}
                <AnimatePresence>
                  {activeHotspot === hotspot.id && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className={`absolute z-20 top-1/2 -translate-y-1/2 w-[280px] bg-white border border-brand-border rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] p-5 ${
                        hotspot.position.x > 60 ? 'right-12' : 'left-12'
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <h4 className="font-heading text-base font-semibold text-brand-text">
                        {hotspot.id}. {hotspot.title}
                      </h4>
                      <p className="mt-0.5 font-body text-xs text-brand-grayMid">
                        {hotspot.bodyPart}
                      </p>
                      <hr className="my-3 border-brand-border" />
                      <p className="font-body text-sm text-brand-text leading-[1.7]">
                        {hotspot.description}
                      </p>
                      {hotspot.frequency && (
                        <div className="mt-3 flex items-center gap-2 text-brand-accent">
                          <BarChart3 size={16} className="shrink-0" />
                          <span className="font-body text-xs font-medium">
                            {hotspot.frequency}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile: Image + Accordion */}
        <div className="mt-10 md:hidden">
          {/* Placeholder image without hotspots */}
          <div className="w-full aspect-[16/10] bg-brand-grayLight rounded-xl flex flex-col items-center justify-center text-brand-grayMid">
            <Dog size={48} strokeWidth={1.5} />
            <p className="mt-2 font-body text-sm">Hundebild-Platzhalter</p>
          </div>

          {/* Accordion list */}
          <div className="mt-6">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>
    </section>
  )
}
