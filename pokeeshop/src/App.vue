<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <NavigationBar @toggle-dark-mode="toggleDarkMode" :isDarkMode="isDarkMode" />
    <main class="main-content">
      <RouterView />
    </main>
    <footer class="footer">
      <p>&copy; 2025 Pokémon Shop. Všetky práva vyhradené.</p>
      <p>Pokémon a všetky súvisiace značky sú ochranné známky spoločnosti Pokémon.</p>
    </footer>
    
    <!-- TOAST NOTIFICATIONS -->
    <ToastNotification ref="toast" />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import ToastNotification from './components/ToastNotification.vue'

export default {
  name: 'App',
  
  components: {
    NavigationBar,
    ToastNotification
  },

  data() {
    return {
      isDarkMode: false
    }
  },

  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      localStorage.setItem('darkMode', this.isDarkMode)
      
      // Toast notifikácia
      if (this.isDarkMode) {
        this.showToast('🌙 Tmavý režim zapnutý', 'info')
      } else {
        this.showToast('☀️ Svetlý režim zapnutý', 'info')
      }
    },

    showToast(message, type = 'success', duration = 3000) {
      this.$refs.toast.show(message, type, duration)
    }
  },

  mounted() {
    // Načítaj dark mode z localStorage
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode !== null) {
      this.isDarkMode = savedDarkMode === 'true'
    }

    // Sprístupni toast globálne pre všetky komponenty
    window.$toast = this.showToast
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: background 0.3s, color 0.3s;
}

/* DARK MODE STYLES */
#app.dark-mode {
  background: #1a1a1a;
  color: #e0e0e0;
}

#app.dark-mode .main-content {
  background: #1a1a1a;
}

#app.dark-mode .footer {
  background: #0d0d0d;
  color: #e0e0e0;
  border-top: 1px solid #333;
}

.main-content {
  flex: 1;
  padding: 20px;
  width: 100%;
}

.footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 30px;
  margin-top: 60px;
}

.footer p {
  margin: 5px 0;
}
</style>