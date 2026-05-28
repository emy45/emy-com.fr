export const site = {
  name: "Emy Communication",
  tagline: "Une démarche humaine & créative en interaction avec un monde qui évolue.",
  siteName: "Emy Communication",
  description:
    "Emy Communication, agence cré'active à Orléans : conseil, identité visuelle, print & web. Centre-Val de Loire & Île-de-France depuis 2015.",
  url: "https://www.emy-com.fr",
  email: "emy@emy-com.fr",
  phone: "06 70 06 51 59",
  phoneE164: "+33670065159",
  address: {
    street: "3 allée d'Idalie",
    zip: "45650",
    city: "Saint-Jean-le-Blanc",
  },
  social: {
    facebook: "https://www.facebook.com/emyconseil",
    instagram: "https://www.instagram.com/emy.communication/?hl=fr",
    linkedin: "https://www.linkedin.com/in/emilie-richard-54680a12a/",
  },
  legal: {
    operator: "Émilie Richard",
    legalForm: "Entreprise individuelle (micro-entrepreneur)",
    siret: "810 692 749 00015",
    siren: "810 692 749",
    apeCode: "70.21Z",
    apeLabel: "Conseil en relations publiques et communication",
    vatNote: "TVA non applicable, art. 293 B du CGI",
    foundedOn: "2015-04-23",
    publicationDirector: "Émilie Richard",
    host: {
      name: "Vercel Inc.",
      address: "340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis",
      website: "https://vercel.com",
    },
    lastUpdate: "2026-05-27",
  },
};

export const nav = [
  { label: "Accueil", href: "/" },
  { label: "Emy", href: "/emy" },
  {
    label: "Mes réalisations",
    href: "/realisations",
    children: [
      { label: "Chartes graphiques", href: "/chartes-graphiques" },
      { label: "Campagnes d'affichage", href: "/campagnes-affichage" },
      { label: "Plaquettes commerciales", href: "/plaquettes" },
      { label: "Kit entrepreneur", href: "/kit-entrepreneur" },
      { label: "Sites web", href: "/sites-web" },
      { label: "Signalétique", href: "/signaletique" },
      { label: "Édition", href: "/edition" },
      { label: "Objets publicitaires", href: "/objets-publicitaires" },
    ],
  },
  { label: "Contacter Emy", href: "/contact", cta: true },
];
