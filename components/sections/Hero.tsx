'use client'

import { motion } from 'framer-motion'
import { HERO } from '@/lib/constants'
import Button from '@/components/ui/Button'

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''
const whatsappUrl = `https://wa.me/${whatsappNumber}`

export default function Hero() {
  return (
    <section id="hero" className="bg-brand-beige relative overflow-hidden">
      <div className="max-w-content mx-auto px-6 py-12 md:py-20 flex flex-col items-center text-center">
        <motion.h1
          className="font-heading text-[2rem] md:text-[3rem] font-bold text-brand-text leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {HERO.headline}
        </motion.h1>

        <motion.p
          className="mt-4 font-body text-base text-brand-grayMid max-w-2xl leading-[1.7]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        >
          {HERO.subline}
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        >
          <Button href={whatsappUrl} className="uppercase tracking-wider">
            {HERO.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
