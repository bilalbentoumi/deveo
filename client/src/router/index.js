import {createRouter, createWebHistory} from 'vue-router'
import {auth, guest} from '../middlewares/auth'

const routes = [
    {
        path: '/login',
        name: 'Login',
        beforeEnter: guest,
        component: () => import('../views/Login.vue')
    },
    {
        path: '/',
        name: 'Home',
        beforeEnter: auth,
        component: () => import('../views/Home.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
