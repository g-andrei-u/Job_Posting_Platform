<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
  <div id="app">
  <header>
    <Header />
  </header>
  <RouterView />
  </div>
</template>

<style scoped>
header {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  box-shadow: 0 0 10px 2px rgb(208, 208, 208);
}
</style>
