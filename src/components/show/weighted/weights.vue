<script setup lang="ts">
import {
    Voters,
    ScoreAdjuster,
} from '../../../../votes'

import {
    toRef,
    computed,
} from 'vue'

import Card from '../../card.vue'

import Singular from './weights/singular.vue'

const props = defineProps<{
    title: string,
    desc: string,
    voters: Voters
    scoreAdjuster: ScoreAdjuster
}>()

const voters = toRef(props, 'voters')
const numVotes = computed(() => voters.value
    .map(voter => voter.votes.length)
    .filter((num, index, self) => self.indexOf(num) === index)
)

const maxNumVotes = computed(() => Math.max(...numVotes.value))
const isNumVotesVaried = computed(() => numVotes.value.length > 1)

// The basic mechanic is all scores are based on the 'max' value allowed, minus the index of the vote
// so, assuming votes where the maximum number of votes is 4
// topDown  = max score is 4, so top vote gets 4, even if they only voted for one item
// bottomUp = max score is how many votes they made, so if you voted for two, your top is worth 2
const scoreAdjuster = toRef(props, 'scoreAdjuster')
const scoreByIndex = (maxScore: number, index: number) => scoreAdjuster.value(maxScore - index, index)
</script>


<script lang="ts">
export default {
    name: 'Weight Group',
}
</script>


<template>
    <Card
        class="rounded-b-2xl"
    >
        <template #header>
            {{ title }} Weighted Votes
        </template>

        <template #desc>
            {{ desc }}, i.e.
            {{ [...Array(maxNumVotes).keys()].reverse().map(score => score + 1).map(scoreAdjuster).join(', ') }}
        </template>

        <template #default>
            <div
                class="flex flex-wrap justify-center gap-2"
            >
                <Singular
                    :voters="voters"
                    :maxNumVotes="maxNumVotes"
                    :isNumVotesVaried="isNumVotesVaried"
                    :scoreByIndex="scoreByIndex"
                />
            </div>
        </template>
    </Card>
</template>