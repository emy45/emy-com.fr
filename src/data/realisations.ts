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

export type CaseImage = { src: string; alt: string; href?: string };

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
        { src: "/images/chartes-graphiques-arfab-logo.png", alt: "Logo ARFAB" },
        { src: "/images/chartes-graphiques-arfab-charte-graphique.png", alt: "Charte graphique ARFAB" },
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
        { src: "/images/chartes-graphiques-cykleo-logo.png", alt: "Logo CYKLEO" },
        { src: "/images/chartes-graphiques-cykleo-semiologie-attendue.png", alt: "Sémiologie attendue CYKLEO" },
        { src: "/images/chartes-graphiques-cykleo-annonce-presse.png", alt: "Annonce presse CYKLEO" },
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
        { src: "/images/chartes-graphiques-cof-logo.png", alt: "Logo COF" },
        { src: "/images/chartes-graphiques-cof-tetes-de-lettres.png", alt: "Têtes de lettres COF" },
        { src: "/images/chartes-graphiques-cof-charte-graphique.png", alt: "Charte graphique COF" },
        { src: "/images/chartes-graphiques-cof-charte-couleurs.png", alt: "Charte couleurs COF" },
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
        { src: "/images/campagnes-affichage-velo-affiche-pour-ma-liberte.png", alt: "Affiche « Pour ma liberté » VÉLO+" },
        { src: "/images/campagnes-affichage-velo-affiche-pour-ma-planete.png", alt: "Affiche « Pour ma planète » VÉLO+" },
        { src: "/images/campagnes-affichage-velo-affiche-pour-mon-style.png", alt: "Affiche « Pour mon style » VÉLO+" },
        { src: "/images/campagnes-affichage-velo-affichage-2018.png", alt: "Affichage VÉLO+ 2018" },
        { src: "/images/campagnes-affichage-velo-guide-dutilisation.png", alt: "Guide d'utilisation VÉLO+" },
        { src: "/images/campagnes-affichage-velo-guide-dutilisation-interieur.png", alt: "Guide d'utilisation VÉLO+ — intérieur" },
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
          src: "/images/campagnes-affichage-groupe-partnaire-engages-pour-lemploi-candidats-partnaire.png",
          alt: "Engagés pour l'emploi — candidats Partnaire intérim",
        },
        {
          src: "/images/campagnes-affichage-groupe-partnaire-campagne-partnaire-declinaison.png",
          alt: "Campagne Partnaire — déclinaison",
        },
        {
          src: "/images/campagnes-affichage-groupe-partnaire-campagne-partnaire-affichage-abribus.png",
          alt: "Campagne Partnaire — affichage Abribus",
        },
        {
          src: "/images/campagnes-affichage-groupe-partnaire-campagne-partnaire-affichage-zenith.png",
          alt: "Campagne Partnaire — affichage Zénith",
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
          src: "/images/campagnes-affichage-sodimavi-operation-commerciale-isuzu.png",
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
      images: [
        { src: "/images/plaquettes-lte-plaquette-couverture.png", alt: "Plaquette LTE — couverture" },
        { src: "/images/plaquettes-lte-plaquette-fiches-activites.png", alt: "Plaquette LTE — fiches activités" },
        { src: "/images/plaquettes-lte-plaquette-interieur.png", alt: "Plaquette LTE — intérieur" },
      ],
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
      images: [
        { src: "/images/plaquettes-debarras-pro-services-plaquette-couverture.png", alt: "Plaquette Débarras Pro Services — couverture" },
        { src: "/images/plaquettes-debarras-pro-services-plaquette-fiches-activites.png", alt: "Plaquette Débarras Pro Services — fiches activités" },
        { src: "/images/plaquettes-debarras-pro-services-plaquette-interieur.png", alt: "Plaquette Débarras Pro Services — intérieur" },
      ],
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
      images: [
        { src: "/images/plaquettes-brumexpert-catalogue-couverture.png", alt: "Catalogue Brumexpert — couverture" },
        { src: "/images/plaquettes-brumexpert-catalogue-gamme-produits.png", alt: "Catalogue Brumexpert — gamme produits" },
        { src: "/images/plaquettes-brumexpert-catalogue-pages-produits.png", alt: "Catalogue Brumexpert — pages produits" },
      ],
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
      images: [
        { src: "/images/plaquettes-brumifrais-plaquette-couverture.png", alt: "Plaquette Brumifrais — couverture" },
        { src: "/images/plaquettes-brumifrais-plaquette-fiches-thematiques.png", alt: "Plaquette Brumifrais — fiches thématiques" },
        { src: "/images/plaquettes-brumifrais-plaquette-interieur.png", alt: "Plaquette Brumifrais — intérieur" },
      ],
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
      images: [
        { src: "/images/plaquettes-yves-ollivier-plaquette-couverture.png", alt: "Plaquette Yves Ollivier — couverture" },
        { src: "/images/plaquettes-yves-ollivier-plaquette-interieur.png", alt: "Plaquette Yves Ollivier — intérieur" },
      ],
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
      images: [
        { src: "/images/plaquettes-fricom-plaquette-ecotel-couverture.png", alt: "Plaquette Fricom / Ecotel — couverture" },
        { src: "/images/plaquettes-fricom-plaquette-ecotel-interieur.png", alt: "Plaquette Fricom / Ecotel — intérieur" },
      ],
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
        { src: "/images/kit-entrepreneur-caroline-leger-carte-de-visite.png", alt: "Carte de visite Caroline Leger" },
        { src: "/images/kit-entrepreneur-caroline-leger-suivez-vos-reves.png", alt: "Suivez vos rêves — Caroline Leger" },
        {
          src: "/images/kit-entrepreneur-caroline-leger-si-je-lecris-ca-prend.png",
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
        {
          src: "/images/site_web_vdlvi.png",
          alt: "Site web VDLVI — Vins de Loire — Vins d'Ici",
          href: "https://vdlvi.fr",
        },
        {
          src: "/images/site_web_anpneus.png",
          alt: "Site web ANPneus — vente et montage de pneus",
          href: "https://anpneus.fr",
        },
        {
          src: "/images/site_web_sodimavi.png",
          alt: "Site web Sodimavi — agent distributeur VOLVO / KÖGEL / ISUZU / DAF",
          href: "https://www.sodimavi.com",
        },
        {
          src: "/images/site_web_lte.png",
          alt: "Site web LT-E — Le Tellier Emballages",
          href: "https://www.lt-e.fr",
        },
        {
          src: "/images/site_web_yves_ollivier.png",
          alt: "Site web Yves Ollivier — aménageur d'espaces de travail",
          href: "https://www.yvesollivier.com",
        },
        {
          src: "/images/site_web_caroline-1.png",
          alt: "Site web Caroline Léger — graphothérapeute",
          href: "https://caroline-leger.fr",
        },
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
        { src: "/images/signaletique-shiseido-stand-parapluie.png", alt: "Stand parapluie Shiseido" },
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
        { src: "/images/signaletique-la-mesure-boutique-checy.png", alt: "Boutique La Mesure Chécy" },
        { src: "/images/signaletique-la-mesure-boutique.png", alt: "Boutique La Mesure" },
        { src: "/images/signaletique-la-mesure-signaletique-interieur.png", alt: "Signalétique La Mesure — intérieur" },
        { src: "/images/signaletique-la-mesure-signaletique-vitrine.png", alt: "Signalétique La Mesure — vitrine" },
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
        { src: "/images/signaletique-cst-elements-vectoriels-de-marquage.png", alt: "Éléments vectoriels de marquage CST" },
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
        { src: "/images/edition-shiseido-journal-interne-sif-news.png", alt: "Journal interne SIF News Shiseido" },
        { src: "/images/edition-shiseido-so-news.png", alt: "So News Shiseido" },
        { src: "/images/edition-shiseido-so-news-2019.png", alt: "So News 2019" },
        { src: "/images/edition-shiseido-so-news-numero-45.png", alt: "So News numéro 45" },
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
        { src: "/images/edition-sodimavi-livret-daccueil.png", alt: "Livret d'accueil Sodimavi" },
        { src: "/images/edition-sodimavi-livret-daccueil-page-metier.png", alt: "Livret d'accueil Sodimavi — page métier" },
        {
          src: "/images/edition-sodimavi-livret-daccueil-intercalaire.png",
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
        { src: "/images/objets-publicitaires-sodimavi-calendriers-2023.png", alt: "Calendriers Sodimavi 2023" },
        { src: "/images/objets-publicitaires-sodimavi-sous-mains-2023.png", alt: "Sous-mains Sodimavi 2023" },
      ],
    },
    {
      client: "CST",
      subtitle: "Entreprise de transport",
      objective: "Création des calendriers 2023.",
      creations: ["Visuel calendrier", "Suivi de fabrication"],
      category: "Objets publicitaires",
      images: [{ src: "/images/objets-publicitaires-cst-calendrier-2023.png", alt: "Calendrier CST 2023" }],
    },
    {
      client: "GL DÉPANNAGE",
      subtitle:
        "Remorquage, relevage et transports en Centre-Val de Loire, du deux-roues au super poids lourd.",
      objective: "Création du calendrier 2023.",
      creations: ["Visuel calendrier", "Suivi de fabrication"],
      category: "Objets publicitaires",
      images: [{ src: "/images/objets-publicitaires-gl-depannage-calendrier-2023.png", alt: "Calendrier 2023 GL Dépannage" }],
    },
  ],
};
