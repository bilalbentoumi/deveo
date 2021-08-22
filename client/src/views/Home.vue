<template>
    <NavBar/>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-20 md:pt-18">

        <div class="grid grid-cols-12 gap-4">

            <div class="hidden lg:flex lg:col-span-2 xl:col-span-2 flex-col">
                <a href="" class="inline-flex items-center gap-3 text-sm font-medium hover:bg-gray-100 text-gray-500 hover:text-black px-4 py-2 rounded-md mb-1" v-for="(item, index) in sidebar" :key="index">
                    <i class="fas w-4 h-4 text-md inline-flex justify-center items-center" :class="'fa-' + item.icon"></i>
                    <span class="">{{ item.label }}</span>
                </a>
            </div>

            <div class="col-span-full lg:col-span-9 xl:col-span-6">
                <div class="bg-white shadow-sm rounded-md mb-2 sm:mb-8" v-for="i in 5" :key="i">
                    <div class="flex gap-2 p-6 pb-0">
                        <a href="">
                            <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                        </a>
                        <div class="flex flex-col">
                            <a href="">Bilal bentoumi</a>
                            <span class="text-sm text-gray-600">29 minutes ago</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <p class="text-gray-800">
                            Pandas needs no introduction. There are hundreds of functions available in the library, and knowing all of them isn’t feasible even for the most experienced users.
                            You won’t find them in almost any data science guides, even though they can be helpful in day-to-day analysis workflows.
                        </p>
                        <div class="flex gap-2 mt-2">
                            <a href="" class="bg-indigo-50 hover:bg-indigo-200 text-sm text-indigo-600 px-4 py-2 rounded-md">#pandas</a>
                            <a href="" class="bg-indigo-50 hover:bg-indigo-200 text-sm text-indigo-600 px-4 py-2 rounded-md">#Python</a>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 border-t divide-x divide-gray-100">
                        <button class="inline-flex justify-center items-center gap-2 p-4 hover:bg-gray-50">
                            <i class="fas fa-heart text-gray-600"></i>
                            <span class="text-sm text-gray-600">Like</span>
                        </button>
                        <button class="inline-flex justify-center items-center gap-2 p-4 hover:bg-gray-50">
                            <i class="fas fa-comment text-gray-600"></i>
                            <span class="text-sm text-gray-600">Comment</span>
                        </button>
                        <button class="inline-flex justify-center items-center gap-2 p-4 hover:bg-gray-50">
                            <i class="fas fa-share text-gray-600"></i>
                            <span class="text-sm text-gray-600">Share</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="hidden xl:block xl:col-span-4">
                <div class="bg-white shadow-sm rounded-md">
                    <div class="px-8 py-6 border-b">
                        <h2 class="font-medium text-gray-800">Follow Developers</h2>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex items-center gap-2 px-8 py-4 border-b" v-for="i in 5" :key="i">
                            <a href="">
                                <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            </a>
                            <div class="flex flex-col flex-1">
                                <a href="">Bilal bentoumi</a>
                                <span class="text-sm text-gray-600">12 posts</span>
                            </div>
                            <button class="text-sm font-medium text-gray-600 px-3 py-2 rounded-md hover:text-white hover:bg-indigo-600 duration-75">FOLLOW</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
    name: 'Home',
    components: {
        NavBar
    },
    data() {
        return {
            sidebar: [
                { icon: 'home', label: 'Home' },
                { icon: 'video', label: 'Videos' },
                { icon: 'file', label: 'Drafts' },
                { icon: 'clock', label: 'Scheduled' },
                { icon: 'bookmark', label: 'Bookmarks' },
                { icon: 'trash', label: 'Trash' }
            ]
        }
    }
}
</script>

<style>
body {
    background: #f8f8f8;
}
</style>