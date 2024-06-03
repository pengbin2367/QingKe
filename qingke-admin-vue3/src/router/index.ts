import {createRouter, createWebHistory, Router, RouteRecordRaw} from "vue-router";
import Home from "@/views/Home.vue";
import LoginRegister from "@/views/LoginRegister.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginRegister
    }
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes
})

export default router