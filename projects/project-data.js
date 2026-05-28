window.PROJECT_TEXTS = {
  de: {
    projectNotFoundTitle: "Projekt nicht gefunden",
    projectNotFoundBody:
      "Das angeforderte Projekt ist nicht vorhanden. Bitte zurück zur Übersicht wechseln.",
    goToOverview: "Zur Übersicht",
    backToHome: "Zur Hauptseite",
    imprint: "Impressum",
    privacy: "Datenschutzerklärung",
    categoryLabel: "Kategorie",
    statusLabel: "Status",
    techLabel: "Technologien",
    embedTitle: "Direkte Einbindung",
    openProject: "Projekt direkt öffnen",
    qrTitle: "QR-Code",
    qrMissing: "Kein QR-Code verfügbar, da noch kein Ziel-Link hinterlegt ist.",
    screenshotsTitle: "Bilder",
    linksTitle: "Verlinkungen",
    noLinksYet: "Noch keine externen Links verfügbar.",
    linkTypes: {
      website: "Webseite",
      external: "Externer Link",
      embed: "Einbindung",
      steam: "Steam",
      itchio: "itch.io",
      appstore: "App Store",
      playstore: "Play Store",
      download: "Direkt-Download",
    },
    backToProject: "Zur Projektseite",
    privacyHeading: "Datenschutzerklärung",
    privacyOverviewTitle: "Überblick",
    privacyDataTitle: "Verarbeitete Daten",
    privacyServicesTitle: "Externe Dienste",
    privacyRetentionTitle: "Speicherdauer",
    privacyContactTitle: "Kontakt",
    privacyDefaultOverview:
      "Diese Projektseite enthält nur projektbezogene Informationen und Verlinkungen.",
    privacyDefaultData:
      "Beim Besuch können technisch notwendige Verbindungsdaten verarbeitet werden.",
    privacyDefaultServices:
      "Falls externe Inhalte eingebunden sind, gelten zusätzlich die Datenschutzregeln der jeweiligen Anbieter.",
    privacyDefaultRetention:
      "Es werden auf dieser Projektseite keine zusätzlichen Benutzerkonten geführt.",
    privacyDefaultContact:
      "Für Datenschutzanfragen nutze bitte die Kontaktdaten im Impressum.",
    category: {
      website: "Webseite",
      webgame: "Web-Spiel",
      app: "App",
      game: "Spiel",
    },
  },
  en: {
    projectNotFoundTitle: "Project not found",
    projectNotFoundBody:
      "The requested project is not available. Please return to the overview.",
    goToOverview: "Go to overview",
    backToHome: "Back to home",
    imprint: "Imprint",
    privacy: "Privacy policy",
    categoryLabel: "Category",
    statusLabel: "Status",
    techLabel: "Technologies",
    embedTitle: "Direct embed",
    openProject: "Open project directly",
    qrTitle: "QR code",
    qrMissing: "No QR code available because no target link is defined yet.",
    screenshotsTitle: "Images",
    linksTitle: "Links",
    noLinksYet: "No external links available yet.",
    linkTypes: {
      website: "Website",
      external: "External link",
      embed: "Embed",
      steam: "Steam",
      itchio: "itch.io",
      appstore: "App Store",
      playstore: "Play Store",
      download: "Direct download",
    },
    backToProject: "Back to project page",
    privacyHeading: "Privacy policy",
    privacyOverviewTitle: "Overview",
    privacyDataTitle: "Processed data",
    privacyServicesTitle: "External services",
    privacyRetentionTitle: "Retention",
    privacyContactTitle: "Contact",
    privacyDefaultOverview:
      "This project page contains only project-related information and links.",
    privacyDefaultData:
      "When visiting, technically required connection data may be processed.",
    privacyDefaultServices:
      "If external content is embedded, the privacy rules of those providers also apply.",
    privacyDefaultRetention:
      "No additional user accounts are maintained on this project page.",
    privacyDefaultContact:
      "For privacy requests, use the contact details in the imprint.",
    category: {
      website: "Website",
      webgame: "Web game",
      app: "App",
      game: "Game",
    },
  },
};

window.PROJECTS = {
  "energie-bewusstsein": {
    type: "website",
    name: { de: "energie-bewusstsein.de", en: "energie-bewusstsein.de" },
    status: { de: "Live", en: "Live" },
    tech: "HTML, CSS, JavaScript",
    description: {
      de: "Informationsportal zum Thema Energie mit Fokus auf alltagsnahe Tipps.",
      en: "Energy information portal focused on practical day-to-day tips.",
    },
    embedUrl: "https://energie-bewusstsein.de",
    images: [
      "../images/haus-open.png",
      "../images/haus-modell.png",
      "../images/energie-version1-wireframe.png",
    ],
    links: [
      {
        label: { de: "Live-Seite", en: "Live site" },
        url: "https://energie-bewusstsein.de",
        type: "website",
      },
    ],
  },
  "wanderclub-edelweiss": {
    type: "website",
    name: { de: "wanderclub-edelweiss.de", en: "wanderclub-edelweiss.de" },
    status: { de: "Live", en: "Live" },
    tech: "WordPress",
    description: {
      de: "Vereinsseite mit überarbeitetem Design und angepasster Struktur.",
      en: "Club website with refreshed design and tailored structure.",
    },
    embedUrl: "https://wanderclub-edelweiss.de",
    images: [],
    links: [
      {
        label: { de: "Live-Seite", en: "Live site" },
        url: "https://wanderclub-edelweiss.de",
        type: "website",
      },
    ],
  },
  "i-need-beach": {
    type: "website",
    name: { de: "I need beach", en: "I need beach" },
    status: { de: "Live", en: "Live" },
    tech: "HTML, CSS, JavaScript, Leaflet",
    description: {
      de: "Web-App zur Strandsuche mit Kartenansicht und Navigation.",
      en: "Web app for beach discovery with map and navigation support.",
    },
    embedUrl: "https://lenamm12.github.io/iNeedBeach/",
    images: ["../images/ineedbeach.png"],
    links: [
      {
        label: { de: "Live-Seite", en: "Live site" },
        url: "https://lenamm12.github.io/iNeedBeach/",
        type: "website",
      },
    ],
  },
  "country-search": {
    type: "website",
    name: { de: "Country Search", en: "Country Search" },
    status: { de: "Live", en: "Live" },
    tech: "React, TypeScript",
    description: {
      de: "Ländersuche mit Filtern für Reise- und Umzugsentscheidungen.",
      en: "Country search with filters for travel and relocation decisions.",
    },
    embedUrl: "https://lenamm12.github.io/country-search/",
    images: ["../images/countrysearch.png"],
    links: [
      {
        label: { de: "Live-Seite", en: "Live site" },
        url: "https://lenamm12.github.io/country-search/",
        type: "website",
      },
    ],
  },
  "mood-matrix": {
    type: "app",
    name: { de: "Mood Matrix", en: "Mood Matrix" },
    status: { de: "In Arbeit", en: "In progress" },
    tech: "Flutter",
    description: {
      de: "Stimmungstracker auf Basis einer mehrdimensionalen Mood-Matrix.",
      en: "Mood tracker based on a multi-dimensional mood matrix.",
    },
    images: [],
    links: [],
  },
  carelog: {
    type: "app",
    name: { de: "CareLog", en: "CareLog" },
    status: { de: "In Arbeit", en: "In progress" },
    tech: "Flutter",
    description: {
      de: "Self-Care-Tracking mit Verwaltung persönlicher Produkte.",
      en: "Self-care tracking with personal product management.",
    },
    images: [],
    links: [],
  },
  "csv-to-healthconnect": {
    type: "app",
    name: {
      de: "CSV to Health Connect",
      en: "CSV to Health Connect",
    },
    status: { de: "Live", en: "Live" },
    tech: "Flutter, Health Connect",
    description: {
      de: "CSV-Import für Google Health Connect mit Spaltenzuordnung und Duplikatprüfung.",
      en: "CSV importer for Google Health Connect with column mapping and duplicate checks.",
    },
    images: [],
    links: [
      {
        label: { de: "Play Store", en: "Play Store" },
        url: "https://play.google.com/store/apps/details?id=de.jelestudios.csv_to_healthconnect",
        type: "playstore",
      },
    ],
  },
  "cube-dice-game": {
    type: "game",
    name: { de: "3D-Würfel-Spiel", en: "3D Dice Game" },
    status: { de: "In Arbeit", en: "In progress" },
    tech: "Godot",
    description: {
      de: "3D-Spielkonzept mit Würfelmechanik.",
      en: "3D game concept with dice mechanics.",
    },
    images: [],
    links: [],
  },
  "fantasy-farm-sim": {
    type: "game",
    name: {
      de: "Fantasy Farming Simulation",
      en: "Fantasy Farming Simulation",
    },
    status: { de: "In Planung", en: "Planned" },
    tech: "Godot",
    description: {
      de: "Simulation mit Farming- und Fantasy-Elementen.",
      en: "Simulation with farming and fantasy elements.",
    },
    images: [],
    links: [],
  },
};
