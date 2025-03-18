import { createApp } from 'vue'
import App from './App.vue'
import Router from './tools/Router'
import Store from './tools/Storage'

const app = createApp(App)
app.use(Router)
app.use(Store)
app.mount('#app')
