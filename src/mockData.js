export const initialVehicles = [
  {
    id: 1,
    brand: "Porsche",
    model: "911 Carrera",
    version: "GTS Type 992",
    price: 145000,
    priceDa: "32,000,000 DA",
    year: 2023,
    mileage: 18500,
    fuel: "Essence",
    transmission: "Automatique",
    location: "France (Importable)",
    wilaya: "Import (Europe)",
    origin: "France",
    condition: "Occasion",
    badge: "Import France",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: ["/france_import.png", "/hero_car.png", "/bmw_final_cta.png"],
    specs: {
      power: "480 ch",
      engine: "3.0L Flat-6 Turbo",
      color: "Noir Intense Métallisé",
      interior: "Cuir Alcantara Noir",
      warranty: "12 Mois Porsche Approved"
    },
    options: ["Pack Sport Chrono", "Échappement Sport", "Jantes Turbo S 20/21 pouces", "Sièges Sport Plus", "PDLS+"],
    history: "Première main, entretien exclusif centre Porsche, historique complet, non accidenté."
  },
  {
    id: 2,
    brand: "BYD",
    model: "Han",
    version: "EV AWD Excellence",
    price: 52000,
    priceDa: "11,500,000 DA",
    year: 2024,
    mileage: 1200,
    fuel: "Électrique",
    transmission: "Automatique",
    location: "Chine (Importable)",
    wilaya: "Import (Asie)",
    origin: "Chine",
    condition: "Neuf",
    badge: "Import Chine",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: ["/china_import.png", "/hero_car.png", "/bmw_final_cta.png"],
    specs: {
      power: "517 ch",
      engine: "Dual Motor AWD (Blade Battery)",
      color: "Gris Empereur",
      interior: "Cuir Nappa Rouge Terre de Feu",
      warranty: "24 Mois Garantie AutoDeal"
    },
    options: ["Toit panoramique", "Sonorisation Dynaudio", "Affichage tête haute", "Conduite autonome Nv2", "Sièges ventilés/massants"],
    history: "Véhicule neuf, 0km, commande directe usine."
  },
  {
    id: 3,
    brand: "Audi",
    model: "RS6 Avant",
    version: "C8 Performance",
    price: 128000,
    priceDa: "28,500,000 DA",
    year: 2022,
    mileage: 35000,
    fuel: "Essence",
    transmission: "Automatique",
    location: "Alger (Disponible)",
    wilaya: "Alger",
    origin: "Occasion Certifié",
    condition: "Occasion",
    badge: "Occasion Certifiée",
    video: null,
    images: ["/certified_used.png", "/france_import.png", "/bmw_final_cta.png"],
    specs: {
      power: "600 ch",
      engine: "4.0L V8 BiTurbo Mild-Hybrid",
      color: "Gris Nardo",
      interior: "Cuir Valcona Noir Surpiqûres Rouges",
      warranty: "12 Mois Garantie Premium"
    },
    options: ["Pack Dynamique RS", "Freins Céramique", "Système Bang & Olufsen 3D", "Suspension DRC", "Vision nocturne"],
    history: "Deuxième main, importée en 2023, carnet d'entretien à jour, contrôle technique vierge."
  },
  {
    id: 4,
    brand: "Zeekr",
    model: "001",
    version: "AWD Sport",
    price: 64000,
    priceDa: "14,200,000 DA",
    year: 2024,
    mileage: 800,
    fuel: "Électrique",
    transmission: "Automatique",
    location: "Chine (Importable)",
    wilaya: "Import (Asie)",
    origin: "Chine",
    condition: "Neuf",
    badge: "Import Chine",
    video: null,
    images: ["/china_import.png", "/hero_car.png", "/bmw_final_cta.png"],
    specs: {
      power: "544 ch",
      engine: "Dual Motor EV",
      color: "Bleu Électrique",
      interior: "Alcantara & Cuir Sport",
      warranty: "24 Mois Garantie AutoDeal"
    },
    options: ["Suspension pneumatique", "Portes automatiques", "Yamaha Audio", "Jantes 21 pouces", "Pilot Assist"],
    history: "Véhicule neuf stock usine."
  },
  {
    id: 5,
    brand: "Mercedes-AMG",
    model: "GT",
    version: "53 4MATIC+ 4 Portes",
    price: 155000,
    priceDa: "34,500,000 DA",
    year: 2023,
    mileage: 12000,
    fuel: "Essence",
    transmission: "Automatique",
    location: "Oran (Disponible)",
    wilaya: "Oran",
    origin: "Occasion Certifié",
    condition: "Occasion",
    badge: "Occasion Certifiée",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: ["/hero_car.png", "/certified_used.png", "/bmw_final_cta.png"],
    specs: {
      power: "435 ch",
      engine: "3.0L L6 Turbo Mild-Hybrid",
      color: "Gris Selenite Magno Mat",
      interior: "Cuir Nappa AMG Noir",
      warranty: "12 Mois Garantie Mercedes"
    },
    options: ["Pack Aérodynamique AMG", "Burmester Surround", "Volant AMG Performance", "Affichage tête haute", "Sièges multicontours actifs"],
    history: "Première main locale, révisée chez Mercedes-Benz Algérie."
  },
  {
    id: 6,
    brand: "Volkswagen",
    model: "Golf 8",
    version: "2.0 TSI R 4Motion",
    price: 45000,
    priceDa: "10,200,000 DA",
    year: 2022,
    mileage: 22000,
    fuel: "Essence",
    transmission: "Automatique",
    location: "France (Importable)",
    wilaya: "Import (Europe)",
    origin: "France",
    condition: "Occasion",
    badge: "Import France",
    video: null,
    images: ["/france_import.png", "/certified_used.png", "/hero_car.png"],
    specs: {
      power: "320 ch",
      engine: "2.0L TSI",
      color: "Bleu Lapiz Métallisé",
      interior: "Tissu/Alcantara R Noir",
      warranty: "12 Mois Garantie AutoDeal"
    },
    options: ["Pack Performance", "Toit ouvrant panoramique", "Harman Kardon", "Jantes Estoril 19 pouces", "Matrix LED"],
    history: "Véhicule d'occasion contrôlé, carnet VW complet."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Mohamed Benabderrahmane",
    role: "Importation Porsche 911 (Alger)",
    avatar: "M",
    rating: 5,
    comment: "Service exceptionnel de bout en bout. L'équipe d'AutoDeal a géré l'importation de ma Porsche depuis la France avec un professionnalisme incroyable. Véhicule livré en parfait état et parfaitement conforme."
  },
  {
    id: 2,
    name: "Karim Chaoui",
    role: "Importation BYD Han (Oran)",
    avatar: "K",
    rating: 5,
    comment: "J'étais sceptique quant à l'importation d'un véhicule électrique depuis la Chine, mais AutoDeal a tout simplifié. Les délais ont été respectés et l'accompagnement administratif pour le dédouanement a été top."
  },
  {
    id: 3,
    name: "Amel Bouzidi",
    role: "Achat Audi RS6 (Alger)",
    avatar: "A",
    rating: 5,
    comment: "Très satisfaite de mon achat de véhicule d'occasion certifié localement. L'historique était limpide, le diagnostic complet fourni, et la garantie de 12 mois me donne une vraie tranquillité d'esprit."
  }
];

export const faqData = [
  {
    question: "Comment fonctionne le processus d'importation depuis la France ou la Chine ?",
    answer: "Notre processus est clé en main. Vous choisissez le véhicule (sur notre catalogue ou sur demande personnalisée), nous effectuons une inspection physique complète avec rapport photos/vidéos détaillées. Une fois validé, nous gérons l'achat sécurisé, le transport maritime, les démarches douanières en Algérie et la livraison finale à votre domicile."
  },
  {
    question: "Quelles sont les garanties sur les véhicules importés ?",
    answer: "Tous nos véhicules d'occasion certifiés et importés via notre réseau bénéficient d'une garantie mécanique premium allant de 12 à 24 mois. Chaque véhicule subit une inspection rigoureuse de 150 points de contrôle avant expédition."
  },
  {
    question: "Quels sont les frais compris dans vos estimations ?",
    answer: "Nos estimations de prix comprennent le coût du véhicule à l'étranger, le transport logistique (terrestre et maritime), nos honoraires d'accompagnement, et les assurances obligatoires. Les taxes de dédouanement locales en Algérie sont calculées sur demande en fonction de la motorisation et du profil fiscal (par exemple avec la carte de moudjahid ou licence d'importation)."
  },
  {
    question: "Combien de temps prend l'importation d'un véhicule ?",
    answer: "L'importation depuis la France prend généralement entre 3 et 5 semaines. Depuis la Chine, en raison des liaisons maritimes, le délai moyen est de 6 à 8 semaines. Nous vous fournissons un suivi en temps réel étape par étape de votre container ou convoi."
  },
  {
    question: "Puis-je faire estimer et vendre mon véhicule actuel ?",
    answer: "Oui, tout à fait ! Nous proposons un service d'estimation en ligne gratuit. Si le véhicule correspond à nos critères de certification, nous pouvons vous faire une offre de reprise ou le proposer en dépôt-vente dans notre réseau exclusif."
  }
];

export const servicesDetails = {
  "Diagnostic électronique": {
    desc: "Analyse complète des calculateurs embarqués de votre véhicule à l'aide de valises de diagnostic multimarques haut de gamme. Détection de pannes intermittentes et mise à jour logicielle.",
    time: "45 minutes",
    price: "À partir de 6 000 DA"
  },
  "Vidange": {
    desc: "Remplacement d'huile moteur haute performance homologuée constructeur et changement de tous les filtres (huile, air, habitacle, carburant) pour préserver la longévité de votre moteur.",
    time: "1 heure",
    price: "À partir de 12 000 DA"
  },
  "Distribution": {
    desc: "Changement préventif du kit de distribution (courroie ou chaîne, galets tendeurs, et pompe à eau) selon les préconisations du constructeur pour éviter toute casse moteur majeure.",
    time: "4 à 6 heures",
    price: "Sur devis personnalisé"
  },
  "Embrayage": {
    desc: "Remplacement du kit d'embrayage complet (disque, mécanisme, butée hydraulique, et volant moteur si nécessaire) pour redonner souplesse et réactivité à votre transmission.",
    time: "1 journée",
    price: "Sur devis personnalisé"
  },
  "Climatisation": {
    desc: "Contrôle d'étanchéité du circuit de climatisation, recharge en fluide frigorigène (R134a ou R1234yf) et traitement antibactérien de l'évaporateur pour un air sain.",
    time: "1h30",
    price: "À partir de 8 000 DA"
  },
  "Freinage": {
    desc: "Contrôle d'usure des garnitures de friction. Remplacement de plaquettes et de disques de frein haute performance, purge du liquide de frein (DOT4/DOT5) pour une sécurité optimale.",
    time: "1h30",
    price: "À partir de 5 000 DA"
  },
  "Pneumatiques": {
    desc: "Vente, montage et équilibrage de pneus de grandes marques (Michelin, Pirelli, Continental). Réglage de la géométrie et du parallélisme des trains roulants.",
    time: "1 heure",
    price: "Selon dimensions"
  },
  "AdBlue": {
    desc: "Diagnostic et résolution des problèmes liés aux systèmes antipollution AdBlue/SCR (cristallisation, capteur NOx, injecteur défectueux, réinitialisation de l'anti-démarrage).",
    time: "2 heures",
    price: "À partir de 15 000 DA"
  }
};

export const showrooms = [
  {
    id: 1,
    name: "AutoDeal Premium Alger",
    logo: "A",
    coverImage: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80",
    city: "Alger",
    address: "Route Nationale N°5, Bab Ezzouar, Alger, Algérie",
    phone: "+213 555 12 34 56",
    whatsapp: "+213 555 12 34 56",
    rating: 4.8,
    reviewCount: 124,
    isPremium: true,
    inventoryCount: 45,
    workingHours: "Dimanche - Jeudi : 09:00 - 18:00\nSamedi : 09:00 - 15:00\nVendredi : Fermé",
    reviews: [
      { id: 1, author: "Amine K.", rating: 5, date: "Il y a 2 semaines", content: "Super showroom, vendeurs très professionnels. J'ai acheté mon Audi RS6 chez eux, transaction impeccable." },
      { id: 2, author: "Yasmine B.", rating: 4, date: "Il y a 1 mois", content: "Très grand choix de véhicules premium. Le service commercial est à l'écoute." }
    ]
  },
  {
    id: 2,
    name: "Oran Motors Excellence",
    logo: "O",
    coverImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80",
    city: "Oran",
    address: "Boulevard Millenium, Bir El Djir, Oran, Algérie",
    phone: "+213 555 98 76 54",
    whatsapp: "+213 555 98 76 54",
    rating: 4.5,
    reviewCount: 89,
    isPremium: false,
    inventoryCount: 22,
    workingHours: "Samedi - Jeudi : 09:00 - 19:00\nVendredi : Fermé",
    reviews: [
      { id: 1, author: "Samir T.", rating: 5, date: "Il y a 3 jours", content: "Je recommande vivement, très sérieux pour l'importation de véhicules d'Europe." }
    ]
  }
];
