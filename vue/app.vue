<template>
    <div class="flex flex-col sm:flex-row gap-2">
        <Entries
            class="w-full min-h-screen p-2
                sm:w-40 sm:shrink-0
                shadow-2xl rounded-b-3xl sm:rounded-none
                border border-gray-400
                from-gray-100 to-gray-300 bg-gradient-to-b sm:bg-gradient-to-l
                transition-all duration-500 ease-in-out"
            :colors="colors"
            v-model="voters"
        />

        <div class="grow flex flex-col p-2 gap-4">
            <div class="flex flex-wrap gap-4 justify-center">
                <Votes
                    :voters="voters"
                />

                <Popularity
                    :voters="voters"
                />
            </div>

            <Weighted
                :voters="voters"
            />
        </div>
    </div>
</template>


<script>
export default {
    name: 'Vote App',
}
</script>


<script setup>
import Entries from './entries.vue'
import Votes   from './show/voters.vue'
import Popularity from './show/popularity.vue'
import Weighted from './show/weighted.vue'

import {
    ref,
} from 'vue'

const voters = ref([])
const colors = ['red', 'orange', 'yellow', 'lime', 'blue', 'violet', 'fuchsia']
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
</script>