<template>
  <div class="products-view">
    <div class="container">
      <h1 class="page-title">🛍️ Všetky produkty</h1>
      
      <FilterPanel />
      
      <div class="products-info">
        <p class="products-count">
          Nájdených produktov: <strong>{{ filteredProducts.length }}</strong>
        </p>
      </div>
      
      <ProductList :products="filteredProducts" />
    </div>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/productsStore'
import FilterPanel from '../components/FilterPanel.vue'
import ProductList from '../components/ProductList.vue'

export default {
  name: 'ProductsView',
  
  components: {
    FilterPanel,
    ProductList
  },
  
  computed: {
    filteredProducts() {
      const productsStore = useProductsStore()
      return productsStore.filteredProducts
    }
  }
}
</script>

<style scoped>
.products-view {
  padding: 40px 0;
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

.products-info {
  margin-bottom: 20px;
  text-align: center;
}

.products-count {
  font-size: 1.1rem;
  color: #7f8c8d;
}

.products-count strong {
  color: #2c3e50;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
}
</style>