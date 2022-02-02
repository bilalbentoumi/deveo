<template>
    <div class="dropdown relative" ref="dropdown" v-bind="$attrs">
        <div class="dropdown-button" @click="toggleDropdown">
            <slot name="button"></slot>
        </div>
        <transition name="fade">
            <div class="dropdown-content w-56 absolute right-0 mt-2 bg-white shadow-md border border-gray-100 rounded-md overflow-hidden" v-if="open">
                <slot name="dropdown"></slot>
            </div>
        </transition>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'

export default {
    name: 'Dropdown',

    emits: ['statusUpdated'],

    setup(props, { emit }) {

        const open = ref(false)
        const dropdown = ref(null)

        watch(open, (newValue) => {
            emit('statusUpdated', newValue)
        })

        function toggleDropdown() {
            open.value = !open.value
        }

        onMounted(() => {
            window.addEventListener('click', function(event) {
                if (!dropdown.value.contains(event.target)) {
                    open.value = false
                }
            })
        })

        return { open, dropdown, toggleDropdown }
    }

}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 120ms ease;
    transform-origin: top right;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
</style>