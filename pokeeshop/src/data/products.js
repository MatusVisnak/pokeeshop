export const products = [
  // FIGÚRKY
  {
    id: 1,
    name: "Funko POP Games: Pokémon - Pikachu",
    price: 24.99,
    image: import.meta.env.BASE_URL + "/images/funkopikachu.jpg",
    category: "figurky",
    description: "Rozšír svoju Pokémon kolekciu o túto figúrku!",
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Funko POP Games: Pokémon - Bulbasaur",
    price: 34.99,
    image: import.meta.env.BASE_URL + "/images/funkobulbasaur.jpg",
    category: "figurky",
    description: "Rozšír svoju Pokémon kolekciu o túto figúrku!",
    inStock: true,
    featured: false
  },
  {
    id: 3,
    name: "Funko POP Games: Pokémon - Charmander",
    price: 39.99,
    image: import.meta.env.BASE_URL + "/images/funkocharmander.jpg",
    category: "figurky",
    description: "Rozšír svoju Pokémon kolekciu o túto figúrku!",
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Funko POP Games: Pokémon - Gengar",
    price: 49.99,
    image: import.meta.env.BASE_URL + "/images/funkogengar.jpg",
    category: "figurky",
    description: "Rozšír svoju Pokémon kolekciu o túto figúrku!",
    inStock: true,
    featured: true
  },
{
    id: 5,
    name: "Funko POP Games: Pokémon - Glaceon",
    price: 39.99,
    image: import.meta.env.BASE_URL + "/images/funkoglaceon.jpg",
    category: "figurky",
    description: "Rozšír svoju Pokémon kolekciu o túto figúrku!",
    inStock: false,
    featured: false
  },
  {
    id: 6,
    name: "Funko POP Games: Pokémon - Meowth",
    price: 49.99,
    image: import.meta.env.BASE_URL + "/images/funkomeowth.jpg",
    category: "figurky",
    description: "Rozšír svoju Pokémon kolekciu o túto figúrku!",
    inStock: true,
    featured: false
  },
  // BOOSTRE
  {
    id: 7,
    name: "Scarlet & Violet Booster Pack",
    price: 4.99,
    image: import.meta.env.BASE_URL + "/images/scarletvioletbooster.jpg",
    category: "boostre",
    description: "Jeden booster pack zo série Scarlet & Violet. Obsahuje 10 náhodných kariet vrátane jednej rare karty.",
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: "Destined Rivals Booster Pack",
    price: 5.99,
    image: import.meta.env.BASE_URL + "/images/destinedrivalsbooster.jpg",
    category: "boostre",
    description: "Prémiový booster pack Destined Rivals s možnosťou rare a holografických kariet.",
    inStock: true,
    featured: true
  },
  {
    id: 9,
    name: "Fusion Strike Booster Pack",
    price: 4.99,
    image: import.meta.env.BASE_URL + "/images/fusionstrikebooster.jpg",
    category: "boostre",
    description: "Booster pack zo série Fusion Strike. 10 kariet v balení.",
    inStock: true,
    featured: false
  },
  {
    id: 10,
    name: "Journey Together Booster Pack",
    price: 4.99,
    image: import.meta.env.BASE_URL + "/images/jurneytogetherbooster.jpg",
    category: "boostre",
    description: "Booster pack zo série Journey Together.",
    inStock: true,
    featured: false
  },
{
    id: 11,
    name: "Mega Evolutions Booster Pack",
    price: 4.99,
    image: import.meta.env.BASE_URL + "/images/megaevolutionbooster.jpg",
    category: "boostre",
    description: "Booster pack zo série Mega Evolutions. 10 kariet v balení.",
    inStock: true,
    featured: true
  },
  {
    id: 12,
    name: "Chilling Reign Booster Pack",
    price: 4.99,
    image: import.meta.env.BASE_URL + "/images/chillingreignbooster.jpg",
    category: "boostre",
    description: "Booster pack zo série Chilling Reign.",
    inStock: true,
    featured: false
  },
  // BOOSTER BOXY
  {
    id: 13,
    name: "Obsidian Flames Booster Box",
    price: 139.99,
    image: import.meta.env.BASE_URL + "/images/ofbb.jpg",
    category: "booster-boxy",
    description: "Kompletný booster box obsahujúci 36 booster packov zo série Obsidian Flames. Garantované rare karty.",
    inStock: true,
    featured: true
  },
  {
    id: 14,
    name: "Paldea Evolved Booster Box",
    price: 149.99,
    image: import.meta.env.BASE_URL + "/images/pebb.jpg",
    category: "booster-boxy",
    description: "Booster box Paldea Evolved s garantovanými rare kartami. 36 booster packov v originálnom sealed balení.",
    inStock: true,
    featured: false
  },
  {
    id: 15,
    name: "Phantasmal Flames Booster Box",
    price: 179.99,
    image: import.meta.env.BASE_URL + "/images/pfbb.jpg",
    category: "booster-boxy",
    description: "Phantasmal Flames Booster Box obsahuje 36 booster packov s nostalgickými kartami.",
    inStock: false,
    featured: false
  },
  {
    id: 16,
    name: "Paradox Rift Booster Box",
    price: 159.99,
    image: import.meta.env.BASE_URL + "/images/prbb.jpg",
    category: "booster-boxy",
    description: "Prémiový Paradox Rift booster box. 36 packov s vysokou šancou na vzácne karty.",
    inStock: true,
    featured: true
  },
  {
    id: 17,
    name: "Temporal Forces Booster Box",
    price: 179.99,
    image: import.meta.env.BASE_URL + "/images/tfbb.jpg",
    category: "booster-boxy",
    description: "Temporal Forces Booster Box obsahuje 36 booster packov s nostalgickými kartami.",
    inStock: false,
    featured: false
  },
  {
    id: 18,
    name: "Surging Sparks Booster Box",
    price: 159.99,
    image: import.meta.env.BASE_URL + "/images/ssbb.jpg",
    category: "booster-boxy",
    description: "Prémiový Surging Sparks booster box. 36 packov s vysokou šancou na vzácne karty.",
    inStock: true,
    featured: false
  },
  // BOOSTER BUNDLE
  {
    id: 19,
    name: "Shrouded Fable Booster Bundle",
    price: 29.99,
    image: import.meta.env.BASE_URL + "/images/sfbundle.jpg",
    category: "booster-bundle",
    description: "Booster Bundle kartovej hry Pokémon sady Shrouded Fable",
    inStock: true,
    featured: true
  },
  {
    id: 20,
    name: "Prismatic Evolutions Booster Bundle",
    price: 59.99,
    image: import.meta.env.BASE_URL + "/images/pebundle.jpg",
    category: "booster-bundle",
    description: "Booster Bundle kartovej hry Pokémon sady Prismatic Evolutions.",
    inStock: true,
    featured: false
  },
  {
    id: 21,
    name: "Phantasmal Flames Booster Bundle",
    price: 89.99,
    image: import.meta.env.BASE_URL + "/images/pfbundle.jpg",
    category: "booster-bundle",
    description: "Booster Bundle kartovej hry Pokémon sady Phantasmal Flames.",
    inStock: true,
    featured: true
  },
  {
    id: 22,
    name: "White Flare Booster Bundle",
    price: 39.99,
    image: import.meta.env.BASE_URL + "/images/wfbundle.jpg",
    category: "booster-bundle",
    description: "Booster Bundle kartovej hry Pokémon sady White Flare",
    inStock: true,
    featured: false
  },
  {
    id: 23,
    name: "Black Bolt Booster Bundle",
    price: 89.99,
    image: import.meta.env.BASE_URL + "/images/bbbundle.jpg",
    category: "booster-bundle",
    description: "Booster Bundle kartovej hry Pokémon sady Black Bolt.",
    inStock: true,
    featured: false
  },
  {
    id: 24,
    name: "Scarlet & Violet 151 Booster Bundle",
    price: 39.99,
    image: import.meta.env.BASE_URL + "/images/151bundle.jpg",
    category: "booster-bundle",
    description: "Booster Bundle kartovej hry Pokémon sady Scarlet & Violet.",
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