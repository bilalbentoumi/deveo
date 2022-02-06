import { createRouter, createWebHistory } from 'vue-router'
import auth from '../middleware/auth'
import guest from '../middleware/guest'

const routes = [
    {
        path: '/',
        name: 'Home',
        beforeEnter: auth,
        component: () => import('../views/Home.vue')
    },
    {
        path: '/post',
        name: 'Post',
        beforeEnter: auth,
        component: () => import('../views/Post.vue')
    },
    {
        path: '/login',
        name: 'Login',
        beforeEnter: guest,
        component: () => import('../views/auth/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        beforeEnter: guest,
        component: () => import('../views/auth/Register.vue')
    },
    {
        path: '/verify-email/:hash',
        name: 'VerifyEmail',
        beforeEnter: guest,
        component: () => import('../views/auth/Verify.vue')
    },
    {
        path: '/:catchAll',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return { top: 0 }
    }
})

export default router