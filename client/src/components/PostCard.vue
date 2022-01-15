<template>

    <div class="post-card bg-white shadow rounded-md overflow-hidden ring ring-transparent hover:ring-indigo-500 duration-75" v-bind="$attrs">

        <div class="post-header">
            <ContentLoader class="w-full h-40 sm:h-52 lg:h-64" v-if="isLoading" />
            <router-link :to="link" v-show="!isLoading">
                <img class="object-cover w-full h-40 sm:h-52 lg:h-64" :src="image" :alt="title" />
            </router-link>
        </div>

        <div class="p-4 sm:p-8">

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
            <router-link :to="link" v-else>
                <h3 class="text-2xl font-semibold text-gray-800 mb-4 md:mb-6">{{ title }}</h3>
            </router-link>

            <div v-if="isLoading">
                <ContentLoader class="mb-2 w-11/12 h-5 rounded-full" />
                <ContentLoader class="mb-2 w-9/12 h-5 rounded-full" />
                <ContentLoader class="mb-2 w-10/12 h-5 rounded-full" />
            </div>
            <p class="text-gray-500 font-light" v-else>{{ formatDescription(description) }}</p>

        </div>

    </div>

</template>

<script>
import ContentLoader from '@/components/ContentLoader.vue'

export default {
    name: 'PostCard',
    components: {
        ContentLoader
    },
    data() {
        return {
            isLoading: true,
            title: 'Frontend Developer Resources 2022',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
            link: ''
        }
    },
    mounted() {
        this.title = this.$attrs.data.title
        this.image = this.$attrs.data.image
        this.link = this.$attrs.data.link
        setTimeout(() => {
            this.isLoading = false
        }, 2000)
    },
    methods: {
        formatDescription(description) {
            return description.slice(0, 220) + '...'
        }
    }
}
</script>

<style scoped>

</style>