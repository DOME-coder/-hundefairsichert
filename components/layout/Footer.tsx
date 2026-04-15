import Image from 'next/image'
import { Instagram, Facebook } from 'lucide-react'
import { FOOTER, SITE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-brand-text py-16 text-white">
      {/* Top accent line */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/70 to-transparent"
      />

      {/* Ambient glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-260px] h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-brand-accent/[0.06] blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-[10%] h-[420px] w-[420px] rounded-full bg-brand-accent/[0.04] blur-3xl animate-float-delayed"
      />

      <div className="relative mx-auto flex max-w-content flex-col items-center gap-7 px-6 text-center">
        {/* Logo */}
        <Image
          src="/images/logo-white.png"
          alt="HundeFAIRsichert Logo"
          width={112}
          height={112}
          className="h-28 w-28 drop-shadow-[0_0_28px_rgba(232,168,124,0.35)]"
        />

        {/* Wordmark */}
        <div className="flex flex-col items-center">
          <span className="font-heading text-2xl font-bold tracking-tight">
            Hunde<span className="text-brand-accent">FAIR</span>sichert
          </span>
        </div>

        {/* Dotted separator */}
        <div className="flex items-center gap-2">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-white/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-brand-accent shadow-brand-glow" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-white/30" />
        </div>

        {/* Navigation links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {FOOTER.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline font-heading text-sm font-medium text-white/75 transition-colors duration-500 ease-emil hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://www.instagram.com/hundefairsichert"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-heading text-sm font-medium text-white/75 backdrop-blur-sm transition-all duration-500 ease-emil hover:-translate-y-0.5 hover:border-brand-accent/60 hover:bg-brand-accent/10 hover:text-white"
          >
            <Instagram
              size={18}
              className="transition-transform duration-500 ease-spring group-hover:-rotate-6 group-hover:scale-110"
            />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/people/Hundefairsichert/61575353277863/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-heading text-sm font-medium text-white/75 backdrop-blur-sm transition-all duration-500 ease-emil hover:-translate-y-0.5 hover:border-brand-accent/60 hover:bg-brand-accent/10 hover:text-white"
          >
            <Facebook
              size={18}
              className="transition-transform duration-500 ease-spring group-hover:-rotate-6 group-hover:scale-110"
            />
            <span>Facebook</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="font-heading text-xs text-white/40">{FOOTER.copyright}</p>
      </div>
    </footer>
  )
}
