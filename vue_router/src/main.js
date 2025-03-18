// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


// 
import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue'
import Demo1 from './components/demo1.vue'
import Demo2 from './components/demo2.vue'
import User from './components/User.vue'

const app = createApp(App)


const routes = [
    {
        path:'/demo1', component:Demo1
    }, {
        path:'/demo2', component:Demo2
    }, {
        path: '/user/:username/:id', component:User
    }
]

const router =createRouter({
    history:createWebHistory(),
    routes
})

app.use(router)
app.mount('#app')