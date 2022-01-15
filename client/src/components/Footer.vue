<template>

    <div class="bg-gray-100 flex items-center border-t border-gray-900/10 dark:border-gray-50/[0.06]">

        <div class="deveo-container mx-auto w-full flex justify-center items-center gap-3 p-10">

            <svg width="20" height="20" viewBox="0 0 233 233" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-20 hover:opacity-100 duration-200">
                <rect width="233" height="233" rx="50" fill="url(#paint0_linear_9_12)"/>
                <path d="M165.967 115.431C165.967 115.385 165.96 115.34 165.954 115.288C165.651 110.464 163.357 105.777 159.189 102.559L95.8102 52.7357C88.072 46.7549 76.8756 48.1006 70.8008 55.7327C64.7259 63.3712 66.0803 74.4033 73.8119 80.3842L119.761 116.503L73.8119 152.622C66.0803 158.597 64.7259 169.635 70.8008 177.267C76.8756 184.899 88.072 186.245 95.8102 180.264L159.195 130.435C163.364 127.217 165.658 122.53 165.96 117.706C165.967 117.66 165.967 117.615 165.974 117.563C165.993 117.205 166 116.854 166 116.497C166 116.146 165.987 115.788 165.967 115.431Z" fill="white"/>
                <defs>
                    <linearGradient id="paint0_linear_9_12" x1="116.5" y1="0" x2="116.5" y2="233" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#182A4B"/>
                        <stop offset="1" stop-color="#12122B"/>
                    </linearGradient>
                </defs>
            </svg>

            <p class="text-sm text-gray-600">Made with love by Bilal Bentoumi. Deveo © 2021 - 2022.</p>

        </div>

    </div>

</template>

<script>
import Button from '@/components/Button.vue'
export default {
    name: 'Footer',
    components: {
        Button
    },
    data() {
        return {}
    },
    methods: {
        toggleDarkMode() {
            document.querySelector('html').classList.toggle('dark')
        }
    }
}
</script>