'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

interface SectionDividerProps {
  imageSrc: string
  alt: string
  /** optional vertical focus point of the image, e.g. '30%' */
  focusY?: string
  /** Tailwind height classes, default: 'h-[260px] md:h-[360px]' */
  heightClass?: string
}

export default function SectionDivider({
  imageSrc,
  alt,
  focusY = 'center',
  heightClass = 'h-[260px] md:h-[360px]',
}: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${heightClass}`}
      role="img"
      aria-label={alt}
    >
      <motion.div
        className="pointer-events-none absolute -inset-y-[22%] inset-x-0 will-change-transform"
        style={{ y }}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: `center ${focusY}` }}
          sizes="100vw"
        />
      </motion.div>

      {/* Soft edge fades */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/25 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />

      {/* Accent lines at the edges */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"
      />
    </div>
  )
}
