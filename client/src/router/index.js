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
        component: () => import('../views/auth/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/auth/Register.vue')
    },
    {
        path: '/verify-email/:hash',
        name: 'VerifyEmail',
        component: () => import('../views/auth/Verify.vue')
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
