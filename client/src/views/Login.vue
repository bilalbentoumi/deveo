<template>

    <Disclosure as="nav" class="bg-gray-800 fixed left-0 right-0" v-slot="{ open }">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="sr-only">Open main menu</span>
                        <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex-shrink-0 flex items-center">
                        <img class="block lg:hidden h-6 w-auto" src="@/assets/logo.svg" alt="Deveo" />
                        <img class="hidden lg:block h-8 w-auto" src="@/assets/logo-text.svg" alt="Deveo" />
                    </div>
                    <div class="hidden sm:block sm:ml-6">
                        <div class="flex space-x-4">
                            <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span class="sr-only">View notifications</span>
                        <BellIcon class="h-6 w-6" aria-hidden="true" />
                    </button>

                    <!-- Profile dropdown -->
                    <Menu as="div" class="ml-3 relative">
                        <div>
                            <MenuButton class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                            <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <MenuItem v-slot="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
        </DisclosurePanel>
    </Disclosure>

    <div class="bg-gray-50 h-full">

        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-20 md:pt-48">

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

                <div class="hidden md:block pt-16">
                    <h2 class="text-6xl font-bold mb-6">Social Network<br>for Programmers and Developers</h2>
                    <p class="text-gray-700 text-3xl">Connect with friends and the world around you on Deveo.</p>
                </div>

                <div class="col pl-0 lg:pl-40">

                    <div class="bg-white shadow w-full rounded-lg p-10">

                        <h2 class="text-3xl font-medium text-gray-800">Sign in</h2>
                        <p class="text-lg font-regular text-gray-500 mb-6">Sign in to your account</p>

                        <div class="mb-6">
                            <label class="font-regular text-sm text-gray-600 pb-1 block">E-mail address</label>
                            <div class="relative">
                                <i class="far fa-user w-12 h-full absolute flex justify-center items-center text-gray-400"></i>
                                <input type="text" class="border rounded-md shadow-sm focus:shadow-md px-3 py-3 pl-10 text-sm w-full"/>
                            </div>
                        </div>

                        <div class="mb-6">
                            <label class="font-regular text-sm text-gray-600 pb-1 block">Password</label>
                            <div class="relative">
                                <i class="far fa-lock w-12 h-full absolute flex justify-center items-center text-gray-400"></i>
                                <input type="password" class="border rounded-md shadow-sm focus:shadow-md px-3 py-3 pl-10 text-sm w-full"/>
                            </div>
                        </div>

                        <button type="button" class="mt-2 transition duration-75 bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 focus:shadow-sm text-white w-full py-3 rounded-md text-sm shadow-sm hover:shadow-md font-semibold text-center">
                            <span class="inline-block mr-2">Login</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>

                        <div class="relative py-8">
                            <div class="w-full h-px bg-gray-200"></div>
                            <span class="bg-white text-sm text-gray-400 px-4 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Or continue with</span>
                        </div>

                        <div class="grid grid-cols-3 gap-1">
                            <button type="button" class="transition duration-200 border border-gray-200 text-gray-500 hover:text-indigo-500 text-xl w-full py-1 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">
                                <i class="fab fa-facebook"></i>
                            </button>
                            <button type="button" class="transition duration-200 border border-gray-200 text-gray-500 hover:text-indigo-500 text-xl w-full py-1 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">
                                <i class="fab fa-twitter"></i>

                            </button>
                            <button type="button" class="transition duration-200 border border-gray-200 text-gray-500 hover:text-indigo-500 text-xl w-full py-1 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">
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

                    </div>

                </div>

            </div>

        </div>

    </div>

</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
export default {
    name: 'Login',
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        BellIcon,
        MenuIcon,
        XIcon
    },
    data() {
        return {
            navigation: [
                { name: 'Dashboard', href: '#', current: true },
                { name: 'Team', href: '#', current: false },
                { name: 'Projects', href: '#', current: false },
                { name: 'Calendar', href: '#', current: false },
            ]
        }
    }
}
</script>
