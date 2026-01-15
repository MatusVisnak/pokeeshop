export const products = [
  // FIGÚRKY
  {
    id: 1,
    name: "Pikachu Deluxe Figúrka",
    price: 24.99,
    image: "/images/surgingsparksbooster.jpg",
    category: "figurky",
    description: "Detailná Pikachu figúrka s pohyblivými končatinami. Výška 15cm, vyrobená z vysokokvalitného plastu. Perfektná pre zberateľov a fanúšikov Pokémon.",
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Charizard Mega Evolution Figúrka",
    price: 34.99,
    image: "/images/surgingsparksbooster.jpg",
    category: "figurky",
    description: "Impozantná Charizard figúrka v Mega Evolution forme. Výška 20cm s detailnými krídlami a ohnivými efektami.",
    inStock: true,
    featured: false
  },
  {
    id: 3,
    name: "Mewtwo Legendárna Figúrka",
    price: 39.99,
    image: "/images/surgingsparksbooster.jpg",
    category: "figurky",
    description: "Limitovaná edícia Mewtwo figúrky s LED podstavcom. Výška 18cm. Ideálna pre náročných zberateľov.",
    inStock: false,
    featured: true
  },
  {
    id: 4,
    name: "Eevee Evolution Set",
    price: 49.99,
    image: "/images/surgingsparksbooster.jpg",
    category: "figurky",
    description: "Kompletný set všetkých Eevee evolúcií. 8 mini figúrok v krásnom balení.",
    inStock: true,
    featured: false
  },

  // BOOSTRE
  {
    id: 5,
    name: "Scarlet & Violet Booster Pack",
    price: 4.99,
    image: "/images/surgingsparksbooster.jpg",
    category: "boostre",
    description: "Jeden booster pack zo série Scarlet & Violet. Obsahuje 10 náhodných kariet vrátane jednej rare karty.",
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: "Crown Zenith Booster Pack",
    price: 5.99,
    image: "/images/surgingsparksbooster.jpg",
    category: "boostre",
    description: "Prémiový booster pack Crown Zenith s možnosťou rare a holografických kariet.",
    inStock: true,
    featured: true
  },
  {
    id: 7,
    name: "Paldean Fates Booster Pack",
    price: 4.99,
    image: "/images/surgingsparksbooster.jpg",
    category: "boostre",
    description: "Booster pack z najnovšej série Paldean Fates. 10 kariet v balení.",
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: "Obsidian Flames Booster",
    price: 4.99,
    image: "/images/surgingsparksbooster.jpg",
    category: "boostre",
    description: "Booster pack zo série Obsidian Flames s ohnivými Pokémonmi.",
    inStock: true,
    featured: false
  },

  // BOOSTER BOXY
  {
    id: 9,
    name: "Scarlet & Violet Booster Box",
    price: 139.99,
    image: "/images/surgingsparksbooster.jpg",
    category: "booster-boxy",
    description: "Kompletný booster box obsahujúci 36 booster packov zo série Scarlet & Violet. Garantované rare karty.",
    inStock: true,
    featured: true
  },
  {
    id: 10,
    name: "Obsidian Flames Booster Box",
    price: 149.99,
    image: "/images/surgingsparksbooster.jpg",
    category: "booster-boxy",
    description: "Booster box Obsidian Flames s garantovanými rare kartami. 36 booster packov v originálnom sealed balení.",
    inStock: true,
    featured: false
  },
  {
    id: 11,
    name: "151 Special Booster Box",
    price: 179.99,
    image: "/images/surgingsparksbooster.jpg",
    category: "booster-boxy",
    description: "Limitovaná edícia booster boxu venovaného prvým 151 Pokémonom. 36 booster packov s nostalgickými kartami.",
    inStock: false,
    featured: true
  },
  {
    id: 12,
    name: "Crown Zenith Booster Box",
    price: 159.99,
    image: "/images/surgingsparksbooster.jpg",
    category: "booster-boxy",
    description: "Prémiový Crown Zenith booster box. 36 packov s vysokou šancou na vzácne karty.",
    inStock: true,
    featured: false
  },

  // BOOSTER BUNDLE
  {
    id: 13,
    name: "Starter Bundle - Scarlet & Violet",
    price: 29.99,
    image: "/images/surgingsparksbooster.jpg",
    category: "booster-bundle",
    description: "Štartovací bundle obsahujúci 6 booster packov, playmat a coin. Ideálne pre začiatočníkov.",
    inStock: true,
    featured: true
  },
  {
    id: 14,
    name: "Elite Trainer Box - Crown Zenith",
    price: 59.99,
    image: "/images/surgingsparksbooster.jpg",
    category: "booster-bundle",
    description: "Elite Trainer Box s 10 booster packami, energy kartami, dice a storage boxom. Kompletný set pre hráčov.",
    inStock: true,
    featured: false
  },
  {
    id: 15,
    name: "Premium Collection - Charizard",
    price: 89.99,
    image: "/images/surgingsparksbooster.jpg",
    category: "booster-bundle",
    description: "Prémiová kolekcia s Charizard promo kartou, 8 booster packami a exkluzívnym collectible boxom.",
    inStock: true,
    featured: true
  },
  {
    id: 16,
    name: "Battle Academy Bundle",
    price: 39.99,
    image: "/images/surgingsparksbooster.jpg",
    category: "booster-bundle",
    description: "Kompletný bundle pre začiatočníkov s 3 ready-to-play balíčkami a 4 booster packami.",
    inStock: true,
    featured: false
  }
]

export const categories = [
  { id: 'all', name: 'Všetky produkty', slug: 'all' },
  { id: 'figurky', name: 'Figúrky', slug: 'figurky' },
  { id: 'boostre', name: 'Boostre', slug: 'boostre' },
  { id: 'booster-boxy', name: 'Booster Boxy', slug: 'booster-boxy' },
  { id: 'booster-bundle', name: 'Booster Bundle', slug: 'booster-bundle' }
]

export function getProductById(id) {
  return products.find(product => product.id === parseInt(id))
}

export function getProductsByCategory(category) {
  if (category === 'all') return products
  return products.filter(product => product.category === category)
}

export function getFeaturedProducts() {
  return products.filter(product => product.featured)
}