<template>
  <nav class="navbar">
    <div class="nav-container">
      <RouterLink to="/" class="nav-logo">
        <h1>⚡ Pokémon Shop</h1>
      </RouterLink>
      
      <ul class="nav-menu">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">Domov</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/products" class="nav-link">Produkty</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link">O nás</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/cart" class="nav-link cart-link">
            🛒 Košík
            <span v-if="cartItemsCount > 0" class="cart-badge">
              {{ cartItemsCount }}
            </span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useCartStore } from '../stores/cartStore'

export default {
  name: 'NavigationBar',
  
  computed: {
    cartItemsCount() {
      const cartStore = useCartStore()
      return cartStore.cartItemsCount
    }
  }
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #ffcb05 0%, #f7b500 100%);
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.nav-logo {
  text-decoration: none;
}

.nav-logo h1 {
  color: #2c3e50;
  margin: 0;
  font-size: 1.8rem;
  font-weight: bold;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-item {
  list-style: none;
}

.nav-link {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  transition: all 0.3s;
  position: relative;
  display: inline-block;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.nav-link.router-link-active {
  background: #2c3e50;
  color: #ffcb05;
}

.cart-link {
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #e74c3c;
  color: white;
  border-radius: 50%;
  padding: 2px 8px;
  font-size: 0.75rem;
  font-weight: bold;
  min-width: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .nav-menu {
    gap: 1rem;
  }
  
  .nav-link {
    padding: 0.5rem 0.8rem;
    font-size: 0.9rem;
  }
  
  .nav-logo h1 {
    font-size: 1.3rem;
  }
}
</style>