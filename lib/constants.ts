// ─────────────────────────────────────────────
// Allgemein / Navigation
// ─────────────────────────────────────────────
export const SITE = {
  name: 'HundeFAIRsichert',
} as const

export const NAV_LINKS = [
  { label: 'Start', href: '#hero' },
  { label: 'Vorteile', href: '#vorteile' },
  { label: 'Vergleich Tarife', href: '#tarife' },
  { label: 'Im Versicherungsfall', href: '#versicherungsfall' },
  { label: 'Wissenswertes', href: '#wissenswertes' },
  { label: 'FAQs', href: '#faq' },
] as const

// ─────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────
export const HERO = {
  headline: 'Dein Hund verdient den besten Schutz',
  subline:
    'Faire Krankenversicherung für deinen Hund – individuell, transparent und mit persönlicher Beratung.',
  cta: 'Jetzt Anfrage schicken',
} as const

// ─────────────────────────────────────────────
// Team
// ─────────────────────────────────────────────
export const TEAM = {
  title: 'Das sind wir',
  subtitle: 'Dein Team bei SENATOR Versicherungsmakler GmbH',
  // members: [TBD – Fotos und Namen vom Auftraggeber]
  members: [
    { name: '[TBD]', role: '[TBD]', image: '' },
    { name: '[TBD]', role: '[TBD]', image: '' },
    { name: '[TBD]', role: '[TBD]', image: '' },
  ] as Array<{ name: string; role: string; image: string }>,
} as const

// ─────────────────────────────────────────────
// Vorteile
// ─────────────────────────────────────────────
export interface VorteilItem {
  title: string
  description: string
  bullets?: string[]
}

export const VORTEILE = {
  title: 'Unsere Leistungen',
  subtitle: 'Zwei Schutzpakete – individuell auf deinen Hund abgestimmt',
  items: [
    {
      title: 'OP-Schutz',
      description:
        'Absicherung bei medizinisch notwendigen Operationen – egal ob durch Unfall, Krankheit oder Fehlentwicklung. Inklusive Nachbehandlung bis zu 15 Tage nach der OP.',
    },
    {
      title: 'Vollschutz',
      description:
        'Alles aus dem OP-Schutz plus Absicherung bei ambulanten Behandlungen ohne Operation. Auch alternative und komplementäre Heilmethoden wie Homöopathie oder Physiotherapie sind mitversichert.',
    },
    {
      title: 'Flexible Selbstbeteiligung',
      description: 'Wähle die Selbstbeteiligung, die zu dir passt:',
      bullets: [
        'Ohne Selbstbeteiligung',
        '10 % Selbstbeteiligung – maximal 1.500 € pro Rechnung',
        '20 % Selbstbeteiligung – maximal 3.000 € pro Rechnung',
      ],
    },
  ] satisfies VorteilItem[],
} as const

// ─────────────────────────────────────────────
// Tarifvergleich
// ─────────────────────────────────────────────
export type TarifToggle = 'OP-Schutz' | 'Vollschutz'
export type TarifStufe = 'Basis' | 'Smart' | 'Komfort' | 'Premium'

export const TARIF_TOGGLE_OPTIONS: [TarifToggle, TarifToggle] = [
  'OP-Schutz',
  'Vollschutz',
]

export const TARIF_STUFEN: TarifStufe[] = ['Basis', 'Smart', 'Komfort', 'Premium']

export interface TarifFeature {
  label: string
  included: [boolean, boolean, boolean, boolean] // Basis, Smart, Komfort, Premium
}

export interface TarifPlan {
  features: TarifFeature[]
  prices: [string, string, string, string] // Basis, Smart, Komfort, Premium
}

// [TBD – Leistungsdetails und Preise vom Auftraggeber]
export const TARIF_DATA: Record<TarifToggle, TarifPlan> = {
  'OP-Schutz': {
    features: [
      { label: 'Operationen nach Unfall', included: [true, true, true, true] },
      { label: 'Operationen nach Krankheit', included: [false, true, true, true] },
      { label: 'Nachbehandlung bis 15 Tage', included: [false, false, true, true] },
      { label: 'Freie Tierarztwahl', included: [true, true, true, true] },
      { label: 'Direktabrechnung Tierarzt', included: [false, false, true, true] },
      { label: 'Auslandsschutz', included: [false, false, false, true] },
    ],
    prices: ['[TBD]', '[TBD]', '[TBD]', '[TBD]'],
  },
  'Vollschutz': {
    features: [
      { label: 'Alle OP-Schutz-Leistungen', included: [true, true, true, true] },
      { label: 'Ambulante Behandlungen', included: [false, true, true, true] },
      { label: 'Vorsorgeuntersuchungen', included: [false, false, true, true] },
      { label: 'Alternative Heilmethoden', included: [false, false, true, true] },
      { label: 'Physiotherapie', included: [false, false, false, true] },
      { label: 'Auslandsschutz', included: [false, false, true, true] },
    ],
    prices: ['[TBD]', '[TBD]', '[TBD]', '[TBD]'],
  },
}

export const TARIF = {
  title: 'Vergleich unserer Tarife',
  subtitle: 'Finde den Tarif, der am besten zu deinem Hund passt',
  columnHeader: 'Leistung',
  highlightBadge: 'Beliebteste Wahl',
  priceLabel: 'Preis / Monat',
  wechseloption: {
    title: 'Wechseloption – Dein Upgrade ohne Risiko',
    badge: 'Einmalig zubuchbar',
    description:
      'Sichere dir beim Abschluss die Möglichkeit, einmalig in einen höherwertigen Tarif zu wechseln – ganz ohne erneute Gesundheitsprüfung deines Hundes. Zum Beispiel von Basis direkt zu Premium.',
    bullets: [
      'Nur einmal nutzbar während der Vertragslaufzeit',
      'Beim Abschluss zubuchbar',
      'Wechsel jederzeit in einen höherwertigen Tarif möglich',
    ],
    // price: [TBD]
  },
} as const

// ─────────────────────────────────────────────
// Versicherungsfall
// ─────────────────────────────────────────────
export interface VersicherungsfallStep {
  step: number
  title: string
  text: string
  bullets?: string[]
}

export const VERSICHERUNGSFALL = {
  title: 'Im Versicherungsfall',
  subtitle: 'So einfach funktioniert die Abwicklung',
  steps: [
    {
      step: 1,
      title: 'Tierarzt frei wählen',
      text: 'Für dich besteht freie Tierarztwahl. Muss das Tier tierärztlich behandelt werden, kannst du den Tierarzt oder die Tierklinik deines Vertrauens aufsuchen.',
    },
    {
      step: 2,
      title: 'GOT-konforme Rechnung anfordern',
      text: 'Die Rechnung des Tierarztes ist nach der Gebührenordnung für Tierärzte (GOT) zu erstellen und muss mindestens folgende Daten enthalten:',
      bullets: [
        'Name des Versicherungsnehmers (Tierhalter)',
        'Chipnummer / Tätowierungsnummer / Lebensnummer des Tieres (Sollte diese Markierung nicht vorhanden sein: Name, Farbe, Rasse des Tieres, Geburtsdatum und Geschlecht angeben)',
        'Diagnose',
        'Berechnete Leistungen aufgegliedert nach Gebührenpositionen mit dem jeweiligen Gebührensatz',
        'Datum der erbrachten Leistungen',
      ],
    },
    {
      step: 3,
      title: 'Erstattungsweg wählen',
      text: 'Als besonderen Service bieten wir die Direktabrechnung mit dem Tierarzt an. Du kannst wählen, ob du im Versicherungsfall die Erstattungskosten selbst erhalten möchtest oder direkt an den behandelnden Tierarzt bzw. die behandelnde Tierärztin gezahlt werden sollen.',
    },
    {
      step: 4,
      title: 'Direkte Kommunikation mit dem Tierarzt',
      text: 'Zusätzlich bieten wir die direkte Kommunikation mit dem Tierarzt bei Leistungsrückfragen an (Entbindung von der Schweigepflicht). Damit können eventuelle tiermedizinischen Rückfragen von unserer Seite direkt mit dem behandelnden Tierarzt bzw. mit der behandelnden Tierärztin geklärt werden.',
    },
    {
      step: 5,
      title: 'Schnelle Erstattung',
      text: 'Versicherungsfälle können so schnell und bequemer für dich abgeschlossen werden.',
    },
  ] satisfies VersicherungsfallStep[],
} as const

// ─────────────────────────────────────────────
// Wissenswertes – Hotspots
// ─────────────────────────────────────────────
export interface HotspotItem {
  id: number
  title: string
  bodyPart: string
  description: string
  frequency: string
  position: { x: number; y: number }
}

export const WISSENSWERTES = {
  title: 'Wissenswertes',
  subtitle: 'Die 10 häufigsten Behandlungen beim Hund in Deutschland',
  hotspots: [
    {
      id: 1,
      title: 'Kreuzbandriss',
      bodyPart: 'Kniegelenk',
      description:
        'Der Kreuzbandriss ist die häufigste Operation beim Hund. Besonders betroffen sind größere Rassen. Die Behandlung erfordert in den meisten Fällen einen chirurgischen Eingriff mit anschließender Physiotherapie.',
      frequency: 'Häufigste OP beim Hund in Deutschland',
      position: { x: 65, y: 70 },
    },
    {
      id: 2,
      title: 'Magendrehung (Magendilatation-Volvulus)',
      bodyPart: 'Magen',
      description:
        'Die Magendrehung ist ein lebensbedrohlicher Notfall, der sofortiges Handeln erfordert. Besonders gefährdet sind große Rassen mit tiefer Brust wie Deutsche Dogge oder Rottweiler.',
      frequency: 'Häufig bei großen Rassen',
      position: { x: 45, y: 50 },
    },
    {
      id: 3,
      title: 'Hüftgelenksdysplasie (HD)',
      bodyPart: 'Hüftgelenk',
      description:
        'Eine genetisch bedingte Fehlentwicklung des Hüftgelenks, die zu Schmerzen und Bewegungseinschränkungen führt. Betrifft vor allem große und mittelgroße Rassen.',
      frequency: 'Häufig bei großen und mittelgroßen Rassen',
      position: { x: 60, y: 60 },
    },
    {
      id: 4,
      title: 'Hauterkrankungen & Allergien',
      bodyPart: 'Haut / Fell',
      description:
        'Hauterkrankungen und Allergien gehören zu den häufigsten chronischen Erkrankungen beim Hund. Sie können durch Umweltfaktoren, Ernährung oder Parasiten ausgelöst werden.',
      frequency: 'Eine der häufigsten chronischen Erkrankungen',
      position: { x: 50, y: 30 },
    },
    {
      id: 5,
      title: 'Otitis (Ohrenentzündung)',
      bodyPart: 'Ohren',
      description:
        'Ohrenentzündungen treten besonders häufig bei Hunden mit Hängeohren auf. Sie können akut oder chronisch verlaufen und erfordern oft eine längere Behandlung.',
      frequency: 'Sehr häufig, besonders bei Schlappohrrassen',
      position: { x: 20, y: 20 },
    },
    {
      id: 6,
      title: 'Zahnerkrankungen',
      bodyPart: 'Zähne / Zahnfleisch',
      description:
        'Zahnstein, Parodontose und Zahnextraktionen sind bei Hunden weit verbreitet. Regelmäßige Zahnpflege kann das Risiko reduzieren, aber nicht immer verhindern.',
      frequency: 'Sehr häufig ab dem mittleren Alter',
      position: { x: 18, y: 35 },
    },
    {
      id: 7,
      title: 'Augenerkrankungen',
      bodyPart: 'Augen',
      description:
        'Häufige Augenerkrankungen beim Hund sind Katarakt (grauer Star), Entropium (eingerolltes Augenlid) und Trockenes Auge. Manche Rassen sind genetisch stärker gefährdet.',
      frequency: 'Häufig bei bestimmten Rassen',
      position: { x: 15, y: 25 },
    },
    {
      id: 8,
      title: 'Bandscheibenvorfall',
      bodyPart: 'Wirbelsäule',
      description:
        'Bandscheibenvorfälle können zu starken Schmerzen oder Lähmungserscheinungen führen. Besonders betroffen sind Rassen mit langen Rücken wie Dackel, Beagle oder Basset Hound.',
      frequency: 'Häufig bei Langzucht-Rassen',
      position: { x: 50, y: 45 },
    },
    {
      id: 9,
      title: 'Tumorerkrankungen',
      bodyPart: 'Verschiedene',
      description:
        'Tumore können bei Hunden an verschiedenen Körperstellen auftreten. Ältere Hunde sind besonders gefährdet. Eine frühe Erkennung durch regelmäßige Vorsorgeuntersuchungen ist entscheidend.',
      frequency: 'Häufig bei älteren Hunden',
      position: { x: 40, y: 40 },
    },
    {
      id: 10,
      title: 'Gastritis / Magenprobleme',
      bodyPart: 'Magen / Verdauung',
      description:
        'Erbrechen, Durchfall und Magenprobleme gehören zu den häufigsten Gründen für einen Tierarztbesuch. Ursachen können Ernährungsfehler, Fremdkörper oder Infektionen sein.',
      frequency: 'Häufigste Gründe für Tierarztbesuche',
      position: { x: 42, y: 52 },
    },
  ] satisfies HotspotItem[],
} as const

// ─────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────
export interface FaqItem {
  question: string
  answer: string
}

export const FAQ = {
  title: 'Häufig gestellte Fragen',
  categoryA: {
    title: 'Allgemeine Fragen',
    items: [
      { question: 'Was ist eine Hundekrankenversicherung?', answer: '[TBD]' },
      { question: 'Ab welchem Alter kann ich meinen Hund versichern?', answer: '[TBD]' },
      { question: 'Welche Erkrankungen sind ausgeschlossen?', answer: '[TBD]' },
      { question: 'Was passiert bei Vorerkrankungen?', answer: '[TBD]' },
      {
        question: 'Kann ich jeden Tierarzt aufsuchen?',
        answer:
          'Ja! Du hast freie Tierarztwahl. Du kannst den Tierarzt oder die Tierklinik deines Vertrauens aufsuchen.',
      },
      { question: 'Gibt es Wartezeiten?', answer: '[TBD]' },
    ] satisfies FaqItem[],
  },
  categoryB: {
    title: 'Wechseloption',
    items: [
      {
        question: 'Was ist die Wechseloption?',
        answer:
          'Die Wechseloption ist ein optionaler Zusatzbaustein, den du einmalig beim Abschluss deines Vertrages zubuchen kannst. Sie gibt dir das Recht, einmalig in einen höherwertigen Tarif zu wechseln – ohne erneute Gesundheitsprüfung deines Hundes.',
      },
      { question: 'Wie buche ich die Wechseloption?', answer: '[TBD]' },
      { question: 'Wann kann ich die Wechseloption nutzen?', answer: '[TBD]' },
      {
        question: 'Kann ich die Wechseloption mehrmals nutzen?',
        answer: 'Nein. Die Wechseloption kann nur einmal während der gesamten Vertragslaufzeit genutzt werden.',
      },
      {
        question: 'Von welchem Tarif kann ich in welchen wechseln?',
        answer:
          'Du kannst von jedem Tarif in einen höherwertigen Tarif wechseln. Beispiel: von Basis zu Smart, Komfort oder Premium.',
      },
      { question: 'Was kostet der Baustein?', answer: '[TBD]' },
    ] satisfies FaqItem[],
  },
} as const

// ─────────────────────────────────────────────
// CTA / Kontakt
// ─────────────────────────────────────────────
export const CTA = {
  title: 'Wir beraten dich gerne',
  subtitle: 'Unser Team steht dir persönlich zur Verfügung – kostenlos und unverbindlich.',
  button: 'Jetzt auf WhatsApp schreiben',
} as const

export const CONTACT = {
  email: 'support@hundefairsichert.de',
  // whatsapp: [TBD]
  // phone: [TBD]
} as const

// ─────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────
export const FOOTER = {
  company: 'SENATOR Versicherungsmakler GmbH',
  copyright: '© 2025 SENATOR Versicherungsmakler GmbH',
  links: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ],
} as const
