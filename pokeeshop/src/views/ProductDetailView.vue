<template>
  <div class="product-detail-view">
    <div class="container">
      <RouterLink to="/products" class="back-link">
        ← Späť na produkty
      </RouterLink>
      
      <div v-if="product" class="product-detail">
        <div class="product-image-large">
          <img :src="product.image" :alt="product.name" @error="handleImageError">
          <span v-if="product.featured" class="featured-badge">⭐ Odporúčané</span>
          <span v-if="!product.inStock" class="out-of-stock-badge">❌ Vypredané</span>
        </div>
        
        <div class="product-details">
          <div class="product-category">{{ getCategoryName(product.category) }}</div>
          <h1 class="product-title">{{ product.name }}</h1>
          
          <div class="product-price-large">{{ formatPrice(product.price) }}</div>
          
          <div class="product-availability">
            <span v-if="product.inStock" class="in-stock">✅ Skladom</span>
            <span v-else class="out-of-stock">❌ Vypredané</span>
          </div>
          
          <p class="product-description">{{ product.description }}</p>
          
          <div class="product-actions-large">
            <div v-if="isInCart" class="in-cart-info">
              <p>✅ Produkt je v košíku ({{ cartQuantity }}x)</p>
            </div>
            
            <button 
              @click="addToCart" 
              class="btn-add-to-cart"
              :disabled="!product.inStock"
            >
              {{ product.inStock ? '🛒 Pridať do košíka' : 'Nedostupné' }}
            </button>
            
            <RouterLink to="/cart" class="btn-go-to-cart">
              Prejsť do košíka
            </RouterLink>
          </div>
        </div>
      </div>
      
      <div v-else class="product-not-found">
        <h2>😔 Produkt nenájdený</h2>
        <RouterLink to="/products" class="btn-back">Späť na produkty</RouterLink>
      </div>
      
      <div v-if="product" class="related-products">
        <h2 class="section-title">🔗 Podobné produkty</h2>
        <ProductList :products="relatedProducts" />
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/productsStore'
import { useCartStore } from '../stores/cartStore'
import ProductList from '../components/ProductList.vue'

export default {
  name: 'ProductDetailView',
  
  components: {
    ProductList
  },
  
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  
  data() {
    return {
      imageLoaded: false,
      imageError: false
    }
  },
  
  watch: {
    id() {
      // Reset loading state pri zmene produktu
      this.imageLoaded = false
      this.imageError = false
    }
  },
  
  computed: {
    product() {
      const productsStore = useProductsStore()
      return productsStore.getProduct(this.id)
    },
    
    relatedProducts() {
      if (!this.product) return []
      
      const productsStore = useProductsStore()
      const related = productsStore.productsByCategory(this.product.category)
        .filter(p => p.id !== this.product.id)
        .slice(0, 3)
      
      return related
    },
    
    isInCart() {
      const cartStore = useCartStore()
      return cartStore.isInCart(parseInt(this.id))
    },
    
    cartQuantity() {
      const cartStore = useCartStore()
      const item = cartStore.getCartItem(parseInt(this.id))
      return item ? item.quantity : 0
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
      alert(`${this.product.name} bol pridaný do košíka!`)
    },
    
    handleImageError() {
      this.imageError = true
      this.imageLoaded = false
      console.error('Obrázok sa nepodarilo načítať:', this.product.image)
    }
  }
}
</script>

<style scoped>
.product-detail-view {
  padding: 40px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.back-link {
  display: inline-block;
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 30px;
  transition: all 0.3s;
}

.back-link:hover {
  color: #2980b9;
  transform: translateX(-5px);
}

.product-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin-bottom: 60px;
}

.product-image-large {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.product-image-large img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
}

.featured-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: #ffcb05;
  color: #2c3e50;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 1rem;
}

.out-of-stock-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #e74c3c;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 1rem;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-category {
  color: #7f8c8d;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.product-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin: 0;
  font-weight: bold;
}

.product-price-large {
  font-size: 2.5rem;
  color: #27ae60;
  font-weight: bold;
}

.product-availability {
  margin: 10px 0;
}

.in-stock {
  color: #27ae60;
  font-weight: 600;
  font-size: 1.1rem;
}

.out-of-stock {
  color: #e74c3c;
  font-weight: 600;
  font-size: 1.1rem;
}

.product-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin: 20px 0;
}

.product-actions-large {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
}

.in-cart-info {
  background: #d5f4e6;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
}

.in-cart-info p {
  margin: 0;
  color: #27ae60;
  font-weight: 600;
}

.btn-add-to-cart {
  padding: 18px;
  background: #ffcb05;
  color: #2c3e50;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-add-to-cart:hover:not(:disabled) {
  background: #e6b800;
  transform: scale(1.02);
}

.btn-add-to-cart:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}

.btn-go-to-cart {
  padding: 18px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s;
}

.btn-go-to-cart:hover {
  background: #2980b9;
}

.product-not-found {
  text-align: center;
  padding: 80px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.product-not-found h2 {
  font-size: 2rem;
  color: #7f8c8d;
  margin-bottom: 30px;
}

.btn-back {
  display: inline-block;
  padding: 15px 40px;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-back:hover {
  background: #2980b9;
}

.related-products {
  margin-top: 60px;
}

.section-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 30px;
  font-weight: bold;
}

@media (max-width: 968px) {
  .product-detail {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .product-image-large {
    height: 400px;
  }
  
  .product-title {
    font-size: 2rem;
  }
}
</style>