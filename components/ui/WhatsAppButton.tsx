'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''
  const href = `https://wa.me/${whatsappNumber}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Auf WhatsApp schreiben"
      className="group fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.45)] ring-2 ring-white/70 transition-all duration-500 ease-emil hover:-translate-y-0.5 hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,211,102,0.55)]"
    >
      {/* Outer pulse ring */}
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/50 animate-ping" />

      <MessageCircle size={26} className="relative z-10" />

      {/* Tooltip – desktop only */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-white/10 bg-brand-text/95 px-4 py-2 font-heading text-sm font-medium text-white opacity-0 shadow-brand-md backdrop-blur-sm transition-opacity duration-500 ease-emil group-hover:opacity-100 md:block">
        Jetzt beraten lassen
      </span>
    </a>
  )
}
