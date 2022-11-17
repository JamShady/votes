<script setup lang="ts">
import {
    Voters,
} from '../../../votes'

import Weights from './weighted/weights.vue'

const props = defineProps<{
    voters: Voters
}>()
</script>


<script lang="ts">
export default {
    name: 'Weighted Rankings',
}
</script>


<template>
    <div
        v-if="voters.length > 1"
        class="flex flex-wrap justify-center gap-4"
    >
        <Weights
            title="Linearly"
            desc="Linear voting strength"
            :voters="voters"
            :scoreAdjuster="score => score"
        />

        <Weights
            title="Top Priority"
            desc="Linear, but 1st choice gains +1"
            :voters="voters"
            :scoreAdjuster="(score: number, index: number) => score + (index === 0 ? 1 : 0)"
        />

        <Weights
            title="Logarithmically"
            desc="Linear scoring, squared..."
            :voters="voters"
            :scoreAdjuster="score => Math.pow(score, 2)"
        />
    </div>
</template>