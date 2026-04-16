'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowLeftRight, Sparkles, Star } from 'lucide-react'
import Toggle from '@/components/ui/Toggle'
import SectionHeader from '@/components/ui/SectionHeader'
import {
  TARIF,
  TARIF_TOGGLE_OPTIONS,
  TARIF_STUFEN,
  TARIF_DATA,
  type TarifToggle,
} from '@/lib/constants'

const EMIL: [number, number, number, number] = [0.32, 0.72, 0, 1]

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
    <section id="tarife" className="relative overflow-hidden bg-white py-20 md:py-32">
      {/* Ambient blob */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[600px] w-[600px] rounded-full bg-brand-accent/[0.035] blur-3xl animate-float"
      />

      <div className="relative mx-auto max-w-content px-6">
        <SectionHeader
          eyebrow="Tarife"
          title={TARIF.title}
          subtitle={TARIF.subtitle}
        />

        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <Toggle
            options={TARIF_TOGGLE_OPTIONS}
            value={activeToggle}
            onChange={handleToggle}
            layoutId="tarifToggle"
          />
        </div>

        {/* Table */}
        <div className="mt-10 overflow-x-auto rounded-2xl border border-brand-border/60 bg-white/85 shadow-brand-sm backdrop-blur-sm">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeToggle}
              initial={{ x: directionRef.current * 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: directionRef.current * -120, opacity: 0 }}
              transition={{ duration: 0.5, ease: EMIL }}
            >
              <table className="w-full min-w-[720px] border-collapse">
                <thead>
                  <tr className="bg-gradient-to-b from-brand-beige/60 to-brand-beige/20">
                    <th className="w-[240px] px-6 py-5 text-left font-heading text-[11px] uppercase tracking-[0.18em] text-brand-grayMid">
                      {TARIF.columnHeader}
                    </th>
                    {TARIF_STUFEN.map((stufe) => (
                      <th
                        key={stufe}
                        className="px-4 py-5 text-center font-heading text-base font-bold text-brand-text"
                      >
                        {stufe}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {plan.features.map((feature, rowIdx) => (
                    <tr
                      key={feature.label}
                      className={`group relative transition-colors duration-500 ease-emil hover:bg-brand-beige/40 ${
                        rowIdx % 2 === 0 ? 'bg-white' : 'bg-brand-grayLight/40'
                      }`}
                    >
                      <td className="relative px-6 py-4 font-heading text-sm font-medium text-brand-text">
                        <span
                          aria-hidden
                          className="absolute left-0 top-1/2 h-6 w-[2px] origin-center -translate-y-1/2 scale-y-0 bg-gradient-to-b from-brand-accent to-brand-accentDark transition-transform duration-500 ease-emil group-hover:scale-y-100"
                        />
                        {feature.label}
                      </td>
                      {feature.values.map((value, colIdx) => (
                        <td
                          key={colIdx}
                          className="px-4 py-4 text-center font-heading text-sm text-brand-text tabular-nums"
                        >
                          {value === '✗' ? (
                            <span className="font-bold text-brand-error">✗</span>
                          ) : value === '✓' ? (
                            <Check size={18} className="mx-auto text-brand-success" />
                          ) : (
                            value
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Wartezeiten */}
        <motion.div
          className="group gradient-border mt-14 overflow-hidden rounded-2xl border border-brand-border/60 bg-white/85 p-8 shadow-brand-sm backdrop-blur-sm transition-all duration-500 ease-emil hover:-translate-y-1 hover:shadow-brand-md"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EMIL }}
        >
          <div className="flex items-center gap-3">
            <span className="eyebrow text-brand-accent">Übersicht</span>
            <span className="h-px flex-1 bg-gradient-to-r from-brand-accent/40 to-transparent" />
          </div>
          <h3 className="mt-3 font-heading text-h3 font-semibold text-brand-text">
            {TARIF.wartezeiten.title}
          </h3>
          <p className="mt-2 font-heading text-sm text-brand-grayMid">
            {TARIF.wartezeiten.subtitle}
          </p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {TARIF.wartezeiten.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 ring-1 ring-brand-accent/30">
                  <Check size={12} className="text-brand-accent" />
                </span>
                <span className="font-heading text-sm text-brand-text">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Wann zahlt */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            className="group gradient-border overflow-hidden rounded-2xl border border-brand-success/30 bg-brand-beige/60 p-8 shadow-brand-sm backdrop-blur-sm transition-all duration-500 ease-emil hover:-translate-y-1 hover:shadow-brand-md"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EMIL }}
          >
            <h3 className="font-heading text-h3 font-semibold text-brand-text">
              Die Versicherung zahlt, wenn …
            </h3>
            <ul className="mt-5 space-y-3">
              {TARIF.wannZahlt.zahlt.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-success/15 ring-1 ring-brand-success/40">
                    <Check size={11} className="text-brand-success" />
                  </span>
                  <span className="font-heading text-sm text-brand-text">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="group gradient-border overflow-hidden rounded-2xl border border-brand-border/60 bg-white/85 p-8 shadow-brand-sm backdrop-blur-sm transition-all duration-500 ease-emil hover:-translate-y-1 hover:shadow-brand-md"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EMIL, delay: 0.08 }}
          >
            <h3 className="font-heading text-h3 font-semibold text-brand-text">
              Die Versicherung zahlt z. B. nicht, wenn …
            </h3>
            <ul className="mt-5 space-y-3">
              {TARIF.wannZahlt.zahltNicht.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-error/15 ring-1 ring-brand-error/40">
                    <span className="text-[11px] font-bold text-brand-error">✗</span>
                  </span>
                  <span className="font-heading text-sm text-brand-text">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Wechseloption – USP Hero Product Showcase */}
        <div className="relative mt-24">
          {/* Floating "NEU" sticker */}
          <motion.div
            className="absolute -top-8 left-1/2 z-20 -translate-x-1/2"
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.3 }}
          >
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-accent via-brand-accentDark to-brand-accent bg-[length:220%_100%] shadow-brand-glow ring-4 ring-white animate-gradient-drift">
              <span
                aria-hidden
                className="absolute inset-0 animate-ping rounded-full bg-brand-accent/40"
              />
              <div className="relative flex flex-col items-center leading-none">
                <Star size={12} className="text-white" fill="currentColor" />
                <span className="font-heading text-xs font-black uppercase tracking-[0.1em] text-white">
                  Neu
                </span>
              </div>
            </div>
          </motion.div>

          {/* Outer animated gradient border */}
          <motion.div
            className="relative rounded-[32px] p-[3px]"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: EMIL }}
            style={{
              background:
                'conic-gradient(from 0deg, rgba(232,168,124,0.9), rgba(232,168,124,0) 22%, rgba(196,125,78,0.3) 42%, rgba(232,168,124,0) 62%, rgba(196,125,78,0.9), rgba(232,168,124,0.9))',
            }}
          >
            {/* Multi-layer ambient glow */}
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[48px] bg-brand-accent/20 blur-3xl animate-pulse-soft"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-4 -z-10 rounded-[40px] bg-brand-accentDark/15 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-[29px] bg-gradient-to-br from-white via-brand-beige/30 to-white p-8 md:p-14">
              {/* Ambient blobs inside */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-accent/35 blur-3xl animate-float"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-brand-accentDark/25 blur-3xl animate-float-delayed"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute right-1/3 top-1/3 h-40 w-40 rounded-full bg-brand-accent/15 blur-3xl"
              />

              {/* Diagonal shimmer sweep */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent bg-[length:220%_100%]"
                style={{ mixBlendMode: 'overlay' }}
              />

              {/* Corner ribbon */}
              <div className="absolute right-6 top-6 z-10 flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-accent via-brand-accentDark to-brand-accent bg-[length:220%_100%] px-5 py-2 font-heading text-xs font-bold uppercase tracking-[0.18em] text-white shadow-brand-glow animate-gradient-drift">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                {TARIF.wechseloption.badge}
              </div>

              <div className="relative flex flex-col gap-10 md:flex-row md:items-start">
                {/* Big icon block with switch arrows */}
                <div className="shrink-0">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: 'spring', stiffness: 240, damping: 18, delay: 0.15 }}
                  >
                    {/* Halo glow */}
                    <span
                      aria-hidden
                      className="absolute -inset-4 rounded-3xl bg-brand-accent/30 blur-xl animate-pulse-soft"
                    />
                    {/* Outer ring */}
                    <span
                      aria-hidden
                      className="absolute -inset-2 rounded-[28px] bg-gradient-to-br from-brand-accent/40 to-brand-accentDark/40 blur-sm"
                    />
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-accent via-brand-accentDark to-[#A86237] bg-[length:200%_200%] shadow-brand-glow ring-4 ring-white animate-gradient-drift">
                      {/* Inner highlight */}
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/30 to-transparent"
                      />
                      <ArrowLeftRight
                        size={56}
                        className="relative text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
                        strokeWidth={2.5}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="eyebrow text-brand-accent">★ Exklusives Upgrade</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-brand-accent/60 to-transparent" />
                  </div>
                  <h3 className="mt-4 font-heading text-h1 font-bold leading-[1.05] text-brand-text">
                    {TARIF.wechseloption.title}
                  </h3>
                  <p className="mt-6 max-w-2xl font-heading text-base leading-[1.75] text-brand-text/80 md:text-lg">
                    {TARIF.wechseloption.description}
                  </p>

                  {/* Bullets as premium mini-cards */}
                  <ul className="mt-8 grid gap-4 md:grid-cols-2">
                    {TARIF.wechseloption.bullets.map((bullet, i) => (
                      <motion.li
                        key={bullet}
                        className="group/bullet relative flex items-start gap-3 overflow-hidden rounded-2xl border border-brand-border/60 bg-white/90 p-5 shadow-brand-xs backdrop-blur-sm transition-all duration-500 ease-emil hover:-translate-y-1 hover:border-brand-accent/60 hover:bg-white hover:shadow-brand-md"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: EMIL, delay: 0.3 + i * 0.08 }}
                      >
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-accent/0 to-brand-accent/0 transition-all duration-500 ease-emil group-hover/bullet:from-brand-accent/5 group-hover/bullet:to-brand-accentDark/5"
                        />
                        <span className="relative mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-brand-accentDark shadow-brand-glow ring-2 ring-white">
                          <Check size={14} className="text-white" strokeWidth={3.5} />
                        </span>
                        <span className="relative font-heading text-sm font-medium leading-[1.55] text-brand-text">
                          {bullet}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-beige/60 px-4 py-2 text-brand-accent backdrop-blur-sm">
                    <Sparkles size={16} />
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.15em]">
                      Nur einmal pro Vertragslaufzeit
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
