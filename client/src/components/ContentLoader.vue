<template>
    <div class="content-loader" v-bind="$attrs" :style="contentLoaderStyles">
        <div class="content-loader-slider" :style="contentLoaderSliderStyles"></div>
    </div>
</template>

<script>
export default {
    name: 'ContentLoader',
    computed: {
        contentLoaderStyles() {
            return {
                'width': this.$attrs.width ?? '100%',
                'height': this.$attrs.height ?? '20px',
                'background': this.$attrs.primaryColor ?? '#eee'
            }
        },
        contentLoaderSliderStyles() {
            return {
                'background': `linear-gradient(to right, transparent 0%, ${this.$attrs.secondaryColor ?? '#e6e6e6'} 50%, transparent 100%)`
            }
        },
    }
}
</script>

<style scoped>

.content-loader {
    position: relative;
    overflow: hidden;
}

.content-loader-slider {
    content: '';
    display: block;
    position: absolute;
    left: -500%;
    top: 0;
    height: 100%;
    width: 500px;
    animation: content-loader-anim 1.5s infinite;
}

@keyframes content-loader-anim {
    from {
        left: -500px;
    }
    to {
        left: 100%;
    }
}

</style>