<template>
  <div class="cart-view">
    <div class="container">
      <h1 class="page-title">🛒 Nákupný košík</h1>
      
      <div v-if="cartItems.length === 0" class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <h2>Váš košík je prázdny</h2>
        <p>Pridajte si produkty do košíka a pokračujte v nákupe!</p>
        <RouterLink to="/products" class="btn-shop">
          Preskúmať produkty
        </RouterLink>
      </div>
      
      <div v-else class="cart-container">
        <div class="cart-items-section">
          <div class="cart-header">
            <h2>Položky v košíku ({{ cartItemsCount }})</h2>
            <button @click="clearCart" class="btn-clear">
              🗑️ Vyprázdniť košík
            </button>
          </div>
          
          <div class="cart-items-list">
            <CartItem 
              v-for="item in cartItems" 
              :key="item.id" 
              :item="item"
            />
          </div>
        </div>
        
        <div class="cart-summary">
          <h3 class="summary-title">Súhrn objednávky</h3>
          
          <div class="summary-row">
            <span>Medzisúčet:</span>
            <span>{{ formatPrice(cartSubtotal) }}</span>
          </div>
          
          <div class="summary-row">
            <span>Doprava:</span>
            <span>{{ formatPrice(shippingCost) }}</span>
          </div>
          
          <div class="summary-divider"></div>
          
          <div class="summary-row summary-total-row">
            <span class="total-label">Celkom:</span>
            <span class="total-amount">{{ formatPrice(finalTotal) }}</span>
          </div>
          
          <button @click="checkout" class="checkout-btn">
            💳 Pokračovať k platbe
          </button>
          
          <div class="payment-info">
            <p>✅ Bezpečná platba</p>
            <p>🚚 Doprava do 3 dní</p>
            <p>🔄 Možnosť vrátenia do 14 dní</p>
          </div>
          
          <RouterLink to="/products" class="continue-shopping">
            ← Pokračovať v nákupe
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore'
import CartItem from '../components/CartItem.vue'

export default {
  name: 'CartView',
  
  components: {
    CartItem
  },
  
  computed: {
    cartItems() {
      const cartStore = useCartStore()
      return cartStore.items
    },
    
    cartItemsCount() {
      const cartStore = useCartStore()
      return cartStore.cartItemsCount
    },
    
    cartSubtotal() {
      const cartStore = useCartStore()
      return cartStore.cartSubtotal
    },
    
    shippingCost() {
      const cartStore = useCartStore()
      return cartStore.shippingCost
    },
    
    finalTotal() {
      const cartStore = useCartStore()
      return cartStore.finalTotal
    }
  },
  
  methods: {
    formatPrice(price) {
      return `${price.toFixed(2)} €`
    },
    
    clearCart() {
      if (confirm('Naozaj chcete vyprázdniť košík?')) {
        const cartStore = useCartStore()
        cartStore.clearCart()
      }
    },
    
    checkout() {
      alert('Platobná brána nie je implementovaná v demo verzii. Ďakujeme za nákup!')
    }
  }
}
</script>

<style scoped>
.cart-view {
  padding: 40px 0;
  min-height: 70vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 40px;
  text-align: center;
  font-weight: bold;
}

.empty-cart {
  text-align: center;
  padding: 80px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.empty-cart-icon {
  font-size: 5rem;
  margin-bottom: 20px;
  opacity: 0.5;
}

.empty-cart h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

.empty-cart p {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 30px;
}

.btn-shop {
  display: inline-block;
  padding: 15px 40px;
  background: #ffcb05;
  color: #2c3e50;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s;
}

.btn-shop:hover {
  background: #e6b800;
  transform: scale(1.05);
}

.cart-container {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 30px;
}

.cart-items-section {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 2px solid #eee;
}

.cart-header h2 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.8rem;
}

.btn-clear {
  padding: 10px 20px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-clear:hover {
  background: #c0392b;
}

.cart-items-list {
  display: flex;
  flex-direction: column;
}

.cart-summary {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  height: fit-content;
  position: sticky;
  top: 100px;
}

.summary-title {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 25px;
  font-weight: bold;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 1.1rem;
  color: #555;
}

.summary-divider {
  height: 2px;
  background: #2c3e50;
  margin: 20px 0;
}

.summary-total-row {
  font-size: 1.3rem;
  font-weight: bold;
}

.total-label {
  color: #2c3e50;
  font-size: 1.5rem;
}

.total-amount {
  color: #27ae60;
  font-size: 1.8rem;
}

.checkout-btn {
  width: 100%;
  padding: 18px;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 25px;
}

.checkout-btn:hover {
  background: #229954;
  transform: scale(1.02);
}

.payment-info {
  text-align: center;
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.payment-info p {
  color: #7f8c8d;
  font-size: 0.95rem;
  margin: 8px 0;
}

.continue-shopping {
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
}

.continue-shopping:hover {
  color: #2980b9;
}

@media (max-width: 968px) {
  .cart-container {
    grid-template-columns: 1fr;
  }
  
  .cart-summary {
    position: static;
  }
  
  .page-title {
    font-size: 2rem;
  }
}
</style>