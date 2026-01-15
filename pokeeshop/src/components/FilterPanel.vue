<template>
  <div class="filter-panel">
    <div class="filter-section">
      <label for="search">🔍 Hľadať produkty:</label>
      <input 
        id="search"
        type="text" 
        v-model="localSearchQuery"
        @input="updateSearch"
        placeholder="Zadajte názov produktu..."
        class="search-input"
      >
    </div>
    
    <div class="filter-section">
      <label>📂 Kategória:</label>
      <div class="category-buttons">
        <button 
          v-for="category in categories" 
          :key="category.id"
          @click="selectCategory(category.id)"
          :class="['category-btn', { active: selectedCategory === category.id }]"
        >
          {{ category.name }}
        </button>
      </div>
    </div>
    
    <button @click="resetFilters" class="reset-btn">
      🔄 Resetovať filtre
    </button>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/productsStore'

export default {
  name: 'FilterPanel',
  
  data() {
    return {
      localSearchQuery: ''
    }
  },
  
  computed: {
    categories() {
      const productsStore = useProductsStore()
      return productsStore.categories
    },
    
    selectedCategory() {
      const productsStore = useProductsStore()
      return productsStore.selectedCategory
    }
  },
  
  methods: {
    selectCategory(categoryId) {
      const productsStore = useProductsStore()
      productsStore.setCategory(categoryId)
    },
    
    updateSearch() {
      const productsStore = useProductsStore()
      productsStore.setSearchQuery(this.localSearchQuery)
    },
    
    resetFilters() {
      const productsStore = useProductsStore()
      productsStore.resetFilters()
      this.localSearchQuery = ''
    }
  }
}
</script>

<style scoped>
.filter-panel {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin-bottom: 30px;
}

.filter-section {
  margin-bottom: 20px;
}

.filter-section label {
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: #2c3e50;
  font-size: 1rem;
}

.search-input {
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: #ffcb05;
}

.category-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.category-btn {
  padding: 10px 20px;
  border: 2px solid #ddd;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 600;
  color: #2c3e50;
}

.category-btn:hover {
  border-color: #ffcb05;
  transform: translateY(-2px);
}

.category-btn.active {
  background: #ffcb05;
  border-color: #ffcb05;
  color: #2c3e50;
}

.reset-btn {
  padding: 12px 25px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
  font-size: 1rem;
}

.reset-btn:hover {
  background: #c0392b;
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .category-buttons {
    flex-direction: column;
  }
  
  .category-btn {
    width: 100%;
  }
}
</style>