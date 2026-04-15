import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Impressum() {
  return (
    <>
      <Header />
      <main className="bg-white py-12 md:py-20">
        <div className="max-w-content mx-auto px-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-heading text-sm font-medium text-brand-grayMid transition-colors duration-300 hover:text-brand-accent"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span>Zurück zur Startseite</span>
          </Link>
          <h1 className="mt-6 font-heading text-[2rem] md:text-[3rem] font-bold text-brand-text">
            Impressum
          </h1>

          <div className="mt-8 space-y-6 font-heading text-base text-brand-text leading-[1.8]">
            <div>
              <p className="font-semibold text-lg">HundeFAIRsichert</p>
              <p className="mt-2">
                Stettener Hauptstraße 66<br />
                70771 Leinfelden-Echterdingen
              </p>
            </div>

            <div>
              <p>
                <a href="mailto:support@hundefairsichert.de" className="text-brand-accent hover:text-brand-accentDark transition-colors">
                  support@hundefairsichert.de
                </a>
              </p>
              <p>
                <a href="tel:+4915560422451" className="text-brand-accent hover:text-brand-accentDark transition-colors">
                  +49 155 60422451
                </a>
              </p>
            </div>

            <div className="border-t border-brand-border pt-6">
              <p className="font-semibold text-lg">SENATOR Versicherungsmakler GmbH</p>
              <p className="mt-2">Geschäftsführer: Gianclaudio Sena und Marc Ernst</p>
              <p>Registergericht Stuttgart HRB 746143</p>
              <p>Steuer-Nr. 96060/07060</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
