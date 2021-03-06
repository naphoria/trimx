import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'
import '@fortawesome/fontawesome-free/js/all'
import './tailwind.css'

createApp(App).use(router).mount('#app')
