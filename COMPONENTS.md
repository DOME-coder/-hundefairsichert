# COMPONENTS.md – HundeFAIRsichert

Detaillierte Spezifikationen für jede interaktive Komponente. Vor der Entwicklung lesen.

---

## 1. TarifVergleich (Vergleichstabelle Tarife)

**Datei:** `components/sections/TarifVergleich.tsx`  
**Daten:** aus `lib/constants.ts` importieren

### Verhalten

- Toggle oben: `[OP-Schutz]` / `[Vollschutz]`
- Klick auf Toggle → Tabelle wechselt mit horizontaler Slide-Animation (Framer Motion AnimatePresence)
- Beide Tabellen haben identische Struktur, unterschiedliche Inhalte
- Tarifstufen: **Basis / Smart / Komfort / Premium**
- Spalte „Komfort" hat Badge „Beliebteste Wahl" in Orange

### Datenstruktur (in constants.ts)

```ts
type Tarif = {
  name: 'Basis' | 'Smart' | 'Komfort' | 'Premium'
  hervorgehoben: boolean
  preis?: string  // Platzhalter wenn nicht verfügbar
  leistungen: {
    bezeichnung: string
    enthalten: boolean
  }[]
}

type TarifDaten = {
  opSchutz: Tarif[]
  vollSchutz: Tarif[]
}
```

### UI-Detail

```
┌─────────────────────────────────────────────────────┐
│  [ OP-Schutz ]  [ Vollschutz ]    ← Toggle          │
├──────────────────┬────────┬───────┬─────────┬───────┤
│ Leistung         │ Basis  │ Smart │ Komfort │Premium│
│                  │        │       │ ⭐Belieb│       │
├──────────────────┼────────┼───────┼─────────┼───────┤
│ Leistung 1       │   ✓    │   ✓   │    ✓    │   ✓   │
│ Leistung 2       │   ✗    │   ✓   │    ✓    │   ✓   │
│ ...              │        │       │         │       │
├──────────────────┼────────┼───────┼─────────┼───────┤
│ Preis/Monat      │  TBD   │  TBD  │   TBD   │  TBD  │
└──────────────────┴────────┴───────┴─────────┴───────┘
```

- ✓ → Lucide-Icon `Check`, Farbe `#4CAF50`
- ✗ → Lucide-Icon `X`, Farbe `#E57373`
- Mobile: horizontaler Scroll mit `overflow-x: auto`
- Hervorgehobene Spalte (Komfort): orangefarbener Rahmen, leicht getönter Hintergrund

### Wechseloption-Abschnitt (unterhalb der Tabelle)

- Separate Card mit Hintergrund `#FFF0E1`
- Icon Pfeil nach oben (ArrowUpCircle von Lucide)
- Text erklärt den Baustein
- Badge „Einmalig zubuchbar"

---

## 2. HundeGrafik (Interaktive Hotspots)

**Datei:** `components/sections/Wissenswertes.tsx`  
**Daten:** aus `lib/constants.ts` importieren

### Verhalten

- Hunde-Bild/SVG in seitlicher Ansicht (links)
- 10 nummerierte Hotspots absolut auf dem Bild positioniert
- Klick auf Hotspot → Bubble/Tooltip mit Informationen erscheint
- Nur ein Hotspot gleichzeitig geöffnet (Klick auf anderen schließt vorherigen)
- Klick außerhalb → schließt Bubble
- ESC → schließt Bubble

### Datenstruktur

```ts
type Hotspot = {
  id: number
  bezeichnung: string       // z.B. „Kreuzbandriss"
  koerperteil: string       // z.B. „Kniegelenk"
  beschreibung: string      // 2–3 Sätze
  haeufigkeit?: string      // z.B. „Häufigste OP beim Hund"
  position: {
    x: number               // Prozent auf dem Bild (0–100)
    y: number               // Prozent auf dem Bild (0–100)
  }
}
```

### Hotspot-Positionen (ungefähr – nach echtem Bild anpassen)

| # | Behandlung | X% | Y% |
|---|---|---|---|
| 1 | Kreuzbandriss | 65 | 70 |
| 2 | Magendrehung | 45 | 50 |
| 3 | Hüftgelenksdysplasie | 60 | 60 |
| 4 | Hauterkrankungen | 50 | 30 |
| 5 | Otitis | 20 | 20 |
| 6 | Zahnerkrankungen | 18 | 35 |
| 7 | Augenerkrankungen | 15 | 25 |
| 8 | Bandscheibenvorfall | 50 | 45 |
| 9 | Tumorerkrankungen | 40 | 40 |
| 10 | Gastritis | 42 | 52 |

### Hotspot-UI

```
Hotspot (geschlossen):
  → Kreis 32px, Hintergrund #E8A87C, weiße Nummer zentriert
  → Hover: scale(1.2), cursor pointer
  → Pulse-Animation zur Aufmerksamkeit

Hotspot (geöffnet):
  → Kreis Hintergrund #C47D4E
  → Bubble erscheint (Framer Motion scale + opacity)
```

### Bubble-UI

```
┌─────────────────────────────┐
│ 1. Kreuzbandriss            │  ← Nummer + Name
│ Kniegelenk                  │  ← Körperteil (klein, grau)
│─────────────────────────────│
│ Beschreibungstext 2–3 Sätze │
│                             │
│ 📊 Häufigste OP beim Hund   │  ← Häufigkeit (falls vorhanden)
└─────────────────────────────┘
```

- Breite: 280px Desktop, 100% Mobile
- Position: neben dem Punkt auf Desktop, unterhalb des Bildes auf Mobile
- Hintergrund: Weiß, Rahmen `#E0D5C9`, Schatten

### Mobile-Fallback

Auf Bildschirmen < 768px:
- Hunde-Bild oben ohne Hotspot-Overlay
- Vertikale Liste der 10 Behandlungen darunter als Akkordeon
- Punkte in der Liste anklickbar, nicht auf dem Bild

---

## 3. FAQ Akkordeon

**Datei:** `components/sections/FAQ.tsx`  
**Daten:** aus `lib/constants.ts` importieren

### Verhalten

- Zwei Kategorien: „Allgemeine Fragen" und „Wechseloption"
- Tab zum Wechseln der Kategorie (kein verschachteltes Akkordeon)
- Nur ein Element gleichzeitig geöffnet pro Kategorie
- Höhenanimation mit Framer Motion

### Datenstruktur

```ts
type FAQEintrag = {
  frage: string
  antwort: string
}

type FAQKategorie = {
  id: string
  bezeichnung: string
  eintraege: FAQEintrag[]
}
```

### UI

```
[ Allgemeine Fragen ] [ Wechseloption ]   ← Tab-Auswahl

┌──────────────────────────────────────┐
│ Frage 1                          [+] │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│ Frage 2                          [−] │  ← geöffnet
│                                      │
│  Antworttext...                      │
│                                      │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│ Frage 3                          [+] │
└──────────────────────────────────────┘
```

- Icon: `Plus` / `Minus` von Lucide, dreht sich mit Übergang
- Untere Rahmenlinie bei jedem Element
- Hover: Hintergrund `#FFF0E1`

---

## 4. Versicherungsfall Schritte

**Datei:** `components/sections/Versicherungsfall.tsx`  
**Daten:** aus `lib/constants.ts` importieren

### Verhalten

- 5 statische Schritte (keine Interaktion)
- Nummerierte Karten-Layout mit Icons
- Desktop: 2–3 Spalten-Raster
- Mobile: Einspaltig mit vertikaler Verbindungslinie

### Datenstruktur

```ts
type Schritt = {
  nummer: number
  icon: string        // Name des Lucide-Icons
  titel: string
  beschreibung: string
}
```

### Die 5 Schritte

```
1. 🏥 Tierarzt wählen
   Freie Tierarztwahl – du kannst den Tierarzt deines Vertrauens aufsuchen.

2. 🧾 Rechnung anfordern
   GOT-konforme Rechnung mit allen Pflichtangaben (Diagnose, Chipnummer, Gebührenpositionen).

3. 📤 Rechnung einreichen
   Wähle: Erstattung direkt an dich ODER Direktabrechnung mit dem Tierarzt.

4. 💬 Rückfragen (optional)
   Bei Bedarf: direkte Kommunikation mit dem Tierarzt möglich (Schweigepflichtentbindung).

5. ✅ Erstattung erhalten
   Schnelle Abwicklung – Versicherungsfall abgeschlossen.
```

---

## 5. WhatsApp-Button (schwebend)

**Datei:** `components/ui/WhatsAppButton.tsx`

### Verhalten

- Auf allen Seiten sichtbar (in layout.tsx eingebunden)
- Fest unten rechts positioniert
- Klick → öffnet `https://wa.me/{NEXT_PUBLIC_WHATSAPP_NUMBER}`
- Tooltip „Jetzt beraten lassen" erscheint beim Hover (Desktop)
- Mobile: kein Tooltip, nur Icon

---

## 6. Header / Navbar

**Datei:** `components/layout/Header.tsx`

### Verhalten

- Sticky oben
- Scroll > 20px → Schatten erscheint
- Navbar-Links: sanftes Scrollen zu Sektionen (Anker-Links)
- Mobile: Hamburger → seitliches Drawer-Menü
- Logo-Klick → zurück nach oben (href="/")

### Navigationspunkte (mit Ankern)

```
Start                    → #hero
Vorteile                 → #vorteile
Vergleich Tarife         → #tarife
Im Versicherungsfall     → #versicherungsfall
FAQs                     → #faq
Wissenswertes            → #wissenswertes
```
