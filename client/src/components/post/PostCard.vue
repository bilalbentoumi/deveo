<template>

    <div class="post-card bg-white shadow rounded-md overflow-hidden ring ring-transparent hover:ring-indigo-500 duration-75" v-bind="$attrs">

        <div class="post-header">
            <router-link :to="post.link">
                <img class="object-cover w-full h-40 sm:h-52 lg:h-64" :src="post.image" :alt="post.title" />
            </router-link>
        </div>

        <div class="p-4 sm:p-8">

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

            <router-link :to="post.link">
                <h3 class="text-2xl font-semibold text-gray-800 mb-4 md:mb-6">{{ post.title }}</h3>
            </router-link>

            <p class="text-gray-500 font-light">{{ formatDescription(post.description) }}</p>

        </div>

    </div>

</template>

<script>
export default {
    name: 'PostCard',

    props: {
        post: Object
    },

    setup() {

        function formatDescription(description) {
            return description.slice(0, 220) + '...'
        }

        return { formatDescription }
    }

}
</script>