import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'
import '@fortawesome/fontawesome-free/js/all'
import './tailwind.css'

createApp(App).use(router, VueTelInput).mount('#app')
