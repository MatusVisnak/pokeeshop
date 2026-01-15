import { defineStore } from 'pinia'
import { products, categories, getProductById, getProductsByCategory, getFeaturedProducts } from '../data/products'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: products,
    categories: categories,
    selectedCategory: 'all',
    searchQuery: ''
  }),

  getters: {
    filteredProducts(state) {
      let filtered = getProductsByCategory(state.selectedCategory)
      
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase()
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
        )
      }
      
      return filtered
    },

    featuredProducts() {
      return getFeaturedProducts()
    },

    getProduct: (state) => (id) => {
      return getProductById(id)
    },

    productsByCategory: (state) => (category) => {
      return getProductsByCategory(category)
    }
  },

  actions: {
    setCategory(category) {
      this.selectedCategory = category
    },

    setSearchQuery(query) {
      this.searchQuery = query
    },

    resetFilters() {
      this.selectedCategory = 'all'
      this.searchQuery = ''
    }
  }
})