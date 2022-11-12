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
                :top="topDownScorer"
                :bottom="bottomUpScorer"
                v-bind="$attrs"
            />
        </template>
    </Card>
</template>


<script>
export default {
    name: 'Top Priority Weighted Rankings',
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
const topDownScorer = (voter, vote) => (maxNumVotes.value - voter.votes.indexOf(vote)) + (voter.votes.indexOf(vote) === 0 ? 1 : 0)

// Last choice counts as 1
const bottomUpScorer = (voter, vote) => (voter.votes.length - voter.votes.indexOf(vote)) + (voter.votes.indexOf(vote) === 0 ? 1 : 0)
</script>