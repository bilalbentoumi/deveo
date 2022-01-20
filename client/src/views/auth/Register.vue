<template>

    <NavBar/>

    <div class="deveo-container mx-auto px-2 sm:px-6 lg:px-8 pt-20 md:pt-28">
        <div class="max-w-xl mx-auto">
            <div class="bg-white shadow w-full rounded-lg p-6 sm:p-10">

                <div class="text-center" v-if="success">

                    <div class="inline-block bg-green-200 p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" class="fill-current text-green-900">
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                        </svg>
                    </div>

                    <h2 class="text-3xl font-medium text-gray-800 mb-2">Account created</h2>

                    <p class="text-lg font-regular text-gray-500 mb-8">Your account is created with success, please check your email to verify your account.</p>

                    <router-link to="/">
                        <Button>Go to homepage</Button>
                    </router-link>

                </div>

                <form v-else @submit.prevent="handleSubmit()">

                    <h2 class="text-3xl font-medium text-gray-800">Sign up</h2>
                    <p class="text-lg font-regular text-gray-500 mb-6">Create your free account</p>

                    <div class="flex gap-4">
                        <div class="mb-6">
                            <label class="font-regular text-sm text-gray-600 pb-1 block">First name</label>
                            <div class="relative">
                                <input type="text" class="border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 px-4 py-3 text-sm w-full" placeholder="John" v-model="form.firstName"/>
                            </div>
                        </div>
                        <div class="mb-6">
                            <label class="font-regular text-sm text-gray-600 pb-1 block">Last name</label>
                            <div class="relative">
                                <input type="text" class="border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 px-4 py-3 text-sm w-full" placeholder="Doe" v-model="form.lastName"/>
                            </div>
                        </div>
                    </div>

                    <div class="mb-6">
                        <label class="font-regular text-sm text-gray-600 pb-1 block">E-mail address</label>
                        <div class="relative">
                            <i class="far fa-at w-12 h-full absolute flex justify-center items-center text-gray-400 pointer-events-none"></i>
                            <input type="text" class="border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 px-3 py-3 pl-10 text-sm w-full" placeholder="email@domain.com" v-model="form.email"/>
                        </div>
                    </div>

                    <div class="mb-6">
                        <label class="font-regular text-sm text-gray-600 pb-1 block">Password</label>
                        <div class="relative">
                            <i class="far fa-lock w-12 h-full absolute flex justify-center items-center text-gray-400 pointer-events-none"></i>
                            <input type="password" class="border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 px-3 py-3 pl-10 text-sm w-full" placeholder="********" v-model="form.password"/>
                        </div>
                    </div>

                    <div class="flex items-center gap-2 bg-yellow-500 bg-opacity-20 px-4 py-3 rounded-md mb-6" v-if="invalid">
                        <i class="bg-yellow-600 bg-opacity-30 text-yellow-900 text-sm rounded-full w-8 h-8 fas fa-exclamation-triangle inline-flex justify-center items-center"></i>
                        <span class="text-sm font-medium text-yellow-900">Email is linked to another account</span>
                    </div>

                    <button type="submit" class="mt-2 transition duration-75 bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 focus:shadow-sm text-white w-full py-3 rounded-md text-sm shadow-sm hover:shadow-md font-semibold text-center">
                        <span class="inline-block mr-2" v-show="!loading">Register</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block" v-if="!loading">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <svg class="inline-block w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" v-if="loading">
                            <circle class="opacity-25 stroke-current text-white" cx="12" cy="12" r="10" stroke-width="4"></circle>
                            <path class="opacity-75 fill-current text-white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </button>

                </form>

            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
import NavBar from '@/components/NavBar.vue'
import Button from '@/components/Button.vue'

export default {
    name: 'Register',
    components: {
        NavBar,
        Button
    },
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            },
            invalid: false,
            loading: false,
            success: false
        }
    },
    methods: {
        handleSubmit() {
            if (this.form.firstName && this.form.lastName && this.form.email && this.form.password) {
                this.loading = true
                axios.post('/api/auth/register', this.form).then(res => {
                    this.success = true
                }).catch((err) => {
                    this.loading = false
                    this.showAlert()
                })
            }
        },
        showAlert() {
            if (!this.invalid) {
                this.invalid = true
                setTimeout(() => {
                    this.invalid = false
                }, 2000)
            }
        }
    },
    mounted() {
        document.title = 'Deveo - Register'
    }
}
</script>