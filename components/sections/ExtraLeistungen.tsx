'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { EXTRA_LEISTUNGEN } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader'

const EMIL: [number, number, number, number] = [0.32, 0.72, 0, 1]

export default function ExtraLeistungen() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-brand-accent/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-content px-6">
        <SectionHeader
          eyebrow="Extras"
          title={EXTRA_LEISTUNGEN.title}
          subtitle={EXTRA_LEISTUNGEN.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EXTRA_LEISTUNGEN.items.map((item, index) => (
            <motion.div
              key={index}
              className="group gradient-border relative flex flex-col overflow-hidden rounded-2xl border border-brand-border/60 bg-white/85 shadow-brand-sm backdrop-blur-sm transition-all duration-500 ease-emil hover:-translate-y-2 hover:border-brand-accent/40 hover:shadow-brand-lg"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, ease: EMIL, delay: index * 0.08 }}
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[900ms] ease-emil group-hover:scale-[1.06]"
                />
                {/* Image gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 ease-emil group-hover:opacity-100" />
              </div>

              {/* Accent line between image and content */}
              <span
                aria-hidden
                className="pointer-events-none h-[2px] bg-gradient-to-r from-brand-accent via-brand-accentDark to-brand-accent bg-[length:220%_100%] animate-gradient-drift"
              />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-lg font-bold leading-tight text-brand-text">
                  {item.title}
                </h3>
                <p className="mt-3 font-heading text-sm leading-[1.75] text-brand-grayMid">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
