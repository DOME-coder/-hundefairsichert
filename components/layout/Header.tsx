'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE, NAV_LINKS } from '@/lib/constants'

const EMIL: [number, number, number, number] = [0.32, 0.72, 0, 1]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex h-[60px] items-center transition-all duration-500 ease-emil md:h-[72px] ${
          scrolled
            ? 'translate-y-0 bg-white/75 backdrop-blur-2xl shadow-brand-sm border-b border-brand-border/60'
            : '-translate-y-full'
        }`}
      >
        <div className="mx-auto flex w-full max-w-content items-center justify-between px-6">
          <a
            href="/"
            className="group flex items-center gap-3 transition-opacity duration-500 ease-emil hover:opacity-90"
          >
            <Image
              src="/images/logo-white.png"
              alt="HundeFAIRsichert Logo"
              width={48}
              height={48}
              className="h-12 w-12 brightness-0 transition-transform duration-500 ease-spring group-hover:-rotate-6 group-hover:scale-110"
            />
            <span className="font-heading text-xl font-bold tracking-tight text-brand-text">
              {SITE.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline relative whitespace-nowrap font-heading text-[0.9375rem] font-medium text-brand-text transition-colors duration-500 ease-emil hover:text-brand-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border/60 bg-white/70 text-brand-text shadow-brand-xs transition-all duration-500 ease-emil hover:border-brand-accent/60 hover:text-brand-accent md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Menü öffnen"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Spacer – only when header is visible */}
      {scrolled && <div aria-hidden className="h-[60px] md:h-[72px]" />}

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EMIL }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 z-50 flex h-full w-80 flex-col bg-white/95 shadow-brand-xl backdrop-blur-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            >
              <div className="flex h-[60px] items-center justify-between border-b border-brand-border/60 px-6">
                <span className="font-heading text-base font-bold text-brand-text">Menü</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Menü schließen"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-border/60 text-brand-text transition-all duration-500 ease-emil hover:border-brand-accent/60 hover:text-brand-accent"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="flex flex-col p-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: EMIL, delay: 0.1 + i * 0.06 }}
                    className="border-b border-brand-border/40 px-3 py-4 font-heading text-base font-medium text-brand-text transition-colors duration-500 ease-emil last:border-0 hover:text-brand-accent"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
