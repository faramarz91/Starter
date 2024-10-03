import {createRouter, createWebHistory} from 'vue-router'
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Home from "@/views/Home.vue";
import Dashboard from "@/views/Dashboard.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import Login from "@/views/auth/Login.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: DefaultLayout,
            children: [
                {path: '', component: Home},
                {path: 'dashboard', component: Dashboard},
            ]

        },
        {
            path: '/auth',
            redirect: '/auth/login',
            component: AuthLayout,
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: Login,
                }
            ]
        }
    ]
})

export default router
