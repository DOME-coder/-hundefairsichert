import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Datenschutz() {
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
            Datenschutz-Hinweis
          </h1>

          <div className="mt-8 space-y-8 font-heading text-base text-brand-text leading-[1.8]">
            {/* 1 */}
            <section>
              <h2 className="text-xl font-bold">1. Einleitung</h2>
              <p className="mt-3 text-brand-grayMid">
                Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten ausschließlich im Rahmen der gesetzlichen Bestimmungen, insbesondere der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG). Nachfolgend informieren wir Sie über die Verarbeitung personenbezogener Daten auf unserer Website, insbesondere im Zusammenhang mit Facebook und Instagram.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl font-bold">2. Verantwortlicher</h2>
              <div className="mt-3 text-brand-grayMid">
                <p>Gianclaudio Sena e. K</p>
                <p>Stettener Hauptstraße 62</p>
                <p>70771 Leinfelden-Echterdingen</p>
                <p>Telefon: 0711 78239633</p>
                <p>
                  E-Mail:{' '}
                  <a href="mailto:support@hundefairsichert.de" className="text-brand-accent hover:text-brand-accentDark transition-colors">
                    support@hundefairsichert.de
                  </a>
                </p>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl font-bold">3. Zwecke und Rechtsgrundlagen der Datenverarbeitung</h2>

              <h3 className="mt-4 text-lg font-semibold">Allgemeine Nutzung der Website</h3>
              <p className="mt-2 text-brand-grayMid">
                Wir erheben und verarbeiten personenbezogene Daten (z. B. IP-Adressen, Cookies, Nutzungsdaten) zur Bereitstellung unserer Website und ihrer Inhalte sowie zur Sicherstellung der Funktionalität. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem funktionierenden und sicheren Internetauftritt).
              </p>

              <h3 className="mt-4 text-lg font-semibold">Datenverarbeitung durch Facebook und Instagram</h3>
              <p className="mt-2 text-brand-grayMid">
                Unsere Website kann Funktionen und Inhalte der sozialen Netzwerke Facebook und Instagram (Meta Platforms Inc., 1 Hacker Way, Menlo Park, CA 94025, USA) einbinden, wie z. B. Social Plugins, „Gefällt mir“-Buttons oder eingebettete Beiträge.
              </p>

              <h4 className="mt-3 font-semibold">Verarbeitete Daten:</h4>
              <ul className="mt-1 list-disc pl-6 text-brand-grayMid space-y-1">
                <li>IP-Adresse</li>
                <li>Browser- und Gerätedaten</li>
                <li>Nutzungsdaten (z. B. besuchte Seiten, Interaktionen mit Inhalten)</li>
                <li>Daten, die im Rahmen Ihrer Profilnutzung bei Facebook oder Instagram generiert werden</li>
              </ul>

              <h4 className="mt-3 font-semibold">Rechtsgrundlage:</h4>
              <ul className="mt-1 list-disc pl-6 text-brand-grayMid space-y-1">
                <li>Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, die Sie über unser Cookie-Banner erteilen können.</li>
                <li>Vertragserfüllung nach Art. 6 Abs. 1 lit. b DSGVO, falls Sie mit uns über Facebook/Instagram interagieren (z. B. in Kommentaren oder Nachrichten).</li>
              </ul>

              <h4 className="mt-3 font-semibold">Datenübermittlung in Drittländer:</h4>
              <p className="mt-1 text-brand-grayMid">
                Facebook und Instagram können Ihre Daten in die USA übertragen. Es besteht derzeit kein Angemessenheitsbeschluss der EU für die USA. Die Übertragung erfolgt auf Grundlage von Standardvertragsklauseln, um ein angemessenes Datenschutzniveau sicherzustellen.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl font-bold">4. Cookies und Tracking-Technologien</h2>
              <p className="mt-3 text-brand-grayMid">
                Wir verwenden Cookies und ähnliche Technologien, um Nutzerverhalten zu analysieren, Inhalte zu personalisieren und Werbung zu schalten. Hierzu können auch Dienste von Drittanbietern wie Facebook Pixel eingesetzt werden.
              </p>

              <h3 className="mt-4 text-lg font-semibold">Facebook Pixel:</h3>
              <p className="mt-2 text-brand-grayMid">
                Mit Facebook Pixel analysieren wir das Verhalten der Nutzer auf unserer Website und spielen gezielte Werbung auf Facebook/Instagram aus. Dabei werden Daten an Meta Platforms Inc. übermittelt. Die Rechtsgrundlage hierfür ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>

              <h3 className="mt-4 text-lg font-semibold">Widerruf:</h3>
              <p className="mt-2 text-brand-grayMid">
                Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen auf unserer Website widerrufen oder Cookies in Ihrem Browser löschen.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl font-bold">5. Betroffenenrechte</h2>
              <p className="mt-3 text-brand-grayMid">Sie haben folgende Rechte gemäß DSGVO:</p>
              <ul className="mt-2 list-disc pl-6 text-brand-grayMid space-y-1">
                <li>Auskunft über die Verarbeitung Ihrer Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger oder unvollständiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten (Art. 17 DSGVO), soweit keine gesetzlichen Aufbewahrungspflichten bestehen</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-3 text-brand-grayMid">
                Zudem können Sie sich bei einer Datenschutzaufsichtsbehörde beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl font-bold">6. Kontakt zum Datenschutz</h2>
              <p className="mt-3 text-brand-grayMid">Für Fragen zum Datenschutz können Sie uns jederzeit kontaktieren:</p>
              <div className="mt-2 text-brand-grayMid">
                <p>Gianclaudio Sena e. K.</p>
                <p>Stettener Hauptstraße 62</p>
                <p>70771 Leinfelden-Echterdingen</p>
                <p>Telefon: 0711 78239633</p>
                <p>
                  E-Mail:{' '}
                  <a href="mailto:support@hundefairsichert.de" className="text-brand-accent hover:text-brand-accentDark transition-colors">
                    support@hundefairsichert.de
                  </a>
                </p>
              </div>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl font-bold">7. Änderungen des Datenschutz-Hinweises</h2>
              <p className="mt-3 text-brand-grayMid">
                Wir behalten uns vor, diesen Hinweis anzupassen, um ihn an rechtliche oder technische Änderungen anzupassen. Die aktuelle Version finden Sie jederzeit auf unserer Website.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
