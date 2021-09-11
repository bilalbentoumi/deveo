import router from '../router'

export const auth = (to, from, next) => {
    if (!localStorage.getItem('token')) {
        return router.push({ name: 'Login' })
    }
    next()
}

export const guest = () => {
    if (localStorage.getItem('token')) {
        return router.push({ name: 'Home' })
    }
}