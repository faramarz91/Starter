import {createRouter, createWebHistory} from 'vue-router'
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Home from "@/views/Home.vue";
import Dashboard from "@/views/Dashboard.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import {useUserStore} from "@/stores/user.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: DefaultLayout,
            meta: {isGuest: true},
            children: [
                {path: '', component: Home, name: 'home'},
            ]

        },
        {
            path: '/',
            component: DashboardLayout,
            name: 'dashboard',
            meta: {requiresAuth: true},
            children: [
                {path: 'dashboard', component: Dashboard, name: 'dashboard'},
            ]
        },
        {
            path: '/',
            component: AuthLayout,
            meta: {isGuest: true},
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: Login,
                },
                {
                    path: 'register',
                    name: 'register',
                    component: Register,
                }
            ]
        },
        {
            path: '/logout',
            name: 'logout',
        }
    ]
})
router.beforeEach((to, from, next) => {
    document.title = 'NC | '+ to.name.toUpperCase()
    if (to.meta.requiresAuth && !useUserStore().info.token) {
        next({name: 'login'})
    } else if (useUserStore().info.token && to.meta.isGuest) {
        next({name: 'dashboard'})
    } else if (useUserStore().info.token && to.name === 'logout') {
        useUserStore().logout();
        next({name: 'home'})
    }else {
        next()
    }
})

export default router
