export type Category = {
  slug: string;
  href: string;
  title: string;
  eyebrow: string;
  thumb: string;
  thumbAlt: string;
};

export const categories: Category[] = [
  {
    slug: "chartes-graphiques",
    href: "/chartes-graphiques",
    title: "Chartes graphiques",
    eyebrow: "Stratégie & création",
    thumb: "/images/chartes-graphiques-1.png",
    thumbAlt: "Chartes graphiques — réalisations Emy Communication",
  },
  {
    slug: "campagnes-affichage",
    href: "/campagnes-affichage",
    title: "Campagnes d'affichage",
    eyebrow: "Stratégie & création",
    thumb: "/images/campagnes_affichage-1.png",
    thumbAlt: "Campagnes d'affichage — réalisations Emy Communication",
  },
  {
    slug: "plaquettes",
    href: "/plaquettes",
    title: "Plaquettes commerciales",
    eyebrow: "Stratégie & création",
    thumb: "/images/plaquettes_commerciales-1.png",
    thumbAlt: "Plaquettes commerciales — réalisations Emy Communication",
  },
  {
    slug: "kit-entrepreneur",
    href: "/kit-entrepreneur",
    title: "Kit entrepreneur",
    eyebrow: "Print & web",
    thumb: "/images/Kit_entrepreneur-4.png",
    thumbAlt: "Kit entrepreneur — réalisations Emy Communication",
  },
  {
    slug: "sites-web",
    href: "/sites-web",
    title: "Sites web",
    eyebrow: "Digital",
    thumb: "/images/sites_web-1.png",
    thumbAlt: "Sites web — réalisations Emy Communication",
  },
  {
    slug: "signaletique",
    href: "/signaletique",
    title: "Signalétique",
    eyebrow: "Stratégie & création",
    thumb: "/images/signaletique.png",
    thumbAlt: "Signalétique — réalisations Emy Communication",
  },
  {
    slug: "edition",
    href: "/edition",
    title: "Édition & publicité",
    eyebrow: "Stratégie & création",
    thumb: "/images/edition_et_publicite.png",
    thumbAlt: "Édition et publicité — réalisations Emy Communication",
  },
  {
    slug: "objets-publicitaires",
    href: "/objets-publicitaires",
    title: "Objets publicitaires",
    eyebrow: "Stratégie & création",
    thumb: "/images/objets-publicitaires.png",
    thumbAlt: "Objets publicitaires — réalisations Emy Communication",
  },
];

export type CaseImage = { src: string; alt: string };

export type CaseStudy = {
  client: string;
  subtitle?: string;
  objective: string;
  creations: string[];
  category?: string;
  images: CaseImage[];
};

export const cases: Record<string, CaseStudy[]> = {
  "chartes-graphiques": [
    {
      client: "ARFAB",
      subtitle: "Formation de l'artisanat et du bâtiment",
      objective:
        "Uniformiser l'identité visuelle des différentes ARFAB (logos différents en fonction des départements à l'époque) afin de leur donner une nouvelle dimension et les positionner comme des acteurs incontournables de la formation continue de la branche.",
      creations: ["Logotype", "Charte graphique", "Déclinaison par département"],
      category: "Marque",
      images: [
        { src: "/images/Capture-decran-2023-01-05-a-13.33.46.png", alt: "Logo ARFAB" },
        { src: "/images/Capture-decran-2023-01-05-a-13.31.24.png", alt: "Charte graphique ARFAB" },
      ],
    },
    {
      client: "CYKLEO",
      subtitle: "Opérateur de mobilité active, filiale de Keolis",
      objective:
        "Création d'une nouvelle identité visuelle dans le cadre d'un changement de nom en 2016 de Effia Transport.",
      creations: ["Identité de marque", "Sémiologie", "Déclinaison sur supports"],
      category: "Marque",
      images: [
        { src: "/images/Capture-decran-2023-01-05-a-13.48.57.png", alt: "Logo CYKLEO" },
        { src: "/images/Capture-decran-2023-01-05-a-13.50.27.png", alt: "Sémiologie attendue CYKLEO" },
        { src: "/images/Capture-decran-2023-01-05-a-13.45.44.png", alt: "Annonce presse CYKLEO" },
      ],
    },
    {
      client: "COF",
      subtitle: "Centre de formation du Groupe Partnaire",
      objective:
        "La nouvelle identité COF a pour objectif d'inscrire durablement l'acronyme, en gommant progressivement la dimension logistique jusqu'ici prédominante, pour étendre l'offre de formation à d'autres secteurs.",
      creations: ["Logotype", "Charte graphique", "Papier en-tête", "Carte de visite"],
      category: "Marque",
      images: [
        { src: "/images/Capture-decran-2023-01-05-a-13.54.30.png", alt: "Logo COF" },
        { src: "/images/Capture-decran-2023-01-05-a-14.00.44.png", alt: "Têtes de lettres COF" },
        { src: "/images/Capture-decran-2023-01-05-a-13.54.43.png", alt: "Charte graphique COF" },
        { src: "/images/Capture-decran-2023-01-05-a-13.57.15.png", alt: "Charte couleurs COF" },
      ],
    },
  ],

  "campagnes-affichage": [
    {
      client: "VÉLO+",
      subtitle: "Service de vélos en libre-service à Orléans",
      objective:
        "Informer sur les abonnements VÉLO+ à 15 euros et à 5 euros — Développer la notoriété VÉLO+ — Susciter des abonnements — Promouvoir la location des vélos électriques.",
      creations: [
        "Création d'affiches Abribus et TRAM sur plusieurs saisons",
        "Création d'un dépliant guide d'utilisation",
      ],
      category: "Marque",
      images: [
        { src: "/images/Capture-decran-2023-01-05-a-14.18.08.png", alt: "Affiche « Pour ma liberté » VÉLO+" },
        { src: "/images/Capture-decran-2023-01-05-a-14.18.28.png", alt: "Affiche « Pour ma planète » VÉLO+" },
        { src: "/images/Capture-decran-2023-01-05-a-14.18.44.png", alt: "Affiche « Pour mon style » VÉLO+" },
        { src: "/images/Capture-decran-2023-01-05-a-14.14.12.png", alt: "Affichage VÉLO+ 2018" },
        { src: "/images/Capture-decran-2023-01-05-a-14.25.14.png", alt: "Guide d'utilisation VÉLO+" },
      ],
    },
    {
      client: "GROUPE PARTNAIRE",
      subtitle: "Agence d'emploi et cabinet de recrutement",
      objective:
        "Création de deux campagnes d'affichage pour diffusion au Zénith d'Orléans et sur le réseau d'affichage Abribus d'Orléans.",
      creations: [
        "Rédaction des accroches et concepts",
        "Création des affiches",
        "Préparation des fichiers techniques",
      ],
      category: "Communication de recrutement",
      images: [
        {
          src: "/images/Capture-decran-2023-01-05-a-14.32.09.png",
          alt: "Engagés pour l'emploi — candidats Partnaire intérim",
        },
      ],
    },
    {
      client: "SODIMAVI",
      subtitle: "Agent distributeur VOLVO – KÖGEL – ISUZU – DAF",
      objective:
        "Promouvoir l'opération commerciale ISUZU via une campagne 4×3 sur Orléans et Caen.",
      creations: [
        "Mise en page de l'affiche",
        "Préparation des éléments techniques",
        "Sélection du prestataire d'affichage et stratégie de la campagne",
      ],
      category: "Communication commerciale",
      images: [
        {
          src: "/images/Capture-decran-2023-01-05-a-14.39.39.png",
          alt: "Opération commerciale ISUZU SODIMAVI",
        },
      ],
    },
  ],

  plaquettes: [
    {
      client: "LTE",
      subtitle: "Parfumerie – Cosmétique – Parapharmacie",
      objective:
        "Détailler les différentes activités de sous-traitance de l'entreprise LTE.",
      creations: [
        "Conception d'une plaquette 4 volets avec fiches français/anglais à l'intérieur",
        "Reportage photos",
      ],
      category: "Communication commerciale",
      images: [],
    },
    {
      client: "DÉBARRAS PRO SERVICES",
      subtitle:
        "Débarras de maisons, d'usines et de locaux industriels. Curage de bâtiments et démolitions.",
      objective: "Détailler les différentes activités de la structure.",
      creations: [
        "Conception d'une plaquette 4 volets",
        "4 fiches dédiées par activité",
      ],
      category: "Communication commerciale",
      images: [],
    },
    {
      client: "BRUMEXPERT",
      subtitle: "Solutions de brumisation pour les collectivités",
      objective:
        "Création d'un catalogue produits présentant la gamme 2021 des solutions de brumisation haut de gamme.",
      creations: [
        "Création du catalogue de 32 pages",
        "Photos et détourage produits",
        "Intégration des produits sur Internet",
      ],
      category: "Communication produit",
      images: [],
    },
    {
      client: "BRUMIFRAIS",
      subtitle: "Solutions de brumisation",
      objective:
        "Création d'une plaquette commerciale présentant les différents secteurs concernés par la brumisation.",
      creations: [
        "Plaquette commerciale 4 volets avec 6 fiches thématiques",
        "Site Internet",
        "Annonces presse",
        "Stratégie digitale",
      ],
      category: "Communication commerciale",
      images: [],
    },
    {
      client: "YVES OLLIVIER",
      subtitle: "Aménageur d'espaces de travail",
      objective: "Création d'une plaquette commerciale.",
      creations: [
        "Plaquette commerciale",
        "Site Internet",
        "Annonces presse",
        "Stratégie digitale",
      ],
      category: "Communication commerciale",
      images: [],
    },
    {
      client: "FRICOM",
      subtitle: "Magasin de fournitures pour bars et restaurants",
      objective:
        "Créer un document commercial présentant les différentes activités de la marque FRICOM / ECOTEL.",
      creations: [
        "Conception graphique de la plaquette",
        "Rédaction des textes",
        "Création des infographies",
      ],
      category: "Communication commerciale",
      images: [],
    },
  ],

  "kit-entrepreneur": [
    {
      client: "Caroline LEGER",
      subtitle: "Graphothérapeute et coach professionnelle",
      objective: "Accompagner Caroline dans le lancement de son entreprise individuelle.",
      creations: [
        "Logotype",
        "Carte de visite",
        "Site Internet",
        "Plaquette de présentation",
        "Divers supports de communication",
      ],
      category: "Print & web",
      images: [
        { src: "/images/plaquette_caroline_leger1-1.png", alt: "Plaquette Caroline Leger" },
        { src: "/images/Capture-decran-2023-01-05-a-10.48.50.png", alt: "Carte de visite Caroline Leger" },
        { src: "/images/Capture-decran-2023-01-05-a-10.50.17.png", alt: "Suivez vos rêves — Caroline Leger" },
        {
          src: "/images/Capture-decran-2023-01-05-a-10.49.59.png",
          alt: "Si je l'écris ça prend vie — Caroline Leger",
        },
        { src: "/images/site_web_caroline-1.png", alt: "Site web Caroline Leger" },
      ],
    },
  ],

  "sites-web": [
    {
      client: "Réalisations digitales",
      objective:
        "Conception et développement de sites vitrines sur-mesure : architecture, design, intégration, optimisation SEO et accompagnement éditorial.",
      creations: [
        "Sites vitrines responsive",
        "Optimisation du référencement SEO",
        "Stratégie SEA",
        "Rédaction de contenus",
      ],
      category: "Digital",
      images: [
        { src: "/images/site_web_caroline-1.png", alt: "Site web Caroline Leger" },
        { src: "/images/site_web_Brumexpert.png", alt: "Site web Brumexpert" },
        { src: "/images/site_web_yves_ollivier.png", alt: "Site web Yves Ollivier" },
        { src: "/images/site_web_lte.png", alt: "Site web LTE" },
      ],
    },
  ],

  signaletique: [
    {
      client: "SHISEIDO",
      subtitle: "Industrie cosmétique à Ormes et Gien",
      objective: "Création du stand (parapluie et roll-up) pour les salons de recrutement.",
      creations: ["Création du stand parapluie", "Création de deux roll-up"],
      category: "Communication de recrutement",
      images: [
        { src: "/images/Capture-decran-2023-01-09-a-11.31.03.png", alt: "Stand parapluie Shiseido" },
        { src: "/images/Capture-decran-2023-01-09-a-11.03.42.png", alt: "Roll-up Shiseido" },
        { src: "/images/Capture-decran-2023-01-09-a-11.03.54.png", alt: "Stand Shiseido" },
      ],
    },
    {
      client: "LA MESURE",
      subtitle: "Boutique 100% vrac, 100% sans emballage",
      objective:
        "Accompagner LA MESURE sur la mise en place d'un concept de signalétique intérieure et extérieure lors de la création de l'enseigne en 2016.",
      creations: [
        "Création du concept de signalétique",
        "Suivi de fabrication et d'installation pour les boutiques LA MESURE (Chécy, Bourges, Saint-Avertin, Paris, Melun)",
        "Roll-up pour Salon de la Franchise",
        "Signalétique magasin et PLV",
      ],
      images: [
        { src: "/images/Capture-decran-2023-01-09-a-11.07.27.png", alt: "Boutique La Mesure Chécy" },
        { src: "/images/Capture-decran-2023-01-09-a-11.07.08.png", alt: "Boutique La Mesure" },
      ],
    },
    {
      client: "CST",
      subtitle: "Entreprise de transport",
      objective:
        "Création de visuels pour le nouveau véhicule au gaz naturel de l'entreprise CST.",
      creations: ["Visuel de marquage", "Suivi de fabrication"],
      category: "Communication institutionnelle",
      images: [
        { src: "/images/marquage_tracteur_cst_jerouleaugaz.png", alt: "Marquage tracteur CST « Je roule au gaz »" },
        { src: "/images/Capture-decran-2023-01-09-a-11.52.04.png", alt: "Éléments vectoriels de marquage CST" },
      ],
    },
  ],

  edition: [
    {
      client: "SHISEIDO",
      subtitle: "Industrie cosmétique à Ormes et Gien",
      objective:
        "Refonte du journal interne et de son logo, et création de chaque parution trimestrielle de 2016 à 2019.",
      creations: [
        "12 journaux trimestriels (12 à 20 pages)",
        "Logo du journal",
        "Mise en page des articles",
        "Infographies intérieures",
      ],
      category: "Communication interne",
      images: [
        { src: "/images/Capture-decran-2023-01-10-a-15.38.10.png", alt: "Journal interne SIF News Shiseido" },
        { src: "/images/Capture-decran-2023-01-10-a-15.38.48.png", alt: "So News Shiseido" },
        { src: "/images/Capture-decran-2023-01-10-a-15.52.16.png", alt: "So News 2019" },
        { src: "/images/Capture-decran-2023-01-10-a-15.48.16.png", alt: "So News numéro 45" },
      ],
    },
    {
      client: "SODIMAVI",
      subtitle: "Agent distributeur VOLVO – KÖGEL – ISUZU – DAF",
      objective:
        "Création d'un classeur d'accueil pour l'intégration des nouveaux salariés de l'entreprise, organisé en 6 rubriques.",
      creations: [
        "Création d'une page de couverture",
        "Création de 6 intercalaires",
        "Création de 44 fiches",
        "Hiérarchisation de l'information",
        "Infographies",
      ],
      category: "Communication interne",
      images: [
        { src: "/images/Capture-decran-2023-01-10-a-16.01.49.png", alt: "Livret d'accueil Sodimavi" },
        { src: "/images/Capture-decran-2023-01-10-a-16.00.30.png", alt: "Livret d'accueil Sodimavi — page métier" },
        {
          src: "/images/Capture-decran-2023-01-10-a-16.03.24.png",
          alt: "Livret d'accueil Sodimavi — intercalaire",
        },
      ],
    },
  ],

  "objets-publicitaires": [
    {
      client: "SODIMAVI",
      subtitle: "Agent distributeur VOLVO – KÖGEL – ISUZU – DAF",
      objective: "Création des calendriers et sous-mains 2023.",
      creations: [
        "Visuel pour les calendriers 2023",
        "Mise de la grille à la charte",
        "Création du visuel de sous-mains",
        "Suivi de fabrication",
      ],
      category: "Objets publicitaires",
      images: [
        { src: "/images/Capture-decran-2023-01-09-a-14.48.37.png", alt: "Calendriers Sodimavi 2023" },
        { src: "/images/Capture-decran-2023-01-10-a-16.15.31.png", alt: "Sous-mains Sodimavi 2023" },
      ],
    },
    {
      client: "CST",
      subtitle: "Entreprise de transport",
      objective: "Création des calendriers 2023.",
      creations: ["Visuel calendrier", "Suivi de fabrication"],
      category: "Objets publicitaires",
      images: [{ src: "/images/Capture-decran-2023-01-09-a-14.49.05.png", alt: "Calendrier CST 2023" }],
    },
    {
      client: "GL DÉPANNAGE",
      subtitle:
        "Remorquage, relevage et transports en Centre-Val de Loire, du deux-roues au super poids lourd.",
      objective: "Création du calendrier 2023.",
      creations: ["Visuel calendrier", "Suivi de fabrication"],
      category: "Objets publicitaires",
      images: [{ src: "/images/Capture-decran-2023-01-09-a-14.49.26.png", alt: "Calendrier 2023 GL Dépannage" }],
    },
  ],
};
