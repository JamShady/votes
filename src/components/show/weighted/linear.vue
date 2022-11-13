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
const topDownScorer = (voter: Voter, vote: Vote) => maxNumVotes.value - voter.votes.indexOf(vote)

// Last choice counts as 1
const bottomUpScorer = (voter: Voter, vote: Vote) => voter.votes.length - voter.votes.indexOf(vote)
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
                :top="topDownScorer"
                :bottom="bottomUpScorer"
                v-bind="$attrs"
            />
        </template>
    </Card>
</template>


