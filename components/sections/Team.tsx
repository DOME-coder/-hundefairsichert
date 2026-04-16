'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import { TEAM } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader'

const EMIL: [number, number, number, number] = [0.32, 0.72, 0, 1]

export default function Team() {
  const description = 'description' in TEAM ? (TEAM as { description?: string }).description : undefined

  return (
    <section id="team" className="relative overflow-hidden bg-white py-20 md:py-32">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-brand-accent/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-content px-6">
        <SectionHeader
          eyebrow="Team"
          title={TEAM.title}
          subtitle={description ?? TEAM.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.members.map((member, index) => (
            <motion.div
              key={index}
              className="group gradient-border relative flex flex-col items-center overflow-hidden rounded-2xl border border-brand-border/60 bg-white/85 p-8 text-center shadow-brand-sm backdrop-blur-sm transition-all duration-500 ease-emil hover:-translate-y-2 hover:border-brand-accent/40 hover:shadow-brand-lg"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: EMIL, delay: index * 0.08 }}
            >
              {/* Top stripe */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand-accent via-brand-accentDark to-brand-accent bg-[length:220%_100%] opacity-0 transition-opacity duration-500 ease-emil animate-gradient-drift group-hover:opacity-100"
              />

              {/* Avatar */}
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute inset-0 -m-1 rounded-full bg-gradient-to-br from-brand-accent/30 to-brand-accentDark/30 opacity-0 blur-md transition-opacity duration-500 ease-emil group-hover:opacity-100"
                />
                {member.image ? (
                  <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-brand-border/60 transition-all duration-500 ease-emil group-hover:ring-brand-accent/60">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-brand-beige ring-2 ring-brand-border/60">
                    <User size={42} className="text-brand-grayMid" />
                  </div>
                )}
              </div>

              <h3 className="mt-6 font-heading text-h3 font-semibold text-brand-text">
                {member.name}
              </h3>
              <p className="mt-1 font-heading text-sm text-brand-grayMid">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
