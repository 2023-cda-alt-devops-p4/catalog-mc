import {createApp } from 'vue';
import VueRouter from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import './style.css';
import App from './App.vue';


const app = createApp(App);

const routes = RouteRecordRow[] = [
    {path: '/', component: }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(), 
    routes
})

app.use(router);

app.mount(#app);