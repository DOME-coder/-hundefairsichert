'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CTA as CTA_DATA } from '@/lib/constants'
import Button from '@/components/ui/Button'

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''
const whatsappUrl = `https://wa.me/${whatsappNumber}`

const EMIL: [number, number, number, number] = [0.32, 0.72, 0, 1]

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[480px] items-center justify-center overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        className="pointer-events-none absolute -inset-y-[18%] inset-x-0 will-change-transform"
        style={{ y: parallaxY }}
      >
        <Image
          src="/images/hunde/puppy.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: 'center 30%' }}
          sizes="100vw"
        />
      </motion.div>

      {/* Multi-layer overlays */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.68) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35"
      />

      {/* Ambient accent glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/[0.08] blur-3xl"
      />

      <motion.div
        className="relative z-10 mx-auto max-w-content px-6 py-24 text-center"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: EMIL }}
      >
        <span className="eyebrow text-brand-accent">Kostenlos & unverbindlich</span>
        <h2 className="mt-4 font-heading text-h1 font-bold text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          {CTA_DATA.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-heading text-base leading-[1.75] text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] md:text-lg">
          {CTA_DATA.subtitle}
        </p>
        <div className="mt-10">
          <Button href={whatsappUrl} className="uppercase tracking-[0.18em]">
            {CTA_DATA.button}
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
