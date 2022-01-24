import store from '../store'
import router from '../router'

export const Auth = {

    logout() {

        localStorage.removeItem('token')
        store.dispatch('setToken', null)

        return router.go('/')

    }

}
