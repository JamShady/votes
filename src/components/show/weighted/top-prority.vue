<script setup lang="ts">
import {
    Vote,
    Voter,
    Voters,
} from '../../../../votes'

import Card from '../../card.vue'
import Weights from './weights.vue'

import {
    toRef,
} from 'vue'


const props = defineProps<{
    voters: Voters
    maxNumVotes: number
}>()

const maxNumVotes = toRef(props, 'maxNumVotes')

// Top choice gets maximum votes
const topDownScorer = (voter: Voter, vote: Vote) => (maxNumVotes.value - voter.votes.indexOf(vote)) + (voter.votes.indexOf(vote) === 0 ? 1 : 0)

// Last choice counts as 1
const bottomUpScorer = (voter: Voter, vote: Vote) => (voter.votes.length - voter.votes.indexOf(vote)) + (voter.votes.indexOf(vote) === 0 ? 1 : 0)
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
                :top="topDownScorer"
                :bottom="bottomUpScorer"
                v-bind="$attrs"
            />
        </template>
    </Card>
</template>