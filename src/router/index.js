import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path:'/',
        name: 'Home',
        component: Home
    },
    {
        path: '/diagrams',
        name: 'diagrams',
        component: () => import('../views/diagrams.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

const app = Vue.createApp({})

app.use(router)

app.mount('#app')

export default router