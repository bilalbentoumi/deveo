<template>

    <NavBar/>

    <div class="deveo-container mx-auto pt-20 pb-12">

        <div class="grid grid-cols-12 gap-4">

            <div class="sidebar hidden lg:flex lg:col-span-3 xl:col-span-2 flex-col h-max sticky top-20">
                <QuickLinks/>
            </div>

            <div class="posts col-span-full lg:col-span-9 xl:col-span-7 flex flex-col gap-10">
                <Suspense>
                    <template #default>
                        <PostList/>
                    </template>
                    <template #fallback>
                        <PostCardLoader v-for="i in 5"/>
                    </template>
                </Suspense>
            </div>

            <div class="hidden xl:block xl:col-span-3">

                <div class="bg-white shadow rounded-md mb-4 h-max sticky top-20">
                    <div class="px-6 py-4">
                        <h2 class="text-lg font-semibold text-gray-800">Follow Developers</h2>
                    </div>
                    <div class="flex flex-col px-6 divide-y divide-gray-100">
                        <div class="flex items-center gap-2 py-4" v-for="i in 5" :key="i">
                            <a href="">
                                <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                            </a>
                            <div class="flex flex-col items-start flex-grow">
                                <a href="">Bilal Bentoumi</a>
                                <span class="text-sm text-gray-500">12 posts</span>
                            </div>
                            <button class="text-xs font-semibold text-gray-400 px-3 py-1.5 rounded-md hover:text-white hover:bg-indigo-600 duration-150">FOLLOW</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>

    <Footer/>

</template>

<script>

import NavBar from '@/components/NavBar.vue'
import QuickLinks from '@/components/sidebar/QuickLinks.vue'
import Button from '@/components/Button.vue'
import Footer from '@/components/Footer.vue'
import PostCardLoader from '@/components/post/PostCardLoader.vue'
import { defineAsyncComponent } from 'vue'

export default {
    name: 'Home',

    components: {
        NavBar,
        QuickLinks,
        PostList: defineAsyncComponent(() => import('@/components/PostList.vue')),
        PostCardLoader,
        Button,
        Footer
    },

    setup() {
        document.title = 'Deveo'
    }

}
</script>