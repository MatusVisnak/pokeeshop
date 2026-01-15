import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),

  getters: {
    cartItemsCount(state) {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    },

    cartTotal(state) {
      return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    },

    cartSubtotal(state) {
      return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    },

    shippingCost() {
      return 5.00
    },

    finalTotal(state) {
      const subtotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
      return subtotal + 5.00
    },

    isInCart: (state) => (productId) => {
      return state.items.some(item => item.id === productId)
    },

    getCartItem: (state) => (productId) => {
      return state.items.find(item => item.id === productId)
    }
  },

  actions: {
    addToCart(product) {
      const existingItem = this.items.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category,
          quantity: 1
        })
      }
      
      this.saveToLocalStorage()
    },

    removeFromCart(productId) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index > -1) {
        this.items.splice(index, 1)
        this.saveToLocalStorage()
      }
    },

    updateQuantity(productId, quantity) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        item.quantity = Math.max(1, quantity)
        this.saveToLocalStorage()
      }
    },

    increaseQuantity(productId) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        item.quantity++
        this.saveToLocalStorage()
      }
    },

    decreaseQuantity(productId) {
      const item = this.items.find(item => item.id === productId)
      if (item && item.quantity > 1) {
        item.quantity--
        this.saveToLocalStorage()
      }
    },

    clearCart() {
      this.items = []
      this.saveToLocalStorage()
    },

    saveToLocalStorage() {
      localStorage.setItem('pokemon-cart', JSON.stringify(this.items))
    },

    loadFromLocalStorage() {
      const saved = localStorage.getItem('pokemon-cart')
      if (saved) {
        try {
          this.items = JSON.parse(saved)
        } catch (e) {
          console.error('Chyba pri načítaní košíka:', e)
          this.items = []
        }
      }
    }
  }
})