import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Team from '@/components/sections/Team'
import Vorteile from '@/components/sections/Vorteile'
import TarifVergleich from '@/components/sections/TarifVergleich'
import Versicherungsfall from '@/components/sections/Versicherungsfall'
import Wissenswertes from '@/components/sections/Wissenswertes'
import FAQ from '@/components/sections/FAQ'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Team />
        <Vorteile />
        <TarifVergleich />
        <Versicherungsfall />
        <Wissenswertes />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
