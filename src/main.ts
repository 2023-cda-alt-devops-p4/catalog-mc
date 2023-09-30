import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import  Home  from "./views/Home.vue";
import "vue3-dropdown-navbar/preflight.css"; 

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
        path: '/',
        name: 'Diagrams',
        component: () => import('./views/Diagrams.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router);

app.mount("#app");