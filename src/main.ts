import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import  Home  from "./views/Home.vue";

import './style.css'
import App from './App.vue';

const app = createApp(App);

const routes: RouteRecordRaw[] =  [
    {
        path:'/',
        name: 'Home',
        component: () => import('./views/Home.vue')
    },
    {
        path: '/diagrams',
        name: 'diagrams',
        component: () => import('./views/Diagrams.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('./views/About.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router);

app.mount("#app");