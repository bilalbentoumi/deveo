<template>
    <router-view/>
</template>

<script>
export default {
    name: 'App',
    mounted() {
        this.$router.push('login')
    }
}
</script>

<style>
html, body {
    height: 100%;
}

#app {
    height: 100%;
}
</style>