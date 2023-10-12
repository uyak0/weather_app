import './assets/main.css'

import { VueElement, createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

createApp(App).mount('#app')
App.config.globalProperties.$http = axios
