<template>
    <button v-bind="$attrs">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button'
}
</script>

<style scoped>
button {
    @apply inline-flex items-center justify-center;
    @apply px-5 py-1.5;
    @apply text-sm font-medium leading-6 text-white;
    @apply bg-indigo-600 hover:bg-indigo-500;
    @apply border-2 border-transparent rounded-md;
    @apply focus:outline-none;
    @apply transition duration-150 ease-in-out;
}
button[outline] {
    @apply text-indigo-700 hover:text-indigo-500;
    @apply bg-transparent;
    @apply border-indigo-700 hover:border-indigo-500;
}
</style>