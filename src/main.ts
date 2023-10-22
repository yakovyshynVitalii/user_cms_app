import './assets/main.css'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import { store } from './store'


const app = createApp(App)

app.use(store).use(router).use(ElementPlus)

app.mount('#app')
