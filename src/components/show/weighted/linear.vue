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
                :top="topDownScorer"
                :bottom="bottomUpScorer"
                v-bind="$attrs"
            />
        </template>
    </Card>
</template>


<script>
export default {
    name: 'Linear Weighted Rankings',
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
const topDownScorer = (voter, vote) => maxNumVotes.value - voter.votes.indexOf(vote)

// Last choice counts as 1
const bottomUpScorer = (voter, vote) => voter.votes.length - voter.votes.indexOf(vote)
</script>