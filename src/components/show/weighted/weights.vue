<script setup lang="ts">
import {
    Vote,
    Voter,
    Voters,
    ScoreAdjuster,
} from '../../../../votes'

import {
    toRef,
    computed,
} from 'vue'

import Card from '../../card.vue'
import Scored from '../../tmpl/scored.vue'

import Top    from './weights/top.vue'
import Bottom from './weights/bottom.vue'
import Combined from './weights/combined.vue'

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

const isNumVotesVaried = computed(() => numVotes.value.length > 1)

const maxNumVotes = computed(() => Math.max(...numVotes.value))
const scoreAdjuster = toRef(props, 'scoreAdjuster')

// The basic mechanic is all scores are based on the 'max' value allowed, minus the index of the vote
// so, assuming votes where the maximum number of votes is 4
// topDown  = max score is 4, so top vote gets 4, even if they only voted for one item
// bottomUp = max score is how many votes they made, so if you voted for two, your top is worth 2
const score = (maxScore: number, votes: Vote[], vote: Vote) => {
    const index = votes.indexOf(vote)
    const score = maxScore - index
    return scoreAdjuster.value(score, index)
}

const topDownScorer  = (voter: Voter, vote: Vote) => score(maxNumVotes.value,  voter.votes, vote)
const bottomUpScorer = (voter: Voter, vote: Vote) => score(voter.votes.length, voter.votes, vote)
</script>


<script lang="ts">
export default {
    name: 'Weight Group',
}
</script>


<template>
    <Card
        v-if="isNumVotesVaried"
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
                <Top
                    :voters="voters"
                    :scorer="topDownScorer"
                />
                <Bottom
                    :voters="voters"
                    :scorer="bottomUpScorer"
                />
                <Combined
                    :voters="voters"
                    :scorer="(...args) => topDownScorer(...args) + bottomUpScorer(...args)"
                />
            </div>
        </template>
    </Card>
    <Scored
        v-else
        :voters="voters"
        :scorer="topDownScorer"
    >
        <template #title>
            {{ title }} Weighted Votes
        </template>

        <template #desc>
            {{ desc }}, i.e.
            {{ [...Array(maxNumVotes).keys()].reverse().map(score => score + 1).map(scoreAdjuster).join(', ') }}
        </template>
    </Scored>
</template>