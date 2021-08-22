<template>

    <NavBar/>

    <div class="bg-gray-50 h-full">

        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-20 md:pt-48">

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

                <div class="hidden md:block pt-16">
                    <h2 class="text-6xl font-bold mb-6">Social Network<br>for Programmers and Developers</h2>
                    <p class="text-gray-700 text-3xl">Connect with friends and the world around you on Deveo.</p>
                </div>

                <div class="col pl-0 lg:pl-40">

                    <form @submit.prevent="handleSubmit()" class="bg-white shadow w-full rounded-lg p-6 sm:p-10">

                        <h2 class="text-3xl font-medium text-gray-800">Sign in</h2>
                        <p class="text-lg font-regular text-gray-500 mb-6">Sign in to your account</p>

                        <div class="mb-6">
                            <label class="font-regular text-sm text-gray-600 pb-1 block">E-mail address</label>
                            <div class="relative">
                                <i class="far fa-user w-12 h-full absolute flex justify-center items-center text-gray-400 pointer-events-none	"></i>
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

                        <div class="flex items-center gap-2 bg-yellow-500 bg-opacity-20 px-4 py-3 rounded-md mb-6" v-show="invalid">
                            <i class="bg-yellow-600 bg-opacity-30 text-yellow-900 text-sm rounded-full w-8 h-8 fas fa-exclamation-triangle inline-flex justify-center items-center"></i>
                            <span class="text-sm font-medium text-yellow-900">Credentials incorrect</span>
                        </div>

                        <button type="submit" class="mt-2 transition duration-75 bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 focus:shadow-sm text-white w-full py-3 rounded-md text-sm shadow-sm hover:shadow-md font-semibold text-center">
                            <span class="inline-block mr-2" v-show="!loading">Login</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block" v-if="!loading">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <svg class="inline-block w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" v-if="loading">
                                <circle class="opacity-25 stroke-current text-white" cx="12" cy="12" r="10" stroke-width="4"></circle>
                                <path class="opacity-75 fill-current text-white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </button>

                        <div class="relative py-8">
                            <div class="w-full h-px bg-gray-200"></div>
                            <span class="bg-white text-sm text-gray-400 px-4 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Or continue with</span>
                        </div>

                        <div class="grid grid-cols-3 gap-1">
                            <button type="button" class="rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-xl font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-800">
                                <i class="fab fa-facebook"></i>
                            </button>
                            <button type="button" class="rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-xl font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-500">
                                <i class="fab fa-twitter"></i>
                            </button>
                            <button type="button" class="rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-xl font-medium text-gray-700 hover:bg-gray-50 hover:text-black">
                                <i class="fab fa-github"></i>
                            </button>
                        </div>

                        <div class="grid grid-cols-2 gap-1 mt-6">
                            <button class="transition duration-200 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                </svg>
                                <span class="inline-block ml-1">Forgot Password</span>
                            </button>
                            <button class="transition duration-200 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-bottom	">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <span class="inline-block ml-1">Help</span>
                            </button>
                        </div>

                    </form>

                </div>

            </div>

        </div>

    </div>

</template>

<script>
import axios from 'axios'
import NavBar from "../components/NavBar"

export default {
    name: 'Login',
    components: {
        NavBar
    },
    data() {
        return {
            navigation: [
                { name: 'Dashboard', href: '#', current: true },
                { name: 'Team', href: '#', current: false },
                { name: 'Projects', href: '#', current: false },
                { name: 'Calendar', href: '#', current: false },
            ],
            form: {
                email: '',
                password: '',
            },
            invalid: false,
            loading: false
        }
    },
    methods: {
        handleSubmit() {
            if (this.form.email && this.form.password) {
                this.loading = true
                axios.post('/api/auth/login', this.form).then(res => {
                    localStorage.setItem('token', res.data.token)
                    this.$router.push({ name: 'Home' })
                }).catch(() => {
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
        document.title = 'Deveo - Login'
    }
}
</script>
