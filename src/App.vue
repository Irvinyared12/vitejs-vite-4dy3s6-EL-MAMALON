<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app-container">
    <NavBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

router-view {
  flex: 1;
}
</style>