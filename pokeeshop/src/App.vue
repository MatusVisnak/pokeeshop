<template>
  <div id="app">
    <NavigationBar />
    <main class="main-content">
      <RouterView />
    </main>
    <footer class="footer">
      <p>&copy; 2025 Pokémon Shop. Všetky práva vyhradené.</p>
      <p>Pokémon a všetky súvisiace značky sú ochranné známky spoločnosti Nintendo.</p>
    </footer>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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