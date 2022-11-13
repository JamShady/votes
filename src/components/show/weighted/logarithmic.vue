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
const topDownScorer = (voter: Voter, vote: Vote) => Math.pow(maxNumVotes.value - voter.votes.indexOf(vote), 2)

// Last choice counts as 1
const bottomUpScorer = (voter: Voter, vote: Vote) => Math.pow(voter.votes.length - voter.votes.indexOf(vote), 2)
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
                :top="topDownScorer"
                :bottom="bottomUpScorer"
                v-bind="$attrs"
            />
        </template>
    </Card>
</template>