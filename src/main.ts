import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoFilter, GiCancel, MdSearch } from "oh-vue-icons/icons";

addIcons(IoFilter, GiCancel, MdSearch);

const app = createApp(App)

app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
