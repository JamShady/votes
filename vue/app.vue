<template>
        <Entries
            class="w-full min-h-screen p-2
                sm:w-40 sm:shrink-0
                shadow-2xl
                border border-gray-400
                from-gray-100 to-gray-300 bg-gradient-to-b sm:bg-gradient-to-l
                transition-all duration-500 ease-in-out"
            v-model="voters"
        />
</template>


<script>
export default {
    name: 'Vote App',
}
</script>


<script setup>
import Entries from './entries.vue'

import {
    ref,
} from 'vue'

const voters = ref([])
</script>