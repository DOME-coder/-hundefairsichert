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
  subtitle: 'Dein Team bei HundeFAIRsichert',
  description:
    'Bei HundeFAIRsichert dreht sich alles um das Wohl von Hund und Halter. Wir sind dein persönlicher Ansprechpartner, wenn es darum geht, für Sicherheit und Wohlbefinden zu sorgen – für dich und deinen Hund. Mit maßgeschneiderten Lösungen ermöglichen wir euch ein sorgenfreies Miteinander, damit ihr euch voll und ganz auf das konzentrieren könnt, was wirklich zählt: das gemeinsame Erleben unvergesslicher Momente.',
  members: [
    { name: 'Gianclaudio Sena', role: 'Geschäftsführer', image: '/images/team/team-6.png' },
    { name: 'Giuseppa Muscara', role: 'Kundenbetreuerin', image: '/images/team/team-2.png' },
    { name: 'Berkan Atac', role: 'Kundenbetreuer', image: '/images/team/team-3.png' },
    { name: 'Maria Russo', role: 'Kundenberaterin', image: '/images/team/team-1.png' },
    { name: 'Enza Sena', role: 'Kundenbetreuerin', image: '/images/team/team-4.png' },
    { name: 'Gesine Bischoff', role: 'Kundenbetreuerin', image: '/images/team/team-5.png' },
    { name: 'Sascha Bauer', role: 'Kundenbetreuer', image: '/images/team/team-9.png' },
    { name: 'Helena Curic', role: 'Kundenbetreuerin', image: '/images/team/team-7.png' },
    { name: 'Asena Yeker', role: 'Vertriebsassistentin', image: '/images/team/team-8.png' },
  ] as Array<{ name: string; role: string; image: string }>,
} as const

// ─────────────────────────────────────────────
// Vorteile (Produkte)
// ─────────────────────────────────────────────
export interface VorteilItem {
  title: string
  description: string
  bullets?: string[]
}

export const VORTEILE = {
  title: 'Möglichkeiten zur Absicherung',
  subtitle: 'Individueller Schutz – Wähle in beiden Produkten den passenden Tarif: Basis, Smart, Komfort oder Premium.',
  intro: 'Auch bei bester Fürsorge kann ein Hund krank werden oder einen Unfall erleiden – und tierärztliche Behandlungen können schnell sehr teuer werden. Operationen und andere Behandlungen gehen oft mit hohen Kosten einher. Seit der Anpassung der Gebührenordnung für Tierärztinnen und Tierärzte (GOT) im November 2022 sind die Tierarztkosten zudem erheblich gestiegen. Eine Hundekrankenversicherung schützt zuverlässig vor diesen finanziellen Belastungen und erstattet Kosten für notwendige tierärztliche Behandlungen nach Unfall, Krankheit oder Fehlentwicklung.',
  items: [
    {
      title: 'OP-Schutz',
      description:
        'Die OP-Versicherung deckt die Kosten für medizinisch notwendige Operationen aufgrund von Unfall, Krankheit oder Fehlentwicklung sowie Nachbehandlungen von bis zu 30 Tagen.',
    },
    {
      title: 'Vollschutz',
      description:
        'Die Krankenvollversicherung deckt neben den Kosten für Operationen auch die Kosten für notwendige Behandlungen ohne Operationen ab. Hierzu zählen auch alternative und komplementäre Behandlungsmethoden, z. B. Homöopathie.',
    },
    {
      title: 'Flexible Selbstbeteiligung',
      description: 'Alle Tarife sind mit oder ohne Selbstbeteiligung abschließbar. Neu ist die Deckelung der Selbstbeteiligung – für mehr Planbarkeit bei hohen Rechnungen:',
      bullets: [
        '10 % Selbstbeteiligung: maximal 500 € pro Rechnung',
        '20 % Selbstbeteiligung: maximal 1.000 € pro Rechnung',
      ],
    },
  ] satisfies VorteilItem[],
} as const

// ─────────────────────────────────────────────
// Vorteile und Leistungen (Benefit-Cards)
// ─────────────────────────────────────────────
export interface BenefitCard {
  title: string
  description: string
}

export const VORTEILE_LEISTUNGEN = {
  title: 'Vorteile und Leistungen',
  subtitle: 'Was unsere Hundekrankenversicherung leistet',
  items: [
    {
      title: 'OP-Leistungen',
      description: 'Im OP-Schutz und im Vollschutz werden bei Krankheit oder nach einem Unfall bis zu 100 % der Tierarztkosten für chirurgische Eingriffe unter Narkose (auch Teilnarkose) und deren Nachbehandlung von bis zu 30 Folgetagen unbegrenzt pro Jahr erstattet – abhängig vom gewählten Tarif. Ab Smart sind auch Leistungen für Zahnbehandlungen und chirurgische Behandlungen der Maulhöhle mit gesonderter Höchstleistung versichert.',
    },
    {
      title: 'Behandlungen bei Operationen',
      description: 'Der Vollschutz deckt zusätzlich ambulante und stationäre Tierarztbehandlungen bei Unfall oder Krankheit unabhängig von einer Operation mit ab. Wenn Ihr Hund beispielsweise wegen einer Durchfallerkrankung ein paar Tage in der Tierklinik bleiben muss oder die Behandlung von chronischen Erkrankungen (z. B. Stoffwechselerkrankung) in einer Tierarztpraxis erfolgen muss, sichert der Vollschutz ab.',
    },
    {
      title: 'Basisvorsorge',
      description: 'Die Vorsorgemaßnahmen Floh- & Zeckenbekämpfung, Entwurmungen, Impfungen (Empfehlung StiKo Vet) sowie die einmalige Kennzeichnung (Mikrochip) sind bereits im OP-Schutz ab dem Tarif Smart mit einer Höchstsumme versichert. Für diese Leistungen besteht keine Selbstbeteiligung und keine Wartezeit.',
    },
    {
      title: 'Vorsorgebonus',
      description: 'Gesunde Hunde profitieren von einem Zuschuss zur Basisvorsorge für leistungsfreie Versicherungsjahre: 50 Euro nach dem ersten und 150 Euro nach dem zweiten, unmittelbar darauffolgenden Jahr. Der Vorsorgebonus entfällt nach einem Jahr mit Leistungen für das Folgejahr.',
    },
    {
      title: 'Keine Wartezeit bei Unfällen',
      description: 'Unsere Hundekrankenversicherung übernimmt nach einem Unfall die Kosten der Behandlung – ganz ohne Wartezeit! Die Übernahme der Kosten für die versicherte Behandlung richtet sich dabei nach dem gewählten Tarif.',
    },
    {
      title: 'Erstattung nach GOT',
      description: 'Die Tierkrankenversicherung für Hunde zahlt – je nach Tarif – bis zum vierfachen Satz der Gebührenordnung für Tierärztinnen und Tierärzte (GOT). Bei Notfällen, zum Beispiel in der Nacht oder am Wochenende, wird auch die Notdienstgebühr erstattet.',
    },
    {
      title: 'Schutz für Jungtiere',
      description: 'Welpen, die bei Versicherungsbeginn maximal sechs Monate alt sind, haben keine Wartezeit und wir gewähren sofortigen Versicherungsschutz. Auch Vorsorgeleistungen wie Impfungen, die einmalige Kennzeichnung (Mikrochip) und das Ausstellen des EU-Heimtierausweises können gleich genutzt werden.',
    },
    {
      title: 'Physiotherapie',
      description: 'Physiotherapie ist im OP-Schutz (ab Smart) bis zu 60 Tage im Anschluss an eine Operation mit einer Höchstsumme von bis zu 500 Euro pro Versicherungsjahr versichert. Im Vollschutz übernehmen wir auch ohne vorhergehende Operation die Kosten für Physiotherapie durch eine Tierärztin oder einen Tierarzt oder mit Überweisung durch einen Therapeuten oder eine Therapeutin.',
    },
  ] satisfies BenefitCard[],
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
  values: [string, string, string, string]
}

export interface TarifPlan {
  features: TarifFeature[]
}

export const TARIF_DATA: Record<TarifToggle, TarifPlan> = {
  'OP-Schutz': {
    features: [
      { label: 'Jahreshöchstleistung', values: ['2.500 €', '5.000 €', '10.000 €', 'unbegrenzt'] },
      { label: 'Selbstbeteiligung', values: ['wählbar', 'wählbar', 'wählbar', 'wählbar'] },
      { label: 'Behandlungen ohne OP', values: ['✗', '✗', '✗', '✗'] },
      { label: 'Erstattung nach GOT', values: ['2-fach', '4-fach', '4-fach', '4-fach'] },
      { label: 'Nachbehandlungen nach OP', values: ['bis 20 Tage', 'bis 20 Tage', 'bis 30 Tage', 'bis 30 Tage'] },
      { label: 'Basisvorsorge', values: ['✗', 'bis 50 €', 'bis 100 €', 'bis 100 €'] },
      { label: 'Vorsorgebonus', values: ['✗', '50 € / 150 €', '50 € / 150 €', '50 € / 150 €'] },
      { label: 'Physiotherapie', values: ['✗', 'bis 150 €', 'bis 500 €', 'bis 500 €'] },
      { label: 'Zahnbehandlungen', values: ['✗', 'bis 1.000 €', 'bis 2.500 €', 'bis 5.000 €'] },
      { label: 'Bestimmte Behandlungen', values: ['✗', '500 € / Diagnose', '2.500 € / Diagnose', '5.000 € / Diagnose'] },
    ],
  },
  'Vollschutz': {
    features: [
      { label: 'Jahreshöchstleistung', values: ['2.500 €', '5.000 €', '10.000 €', 'unbegrenzt'] },
      { label: 'Selbstbeteiligung', values: ['wählbar', 'wählbar', 'wählbar', 'wählbar'] },
      { label: 'Behandlungen ohne OP', values: ['bis 1.000 €', 'bis 2.000 €', 'bis 4.000 €', 'bis 8.000 €'] },
      { label: 'Erstattung nach GOT', values: ['2-fach', '4-fach', '4-fach', '4-fach'] },
      { label: 'Nachbehandlungen nach OP', values: ['bis 20 Tage', 'bis 20 Tage', 'bis 30 Tage', 'bis 30 Tage'] },
      { label: 'Basisvorsorge', values: ['✗', 'bis 50 €', 'bis 100 €', 'bis 100 €'] },
      { label: 'Vorsorgebonus', values: ['✗', '50 € / 150 €', '50 € / 150 €', '50 € / 150 €'] },
      { label: 'Physiotherapie', values: ['✗', 'bis 150 €', 'bis 500 €', 'bis 500 €'] },
      { label: 'Zahnbehandlungen', values: ['✗', 'bis 1.000 €', 'bis 2.500 €', 'bis 5.000 €'] },
      { label: 'Bestimmte Behandlungen', values: ['✗', '500 € / Diagnose', '2.500 € / Diagnose', '5.000 € / Diagnose'] },
    ],
  },
}

export const TARIF = {
  title: 'Vergleich unserer Tarife',
  subtitle: 'Finde den Tarif, der am besten zu deinem Hund passt',
  columnHeader: 'Leistung',
  wartezeiten: {
    title: 'Wartezeiten im Überblick',
    subtitle: 'Damit du genau weißt, ab wann dein Schutz greift:',
    items: [
      'Jungtiere unter 6 Monate: keine Wartezeit',
      'Unfall: keine Wartezeit – der Schutz gilt sofort',
      'Basisvorsorge: keine Wartezeit',
      'Krankheit & Fehlentwicklung: 3 Monate Wartezeit',
      'Chirurgische Kastration bzw. Sterilisation & Notkaiserschnitt: 3 Monate Wartezeit',
    ],
  },
  wannZahlt: {
    title: 'Wann zahlt die Hundekrankenversicherung?',
    zahlt: [
      'Dein Hund nach einem Unfall operiert werden muss, z. B. wegen eines Kreuzbandrisses beim Toben.',
      'Eine Operation wegen einer Krankheit erforderlich ist, z. B. die Entfernung von Hauttumoren.',
      'Dir Kosten durch Behandlungen ohne Operation und Medikamente entstanden sind, z. B. wegen einer Ohrenentzündung – sofern der Vollschutz gewählt wurde.',
      'Eine chirurgische Kastration bzw. Sterilisation durchgeführt wird, auch ohne medizinische Indikation (ab Tarif Smart).',
      'Ein einmaliger Notkaiserschnitt bei einer trächtigen Hündin notwendig ist.',
      'Zahnbehandlungen oder chirurgische Behandlungen der Maulhöhle notwendig sind (z. B. Zahnextraktion, Zahnfüllung, Wurzelbehandlung).',
    ],
    zahltNicht: [
      'Kosten durch spezielles Diät- und Ergänzungsfuttermittel entstehen.',
      'Medizinisch nicht notwendige Behandlungen vorgenommen werden, z. B. Operationen zur Herstellung des Rassestandards.',
      'Eine Selbstbeteiligung vereinbart ist – die Kosten in Höhe der Selbstbeteiligung müssen selbst getragen werden.',
      'Ein Krankheitsfall oder eine Fehlentwicklung während der Wartezeit auftritt.',
      'Für die Korrektur oder Behandlung des brachycephalen Syndroms (Kurz- und Rundköpfigkeit).',
    ],
  },
  wechseloption: {
    title: 'Zusatzbaustein Wechseloption',
    badge: 'Einmalig zubuchbar',
    description:
      'Du hast einmalig bei einem Erstabschluss der neuen Hundekrankenversicherung die Möglichkeit, den Zusatzbaustein „Wechseloption" in deinen Vertrag einzuschließen. Du kannst den Baustein einmalig nutzen, um die Leistungen in deinem Vertrag zu verbessern.',
    bullets: [
      'Leistungsverbesserungen ohne erneute Gesundheitsprüfung',
      'Einmalig während der gesamten Vertragslaufzeit nutzbar – keine Frist',
      'Ohne Zusatzbaustein ist eine Verbesserung nur mit erneuter Gesundheitsprüfung möglich',
      'Für neu hinzukommende Leistungen greifen die Wartezeiten',
    ],
  },
} as const

// ─────────────────────────────────────────────
// Extra Leistungen
// ─────────────────────────────────────────────
export interface ExtraLeistungItem {
  image: string
  title: string
  text: string
}

export const EXTRA_LEISTUNGEN = {
  title: 'Extra Leistungen',
  subtitle: 'Zusätzliche Vorteile für deinen Hund',
  items: [
    {
      image: '/images/hunde/dog-leash.jpg',
      title: 'Lebenslange Absicherung',
      text: 'Wir versichern Hunde ab der achten Lebenswoche – ohne Maximalalter und mit gleichbleibenden Leistungen im Alter. Zudem verzichten wir ab dem vierten Versicherungsjahr auf unser ordentliches Kündigungsrecht zum Ablauf sowie auf unser Kündigungsrecht im Versicherungsfall.',
    },
    {
      image: '/images/hunde/airplane.jpg',
      title: 'Schutz im Ausland',
      text: 'Der Versicherungsschutz für Hunde gilt auch im Ausland, und zwar bis zu zwölf Monate bei weltweiten Reisen. Erstattet werden auch versicherte Behandlungen, die gezielt im Ausland durchgeführt werden.',
    },
    {
      image: '/images/hunde/vet-desk.jpg',
      title: 'Telemedizin',
      text: 'Bevor spätabends ein Besuch bei einer Tierarztpraxis notwendig ist, kann auch per Smartphone oder Telefon eine digitale Sprechstunde direkt mit einem niedergelassenen Tierarzt genutzt werden. Wir übernehmen auch die Kosten für eine telemedizinische Beratung.',
    },
    {
      image: '/images/hunde/puppy.jpg',
      title: 'Freie Tierarztwahl & Direktabrechnung',
      text: 'Die Tierarztpraxis bzw. Tierklinik kann frei gewählt werden. Damit nach einer Operation die Genesung im Mittelpunkt stehen kann, übernehmen wir gerne die Direktabrechnung mit der Tierarztpraxis oder Klinik.',
    },
  ] satisfies ExtraLeistungItem[],
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
      text: 'Für dich besteht freie Tierarztwahl. Muss dein Hund tierärztlich behandelt werden, kannst du den Tierarzt oder die Tierklinik deines Vertrauens aufsuchen.',
    },
    {
      step: 2,
      title: 'GOT-konforme Rechnung anfordern',
      text: 'Die Rechnung des Tierarztes ist nach der Gebührenordnung für Tierärztinnen und Tierärzte (GOT) zu erstellen und muss mindestens folgende Daten enthalten:',
      bullets: [
        'Name des Versicherungsnehmers (Tierhalter)',
        'Chipnummer / Tätowierungsnummer / Lebensnummer des Tieres',
        'Diagnose',
        'Berechnete Leistungen aufgegliedert nach Gebührenpositionen mit dem jeweiligen Gebührensatz',
        'Datum der erbrachten Leistungen',
      ],
    },
    {
      step: 3,
      title: 'Erstattungsweg wählen',
      text: 'Als besonderen Service bieten wir die Direktabrechnung mit dem Tierarzt an. Du kannst wählen, ob du im Versicherungsfall die Erstattungskosten selbst erhalten möchtest oder direkt an den behandelnden Tierarzt gezahlt werden sollen.',
    },
    {
      step: 4,
      title: 'Direkte Kommunikation mit dem Tierarzt',
      text: 'Zusätzlich bieten wir die direkte Kommunikation mit dem Tierarzt bei Leistungsrückfragen an (Entbindung von der Schweigepflicht). Damit können eventuelle tiermedizinische Rückfragen direkt mit dem behandelnden Tierarzt geklärt werden.',
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
  leistung: string
  kosten: string
  frequency: string
  position: { x: number; y: number }
}

export const WISSENSWERTES = {
  title: 'Wissenswertes',
  subtitle: 'Die 9 häufigsten Behandlungen beim Hund in Deutschland',
  hotspots: [
    {
      id: 1,
      title: 'Hauttumore',
      bodyPart: 'Haut / Gewebe',
      description: 'Sie kommen vor allem bei älteren Hunden häufiger vor. Bei Geschwulsten muss es sich aber nicht zwangsläufig um Krebs handeln: Viele Tumore sind gutartig, zum Beispiel die Lipome (Fettgeschwulste).',
      leistung: 'Operative Entfernung von Hauttumoren. Nachbehandlung sowie Aufenthalt in der Tierklinik je nach Tarif bis zu 30 Tagen nach der OP.',
      kosten: 'ca. 1.200 bis 1.900 €',
      frequency: 'Häufig bei älteren Hunden',
      position: { x: 38, y: 50 },
    },
    {
      id: 2,
      title: 'Magendrehung',
      bodyPart: 'Magen',
      description: 'Bei einer Magendrehung dreht sich der Magen um die eigene Achse. Dadurch können Blutgefäße abgeschnürt werden – es handelt sich um einen akuten Notfall, der schnell behandelt werden muss.',
      leistung: 'Die operative Behandlung einer Magendrehung ist in allen Tarifen mitversichert. Nachbehandlung je nach Tarif bis zu 30 Tagen.',
      kosten: 'ca. 3.500 bis 5.000 €',
      frequency: 'Häufig bei großen Rassen',
      position: { x: 48, y: 65 },
    },
    {
      id: 3,
      title: 'Kreuzbandriss',
      bodyPart: 'Kniegelenk',
      description: 'Ein Kreuzbandriss gehört zu den häufigsten orthopädischen Verletzungen beim Hund. Er kann z. B. beim Toben, Springen oder unglücklichen Umknicken entstehen und führt häufig zu starken Schmerzen und Lahmheit.',
      leistung: 'Eine Operation nach einem Unfall ist in allen Tarifen mitversichert. Nachbehandlung je nach Tarif bis zu 30 Tagen. Physiotherapie: 300 €.',
      kosten: 'ca. 2.500 bis 3.500 €',
      frequency: 'Häufigste OP beim Hund',
      position: { x: 28, y: 78 },
    },
    {
      id: 4,
      title: 'Arthrose',
      bodyPart: 'Gelenke',
      description: 'Arthrose ist eine häufig schmerzhafte Erkrankung der Gelenke. Ursachen können z. B. Übergewicht, Fehlbelastungen oder auch eine genetische Veranlagung sein. Die beste Vorbeugung ist eine gesunde, an den Hund angepasste Bewegung.',
      leistung: 'Im Vollschutz bis zu 8.000 € jährlich für Heilbehandlungen. Alternative Heilmethoden (z. B. Akupunktur) sowie Physiotherapie bis 500 € je Versicherungsjahr.',
      kosten: 'ca. 700 € jährlich',
      frequency: 'Häufig bei älteren Hunden',
      position: { x: 32, y: 62 },
    },
    {
      id: 5,
      title: 'Ohrenentzündung',
      bodyPart: 'Ohren',
      description: 'Hunde mit Schlappohren sind besonders anfällig für Ohrenentzündungen, weil sich Wärme und Feuchtigkeit leichter stauen. Wenn Ihr Hund häufig den Kopf schüttelt und sich dunkles Sekret im Ohr bildet, sollten Sie zum Tierarzt gehen.',
      leistung: 'Im Vollschutz sind je nach Tarif bis zu 8.000 € pro Jahr für Heilbehandlungen, Untersuchungen, Medikamente abgedeckt.',
      kosten: 'bis zu 550 €',
      frequency: 'Sehr häufig bei Schlappohrrassen',
      position: { x: 72, y: 22 },
    },
    {
      id: 6,
      title: 'Grauer Star',
      bodyPart: 'Augen',
      description: 'Beim Grauen Star (Katarakt) trübt sich die Augenlinse ein. Das Auge wirkt dadurch grau. Je nach Stärke der Trübung kann ein Hund dadurch schlecht sehen oder sogar erblinden.',
      leistung: 'Operationen aufgrund einer Krankheit sind in allen Tarifen mitversichert. Nachbehandlung je nach Tarif bis zu 30 Tagen.',
      kosten: 'bis zu 2.800 €',
      frequency: 'Häufig bei älteren Hunden',
      position: { x: 80, y: 25 },
    },
    {
      id: 7,
      title: 'Zahnextraktion',
      bodyPart: 'Zähne / Maul',
      description: 'Das Zähne ziehen beim Hund ist ein chirurgischer Routineeingriff. Dennoch erfordert dieser viel Sorgfalt und Fachwissen. Dadurch können hohe Kosten entstehen.',
      leistung: 'Die Entfernung von Zähnen ist in allen Tarifen ab Smart unter Voll- oder Teilnarkose mitversichert. Nachbehandlung je nach Tarif bis zu 30 Tagen.',
      kosten: 'bis zu 1.000 €',
      frequency: 'Sehr häufig ab mittlerem Alter',
      position: { x: 82, y: 38 },
    },
    {
      id: 8,
      title: 'Zecken (Borreliose)',
      bodyPart: 'Wirbelsäule / Rücken',
      description: 'Für viele von Zecken übertragenen Infektionskrankheiten gibt es keine Präventivmaßnahmen. Eine Ausnahme ist die Borreliose, gegen die du deinen Hund impfen lassen kannst.',
      leistung: 'Frühzeitig erkannt, ist die Erkrankung Borreliose gut durch spezielle Antibiotika therapierbar. In allen Tarifen ab Smart bis zu 100 € für Vorsorgemaßnahmen.',
      kosten: 'bis 500 €',
      frequency: 'Häufig in Zeckengebieten',
      position: { x: 50, y: 38 },
    },
    {
      id: 9,
      title: 'Giftköder / Schnittverletzungen',
      bodyPart: 'Verschiedene',
      description: 'Hat dein Hund ein vergiftetes Leckerli im Park gefressen? Sofort den Tierarzt kontaktieren. Bei Unfällen wie einer Schnittverletzung oder einem Giftköder entfällt die Wartezeit.',
      leistung: 'Die operative Versorgung einer Schnittverletzung sowie die operative Entfernung von Giftködern ist in allen Tarifen mitversichert. Keine Wartezeit bei Unfällen.',
      kosten: 'bis zu 800 €',
      frequency: 'Notfälle – keine Wartezeit',
      position: { x: 52, y: 50 },
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
  subtitle: 'Hier findest du häufig gestellte Fragen rund um das Thema Hundeversicherung und Wechselbaustein',
  categoryA: {
    title: 'Hundeversicherung',
    items: [
      {
        question: 'Was ist der Unterschied zwischen OP-Schutz und Vollschutz?',
        answer: 'Der OP-Schutz übernimmt die Kosten für medizinisch notwendige Operationen unter Narkose (auch Teilnarkose) inklusive der versicherten Nachbehandlung. Der Vollschutz deckt darüber hinaus auch Behandlungen ohne Operation (ambulant und stationär) sowie Medikamente ab – bis zu einer tarifabhängigen Höchstsumme. Je nach Tarif können außerdem weitere Leistungen wie z. B. Physiotherapie mitversichert sein.',
      },
      {
        question: 'Welche Kosten übernimmt die Hundekrankenversicherung grundsätzlich?',
        answer: 'Sie erstattet versicherte Tierarztkosten für notwendige Behandlungen wegen Unfall, Krankheit oder Fehlentwicklung – inklusive Diagnostik, ggf. Operationen und der medizinisch notwendigen Nachbehandlung im vereinbarten Zeitraum. Umfang und Erstattung richten sich dabei nach dem gewählten Tarif.',
      },
      {
        question: 'Gibt es eine Jahreshöchstleistung und wie unterscheiden sich die Tarife?',
        answer: 'Ja. Sowohl im OP-Schutz als auch im Vollschutz gilt je nach Tarif eine Jahreshöchstleistung: 2.500 € (Basis), 5.000 € (Smart), 10.000 € (Komfort) oder unbegrenzt (Premium) pro Versicherungsjahr.',
      },
      {
        question: 'Welche Wartezeiten gelten?',
        answer: 'Bei Unfällen gibt es keine Wartezeit – der Schutz gilt sofort. Für Krankheit und Fehlentwicklung gilt eine Wartezeit von 3 Monaten. Für chirurgische Kastration bzw. Sterilisation und Notkaiserschnitt ebenfalls 3 Monate. Für Jungtiere unter 6 Monaten besteht keine Wartezeit.',
      },
      {
        question: 'Wie funktioniert die Selbstbeteiligung (inkl. Deckelung)?',
        answer: 'Du kannst die Selbstbeteiligung wahlweise mit 0 %, 10 % oder 20 % vereinbaren. Bei 10 % zahlst du 10 % der Tierarztrechnung selbst, jedoch maximal 500 € pro Rechnung. Bei 20 % sind es maximal 1.000 € pro Rechnung. Dadurch bleibt dein Eigenanteil auch bei hohen Rechnungen planbar.',
      },
      {
        question: 'Wie hoch sind die Leistungen für Behandlungen ohne OP im Vollschutz?',
        answer: 'Im Vollschutz sind Behandlungen ohne Operation bis zu 1.000 € (Basis), 2.000 € (Smart), 4.000 € (Komfort) bzw. 8.000 € (Premium) pro Versicherungsjahr versichert.',
      },
      {
        question: 'Welche Vorsorgeleistungen sind enthalten und was ist der Vorsorgebonus?',
        answer: 'Ab Smart sind Basisvorsorge-Leistungen (z. B. Floh- & Zeckenbekämpfung, Entwurmung, Impfungen nach StiKo Vet sowie die einmalige Kennzeichnung per Mikrochip) bis zu 50 € (Smart) bzw. bis zu 100 € (Komfort/Premium) pro Versicherungsjahr versichert. Zusätzlich gibt es einen Vorsorgebonus: 50 € nach 1 und 150 € nach 2 unmittelbar aufeinanderfolgenden leistungsfreien Jahren.',
      },
    ] satisfies FaqItem[],
  },
  categoryB: {
    title: 'Wechseloption',
    items: [
      {
        question: 'Wann kann ich den Zusatzbaustein „Wechseloption" abschließen?',
        answer: 'Den Zusatzbaustein „Wechseloption" kannst du einmalig beim ersten Abschluss der neuen Hundekrankenversicherung abschließen – entweder im Neuantrag oder im Ersatzantrag.',
      },
      {
        question: 'Welche Wechseloptionen bietet der Zusatzbaustein?',
        answer: 'Mit dem Zusatzbaustein sind Vertragsverbesserungen einmalig ohne erneute Gesundheitsprüfung möglich. Dazu zählen der Wechsel der Linie, der Wechsel zwischen OP-Schutz und Vollschutz sowie die Reduzierung der Selbstbeteiligung.',
      },
      {
        question: 'Ist der Wechsel in eine höherwertige Linie ohne Gesundheitsprüfung möglich?',
        answer: 'Ja – allerdings nur, wenn der Zusatzbaustein „Wechseloption" abgeschlossen wurde.',
      },
      {
        question: 'Ist ein Wechsel auch ohne den Zusatzbaustein möglich?',
        answer: 'Ja. Leistungsverbesserungen sind auch ohne Zusatzbaustein möglich – dann jedoch nur mit erneuter Gesundheitsprüfung. Diese kann im Folgevertrag ggf. zu Leistungsausschlüssen führen.',
      },
      {
        question: 'Gibt es Wartezeiten für den Wechselbaustein?',
        answer: 'Teilweise. Für neu hinzukommende Leistungen greifen die jeweiligen Wartezeiten (z. B. beim Wechsel vom OP-Schutz in den Vollschutz).',
      },
      {
        question: 'Gibt es eine Frist für den Einsatz des Wechselbausteins?',
        answer: 'Nein. Der Zusatzbaustein „Wechseloption" kann einmalig und ohne feste Frist während der gesamten Vertragslaufzeit genutzt werden.',
      },
      {
        question: 'Sind mehrere Verbesserungen gleichzeitig möglich?',
        answer: 'Ja, mehrere Verbesserungen bzw. Wechsel sind gleichzeitig möglich.',
      },
    ] satisfies FaqItem[],
  },
} as const

// ─────────────────────────────────────────────
// CTA / Kontakt
// ─────────────────────────────────────────────
export const CTA = {
  title: 'Wir beraten dich gerne',
  subtitle: 'Unsere Experten stehen dir mit Rat und Tat zur Seite – ob bei konkreten Fragen oder individuellen Anliegen. Lass uns gemeinsam die beste Lösung für dich finden.',
  button: 'Jetzt auf WhatsApp schreiben',
} as const

export const CONTACT = {
  email: 'support@hundefairsichert.de',
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
