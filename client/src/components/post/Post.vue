<template>

    <div class="post-panel bg-white shadow rounded-md overflow-hidden">

        <div class="post-header">
            <img class="object-cover w-full h-40 sm:h-52 lg:h-96" :src="post.poster" :alt="post.title" />
        </div>

        <div class="post-body p-4 sm:p-8">

            <div class="flex justify-between items-start mb-4 md:pb-4">

                <div class="author flex items-center gap-3">

                    <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Bilal Bentoumi"/>

                    <div class="flex flex-col">
                        <span class="text-md font-medium text-gray-800">Bilal Bentoumi</span>
                        <span class="published text-sm text-gray-500">15 min ago</span>
                    </div>

                </div>

                <span class="read-time text-sm text-gray-500 bg-gray-100 px-4 py-1 rounded-full">7 min read</span>

            </div>

            <h3 class="text-2xl font-semibold text-gray-800 mb-4 md:mb-6">{{ post.title }}</h3>

            <div class="content">
                <div>
                    <p class="text-gray-500 font-light" v-for="i in 5" :key="i" >{{ post.content }}<br><br></p>
                </div>
            </div>

        </div>

    </div>

</template>

<script>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import axios from 'axios'

export default {
    name: 'Post',

    props: {
        slug: String
    },

    async setup(props) {

        const post = ref(null)
        const error = ref(null)

        const slug = props.slug

        const router = useRouter()

        try {
            post.value = (await axios.get('/api/posts/' + slug)).data.data
            document.title = post.value.title
        } catch (e) {
            error.value = e.message
            await router.push('/')
        }

        return { post, error }
    },

}
</script>