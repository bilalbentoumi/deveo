<template>
    <router-view/>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
@import 'assets/fonts/Inter/inter.css';
@import 'assets/fonts/font-awesome-pro/css/all.css';
@import 'assets/css/style.css';

*:focus {
    outline: none;
}

* {
    font-family: 'Inter';
}

html, body {
    height: 100%;
}

body {
    background: #f8f8f8;
}

#app {
    height: 100%;
}
</style>