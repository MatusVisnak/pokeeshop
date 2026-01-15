<template>
  <div class="home-view">
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">🎮 Vitajte v Pokémon Shope! ⚡</h1>
        <p class="hero-subtitle">Najlepšie Pokémon produkty na jednom mieste</p>
        <RouterLink to="/products" class="hero-btn">
          Preskúmať produkty
        </RouterLink>
      </div>
    </section>

    <div class="container">
      <section class="featured-section">
        <h2 class="section-title">⭐ Vyzdvihnuté produkty</h2>
        <ProductList :products="featuredProducts" />
      </section>

      <section class="categories-section">
        <h2 class="section-title">📂 Kategórie produktov</h2>
        <div class="categories-grid">
          <div 
            v-for="category in categories.slice(1)" 
            :key="category.id"
            @click="goToCategory(category.id)"
            class="category-card"
          >
            <div class="category-icon">{{ getCategoryIcon(category.id) }}</div>
            <h3>{{ category.name }}</h3>
            <p>{{ getProductCount(category.id) }} produktov</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/productsStore'
import ProductList from '../components/ProductList.vue'

export default {
  name: 'HomeView',
  
  components: {
    ProductList
  },
  
  computed: {
    featuredProducts() {
      const productsStore = useProductsStore()
      return productsStore.featuredProducts
    },
    
    categories() {
      const productsStore = useProductsStore()
      return productsStore.categories
    }
  },
  
  methods: {
    getCategoryIcon(categoryId) {
      const icons = {
        'figurky': '🎭',
        'boostre': '🃏',
        'booster-boxy': '📦',
        'booster-bundle': '🎁'
      }
      return icons[categoryId] || '📦'
    },
    
    getProductCount(categoryId) {
      const productsStore = useProductsStore()
      return productsStore.productsByCategory(categoryId).length
    },
    
    goToCategory(categoryId) {
      const productsStore = useProductsStore()
      productsStore.setCategory(categoryId)
      this.$router.push('/products')
    }
  }
}
</script>

<style scoped>
.home-view {
  width: 100%;
  padding: 0;
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
  margin-bottom: 60px;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 40px;
  opacity: 0.95;
}

.hero-btn {
  display: inline-block;
  background: #ffcb05;
  color: #2c3e50;
  padding: 15px 40px;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s;
}

.hero-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 20px rgba(0,0,0,0.3);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 40px;
  text-align: center;
  font-weight: bold;
}

.featured-section {
  margin-bottom: 80px;
}

.categories-section {
  margin-bottom: 60px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

.category-card {
  background: white;
  padding: 40px 20px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.3s;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.category-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.category-card h3 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.category-card p {
  color: #7f8c8d;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .categories-grid {
    grid-template-columns: 1fr;
  }
}
</style>