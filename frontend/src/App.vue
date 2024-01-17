

<template>
  <div id="app">
    <AppHeader @changeMode="changeMode" />
    <main class="main-content">
      <router-view/>
    </main>
  </div>
</template>

<script>
import { useStore } from './store'
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    AppHeader,
  },
  methods: {
    changeMode(mode) {
      if (mode === 'untimed') {
        this.$router.push({ path: '/untimed' })
      } else if (mode === 'timed') {
        this.$router.push({ path: '/timed' })
      }
  },
},
  created() {
    const store = useStore()
    store.fetchCities()
  },
  mounted() {
    const store = useStore()
    store.fetchCities()
  }
  
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .main-content {
    padding-top: 70px; 
  }
</style>
