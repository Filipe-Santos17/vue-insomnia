import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueClickAway from "vue3-click-away";

createApp(App).use(router).use(VueClickAway).mount('#app')
