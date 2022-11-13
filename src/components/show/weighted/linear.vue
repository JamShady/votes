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
    name: 'Linear Weighted Rankings',
    inheritAttrs: false,
}
</script>


<template>
    <Card>
        <template #header>
            Linearly Weighted Votes
        </template>

        <template #desc>
            Linear voting strength, i.e.
            {{ [...Array(maxNumVotes).keys()].reverse().map(score => score + 1).join(', ') }}
        </template>

        <template #default>
            <Weights
                :voters="voters"
                :maxNumVotes="maxNumVotes"
                :scoreAdjuster="score => score"
                v-bind="$attrs"
            />
        </template>
    </Card>
</template>


