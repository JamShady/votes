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
    name: 'Top Priority Weighted Rankings',
    inheritAttrs: false,
}
</script>


<template>
    <Card>
        <template #header>
            Top Priority Weighted Votes
        </template>

        <template #desc>
            Linear, but 1<sup>st</sup> choice gains +1, i.e.
            {{ [...Array(maxNumVotes).keys()].reverse().map((score, index) => score + (index === 0 ? 2 : 1)).join(', ') }}
        </template>

        <template #default>
            <Weights
                :voters="voters"
                :maxNumVotes="maxNumVotes"
                :scoreAdjuster="(score: number, index: number) => score + (index === 0 ? 1 : 0)"
                v-bind="$attrs"
            />
        </template>
    </Card>
</template>