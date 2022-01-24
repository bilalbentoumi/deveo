import axios from 'axios'
import store from '../store'
import {Auth} from '../util/auth'

export default (to, from, next) => {

    let token = store.state.token

    if (!token) {
        return next('login')
    }

    axios.post('/api/auth/verify-token', { token: token }).then(res => {
        next()
    }).catch((err) => {
        Auth.logout()
    })

}