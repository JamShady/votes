<script setup lang="ts">
import {
    Vote,
    Voter,
    Voters,
    ScoreAdjuster,
} from '../../../../../votes'

import {
    toRef,
    computed,
} from 'vue'

import Card from '../../../card.vue'
import Scored from '../../../tmpl/scored.vue'

import Top    from './top.vue'
import Bottom from './bottom.vue'
import Combined from './combined.vue'


import {
    FontAwesomeIcon,
} from '@fortawesome/vue-fontawesome'
import {
    library,
} from '@fortawesome/fontawesome-svg-core'
import {
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
} from '@fortawesome/free-solid-svg-icons'
library.add(
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix
)

const props = defineProps<{
    maxNumVotes: number
    isNumVotesVaried: boolean
    voters: Voters
    scoreAdjuster: ScoreAdjuster
}>()

const maxNumVotes = toRef(props, 'maxNumVotes')

const icon = computed(() => {
    switch(maxNumVotes.value) {
        case 1:  return 'dice-one'
        case 2:  return 'dice-two'
        case 3:  return 'dice-three'
        case 4:  return 'dice-four'
        case 5:  return 'dice-five'
        default: return 'dice-six'
    }
})

// The basic mechanic is all scores are based on the 'max' value allowed, minus the index of the vote
// so, assuming votes where the maximum number of votes is 4
// topDown  = max score is 4, so top vote gets 4, even if they only voted for one item
// bottomUp = max score is how many votes they made, so if you voted for two, your top is worth 2
const scoreAdjuster = toRef(props, 'scoreAdjuster')
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
    name: 'Singular Vote Weights Group',
}
</script>


<template>
    <Card
        v-if="isNumVotesVaried"
        class="rounded-b-2xl"
    >
        <template #header>
            <FontAwesomeIcon
                :icon="['fas', icon]"
            />
            Singular Vote Strength
        </template>

        <template #desc>
            Each vote only counts once
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
            Singular Vote
        </template>

        <template #desc>
            Each vote only counts once
        </template>
    </Scored>
</template>