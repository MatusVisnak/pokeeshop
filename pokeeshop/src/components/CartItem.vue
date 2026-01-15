<template>
  <div class="cart-item">
    <img :src="item.image" :alt="item.name" class="cart-item-image" @error="handleImageError">
    
    <div class="cart-item-info">
      <h3 class="cart-item-name">{{ item.name }}</h3>
      <p class="cart-item-price">{{ formatPrice(item.price) }} / ks</p>
    </div>
    
    <div class="cart-item-quantity">
      <button @click="decreaseQuantity" class="quantity-btn" :disabled="item.quantity <= 1">-</button>
      <span class="quantity">{{ item.quantity }}</span>
      <button @click="increaseQuantity" class="quantity-btn">+</button>
    </div>
    
    <div class="cart-item-total">
      <p class="total-price">{{ formatPrice(item.price * item.quantity) }}</p>
    </div>
    
    <button @click="removeItem" class="remove-btn" title="Odstrániť z košíka">🗑️</button>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore'

export default {
  name: 'CartItem',
  
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  
  methods: {
    formatPrice(price) {
      return `${price.toFixed(2)} €`
    },
    
    increaseQuantity() {
      const cartStore = useCartStore()
      cartStore.increaseQuantity(this.item.id)
    },
    
    decreaseQuantity() {
      if (this.item.quantity > 1) {
        const cartStore = useCartStore()
        cartStore.decreaseQuantity(this.item.id)
      }
    },
    
    removeItem() {
      const cartStore = useCartStore()
      if (confirm(`Odstrániť ${this.item.name} z košíka?`)) {
        cartStore.removeFromCart(this.item.id)
      }
    },
    
    handleImageError(event) {
      event.target.src = 'https://via.placeholder.com/100x100/667eea/ffffff?text=Product'
    }
  }
}
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-bottom: 15px;
  transition: all 0.3s;
}

.cart-item:hover {
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.cart-item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.cart-item-info {
  flex: 1;
}

.cart-item-name {
  margin: 0 0 8px 0;
  color: #2c3e50;
  font-size: 1.1rem;
  font-weight: 600;
}

.cart-item-price {
  color: #7f8c8d;
  margin: 0;
  font-size: 0.95rem;
}

.cart-item-quantity {
  display: flex;
  align-items: center;
  gap: 15px;
  background: #f5f5f5;
  padding: 5px 10px;
  border-radius: 8px;
}

.quantity-btn {
  width: 32px;
  height: 32px;
  border: 2px solid #ddd;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantity-btn:hover:not(:disabled) {
  background: #ffcb05;
  border-color: #ffcb05;
  transform: scale(1.1);
}

.quantity-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.quantity {
  font-weight: bold;
  font-size: 1.1rem;
  min-width: 30px;
  text-align: center;
  color: #2c3e50;
}

.cart-item-total {
  min-width: 100px;
  text-align: right;
}

.total-price {
  font-weight: bold;
  font-size: 1.3rem;
  color: #27ae60;
  margin: 0;
}

.remove-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s;
}

.remove-btn:hover {
  background: #c0392b;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .cart-item {
    flex-wrap: wrap;
    gap: 15px;
  }
  
  .cart-item-image {
    width: 80px;
    height: 80px;
  }
  
  .cart-item-quantity {
    order: 3;
    flex: 1;
  }
  
  .cart-item-total {
    order: 2;
  }
  
  .remove-btn {
    order: 4;
    width: 100%;
  }
}
</style>