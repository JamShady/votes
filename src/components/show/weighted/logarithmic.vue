<script setup lang="ts">
import {
    Voters,
} from '../../../../votes'

import Card from '../../card.vue'
import Weights from './weights.vue'

const props = defineProps<{
    voters: Voters
    maxNumVotes: number
}>()
</script>


<script lang="ts">
export default {
    name: 'Logarithmic Weighted Rankings',
    inheritAttrs: false,
}
</script>


<template>
    <Card>
        <template #header>
            Logarithmic Weighted Votes
        </template>

        <template #desc>
            Linear scoring, squared... i.e.
            {{ [...Array(maxNumVotes).keys()].reverse().map(score => Math.pow(score + 1, 2)).join(', ') }}
        </template>

        <template #default>
            <Weights
                :voters="voters"
                :maxNumVotes="maxNumVotes"
                :scoreAdjuster="score => Math.pow(score, 2)"
                v-bind="$attrs"
            />
        </template>
    </Card>
</template>