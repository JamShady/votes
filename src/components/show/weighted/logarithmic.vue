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
                :top="topDownScorer"
                :bottom="bottomUpScorer"
                v-bind="$attrs"
            />
        </template>
    </Card>
</template>


<script>
export default {
    name: 'Logarithmic Weighted Rankings',
    inheritAttrs: false,
}
</script>


<script setup>
import Card from '../../card.vue'
import Weights from './weights.vue'

import {
    toRef,
} from 'vue'


const props = defineProps({
    maxNumVotes: Number,
})

const maxNumVotes = toRef(props, 'maxNumVotes')

// Top choice gets maximum votes
const topDownScorer = (voter, vote) => Math.pow(maxNumVotes.value - voter.votes.indexOf(vote), 2)

// Last choice counts as 1
const bottomUpScorer = (voter, vote) => Math.pow(voter.votes.length - voter.votes.indexOf(vote), 2)
</script>