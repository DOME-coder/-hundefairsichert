'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HERO } from '@/lib/constants'
import Button from '@/components/ui/Button'

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''
const whatsappUrl = `https://wa.me/${whatsappNumber}`

const EMIL: [number, number, number, number] = [0.32, 0.72, 0, 1]

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll-based parallax for the video background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-6%', '12%'])
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Play/pause video based on visibility
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
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden"
    >
      {/* Video Background with parallax */}
      <motion.div
        className="pointer-events-none absolute -inset-y-[15%] inset-x-0 will-change-transform"
        style={{ y: parallaxY }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hunde/hero-dog.jpg"
        >
          <source src="/images/videos/hero.mp4" type="video/mp4" />
          <source src="/images/videos/section.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Multi-layer overlays for depth */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.28) 60%, rgba(0,0,0,0.65) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/40"
      />

      {/* Ambient accent blobs */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-brand-accent/[0.08] blur-3xl animate-float"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-1/4 h-[460px] w-[460px] rounded-full bg-brand-accent/[0.06] blur-3xl animate-float-delayed"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-content flex-col items-center px-6 py-12 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 12, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: EMIL }}
          className="mb-2"
        >
          <Image
            src="/images/logo-white.png"
            alt="HundeFAIRsichert Logo"
            width={280}
            height={280}
            className="h-[180px] w-[180px] drop-shadow-[0_8px_32px_rgba(0,0,0,0.4)] md:h-[240px] md:w-[240px] lg:h-[280px] lg:w-[280px]"
            priority
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-heading text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.1] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.75)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EMIL, delay: 0.35 }}
        >
          {HERO.headline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 max-w-[600px] font-heading text-sm leading-[1.8] text-white/85 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] md:text-base"
          initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: EMIL, delay: 0.65 }}
        >
          {HERO.subline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EMIL, delay: 0.85 }}
        >
          <Button href={whatsappUrl} className="uppercase tracking-[0.18em]">
            {HERO.cta}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        style={{ opacity: indicatorOpacity }}
      >
        <span className="font-heading text-[10px] uppercase tracking-[0.35em] text-white/60">
          Scroll
        </span>
        <span className="relative block h-10 w-[1.5px] overflow-hidden bg-white/15">
          <span className="absolute inset-0 origin-top animate-scroll-draw bg-gradient-to-b from-transparent via-brand-accent to-transparent" />
        </span>
      </motion.div>
    </section>
  )
}
