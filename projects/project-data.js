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
    detailsTitle: "Details",
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
    privacyPersonTitle: "Verantwortlicher und Datenschutzbeauftragter",
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
    detailsTitle: "Details",
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
    privacyPersonTitle: "Responsible and data protection officer",
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
    details: [
      {
        title: {
          de: "Idee und Entwicklung",
          en: "Idea and development",
        },
        paragraphs: {
          de: [
            "Eine auf altem PHP basierte Webseite zum Thema Energiebewusstsein ist in ein neues Infoportal verwandelt worden. Das Kernelement war ein interaktives 3D-Modell eines Hauses mit Blender, das mit three.js und Raycasting Tipps und Infos zu angesprochenen Elementen im Modell gab, um Nutzerinnen und Nutzern beim Sparen von Energie, Strom, Wasser und Kosten zu helfen.",
            "Das Design wurde in Figma erstellt und zeigt drei Versionen. Die finale Version wurde jeweils im Dark Mode und in mobiler Ansicht ausgearbeitet. Links unten befindet sich außerdem ein Style Guide zur Website.",
          ],
          en: [
            "An old PHP-based website about energy awareness was transformed into a new information portal. The core element was an interactive 3D house model built with Blender, three.js, and raycasting to provide tips and information for selected model elements and help users save energy, electricity, water, and costs.",
            "The design was created in Figma and includes three versions. The final version was also prepared in dark mode and mobile view, including a style guide for the website.",
          ],
        },
        embeds: [
          {
            title: {
              de: "Figma-Design energie-bewusstsein.de",
              en: "Figma design energie-bewusstsein.de",
            },
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLR6TZ01XHfAm4ttpKgtgdT%2FEnergie-bewusstsein%3Fnode-id%3D0%253A1%26t%3Dx5LE9SOw8yQgk5oz-1",
          },
        ],
      },
      {
        title: { de: "Version 2", en: "Version 2" },
        paragraphs: {
          de: [
            "Nach Abschluss der Bachelorarbeit und des Studiums verlief sich das Projekt. Ich war aber lange nicht zufrieden damit. Daher habe ich Version 2 entwickelt, bei der sich das Modell und die Informationen nicht eine Seite teilen, sondern das Modell separat aufrufbar ist.",
            "Nach eingehender Überlegung wurde das Modell entfernt, da es zu viele Ressourcen im Browser verbraucht. Sollte in Zukunft eine leichtere, schnellere Methode möglich sein, kann das Modell wieder eingebunden werden.",
          ],
          en: [
            "After finishing my bachelor's thesis and studies, the project lost momentum, but I was not satisfied with the result for a long time. I therefore developed version 2, where the model and information no longer share one page and the model can be opened separately.",
            "After further review, the model was removed because it consumed too many browser resources. If a lighter and faster method becomes practical in the future, the model can be integrated again.",
          ],
        },
      },
    ],
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
    details: [
      {
        title: {
          de: "Was ist der Wanderclub Edelweiß",
          en: "What is Wanderclub Edelweiss",
        },
        paragraphs: {
          de: [
            "Der Wanderclub Edelweiß ist ein Verein in Sankt Ingbert-Rohrbach, der jeden Monat Wanderungen und jährlich Feste anbietet. Jede Woche finden sich zahlreiche Mitglieder und Nicht-Mitglieder in der Wanderhütte ein.",
          ],
          en: [
            "Wanderclub Edelweiss is a club in Sankt Ingbert-Rohrbach that offers monthly hikes and annual events. Every week, many members and non-members meet at the hiking hut.",
          ],
        },
      },
      {
        title: { de: "Idee", en: "Idea" },
        paragraphs: {
          de: [
            "Als Tochter des Schriftführers und des Verantwortlichen für die Website habe ich eine neue Version der Website erstellt, die auch für jüngere und neue Mitglieder interessant gestaltet ist.",
          ],
          en: [
            "As the daughter of the secretary and the person responsible for the website, I created a new website version designed to feel interesting for younger and new members as well.",
          ],
        },
      },
      {
        title: { de: "Ergebnis", en: "Result" },
        paragraphs: {
          de: [
            "Das Ergebnis ist eine klarere Vereinsseite mit angepasster Struktur und einem überarbeiteten WordPress-Template.",
          ],
          en: [
            "The result is a clearer club website with a tailored structure and a refreshed WordPress template.",
          ],
        },
      },
    ],
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
    details: [
      {
        title: { de: "Idee", en: "Idea" },
        paragraphs: {
          de: [
            "An einem heißen Sommertag will man nichts anderes, als an einen Strand zu fahren, das Meer zu sehen und die Sonne zu genießen. Diese Webseite bietet die Möglichkeit, Strände in einem Radius zu suchen und verweist dann auf Google Maps zur Navigation.",
          ],
          en: [
            "On a hot summer day, you may want nothing more than to go to a beach, see the sea, and enjoy the sun. This website lets users search for beaches within a radius and then opens Google Maps for navigation.",
          ],
        },
      },
      {
        title: { de: "Ergebnis", en: "Result" },
        images: [
          {
            src: "../images/ineedbeach.png",
            alt: {
              de: "Screenshot von I need beach",
              en: "Screenshot of I need beach",
            },
          },
        ],
      },
      {
        title: { de: "Technische Details", en: "Technical details" },
        paragraphs: {
          de: [
            "Das Grundgerüst wurde mit HTML, CSS und JavaScript erstellt und die Karte mit Leaflet.js implementiert. Bootstrap wurde für das UI verwendet. Das Suchquery der POI läuft über die Overpass API und die Geodaten werden über OpenStreetMap und Nominatim abgefragt.",
          ],
          en: [
            "The foundation was built with HTML, CSS, and JavaScript, with the map implemented through Leaflet.js. Bootstrap was used for the UI. POI search queries use the Overpass API, while geodata comes from OpenStreetMap and Nominatim.",
          ],
        },
      },
    ],
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
    details: [
      {
        title: { de: "Idee", en: "Idea" },
        paragraphs: {
          de: [
            "Der nächste Urlaub steht an, aber welches Land möchte man besuchen? Die App bietet die Möglichkeit, Länder zu filtern und zu finden. Auch wenn man umziehen möchte, kann die Website helfen, das passende Land zu finden.",
            "Informationen werden aus der eigenen Datenbank https://github.com/Lenamm12/country_database genommen, die weiter erweitert wird.",
          ],
          en: [
            "The next trip is coming up, but which country should it be? The app offers filtering and search options for countries. It can also help when considering relocation and looking for a suitable country.",
            "The information comes from the custom database at https://github.com/Lenamm12/country_database, which continues to be expanded.",
          ],
        },
      },
      {
        title: { de: "Ergebnis", en: "Result" },
        images: [
          {
            src: "../images/countrysearch.png",
            alt: {
              de: "Screenshot von Country Search",
              en: "Screenshot of Country Search",
            },
          },
        ],
      },
      {
        title: { de: "Technische Details", en: "Technical details" },
        paragraphs: {
          de: [
            "Das Grundgerüst wurde mit React und TypeScript erstellt. Das UI wird mit Material UI implementiert.",
          ],
          en: [
            "The foundation was built with React and TypeScript. The UI is implemented with Material UI.",
          ],
        },
      },
    ],
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
    status: { de: "Live", en: "Live" },
    tech: "Flutter, Firebase",
    description: {
      de: "Stimmungstracker mit Mood-Matrix, Verlauf, Diagrammen und Exportfunktionen.",
      en: "Mood tracker with mood matrix, history, charts, and export features.",
    },
    details: [
      {
        title: { de: "Was ist Mood Matrix", en: "What is Mood Matrix" },
        paragraphs: {
          de: [
            "Mood Matrix ist ein Stimmungstracker mit einer mehrdimensionalen Matrix, Verlauf und Auswertungen.",
          ],
          en: [
            "Mood Matrix is a mood tracker with a multidimensional matrix, history, and analytics.",
          ],
        },
      },
      {
        title: { de: "Technische Details", en: "Technical details" },
        paragraphs: {
          de: [
            "Die App wurde mit Flutter entwickelt und nutzt Firebase für optionale Synchronisation.",
          ],
          en: [
            "The app was built with Flutter and uses Firebase for optional synchronization.",
          ],
        },
      },
    ],
    icon: "../images/mood-matrix-icon.png",
    images: [],
    links: [
      {
        label: { de: "Play Store", en: "Play Store" },
        url: "https://play.google.com/store/apps/details?id=de.jelestudios.moodmatrix",
        type: "playstore",
      },
    ],
  },
  carelog: {
    type: "app",
    name: { de: "CareLog", en: "CareLog" },
    status: { de: "Live", en: "Live" },
    tech: "Flutter, Firebase, SQLite",
    description: {
      de: "Self-Care-App zur Verwaltung von Produkten, Routinen und Kalenderplanung.",
      en: "Self-care app for managing products, routines, and calendar planning.",
    },
    details: [
      {
        title: { de: "Was ist CareLog", en: "What is CareLog" },
        paragraphs: {
          de: [
            "CareLog hilft bei der Verwaltung von Produkten, Hautpflege-Routinen und regelmäßigen Pflegeabläufen.",
          ],
          en: [
            "CareLog helps manage products, skin-care routines, and recurring care tasks.",
          ],
        },
      },
      {
        title: { de: "Technische Details", en: "Technical details" },
        paragraphs: {
          de: [
            "Die App wurde mit Flutter entwickelt und kombiniert lokale Datenhaltung mit optionaler Firebase-Synchronisierung.",
          ],
          en: [
            "The app was built with Flutter and combines local data storage with optional Firebase synchronization.",
          ],
        },
      },
    ],
    icon: "../images/carelog-icon.png",
    images: [],
    links: [
      {
        label: { de: "Play Store", en: "Play Store" },
        url: "https://play.google.com/store/apps/details?id=de.jelestudios.carelog",
        type: "playstore",
      },
    ],
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
    details: [
      {
        title: {
          de: "Was ist CSV to Health Connect",
          en: "What is CSV to Health Connect",
        },
        paragraphs: {
          de: [
            "Diese App importiert CSV-Daten in Google Health Connect. Vor dem Upload können Spalten zugeordnet, Daten geprüft und doppelte Einträge gefiltert werden.",
          ],
          en: [
            "This app imports CSV data into Google Health Connect. Before upload, columns can be mapped, data can be checked, and duplicate entries can be filtered.",
          ],
        },
      },
      {
        title: { de: "Technische Details", en: "Technical details" },
        paragraphs: {
          de: [
            "Die App wurde mit Flutter entwickelt und nutzt die Health Connect Schnittstelle auf Android.",
          ],
          en: [
            "The app was built with Flutter and uses the Health Connect API on Android.",
          ],
        },
      },
    ],
    icon: "../images/csv-to-healthconnect-icon.png",
    images: [],
    links: [
      {
        label: { de: "Play Store", en: "Play Store" },
        url: "https://play.google.com/store/apps/details?id=de.jelestudios.csv_to_healthconnect",
        type: "playstore",
      },
    ],
  },
  throwback: {
    type: "app",
    name: { de: "Throwback", en: "Throwback" },
    status: { de: "Live", en: "Live" },
    tech: "Flutter, Firebase",
    description: {
      de: "Private Social-Media-App mit Gruppen, Seiten, Medien und Sichtbarkeitssteuerung.",
      en: "Private social media app with groups, pages, media, and visibility controls.",
    },
    details: [
      {
        title: { de: "Was ist Throwback", en: "What is Throwback" },
        paragraphs: {
          de: [
            "Throwback ist eine private Social-Media-App, in der Inhalte über Gruppen und Sichtbarkeiten gesteuert werden.",
          ],
          en: [
            "Throwback is a private social media app where content is controlled through groups and visibility settings.",
          ],
        },
      },
      {
        title: { de: "Technische Details", en: "Technical details" },
        paragraphs: {
          de: [
            "Die App wurde mit Flutter und Firebase entwickelt und kombiniert lokale Speicherung mit optionalem Cloud-Sync.",
          ],
          en: [
            "The app was built with Flutter and Firebase and combines local storage with optional cloud sync.",
          ],
        },
      },
    ],
    icon: "",
    images: [],
    links: [
      {
        label: { de: "Play Store", en: "Play Store" },
        url: "https://play.google.com/store/apps/details?id=de.jelestudios.throwback",
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
    details: [
      {
        title: { de: "Was ist das Spiel", en: "What is the game" },
        paragraphs: {
          de: [
            "Ein 3D-Spielkonzept mit Fokus auf Würfelmechanik und Bewegung im Raum.",
          ],
          en: [
            "A 3D game concept focused on dice mechanics and movement through space.",
          ],
        },
      },
      {
        title: { de: "Inspiration", en: "Inspiration" },
        paragraphs: {
          de: ["Die Inspirations- und Ergebnisdetails werden weiter ergänzt."],
          en: ["Inspiration and result details will be expanded further."],
        },
      },
      {
        title: { de: "Technische Details", en: "Technical details" },
        paragraphs: {
          de: ["Das Spiel wird mit Godot entwickelt."],
          en: ["The game is being developed with Godot."],
        },
      },
    ],
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
    details: [
      {
        title: { de: "Details", en: "Details" },
        paragraphs: {
          de: [
            "Das Projekt befindet sich in Planung. Weitere Inhalte werden ergänzt, sobald Konzept und Prototyp konkretisiert sind.",
          ],
          en: [
            "The project is currently planned. More content will be added once the concept and prototype are more concrete.",
          ],
        },
      },
    ],
    images: [],
    links: [],
  },
};
