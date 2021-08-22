<template>
    <NavBar/>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-20 md:pt-18">
        <h2 class="text-center text-3xl">Hello User!</h2>
    </div>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
    name: 'Home',
    components: {
        NavBar
    }
}
</script>
