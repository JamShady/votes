<script setup lang="ts">
import Entries from './entries.vue'
import Votes   from './show/voters.vue'
import Popularity from './show/popularity.vue'
import Weighted from './show/weighted.vue'

import availableColors from '../colors.json'

import {
    ref,
} from 'vue'

const voters = ref([])
const colors = availableColors
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
</script>


<script lang="ts">
export default {
    name: 'Vote App',
}
</script>


<template>
    <div class="flex flex-col sm:flex-row gap-2">
        <div><!-- otherwise textarea would fill the height preventing height:auto from being useful -->
            <Entries
                class="w-full p-2 border
                    sm:w-40 sm:shrink-0
                    shadow-2xl rounded-b-3xl sm:rounded-bl-none
                    transition-all duration-500 ease-in-out"
                :colors="colors"
                v-model="voters"
            />
        </div>

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