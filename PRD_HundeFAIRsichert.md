# PRD – HundeFAIRsichert Website

## 1. Projektübersicht

**Projektname:** HundeFAIRsichert  
**Typ:** Einzel-Website (kein CMS, kein Backend) – React oder Next.js  
**Sprache:** Deutsch  
**Referenz-Website:** [PferdeFAIRsichert](https://www.pferdefairsichert.de) – gleiche Struktur, gleiches Unternehmen (SENATOR Versicherungsmakler GmbH), angepasst für Hunde  
**Zielgruppe:** Hundebesitzer in Deutschland, die eine Krankenversicherung für ihren Hund suchen

---

## 2. Ziel der Website

Die Website soll Hundebesitzer informieren, überzeugen und zur Kontaktaufnahme oder zum Vertragsabschluss motivieren. Sie muss:
- Alle Versicherungsprodukte klar und verständlich erklären
- Einen direkten Vergleich zwischen den Tarifen ermöglichen
- Interaktive Elemente nutzen, um Vertrauen und Engagement zu erzeugen
- Einen klaren Call-to-Action (CTA) bieten

---

## 3. Design & Stilrichtlinien

**Referenz:** Exakt wie [pferdefairsichert.de](https://www.pferdefairsichert.de)
- Modernes, professionelles Layout
- Helle Hintergründe (weiß/hellgrau) mit kräftigen Akzentfarben
- Freundliche, vertrauenserweckende Typografie
- Hochwertige Tier-Bilder (Hunde)
- Mobile-First Responsive Design
- Navigation: Sticky Header mit Logo links, Menüpunkte rechts

**Farbpalette (anpassen auf Hunde-Branding):**
- Primär: Warmes Grün oder Blau (hundefreundlich)
- Sekundär: Weiß, Hellgrau
- Akzent: Orange oder Gelb für CTAs

**Assets (vom Auftraggeber bereitgestellt):**
- ✅ Logo HundeFAIRsichert (als Datei übergeben)
- ✅ Team-Fotos (als Dateien übergeben)

---

## 4. Seitenstruktur & Navigation

```
Navigation:
├── Start (Startseite / Hero)
├── Vorteile und Leistungen
├── Vergleich unserer Tarife
├── Im Versicherungsfall
├── FAQs
└── Wissenswertes (Top 10 Behandlungen – interaktiv)
```

---

## 5. Seiteninhalt – Detailbeschreibung

### 5.1 Startseite (Hero Section)

- **Hero-Bild:** Hochwertiges Foto eines Hundes (oder Hund mit Besitzer)
- **Headline:** z.B. *„Dein Hund verdient den besten Schutz"*
- **Subline:** Kurze Beschreibung des Angebots
- **CTA-Button:** *„Jetzt Anfrage schicken"* → Link zu WhatsApp (analog zu PferdeFAIRsichert)
- **Sektion „Das sind wir":** Vorstellung des Teams mit Fotos und Namen (Mitarbeiter von SENATOR Versicherungsmakler GmbH)

---

### 5.2 Vorteile und Leistungen

Erklärung der zwei Hauptprodukte:

**OP-Schutz:**
- Absicherung medizinisch notwendiger Operationen
- Ursachen: Unfall, Krankheit, Fehlentwicklung
- Inklusive Nachbehandlung (bis zu 15 Tage)

**Vollschutz:**
- Alles aus OP-Schutz PLUS
- Behandlungen ohne OP
- Alternative/komplementäre Methoden (z.B. Homöopathie, Physiotherapie)

**Flexible Selbstbeteiligung:**
- Mit oder ohne Selbstbeteiligung buchbar
- 10% SB: max. 1.500 € pro Rechnung
- 20% SB: max. 3.000 € pro Rechnung

**4 Tarifstufen:** Basis | Smart | Komfort | Premium

---

### 5.3 Vergleich unserer Tarife (INTERAKTIV)

**Anforderung:** Interaktive Tabelle mit Swipe/Toggle zwischen OP-Schutz und Vollschutz

**UI-Konzept:**
- Toggle-Button oben: `[OP-Schutz]` / `[Vollschutz]`
- Beim Klick/Swipe wechselt die Tabelle mit Animation
- Tabelle zeigt: Leistungsmerkmale vs. Tarifstufen (Basis / Smart / Komfort / Premium)
- Checkmarks (✓) und Kreuze (✗) für Leistungen je Tarif
- Preis-Zeile am Ende (falls Preise vorhanden)
- Highlight-Effekt für empfohlenen Tarif (z.B. „Beliebteste Wahl")

**Wechseloption-Baustein:**
- Separater Abschnitt unterhalb der Tabelle
- Erklärt den Zusatzbaustein „Wechseloption":
  - Einmalig beim Abschluss zubuchbar
  - Ermöglicht **einmaligen Tarifwechsel** in einen höherwertigen Tarif
  - Beispiel: Von Basis → Premium ohne erneute Gesundheitsprüfung
  - Nur einmal nutzbar während der Vertragslaufzeit

---

### 5.4 Im Versicherungsfall (Schritt-für-Schritt-Anleitung)

**Anforderung:** Detaillierte, visuelle Schritt-für-Schritt-Anleitung

**UI-Konzept:**
- Nummerierte Schritte mit Icons
- Klar formuliert, einfache Sprache

**Offizieller Inhalt (vom Auftraggeber bestätigt):**

**Freie Tierarztwahl:**
Für dich besteht freie Tierarztwahl. Muss das Tier tierärztlich behandelt werden, kannst du den Tierarzt oder die Tierklinik deines Vertrauens aufsuchen.

**Anforderungen an die Rechnung (GOT):**
Die Rechnung des Tierarztes ist nach der Gebührenordnung für Tierärzte (GOT) zu erstellen und muss mindestens folgende Daten enthalten:
- Name des Versicherungsnehmers (Tierhalter)
- Chipnummer/Tätowierungsnummer/Lebensnummer des Tieres (ohne Markierung: Name, Farbe, Rasse, Geburtsdatum, Geschlecht)
- Diagnose
- Berechnete Leistungen aufgegliedert nach Gebührenpositionen mit dem jeweiligen Gebührensatz
- Datum der erbrachten Leistungen

**Direktabrechnung (besonderer Service):**
Als besonderen Service bieten wir die Direktabrechnung mit dem Tierarzt an. Du kannst wählen, ob du die Erstattungskosten selbst erhalten möchtest oder direkt an den behandelnden Tierarzt gezahlt werden sollen.

**Direkte Kommunikation mit dem Tierarzt:**
Zusätzlich bieten wir die direkte Kommunikation mit dem Tierarzt bei Leistungsrückfragen an (Entbindung von der Schweigepflicht). Damit können eventuelle tiermedizinischen Rückfragen direkt mit dem behandelnden Tierarzt geklärt werden. Versicherungsfälle können so schnell und bequemer abgeschlossen werden.

**UI-Schritte (visuell dargestellt):**
1. 🏥 Tierarzt frei wählen und behandeln lassen
2. 🧾 GOT-konforme Rechnung anfordern
3. 📤 Rechnung einreichen (selbst erstatten ODER Direktabrechnung wählen)
4. 💬 Bei Rückfragen: direkte Kommunikation mit Tierarzt möglich (Schweigepflichtentbindung)
5. ✅ Schnelle Abwicklung und Erstattung

---

### 5.5 Wissenswertes – Top 10 Behandlungen beim Hund (INTERAKTIV)

**Anforderung:** SVG-Grafik eines Hundes mit klickbaren Hotspots

**UI-Konzept:**
- Seitliche Ansicht eines Hundes als SVG oder Illustration
- 10 nummerierte Hotspots an anatomisch korrekten Stellen
- Beim Klick auf einen Hotspot: **Bubble/Tooltip** erscheint mit:
  - Name der Behandlung/Erkrankung
  - Kurze Erklärung (2–3 Sätze)
  - Häufigkeit in Deutschland (falls verfügbar)
- Auf Mobile: Hotspots größer, Bubble unterhalb der Grafik
- Alternativ: Liste der 10 Behandlungen unterhalb der Grafik für SEO

**Top 10 häufige Behandlungen beim Hund in Deutschland:**
1. **Kreuzbandriss** (Kniegelenk) – häufigste OP beim Hund
2. **Magendilatation-Volvulus (Magendrehung)** – lebensbedrohlich, große Rassen
3. **Hüftgelenksdysplasie (HD)** – genetisch bedingt, große/mittlere Rassen
4. **Hauterkrankungen / Allergien** – häufig, chronisch
5. **Otitis (Ohrenentzündung)** – sehr häufig, besonders Schlappohrhunde
6. **Zahnerkrankungen** – Zahnstein, Parodontose, Extraktionen
7. **Augenerkrankungen** – Katarakt, Entropium
8. **Bandscheibenvorfälle** (Wirbelsäule) – besonders Dackel, Beagle
9. **Tumorerkrankungen** – häufig bei älteren Hunden
10. **Gastritis / Magenprobleme** – Erbrechen, Durchfall, Fremdkörper

---

### 5.6 FAQ – Häufig gestellte Fragen

**Zwei Kategorien:**

#### A) Allgemeine Fragen zur Hundeversicherung
- Was ist eine Hundekrankenversicherung?
- Ab welchem Alter kann ich meinen Hund versichern?
- Welche Erkrankungen sind ausgeschlossen?
- Was passiert bei Vorerkrankungen?
- Kann ich jeden Tierarzt aufsuchen?
- Gibt es Wartezeiten?

#### B) Fragen zum Wechseloption-Baustein
- Was ist die Wechseloption?
- Wie buche ich die Wechseloption?
- Wann kann ich die Wechseloption nutzen?
- Kann ich die Wechseloption mehrmals nutzen?
- Von welchem Tarif kann ich in welchen wechseln?
- Was kostet der Baustein?

**UI-Konzept:** Akkordeon-Komponente (Frage klicken → Antwort klappt auf)

---

## 6. Technische Anforderungen

| Kriterium | Anforderung |
|---|---|
| Framework | React (Vite) oder Next.js |
| Styling | Tailwind CSS |
| Animationen | Framer Motion oder CSS Transitions |
| Icons | Lucide React oder HeroIcons |
| Responsive | Mobile-First, Breakpoints: sm/md/lg/xl |
| SEO | Meta Tags, Open Graph, strukturierte Daten |
| Performance | Bilder optimiert (WebP), lazy loading |
| Deployment | Statisches Hosting (z.B. Netlify, Vercel, oder IONOS) |
| Analytics | Google Analytics 4 vorbereiten (Platzhalter) |

---

## 7. Interaktive Komponenten – Zusammenfassung

| Komponente | Typ | Priorität |
|---|---|---|
| Tarif-Vergleichstabelle | Toggle OP-Schutz / Vollschutz | 🔴 Hoch |
| Hunde-Körper-Grafik | Klickbare Hotspots mit Bubbles | 🔴 Hoch |
| FAQ Akkordeon | Expand/Collapse | 🟡 Mittel |
| Schritt-für-Schritt Versicherungsfall | Nummerierte Karten | 🟡 Mittel |
| WhatsApp CTA Button | Floating oder in Hero | 🔴 Hoch |

---

## 8. Assets & Noch fehlende Informationen

### ✅ Bestätigt / Vorhanden
- [x] 4 Tarifstufen: **Basis / Smart / Komfort / Premium**
- [x] Text „Im Versicherungsfall" (offiziell bestätigt)
- [x] Logo HundeFAIRsichert (als Datei bereitgestellt)
- [x] Team-Fotos (als Dateien bereitgestellt)

### ⬜ Noch ausstehend
- [ ] Tarifdetails und Preise je Tarifstufe (Basis / Smart / Komfort / Premium)
- [ ] Genaue Leistungsunterschiede zwischen den 4 Tarifen
- [ ] Kosten des Wechseloption-Bausteins
- [ ] Kontaktdaten (WhatsApp-Nummer, E-Mail, Telefon)
- [ ] Impressum-Daten (SENATOR Versicherungsmakler GmbH – analog zu pferdefairsichert.de)
- [ ] Offizielle Hunde-Bilder (lizenzfrei oder eigene Fotos)

---

## 9. Wie Assets in Claude Code übergeben werden

**Logo und Team-Fotos:**
- Dateien in den Projektordner legen: `public/images/logo.png`, `public/images/team/`
- In Claude Code sagen: *„Das Logo liegt unter public/images/logo.png – verwende es im Header"*
- Alternativ: Dateien direkt in den Claude Code Chat ziehen/hochladen

---

## 10. Referenz-Seitenstruktur (PferdeFAIRsichert)

Zum Vergleich, so ist das Pferde-Referenzsite aufgebaut:
- Hero mit Bild + Headline
- „Das sind wir" (Team-Vorstellung)
- Möglichkeiten zur Absicherung (OP-Schutz / Vollschutz / Flexible SB)
- CTA „Wir beraten dich gerne" → WhatsApp-Link
- Footer mit Impressum + Social Media

Das Hunde-Sito soll **dieselbe Grundstruktur** haben, aber mit deutlich mehr interaktiven Elementen angereichert werden.

---

## 11. Projektzeitplan (Vorschlag)

| Phase | Aufgabe | Status |
|---|---|---|
| Phase 1 | Setup Projekt, Navigation, Hero | ⬜ Todo |
| Phase 2 | Vorteile & Leistungen | ⬜ Todo |
| Phase 3 | Interaktive Vergleichstabelle | ⬜ Todo |
| Phase 4 | Hunde-Grafik mit Hotspots | ⬜ Todo |
| Phase 5 | Im Versicherungsfall | ⬜ Todo |
| Phase 6 | FAQ Akkordeon | ⬜ Todo |
| Phase 7 | SEO, Performance, Deployment | ⬜ Todo |

---

*Dokument erstellt für: SENATOR Versicherungsmakler GmbH / HundeFAIRsichert*  
*Referenz: pferdefairsichert.de*  
*Zuletzt aktualisiert: März 2026*
