import { createStore } from 'vuex'

export default createStore({
    state: {
        token: localStorage.getItem('token')
    },
    mutations: {
        SET_TOKEN: (state, token) => state.token = token
    },
    actions: {
        setToken: ({ commit }, token) => commit('SET_TOKEN', token)
    },
    modules: {
    }
})