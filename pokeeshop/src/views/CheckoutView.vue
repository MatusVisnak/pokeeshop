<template>
  <div class="checkout-view">
    <div class="container">
      <h1 class="page-title">💳 Pokladňa</h1>

      <div class="checkout-container">
        <div class="checkout-form">
          <h2 class="section-title">📋 Dodacie údaje</h2>

          <form @submit.prevent="processOrder">
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">Meno *</label>
                <input
                  type="text"
                  id="firstName"
                  v-model="formData.firstName"
                  required
                  placeholder="Vaše meno"
                />
              </div>

              <div class="form-group">
                <label for="lastName">Priezvisko *</label>
                <input
                  type="text"
                  id="lastName"
                  v-model="formData.lastName"
                  required
                  placeholder="Vaše priezvisko"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  required
                  placeholder="vas@email.sk"
                />
              </div>

              <div class="form-group">
                <label for="phone">Telefónne číslo *</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  required
                  placeholder="V tvare +000 000 000 000"
                />
              </div>
            </div>

            <!-- Krajina -->
            <div class="form-group">
              <label for="country">Krajina *</label>
              <select
                id="country"
                v-model="formData.country"
                required
                @change="updateShippingCost"
              >
                <option value="">-- Vyberte krajinu --</option>
                <option value="SK">Slovensko</option>
                <option value="CZ">Česká republika</option>
                <option value="PL">Poľsko</option>
                <option value="AT">Rakúsko</option>
                <option value="HU">Maďarsko</option>
              </select>
            </div>

            <!-- Adresa -->
            <div class="form-group">
              <label for="address">Ulica a číslo domu *</label>
              <input
                type="text"
                id="address"
                v-model="formData.address"
                required
                placeholder="Hlavná 123"
              />
            </div>

            <!-- Mesto a PSČ -->
            <div class="form-row">
              <div class="form-group">
                <label for="city">Mesto *</label>
                <input
                  type="text"
                  id="city"
                  v-model="formData.city"
                  required
                  placeholder="Bratislava"
                />
              </div>

              <div class="form-group">
                <label for="zipCode">PSČ *</label>
                <input
                  type="text"
                  id="zipCode"
                  v-model="formData.zipCode"
                  required
                  placeholder="81101"
                />
              </div>
            </div>

            <!-- Poznámka -->
            <div class="form-group">
              <label for="note">Poznámka k objednávke (voliteľné)</label>
              <textarea
                id="note"
                v-model="formData.note"
                rows="3"
                placeholder="Sem napíšte akékoľvek poznámky k objednávke..."
              ></textarea>
            </div>

            <!-- Submit tlačidlo -->
            <button type="submit" class="btn-submit">
              🛒 Dokončiť objednávku
            </button>
          </form>
        </div>

        <!-- ORDER SUMMARY -->
        <div class="order-summary">
          <h2 class="section-title">📦 Súhrn objednávky</h2>

          <div class="summary-items">
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="summary-item"
            >
              <img :src="item.image" :alt="item.name" @error="handleImageError" />
              <div class="item-info">
                <p class="item-name">{{ item.name }}</p>
                <p class="item-quantity">{{ item.quantity }}x {{ formatPrice(item.price) }}</p>
              </div>
              <p class="item-total">{{ formatPrice(item.price * item.quantity) }}</p>
            </div>
          </div>

          <div class="summary-divider"></div>

          <div class="summary-row">
            <span>Medzisúčet:</span>
            <span>{{ formatPrice(cartSubtotal) }}</span>
          </div>

          <div class="summary-row shipping-row">
            <span>Doprava do {{ countryName }}:</span>
            <span v-if="formData.country && currentShippingCost === 0" class="free-shipping">
              ZADARMO 🎉
            </span>
            <span v-else-if="formData.country">
              {{ formatPrice(currentShippingCost) }}
            </span>
            <span v-else class="not-selected">
              Vyberte krajinu
            </span>
          </div>

          <div class="summary-divider"></div>

          <div class="summary-row total-row">
            <span class="total-label">Celkom:</span>
            <span class="total-amount">{{ formatPrice(finalTotal) }}</span>
          </div>

          <div class="payment-methods">
            <p class="methods-title">💳 Spôsoby platby:</p>
            <div class="methods-icons">
              
              <span>📦 Dobierka</span>
            </div>
          </div>

          <div class="security-info">
            <p>🔒 Zabezpečená platba</p>
            <p>✅ SSL šifrovanie</p>
          </div>

          <RouterLink to="/cart" class="back-to-cart">
            ← Späť do košíka
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore'

export default {
  name: 'CheckoutView',

  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        address: '',
        city: '',
        zipCode: '',
        note: ''
      },
      shippingRates: {
        SK: 3.00,   // Slovensko
        CZ: 4.00,   // Česká republika
        HU: 5.00,   // Maďarsko
        PL: 6.00,   // Poľsko
        AT: 7.00    // Rakúsko
      }
    }
  },

  computed: {
    cartItems() {
      const cartStore = useCartStore()
      return cartStore.items
    },

    cartSubtotal() {
      const cartStore = useCartStore()
      return cartStore.cartSubtotal
    },

    currentShippingCost() {
      if (!this.formData.country) return 0
      
      // Doprava zadarmo nad 100€
      if (this.cartSubtotal >= 100) return 0
      
      return this.shippingRates[this.formData.country] || 0
    },

    finalTotal() {
      return this.cartSubtotal + this.currentShippingCost
    },

    countryName() {
      const countries = {
        SK: 'Slovenska',
        CZ: 'Česka',
        PL: 'Poľska',
        AT: 'Rakúska',
        HU: 'Maďarska'
      }
      return countries[this.formData.country] || 'krajiny'
    }
  },

  methods: {
    formatPrice(price) {
      return `${price.toFixed(2)} €`
    },

    updateShippingCost() {
      
    },

    processOrder() {
      if (!this.formData.country) {
        alert('Prosím, vyberte krajinu doručenia!')
        return
      }

      if (this.cartItems.length === 0) {
        alert('Váš košík je prázdny!')
        this.$router.push('/products')
        return
      }

      const order = {
        customer: { ...this.formData },
        items: this.cartItems,
        subtotal: this.cartSubtotal,
        shipping: this.currentShippingCost,
        total: this.finalTotal,
        date: new Date().toISOString()
      }

      console.log('Objednávka:', order)

      alert(`✅ Objednávka úspešne odoslaná!

Meno: ${this.formData.firstName} ${this.formData.lastName}
Email: ${this.formData.email}
Adresa: ${this.formData.address}, ${this.formData.city}
Krajina: ${this.countryName}

Celková suma: ${this.formatPrice(this.finalTotal)}

Potvrdenie objednávky bude zaslané na ${this.formData.email}.
Platba prebehne v hotovosti/kartou pri doručení kuriérom!`)

      const cartStore = useCartStore()
      cartStore.clearCart()

      this.$router.push('/')
    },

    handleImageError(event) {
      event.target.src = 'https://via.placeholder.com/80x80/667eea/ffffff?text=Product'
    }
  },

  mounted() {
    if (this.cartItems.length === 0) {
      alert('Váš košík je prázdny! Presmerovávam na produkty.')
      this.$router.push('/products')
    }
  }
}
</script>

<style scoped>
.checkout-view {
  padding: 40px 0;
  min-height: 80vh;
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

.checkout-container {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 30px;
}

.checkout-form,
.order-summary {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.section-title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 25px;
  font-weight: bold;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #2c3e50;
  font-weight: 600;
  font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.3s;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #ffcb05;
}

.form-group textarea {
  resize: vertical;
}

.btn-submit {
  width: 100%;
  padding: 18px;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 10px;
}

.btn-submit:hover {
  background: #229954;
  transform: scale(1.02);
}

.order-summary {
  height: fit-content;
  position: sticky;
  top: 100px;
}

.summary-items {
  margin-bottom: 20px;
}

.summary-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 10px;
  margin-bottom: 10px;
}

.summary-item img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.item-info {
  flex: 1;
}

.item-name {
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 5px 0;
  font-size: 0.95rem;
}

.item-quantity {
  color: #7f8c8d;
  margin: 0;
  font-size: 0.85rem;
}

.item-total {
  font-weight: bold;
  color: #27ae60;
  margin: 0;
}

.summary-divider {
  height: 2px;
  background: #eee;
  margin: 20px 0;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 1rem;
  color: #555;
}

.shipping-row {
  color: #2c3e50;
  font-weight: 600;
}

.free-shipping {
  color: #27ae60;
  font-weight: bold;
}

.not-selected {
  color: #e74c3c;
  font-style: italic;
}

.total-row {
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 10px;
}

.total-label {
  color: #2c3e50;
  font-size: 1.4rem;
}

.total-amount {
  color: #27ae60;
  font-size: 1.6rem;
}

.payment-methods {
  margin-top: 25px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
}

.methods-title {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 10px;
}

.methods-icons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.methods-icons span {
  background: white;
  padding: 8px 15px;
  border-radius: 6px;
  font-size: 0.9rem;
  border: 1px solid #ddd;
}

.security-info {
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.security-info p {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin: 5px 0;
}

.back-to-cart {
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
}

.back-to-cart:hover {
  color: #2980b9;
}

@media (max-width: 968px) {
  .checkout-container {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .order-summary {
    position: static;
  }

  .page-title {
    font-size: 2rem;
  }
}
</style>