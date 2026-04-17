'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HERO } from '@/lib/constants'
import Button from '@/components/ui/Button'

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''
const whatsappUrl = `https://wa.me/${whatsappNumber}`

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-6%', '12%'])
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.05])
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      {/* Video Background with parallax */}
      <motion.div
        className="pointer-events-none absolute -inset-y-[10%] inset-x-0 will-change-transform"
        style={{ y: parallaxY, scale: parallaxScale }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/videos/hero.mp4" type="video/mp4" />
          <source src="/images/videos/section.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlay 1 — radial */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.65) 100%)',
        }}
      />
      {/* Overlay 2 — linear */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(45,45,58,0.10) 0%, transparent 30%, transparent 70%, rgba(45,45,58,0.30) 100%)',
        }}
      />

      {/* Blur blobs */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-brand-accent/[0.06] blur-3xl animate-float"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-accent/[0.05] blur-3xl animate-float-delayed"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-content flex-col items-center px-6 pb-[18vh] text-center">
        {/* Logo */}
        <div className="mb-2 md:mb-3">
          <Image
            src="/images/logo-white.png"
            alt="HundeFAIRsichert Logo"
            width={320}
            height={320}
            className="w-44 md:w-60 lg:w-[17rem] xl:w-80 h-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
            priority
          />
        </div>

        {/* Headline */}
        <h1 className="font-heading text-display font-bold text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]">
          {HERO.headline}
        </h1>

        {/* Subline */}
        <p className="mt-3 max-w-2xl font-body text-sm leading-[1.7] text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] md:text-base">
          {HERO.subline}
        </p>

        {/* CTA Button */}
        <div className="mt-5 md:mt-6">
          <Button href={whatsappUrl} className="px-8 py-3 md:px-10 md:py-3.5 uppercase tracking-wider">
            {HERO.cta}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        style={{ opacity: indicatorOpacity }}
      >
        <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          Scroll
        </span>
        <span className="relative block h-12 w-px overflow-hidden bg-white/40">
          <span className="absolute inset-0 origin-top animate-scroll-draw bg-gradient-to-b from-transparent via-brand-accent to-transparent" />
        </span>
      </motion.div>
    </section>
  )
}
