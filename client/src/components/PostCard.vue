<template>
    <div class="post-card bg-white shadow rounded-md overflow-hidden ring ring-transparent hover:ring-indigo-500 duration-75" v-bind="$attrs">
        <div class="post-header">
            <img class="object-cover w-full" :src="image" :alt="title" style="max-height: 400px;" />
        </div>
        <div class="p-6 md:p-8">
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
            <h3 class="text-2xl font-semibold text-gray-800 mb-4 md:mb-6">{{ title }}</h3>
            <p class="text-gray-500 font-light">{{ formatDescription(description) }}</p>
        </div>
    </div>
</template>

<script>
import logo from '@/assets/logo.svg'
export default {
    name: 'PostCard',
    data() {
        return {
            title: 'Frontend Developer Resources 2022',
            image: logo,
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        }
    },
    mounted() {
        this.title = this.$attrs.data.title
        this.image = this.$attrs.data.image
    },
    methods: {
        formatDescription(description) {
            return description.slice(0, 120) + '...'
        }
    }
}
</script>

<style scoped>

</style>