import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import Navbar from './components/Navbar.vue';

createApp(App)
.component('navbar', Navbar)
.use(router)
.mount('#app')