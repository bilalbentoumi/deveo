<template>

    <NavBar/>

    <div class="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 pt-24 md:pt-18 pb-12">

        <div class="grid grid-cols-12 gap-4">

            <div class="sidebar hidden lg:flex lg:col-span-3 xl:col-span-2 flex-col">
                <a href="" class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                    <div class="mr-4 rounded-md ring-1 ring-gray-900/5 shadow-sm group-hover:shadow group-hover:ring-gray-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-gray-800 dark:highlight-white/5">
                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path d="m6 9 6-3 6 3v6l-6 3-6-3V9Z" class="fill-indigo-100 group-hover:fill-indigo-200 dark:fill-gray-400"></path><path d="m6 9 6 3v7l-6-3V9Z" class="fill-indigo-300 group-hover:fill-indigo-400 dark:group-hover:fill-indigo-300 dark:fill-gray-500"></path><path d="m18 9-6 3v7l6-3V9Z" class="fill-indigo-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 dark:fill-gray-600"></path></svg>
                    </div>
                    <span class="font-medium">Home</span>
                </a>
                <a href="" class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                    <div class="mr-4 rounded-md ring-1 ring-gray-900/5 shadow-sm group-hover:shadow group-hover:ring-gray-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-gray-800 dark:highlight-white/5">
                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" class="fill-pink-400 group-hover:fill-pink-500 dark:group-hover:fill-pink-300 dark:fill-gray-600"></path><path d="M11.082 9.107a.685.685 0 0 0-.72-.01.757.757 0 0 0-.362.653v4.5c0 .27.138.52.362.653.224.133.5.13.72-.01l3.571-2.25A.758.758 0 0 0 15 12a.758.758 0 0 0-.347-.643l-3.571-2.25Z" class="fill-pink-50 group-hover:fill-pink-100 dark:group-hover:fill-white dark:fill-gray-400"></path></svg>
                    </div>
                    <span class="font-medium">Videos</span>
                </a>
                <a href="" class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                    <div class="mr-4 rounded-md ring-1 ring-gray-900/5 shadow-sm group-hover:shadow group-hover:ring-gray-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-gray-800 dark:highlight-white/5">
                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path d="M4 12a7 7 0 0 1 7-7h2a7 7 0 1 1 0 14h-2a7 7 0 0 1-7-7Z" class="fill-blue-400 group-hover:fill-blue-500 dark:group-hover:fill-blue-400 dark:fill-gray-600"></path><path d="M10.25 9.75 7.75 12l2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-blue-50 dark:stroke-gray-400 dark:group-hover:stroke-white dark:stroke-gray-400"></path><path d="m13.75 9.75 2.5 2.25-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-blue-200 dark:group-hover:stroke-white dark:stroke-gray-400"></path></svg>
                    </div>
                    <span class="font-medium">Coding Challenges</span>
                </a>
                <a href="" class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                    <div class="mr-4 rounded-md ring-1 ring-gray-900/5 shadow-sm group-hover:shadow group-hover:ring-gray-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-gray-800 dark:highlight-white/5">
                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-purple-400 group-hover:fill-purple-500 dark:group-hover:fill-purple-300 dark:fill-gray-600"></path><path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-purple-200 group-hover:fill-purple-300 dark:group-hover:fill-white dark:fill-gray-400"></path><path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-purple-400 group-hover:fill-purple-500 dark:group-hover:fill-purple-300 dark:fill-gray-600"></path></svg>
                    </div>
                    <span class="font-medium">Resources</span>
                </a>
                <a href="" class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                    <div class="mr-4 rounded-md ring-1 ring-gray-900/5 shadow-sm group-hover:shadow group-hover:ring-gray-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-gray-800 dark:highlight-white/5">
                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 5a6 6 0 0 0-4.687 9.746c.215.27.315.62.231.954l-.514 2.058a1 1 0 0 0 1.485 1.1l2.848-1.71c.174-.104.374-.15.576-.148H13a6 6 0 0 0 0-12h-2Z" class="fill-violet-400 group-hover:fill-violet-500 dark:group-hover:fill-violet-300 dark:fill-gray-600"></path><circle cx="12" cy="11" r="1" class="fill-white dark:group-hover:fill-white dark:fill-gray-400"></circle><circle cx="9" cy="11" r="1" class="fill-violet-200 dark:group-hover:fill-white dark:fill-gray-400"></circle><circle cx="15" cy="11" r="1" class="fill-violet-200 dark:fill-gray-400 dark:group-hover:fill-white"></circle></svg>
                    </div>
                    <span class="font-medium">Community</span>
                </a>
                <a href="" class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                    <div class="mr-4 rounded-md ring-1 ring-gray-900/5 shadow-sm group-hover:shadow group-hover:ring-gray-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-gray-800 dark:highlight-white/5">
                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z" class="fill-sky-200 group-hover:fill-sky-500 dark:fill-sky-300 dark:group-hover:fill-sky-300"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z" class="fill-sky-400 group-hover:fill-sky-500 dark:fill-sky-200 dark:group-hover:fill-sky-200"></path></svg>
                    </div>
                    <span class="font-medium">Books</span>
                </a>

            </div>

            <div class="posts col-span-full lg:col-span-9 xl:col-span-7 flex flex-col gap-10">
                <PostCard v-for="(post, index) in posts" :key="index" :data="post" />
            </div>

            <div class="hidden xl:block xl:col-span-3">
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
                                <a href="">Bilal Bentoumi</a>
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
import NavBar from '@/components/NavBar.vue'
import PostCard from '@/components/PostCard.vue'

import react from '@/assets/posters/react.png'
import vue from '@/assets/posters/vue.png'
import js from '@/assets/posters/js.jpg'

export default {
    name: 'Home',
    components: {
        NavBar,
        PostCard
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
            ],
            posts: [
                { title: 'How to setup storybook in VueJS', image: vue },
                { title: 'How to create react app with create-react-app', image: react },
                { title: 'Learn JavaScript in 2 hours!', image: js },
            ]
        }
    },
    mounted() {
        document.title = 'Deveo'
    }
}
</script>

<style>
body {
    background: #f8f8f8;
}
</style>