export const site = {
  name: "Emy Communication",
  tagline: "Une démarche humaine & créative en interaction avec un monde qui évolue.",
  siteName: "Emy-Com - Agence de communication cré'active",
  description:
    "Emy : agence de communication cré'active à Orléans. Stratégie, identité visuelle, print & web. Accompagnement global en Centre-Val de Loire & Île-de-France depuis 2015.",
  url: "https://www.emy-com.fr",
  email: "emy@emy-com.fr",
  phone: "06 70 06 51 59",
  phoneE164: "+33670065159",
  address: {
    street: "27 rue des Chabassières",
    zip: "45100",
    city: "Orléans",
  },
  social: {
    facebook: "https://www.facebook.com/emyconseil",
    instagram: "https://www.instagram.com/emy.communication/?hl=fr",
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
  { label: "Contact", href: "/contact" },
];
