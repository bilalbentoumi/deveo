<template>

    <NavBar/>

    <div class="deveo-container mx-auto px-2 sm:px-6 lg:px-8 pt-20 md:pt-28">
        <div class="max-w-xl mx-auto">
            <div class="bg-white shadow w-full rounded-lg p-6 sm:p-10">

                <div class="laoding text-center" v-if="loading">

                    <svg class="inline-block w-12 h-12 animate-spin mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25 stroke-current text-black" cx="12" cy="12" r="10" stroke-width="2"></circle>
                        <path class="opacity-75 fill-current text-white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>

                    <h2 class="text-md font-medium text-gray-400">Verifying your account</h2>

                </div>

                <div class="text-center" v-if="!loading && success">

                    <div class="inline-block bg-green-200 p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" class="fill-current text-green-900">
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                        </svg>
                    </div>

                    <h2 class="text-3xl font-medium text-gray-800 mb-2">Account verified</h2>

                    <p class="text-lg font-regular text-gray-500 mb-8">Your account is verified, you can now login to your account.</p>

                    <router-link to="/login">
                        <Button>Go to login page</Button>
                    </router-link>

                </div>

                <div class="text-center" v-if="!loading && !success">

                    <div class="inline-block bg-red-200 p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current text-red-900">
                            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                        </svg>
                    </div>

                    <h2 class="text-3xl font-medium text-gray-800 mb-2">Verification failed</h2>

                    <p class="text-lg font-regular text-gray-500 mb-8">{{ errorMessage }}</p>

                    <router-link to="/">
                        <Button>Go to home page</Button>
                    </router-link>

                </div>

            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
import NavBar from '@/components/NavBar.vue'
import Button from '@/components/Button.vue'

export default {
    name: 'VerifyEmail',
    components: {
        NavBar,
        Button
    },
    data() {
        return {
            loading: true,
            success: false,
            errorMessage: ''
        }
    },
    methods: {

    },
    mounted() {

        document.title = 'Deveo - Register'

        let hash = this.$route.params.hash

        axios.post('/api/auth/verify', { hash: hash }).then(res => {
            this.success = true
        }).catch(err => {
            this.errorMessage = err.response.data
        }).finally(() => {
            this.loading = false
        })

    }
}
</script>