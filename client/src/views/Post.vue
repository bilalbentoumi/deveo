<template>

    <NavBar/>

    <div class="deveo-container mx-auto pt-20 pb-12">

        <div class="grid grid-cols-12 gap-4">

            <div class="post col-span-full xl:col-span-9 space-y-4">

                <div class="post-panel bg-white shadow rounded-md overflow-hidden">

                    <div class="post-header">
                        <ContentLoader class="w-full h-40 sm:h-52 lg:h-96" v-if="isLoading" />
                        <img class="object-cover w-full h-40 sm:h-52 lg:h-96" :src="post.image" :alt="post.title" v-show="!isLoading" />
                    </div>

                    <div class="post-body p-4 sm:p-8">

                        <div class="flex justify-between items-start mb-4 md:pb-4">

                            <div class="author flex items-center gap-3">

                                <ContentLoader class="w-12 h-12 rounded-full" v-if="isLoading" />
                                <img v-else class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Bilal Bentoumi"/>

                                <div class="flex flex-col">
                                    <ContentLoader class="mb-2 w-36 h-4 rounded-full" v-if="isLoading" />
                                    <span class="text-md font-medium text-gray-800" v-else>Bilal Bentoumi</span>

                                    <ContentLoader class="w-24 h-4 rounded-full" v-if="isLoading" />
                                    <span class="published text-sm text-gray-500" v-else>15 min ago</span>
                                </div>

                            </div>

                            <ContentLoader class="mb-2 w-28 h-7 rounded-full" v-if="isLoading" />
                            <span class="read-time text-sm text-gray-500 bg-gray-100 px-4 py-1 rounded-full" v-else>7 min read</span>

                        </div>

                        <ContentLoader class="mb-10 w-8/12 h-7 rounded-full" v-if="isLoading" />
                        <h3 class="text-2xl font-semibold text-gray-800 mb-4 md:mb-6" v-else>{{ post.title }}</h3>

                        <div class="content">
                            <div v-if="isLoading">
                                <ContentLoader class="mb-2 w-11/12 h-5 rounded-full" />
                                <ContentLoader class="mb-2 w-9/12 h-5 rounded-full" />
                                <ContentLoader class="mb-2 w-10/12 h-5 rounded-full" />
                            </div>
                            <div v-else>
                                <p class="text-gray-500 font-light" v-for="i in 5" :key="i" >{{ post.content }}<br><br></p>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="read-next bg-white shadow rounded-md overflow-hidden">

                    <div class="panel-header px-4 sm:px-8 pt-6">
                        <h2 class="text-2xl font-semibold text-gray-800">Read next</h2>
                    </div>

                    <div class="post-body px-4 sm:px-8 py-4">

                        <ul class="divide-y divide-gray-100">
                            <li v-for="(post, index) in post.author.posts" :key="index">
                                <div class="flex justify-between items-start py-4">

                                    <div class="flex items-center gap-3">

                                        <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Bilal Bentoumi"/>

                                        <div class="flex flex-col">
                                            <a href="" class="text-lg font-medium text-gray-600 hover:text-gray-800 duration-75">{{ post.title }}</a>
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
                        <img class="w-full h-20 object-cover" :src="post.author.cover" alt="Bilal Bentoumi's cover"/>
                        <div class="flex items-center gap-2 px-6 -mt-4">
                            <img :src="post.author.picture" class="w-14 h-14 object-cover rounded-full border-4 border-white" alt="Bilal Bentoumi"/>
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
                            <li class="py-3" v-for="(post, index) in post.author.posts" :key="index">
                                <a href="" class="text-gray-700 hover:text-gray-900 duration-75">{{ post.title }}</a>
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
import ContentLoader from '@/components/ContentLoader.vue'
import Button from '@/components/Button.vue'
import Footer from '@/components/Footer.vue'

import cover from '@/assets/img/cover.jpeg'
import picture from '@/assets/img/picture.jpeg'

export default {
    name: 'Post',
    components: {
        NavBar,
        QuickLinks,
        ContentLoader,
        Button,
        Footer
    },
    data() {
        return {
            isLoading: false,
            post: {
                title: 'Introduction to Amazon Kinesis',
                image: '/posters/kinesis.png',
                content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                author: {
                    name: 'Bilal Bentoumi',
                    cover: cover,
                    picture: picture,
                    posts: [
                        { title: 'How to setup storybook in VueJS' },
                        { title: 'How to create react app with create-react-app' },
                        { title: 'Learn JavaScript in 2 hours!' },
                    ]
                }
            }
        }
    },
    mounted() {
        document.title = 'Introduction to Amazon Kinesis'
    }
}
</script>