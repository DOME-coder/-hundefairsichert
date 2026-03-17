import type { Metadata } from 'next'
import { Raleway, Poppins } from 'next/font/google'
import './globals.css'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HundeFAIRsichert – Faire Krankenversicherung für deinen Hund',
  description:
    'Faire Krankenversicherung für deinen Hund – individuell, transparent und mit persönlicher Beratung. Von SENATOR Versicherungsmakler GmbH.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body
        className={`${raleway.variable} ${poppins.variable} font-body text-brand-text bg-brand-beige`}
      >
        {children}
      </body>
    </html>
  )
}
