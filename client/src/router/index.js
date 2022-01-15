import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/post',
        name: 'Post',
        component: () => import('../views/Post.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior () {
        return { top: 0 }
    }
})

export default router
