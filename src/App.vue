<script setup lang="ts">
import { createApp, ref } from "vue";
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import loginPage from './components/LoginPage.vue';

const login= ref(true);

const logIn = () => {
  login.value= false;
}

createApp({
  data() {
      login
  },
}).mount("#app")
</script>

<template>
  <div id="app">
  <loginPage v-if="login === true" :logIn="logIn" />
  <header v-if="login === false">
    <Header />
  </header>
  <RouterView v-if="login === false" />
  </div>
</template>

<style scoped>
header {
  box-sizing: border-box;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  box-shadow: 0 0 10px 2px rgb(208, 208, 208);
}
</style>
