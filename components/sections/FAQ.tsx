'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQ } from '@/lib/constants'
import Accordion from '@/components/ui/Accordion'
import Toggle from '@/components/ui/Toggle'
import SectionHeader from '@/components/ui/SectionHeader'

type TabKey = 'categoryA' | 'categoryB'

const EMIL: [number, number, number, number] = [0.32, 0.72, 0, 1]

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('categoryA')

  const options: [string, string] = [FAQ.categoryA.title, FAQ.categoryB.title]

  const handleChange = (value: string) => {
    setActiveTab(value === FAQ.categoryA.title ? 'categoryA' : 'categoryB')
  }

  const items = FAQ[activeTab].items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }))

  const subtitle = 'subtitle' in FAQ ? (FAQ as { subtitle?: string }).subtitle : undefined

  return (
    <section id="faq" className="relative overflow-hidden bg-brand-beige py-20 md:py-32">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-brand-accent/[0.06] blur-3xl animate-float"
      />

      <div className="relative mx-auto max-w-content px-6">
        <SectionHeader
          eyebrow="FAQ"
          title={FAQ.title}
          subtitle={subtitle}
        />

        {/* Tabs */}
        <div className="mt-10 flex justify-center">
          <Toggle
            options={options}
            value={FAQ[activeTab].title}
            onChange={handleChange}
            layoutId="faqToggle"
          />
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-10 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: EMIL }}
            >
              <Accordion items={items} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
