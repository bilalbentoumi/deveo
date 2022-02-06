<template>

    <NavBar/>

    <div class="deveo-container mx-auto pt-20 pb-12">

        <div class="grid grid-cols-12 gap-4">

            <div class="post col-span-full xl:col-span-9 space-y-4">

                <Suspense>
                    <template #default>
                        <AsyncPost :slug="slug" />
                    </template>
                    <template #fallback>
                        <PostLoader/>
                    </template>
                </Suspense>

                <div class="read-next bg-white shadow rounded-md overflow-hidden">

                    <div class="panel-header px-4 sm:px-8 pt-6">
                        <h2 class="text-2xl font-semibold text-gray-800">Read next</h2>
                    </div>

                    <div class="post-body px-4 sm:px-8 py-4">

                        <ul class="divide-y divide-gray-100">
                            <li>
                                <div class="flex justify-between items-start py-4" v-for="i in 5" :key="i">
                                    <div class="flex items-center gap-3">
                                        <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Bilal Bentoumi"/>
                                        <div class="flex flex-col">
                                            <a href="" class="text-lg font-medium text-gray-600 hover:text-gray-800 duration-75">{{ 'Post Title' + i }}</a>
                                            <span class="published text-sm text-gray-500">
                                                <a href="" class="font-medium text-gray-500 hover:text-indigo-700 duration-75">Bilal Bentoumi</a> - 15 min ago
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>

                </div>

            </div>

            <div class="hidden lg:block lg:col-span-3 h-max sticky top-20 space-y-4">

                <div class="bg-white shadow rounded-md overflow-hidden">
                    <div class="widget-header">
                        <img class="w-full h-20 object-cover" :src="cover" alt="Bilal Bentoumi's cover"/>
                        <div class="flex items-center gap-2 px-6 -mt-4">
                            <img :src="picture" class="w-14 h-14 object-cover rounded-full border-4 border-white" alt="Bilal Bentoumi"/>
                            <h3 class="text-xl font-semibold text-gray-700 mt-4">Bilal Bentoumi</h3>
                        </div>
                    </div>
                    <div class="widget-body p-6 pt-4">
                        <Button class="w-full">Follow</Button>
                        <p class="text-gray-500 my-4">Just an average Hacker.</p>
                        <ul class="user-meta flex flex-col gap-2">
                            <li>
                                <div class="key text-xs font-medium text-gray-500">JOINED</div>
                                <div class="value text-sm font-medium text-gray-800">June 19, 2020</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="bg-white shadow rounded-md">
                    <div class="px-6 py-6 pb-2">
                        <h2 class="text-lg font-semibold text-gray-800">More from <router-link to="/" class="text-indigo-700">Bilal Bentoumi</router-link></h2>
                    </div>
                    <div class="px-6">
                        <ul class="divide-y divide-gray-100">
                            <li class="py-3" v-for="i in 5" :key="i">
                                <a href="" class="text-gray-700 hover:text-gray-900 duration-75">{{ 'Post Title ' + i }}</a>
                                <div class="tags space-x-2">
                                    <a href="" class="text-xs text-gray-400 hover:text-gray-600 duration-75">#js</a>
                                    <a href="" class="text-xs text-gray-400 hover:text-gray-600 duration-75">#html</a>
                                    <a href="" class="text-xs text-gray-400 hover:text-gray-600 duration-75">#ui</a>
                                </div>
                            </li>
                        </ul>
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
import PostLoader from '@/components/post/PostLoader.vue'

import picture from '@/assets/img/picture.jpeg'
import cover from '@/assets/img/cover.jpeg'

import { useRoute } from 'vue-router'
import { defineAsyncComponent } from 'vue'

export default {
    name: 'Post',

    components: {
        NavBar,
        QuickLinks,
        AsyncPost: defineAsyncComponent(() => import('@/components/post/Post.vue')),
        PostLoader,
        Button,
        Footer
    },

    setup() {

        const route = useRoute()
        const slug = route.params.slug

        return { slug, picture, cover }
    }

}
</script>