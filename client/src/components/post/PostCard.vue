<template>

    <div class="post-card bg-white shadow rounded-md overflow-hidden ring ring-transparent hover:ring-indigo-500 duration-75" v-bind="$attrs">

        <div class="post-header">
            <router-link :to="post.slug">
                <img class="object-cover w-full h-40 sm:h-52 lg:h-64" :src="post.poster" :alt="post.title" />
            </router-link>
        </div>

        <div class="p-4 sm:p-8">

            <div class="flex justify-between items-start mb-4 md:pb-4">
                <div class="author flex items-center gap-3">
                    <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Bilal Bentoumi"/>
                    <div class="flex flex-col">
                        <span class="text-md font-medium text-gray-800">{{ post.authorName }}</span>
                        <time class="published text-sm text-gray-500" :datetime="post.published">
                            {{ timeAgo(post.published) }}
                        </time>
                    </div>
                </div>
                <span class="read-time text-sm text-gray-500 bg-gray-100 px-4 py-1 rounded-full">7 min read</span>
            </div>

            <router-link :to="post.slug">
                <h3 class="text-2xl font-semibold text-gray-800 mb-4 md:mb-6">{{ post.title }}</h3>
            </router-link>

            <p class="text-gray-500 font-light">{{ formatDescription(post.content) }}</p>

        </div>

    </div>

</template>

<script>
import moment from 'moment'

export default {
    name: 'PostCard',

    props: {
        post: Object
    },

    setup(props) {

        props.post.slug = '/blog/' + props.post.slug
        props.post.published = props.post.createdAt
        props.post.authorName = props.post.user.firstName + ' ' + props.post.user.lastName

        function formatDescription(description) {
            return description.slice(0, 220) + '...'
        }

        function timeAgo(datetime) {
            return moment(datetime).fromNow()
        }

        return { formatDescription, timeAgo }
    }

}
</script>