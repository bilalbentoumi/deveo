import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import axios from 'axios'
import {Auth} from './util/auth'

createApp(App).use(router).use(store).mount('#app')

axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.token

axios.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    if (error.response.status == 401 || error.response.status == 403) {
        Auth.logout()
    }
    return error;
})
