<template>
  <div class="product-list-container">
    <div v-if="products.length === 0" class="no-products">
      <p>😔 Žiadne produkty neboli nájdené.</p>
    </div>
    
    <div v-else class="product-list">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductList',
  
  components: {
    ProductCard
  },
  
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.product-list-container {
  margin: 20px 0;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
}

.no-products {
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.no-products p {
  font-size: 1.3rem;
  color: #7f8c8d;
}

@media (max-width: 768px) {
  .product-list {
    grid-template-columns: 1fr;
  }
}
</style>