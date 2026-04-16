import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Team from '@/components/sections/Team'
import Vorteile from '@/components/sections/Vorteile'
import VorteileLeistungen from '@/components/sections/VorteileLeistungen'
import TarifVergleich from '@/components/sections/TarifVergleich'
import ExtraLeistungen from '@/components/sections/ExtraLeistungen'
import Versicherungsfall from '@/components/sections/Versicherungsfall'
import Wissenswertes from '@/components/sections/Wissenswertes'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import SectionDivider from '@/components/ui/SectionDivider'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Team />
        <Vorteile />
        <VorteileLeistungen />
        <TarifVergleich />
        <ExtraLeistungen />
        <SectionDivider imageSrc="/images/hunde/vet-exam.jpg" alt="Hund beim Tierarzt" />
        <Versicherungsfall />
        <SectionDivider
          imageSrc="/images/hunde/dog-leash.jpg"
          alt="Hund mit Leine"
          focusY="15%"
          heightClass="h-[520px] md:h-[680px]"
        />
        <Wissenswertes />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
