'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, ArrowUpCircle } from 'lucide-react'
import Toggle from '@/components/ui/Toggle'
import {
  TARIF,
  TARIF_TOGGLE_OPTIONS,
  TARIF_STUFEN,
  TARIF_DATA,
  type TarifToggle,
} from '@/lib/constants'

const HIGHLIGHTED_INDEX = 2 // Komfort

export default function TarifVergleich() {
  const [activeToggle, setActiveToggle] = useState<TarifToggle>('OP-Schutz')
  const directionRef = useRef(1)

  const handleToggle = (value: string) => {
    const newValue = value as TarifToggle
    directionRef.current = newValue === 'Vollschutz' ? 1 : -1
    setActiveToggle(newValue)
  }

  const plan = TARIF_DATA[activeToggle]

  return (
    <section id="tarife" className="bg-white py-12 md:py-20">
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
            {TARIF.title}
          </h2>
          <p className="mt-3 font-body text-base text-brand-grayMid">
            {TARIF.subtitle}
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="mt-8 flex justify-center">
          <Toggle
            options={TARIF_TOGGLE_OPTIONS}
            value={activeToggle}
            onChange={handleToggle}
          />
        </div>

        {/* Table with slide animation */}
        <div className="mt-8 overflow-x-auto">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeToggle}
              initial={{ x: directionRef.current * 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: directionRef.current * -300, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <table className="w-full min-w-[600px] border-collapse">
                {/* Column headers */}
                <thead>
                  <tr>
                    <th className="p-4 text-left font-heading text-sm font-semibold text-brand-grayMid w-[200px]">
                      {TARIF.columnHeader}
                    </th>
                    {TARIF_STUFEN.map((stufe, i) => (
                      <th
                        key={stufe}
                        className={`p-4 text-center font-heading text-base font-semibold relative ${
                          i === HIGHLIGHTED_INDEX
                            ? 'bg-brand-beige border-t-2 border-brand-accent'
                            : ''
                        }`}
                      >
                        {i === HIGHLIGHTED_INDEX && (
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-xs font-heading font-semibold px-3 py-0.5 rounded-full whitespace-nowrap">
                            {TARIF.highlightBadge}
                          </span>
                        )}
                        {stufe}
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Feature rows */}
                <tbody>
                  {plan.features.map((feature, rowIdx) => (
                    <tr
                      key={feature.label}
                      className={rowIdx % 2 === 0 ? 'bg-brand-grayLight/50' : ''}
                    >
                      <td className="p-4 font-body text-sm text-brand-text">
                        {feature.label}
                      </td>
                      {feature.included.map((included, colIdx) => (
                        <td
                          key={colIdx}
                          className={`p-4 text-center ${
                            colIdx === HIGHLIGHTED_INDEX ? 'bg-brand-beige/60' : ''
                          }`}
                        >
                          {included ? (
                            <Check size={20} className="text-brand-success mx-auto" />
                          ) : (
                            <X size={20} className="text-brand-error mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* Price row */}
                  <tr className="border-t-2 border-brand-border">
                    <td className="p-4 font-heading text-sm font-semibold text-brand-text">
                      {TARIF.priceLabel}
                    </td>
                    {plan.prices.map((price, colIdx) => (
                      <td
                        key={colIdx}
                        className={`p-4 text-center font-heading text-lg font-bold text-brand-text ${
                          colIdx === HIGHLIGHTED_INDEX ? 'bg-brand-beige/60' : ''
                        }`}
                      >
                        {price}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Wechseloption Card */}
        <motion.div
          className="mt-12 bg-brand-beige border border-brand-border rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <ArrowUpCircle size={28} className="text-brand-accent" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-heading text-[1.5rem] font-semibold text-brand-text">
                  {TARIF.wechseloption.title}
                </h3>
                <span className="inline-block bg-brand-accent text-white text-xs font-heading font-semibold px-3 py-1 rounded-full">
                  {TARIF.wechseloption.badge}
                </span>
              </div>

              <p className="mt-3 font-body text-base text-brand-grayMid leading-[1.7]">
                {TARIF.wechseloption.description}
              </p>

              <ul className="mt-4 space-y-2">
                {TARIF.wechseloption.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <Check size={18} className="text-brand-accent mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-brand-text">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
