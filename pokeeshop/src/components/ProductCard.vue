<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" @error="handleImageError">
      <span v-if="product.featured" class="featured-badge">Vyzdvihnuté</span>
      <span v-if="!product.inStock" class="out-of-stock-badge">Vypredané</span>
    </div>
    
    <div class="product-info">
      <div class="product-category">{{ getCategoryName(product.category) }}</div>
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ formatPrice(product.price) }}</p>
      
      <div class="product-actions">
        <RouterLink 
          :to="{ name: 'product-detail', params: { id: product.id } }" 
          class="btn btn-secondary"
        >
          Detail
        </RouterLink>
        
        <button 
          @click="addToCart" 
          class="btn btn-primary"
          :disabled="!product.inStock"
        >
          {{ product.inStock ? 'Do košíka' : 'Nedostupné' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore'

export default {
  name: 'ProductCard',
  
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  
  methods: {
    formatPrice(price) {
      return `${price.toFixed(2)} €`
    },
    
    getCategoryName(category) {
      const categoryMap = {
        'figurky': 'Figúrky',
        'boostre': 'Boostre',
        'booster-boxy': 'Booster Boxy',
        'booster-bundle': 'Booster Bundle'
      }
      return categoryMap[category] || category
    },
    
    addToCart() {
      const cartStore = useCartStore()
      cartStore.addToCart(this.product)
      
      // TOAST namiesto alert
      if (window.$toast) {
        window.$toast(`${this.product.name} bol pridaný do košíka! 🛒`, 'success')
      }
    },
    
    handleImageError(event) {
      event.target.src = 'https://via.placeholder.com/300x300/667eea/ffffff?text=Pokémon'
    }
  }
}
</script>

<style scoped>
.product-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.product-image {
  position: relative;
  height: 250px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #ffcb05;
  color: #2c3e50;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.85rem;
  z-index: 1;
}

.out-of-stock-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #e74c3c;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.85rem;
  z-index: 1;
}

.product-info {
  padding: 20px;
}

.product-category {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.product-name {
  font-size: 1.2rem;
  margin: 0 0 15px 0;
  color: #2c3e50;
  font-weight: 600;
}

.product-price {
  font-size: 1.5rem;
  color: #27ae60;
  font-weight: bold;
  margin: 15px 0;
}

.product-actions {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.btn {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s;
  font-size: 0.95rem;
}

.btn-primary {
  background: #ffcb05;
  color: #2c3e50;
}

.btn-primary:hover:not(:disabled) {
  background: #e6b800;
  transform: scale(1.05);
}

.btn-primary:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}

.btn-secondary {
  background: #3498db;
  color: white;
}

.btn-secondary:hover {
  background: #2980b9;
}
</style>