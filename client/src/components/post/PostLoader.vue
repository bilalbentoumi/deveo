<template>

    <div class="post-panel bg-white shadow rounded-md overflow-hidden">

        <div class="post-header">
            <ContentLoader class="w-full h-40 sm:h-52 lg:h-96" />
        </div>

        <div class="p-4 sm:p-8">

            <div class="flex justify-between items-start mb-4 md:pb-4">

                <div class="author flex items-center gap-3">

                    <ContentLoader class="w-12 h-12 rounded-full" />

                    <div class="flex flex-col">
                        <ContentLoader class="mb-2 w-36 h-4 rounded-full" />
                        <ContentLoader class="w-24 h-4 rounded-full" />
                    </div>

                </div>

                <ContentLoader class="mb-2 w-28 h-7 rounded-full" />

            </div>

            <ContentLoader class="mb-10 w-8/12 h-7 rounded-full" />

            <div class="mb-8" v-for="i in 5">
                <ContentLoader class="mb-2 w-11/12 h-5 rounded-full" />
                <ContentLoader class="mb-2 w-9/12 h-5 rounded-full" />
                <ContentLoader class="mb-2 w-10/12 h-5 rounded-full" />
            </div>

        </div>

    </div>


</template>

<script>
import ContentLoader from '@/components/ContentLoader.vue'

export default {
    name: 'PostLoader',
    components: {
        ContentLoader
    }
}
</script>