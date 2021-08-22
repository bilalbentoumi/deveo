import axios from 'axios'
import router from '../router'

export const auth = (to, from, next) => {

    if (!localStorage.getItem('token')) {
        return router.push({ name: 'Login' })
    }

    axios.post('/api/auth/verify', {
        token: localStorage.getItem('token')
    }).then(() => {
        next()
    }).catch(() => {
        localStorage.removeItem('token')
        router.push({ name: 'Login' })
    })

}

export const guest = () => {

    if (localStorage.getItem('token')) {
        return router.push({ name: 'Home' })
    }

}