<template>

    <div class="bg-white bg-opacity-90 backdrop-blur-2xl border-b fixed left-0 right-0 h-16 flex items-center border-b border-gray-900/10 dark:border-gray-50/[0.06] z-10">

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
                <div class="buttons flex items-center gap-2 justify-end">

                    <router-link to="/login" v-if="!authenticated">
                        <Button secondary>Login</Button>
                    </router-link>

                    <router-link to="/register" v-if="!authenticated">
                        <Button>Create Account</Button>
                    </router-link>

                    <button class="block sm:hidden p-2 hover:bg-gray-100 rounded-full duration-75" v-if="authenticated">
                        <svg width="24" height="24" fill="none" aria-hidden="true" class="text-gray-400">
                            <path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
                        </svg>
                    </button>

                    <Dropdown v-if="authenticated" @statusUpdated="updateDropdownStatus">
                        <template v-slot:button>
                            <div class="flex flex-col items-center cursor-pointer group">
                                <img class="w-8 h-8 rounded-full cursor-pointer" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Bilal Bentoumi" />
                                <div class="items-center gap-0.5 hidden sm:flex">
                                    <span class="text-xs text-gray-600 group-hover:text-gray-800">Me</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16" class="fill-current text-gray-400 group-hover:text-gray-800 duration-75" :class="{ 'rotate-180': userMenuOpen }">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                </div>
                            </div>
                        </template>
                        <template v-slot:dropdown>
                            <div class="divide-y divide-gray-100">
                                <div class="flex gap-3 items-center p-4">
                                    <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                                    <div class="flex flex-col">
                                        <span class="text-md">Bilal Bentoumi</span>
                                        <span class="text-xs text-gray-400">Developer</span>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <span class="font-medium text-sm text-gray-700 px-4 pt-4 pb-2 pointer-events-none">Account</span>
                                    <a href="#" class="flex items-center gap-3 py-2.5 px-4 text-slate-600 text-sm hover:bg-zinc-50 duration-75">
                                        <svg width="18" height="18" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-400">
                                            <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/>
                                        </svg>
                                        Setting & Privacy
                                    </a>
                                    <a href="#" class="flex items-center gap-3 py-2.5 px-4 text-slate-600 text-sm hover:bg-zinc-50 duration-75">
                                        <svg width="18" height="18" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-400">
                                            <title>help-solid</title>
                                            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm-.22,25.85a1.65,1.65,0,1,1,1.65-1.65A1.65,1.65,0,0,1,17.78,27.85Zm1.37-8.06v1.72a1.37,1.37,0,0,1-1.3,1.36h-.11a1.34,1.34,0,0,1-1.39-1.3c0-.44,0-2.76,0-2.76a1.19,1.19,0,0,1,1.12-1.31c1.57-.12,4.18-.7,4.18-3.25,0-1.83-1.41-3.07-3.43-3.07a5.31,5.31,0,0,0-4,1.92,1.36,1.36,0,0,1-2.35-.9,1.43,1.43,0,0,1,.43-1,7.77,7.77,0,0,1,6-2.69c3.7,0,6.28,2.3,6.28,5.6C24.58,17.16,22.61,19.2,19.15,19.79Z" class="clr-i-solid clr-i-solid-path-1"></path>
                                            <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
                                        </svg>
                                        Help
                                    </a>
                                    <a href="#" class="flex items-center gap-3 py-2.5 px-4 text-slate-600 text-sm hover:bg-zinc-50 duration-75">
                                        <svg width="18" height="18" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-400">
                                            <path d="M478.33,433.6l-90-218a22,22,0,0,0-40.67,0l-90,218a22,22,0,1,0,40.67,16.79L316.66,406H419.33l18.33,44.39A22,22,0,0,0,458,464a22,22,0,0,0,20.32-30.4ZM334.83,362,368,281.65,401.17,362Z"/>
                                            <path d="M267.84,342.92a22,22,0,0,0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73,39.65-53.68,62.11-114.75,71.27-143.49H330a22,22,0,0,0,0-44H214V70a22,22,0,0,0-44,0V90H54a22,22,0,0,0,0,44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-31.41-41.68-43.08-68.65-43.17-68.87a22,22,0,0,0-40.58,17c.58,1.38,14.55,34.23,52.86,83.93.92,1.19,1.83,2.35,2.74,3.51-39.24,44.35-77.74,71.86-93.85,80.74a22,22,0,1,0,21.07,38.63c2.16-1.18,48.6-26.89,101.63-85.59,22.52,24.08,38,35.44,38.93,36.1a22,22,0,0,0,30.75-4.9Z"/>
                                        </svg>
                                        Language
                                    </a>
                                </div>
                                <div class="flex flex-col">
                                    <span class="font-medium text-sm text-gray-700 px-4 pt-4 pb-2 pointer-events-none">Manage</span>
                                    <a href="#" class="flex items-center gap-3 py-2.5 px-4 text-slate-600 text-sm hover:bg-zinc-50 duration-75">
                                        <svg width="14" height="14" viewBox="0 0 1034 1034" xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-400">
                                            <path d="m195.5582,0.92801l-5.16333,0l-10.32667,0l-23.235,3.8725l-19.3625,5.16333l-25.81666,10.32667l-20.65333,11.6175l-19.3625,12.90833q-16.78083,14.19917 -29.68916,30.98l-5.16333,6.45417q-5.16333,9.03583 -10.32667,16.78083l-6.45417,11.6175l-10.32667,27.1075l-5.16333,18.07166l0,0q-2.58167,15.49 -3.8725,29.68916l0,663.48827l1.29083,14.19917l5.16333,24.52583q2.58167,11.6175 6.45417,21.94416l10.32667,21.94416q11.6175,20.65333 27.1075,37.43416l3.8725,3.8725q9.03583,10.32667 20.65333,19.3625l7.745,5.16333q9.03583,6.45417 19.3625,12.90833l21.94416,9.03583l32.27083,10.32667l28.39833,3.8725l663.48827,0l24.52583,-2.58167l14.19917,-3.8725q11.6175,-2.58167 21.94416,-7.745l12.90833,-5.16333q15.49,-7.745 28.39833,-16.78083l7.745,-5.16333q11.6175,-9.03583 20.65333,-19.3625l3.8725,-3.8725q16.78083,-18.07166 28.39833,-41.30666l9.03583,-18.07166q3.8725,-10.32667 6.45417,-21.94416l5.16333,-24.52583q1.29083,-11.6175 1.29083,-24.52583l0,-647.99827q0,-12.90833 -2.58167,-24.52583l-1.29083,-10.32667l-5.16333,-18.07166l0,0q-2.58167,-11.6175 -7.745,-21.94416l-9.03583,-16.78083l-10.32667,-15.49l-5.16333,-7.745q-12.90833,-16.78083 -29.68916,-30.98l-7.745,-5.16333l-19.3625,-12.90833l-16.78083,-9.03583q-10.32667,-5.16333 -21.94416,-7.745l-19.3625,-5.16333l-23.235,-3.8725l-10.32667,0l-647.99827,0zm183.29831,198.78831q36.14333,0 74.86833,10.32667q23.235,5.16333 64.54166,20.65333l15.49,5.16333q45.17916,16.78083 67.12333,21.94416q36.14333,7.745 70.99583,3.8725q40.01583,-3.8725 87.77666,-24.52583q25.81666,-10.32667 48.40625,-5.16333t31.62541,27.75291t0,45.82458t-32.27083,33.56166q-82.61333,34.8525 -157.48165,34.8525q-32.27083,0 -65.83249,-10.32667q-20.65333,-6.45417 -58.08749,-21.94416l-30.98,-11.6175q-43.88833,-15.49 -65.83249,-20.65333q-34.8525,-6.45417 -67.12333,-1.29083q-37.43416,6.45417 -82.61333,32.27083q-24.52583,11.6175 -47.76083,9.03583t-34.8525,-23.88041t-4.51792,-45.17916t29.04375,-36.78875q81.32249,-43.88833 157.48165,-43.88833zm-7.745,232.34998l3.8725,0q36.14333,0 73.57749,10.32667q23.235,5.16333 63.25083,20.65333l16.78083,5.16333q45.17916,16.78083 68.41416,21.94416q37.43416,7.745 72.28666,3.8725q42.5975,-5.16333 92.93999,-27.1075q24.52583,-11.6175 47.11541,-6.45417t32.27083,27.1075t0.64542,45.17916t-30.98,33.56166q-87.77666,38.725 -166.51748,38.725q-32.27083,0 -67.12333,-9.03583q-20.65333,-6.45417 -58.08749,-21.94416l-30.98,-11.6175q-43.88833,-16.78083 -64.54166,-20.65333q-33.56166,-6.45417 -65.83249,-1.29083q-37.43416,6.45417 -82.61333,29.68916q-23.235,12.90833 -46.47,9.68125t-34.8525,-24.52583t-4.51792,-45.17916t29.04375,-35.49791q78.74083,-42.5975 152.31832,-42.5975zm-3.8725,229.76831q34.8525,0 73.57749,10.32667q21.94416,6.45417 63.25083,20.65333l15.49,6.45417q47.76083,16.78083 70.99583,21.94416q37.43416,7.745 74.86833,2.58167q42.5975,-5.16333 95.52166,-29.68916q24.52583,-11.6175 47.11541,-7.09958t32.91625,26.46208t1.93625,44.53375t-30.33458,32.91625q-94.23082,43.88833 -176.84415,43.88833q-32.27083,0 -65.83249,-10.32667q-20.65333,-6.45417 -58.08749,-21.94416l-30.98,-11.6175q-41.30666,-15.49 -61.95999,-19.3625q-33.56166,-7.745 -64.54166,-2.58167q-36.14333,5.16333 -80.03166,27.1075q-23.235,11.6175 -46.47,8.39042t-34.20708,-25.17125t-3.22708,-45.17916t29.68916,-34.8525q72.28666,-36.14333 140.70082,-37.43416l6.45417,0z" fill="currentColor"/>
                                        </svg>
                                        Posts & Activity
                                    </a>
                                </div>
                                <div class="flex flex-col">
                                    <a href="#" class="flex items-center gap-3 py-2.5 px-4 text-slate-600 text-sm hover:bg-zinc-50 duration-75" @click="logout()">
                                        <svg width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-400">
                                            <rect width="16" height="16" id="icon-bound" fill="none" />
                                            <path d="M14,14l0,-12l-6,0l0,-2l8,0l0,16l-8,0l0,-2l6,0Zm-9.002,-0.998l-4.998,-5.002l5,-5l1.416,1.416l-2.588,2.584l8.172,0l0,2l-8.172,0l2.586,2.586l-1.416,1.416Z" />
                                        </svg>
                                        Logout
                                    </a>
                                </div>
                            </div>
                        </template>
                    </Dropdown>

                </div>
            </div>

        </div>

    </div>

</template>

<script>
import Button from '@/components/Button.vue'
import Dropdown from '@/components/Dropdown.vue'
import { Auth } from '../util/auth'

export default {
    name: 'NavBar',
    components: {
        Button,
        Dropdown
    },
    computed: {
        authenticated() {
            return !!this.$store.state.token
        }
    },
    data() {
        return {
            userMenuOpen: false
        }
    },
    methods: {
        logout() {
            Auth.logout()
        },
        updateDropdownStatus(status) {
            this.userMenuOpen = status
        }
    }
}
</script>