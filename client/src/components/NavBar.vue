<template>

    <div class="bg-white bg-opacity-90 backdrop-blur-3xl border-b fixed left-0 right-0 h-16 flex items-center border-b border-gray-900/10 dark:border-gray-50/[0.06] z-10">

        <div class="deveo-container mx-auto w-full grid grid-cols-12 gap-4 items-center">

            <div class="col-span-4 md:col-span-3 lg:col-span-3 xl:col-span-2 flex">
                <router-link to="/" class="logo inline-flex items-center gap-2">
                    <svg width="26" height="26" viewBox="0 0 233 233" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="233" height="233" rx="50" fill="url(#paint0_linear_9_12)"/>
                        <path d="M165.967 115.431C165.967 115.385 165.96 115.34 165.954 115.288C165.651 110.464 163.357 105.777 159.189 102.559L95.8102 52.7357C88.072 46.7549 76.8756 48.1006 70.8008 55.7327C64.7259 63.3712 66.0803 74.4033 73.8119 80.3842L119.761 116.503L73.8119 152.622C66.0803 158.597 64.7259 169.635 70.8008 177.267C76.8756 184.899 88.072 186.245 95.8102 180.264L159.195 130.435C163.364 127.217 165.658 122.53 165.96 117.706C165.967 117.66 165.967 117.615 165.974 117.563C165.993 117.205 166 116.854 166 116.497C166 116.146 165.987 115.788 165.967 115.431Z" fill="white"/>
                        <defs>
                            <linearGradient id="paint0_linear_9_12" x1="116.5" y1="0" x2="116.5" y2="233" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#182A4B"/>
                                <stop offset="1" stop-color="#12122B"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <span class="font-medium text-2xl">deveo</span>
                </router-link>
            </div>

            <div class="col-span-7 md:col-span-5 lg:col-span-5 xl:col-span-7 hidden md:block">
               <div class="search flex flex-grow relative text-sm leading-6 text-gray-400 shadow-sm rounded-md overflow-hidden bg-white ring-1 ring-gray-900/10 hover:ring-gray-300 dark:bg-gray-800 dark:highlight-white/5 dark:hover:bg-gray-700">
                   <svg width="24" height="24" fill="none" aria-hidden="true" class="absolute top-1.5 left-2.5 text-gray-400">
                       <path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                       <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
                   </svg>
                   <input class="p-1.5 w-full pl-10 pr-14 bg-transparent" type="text" placeholder="Search...">
                   <span class="flex-none text-xs font-semibold absolute right-3 top-2.5 text-gray-400 pointer-events-none">Ctrl K</span>
               </div>
            </div>

            <div class="col-span-8 md:col-span-4 lg:col-span-4 xl:col-span-3">
                <div class="buttons flex gap-2 justify-end">
                    <router-link to="/login">
                        <Button secondary>Login</Button>
                    </router-link>
                    <Button>Create Account</Button>
                </div>
            </div>

        </div>

    </div>

</template>

<script>
import Button from '@/components/Button.vue'
export default {
    name: 'NavBar',
    components: {
        Button
    },
    data() {
        return {}
    },
    methods: {
        toggleDarkMode() {
            document.querySelector('html').classList.toggle('dark')
        }
    }
}
</script>