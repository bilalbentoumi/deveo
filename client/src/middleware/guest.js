import store from '../store'

export default (to, from, next) => {

    let token = store.state.token

    if (token) {
        return next('/')
    }

    next()

}