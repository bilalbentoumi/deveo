<template>
    <AsyncPostCard v-for="(post, index) in posts" :key="index" :post="post" />
</template>

<script>

import axios from 'axios'

import { defineAsyncComponent, ref } from 'vue'

import PostCardLoader from '@/components/post/PostCardLoader.vue'

const AsyncPostCard = defineAsyncComponent({
    loader: () => import('@/components/post/PostCard.vue'),
    loadingComponent: PostCardLoader,
    suspensible: false,
    delay: 0
})

export default {
    name: 'PostList',

    components: {
        AsyncPostCard
    },

    async setup() {

        const posts = ref(null)
        const error = ref(null)

        try {
            const response = await axios.get('/api/posts')
            posts.value = response.data.data
        } catch (e) {
            error.value = e
        }

        return { posts, error }
    }

}
</script>