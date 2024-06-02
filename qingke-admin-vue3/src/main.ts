import { createApp } from 'vue'
import './assets/css/reset.css'
import App from './App.vue'
import router from "./router";
import './mock'

const app = createApp(App)
app.use(router)
app.mount('#app')
