<script setup lang="ts">
import {
    Vote,
    Voter,
    Voters,
    ScoreByIndex,
} from '../../../../../votes'

import {
    toRef,
} from 'vue'

import Group from './group.vue'


import {
    FontAwesomeIcon,
} from '@fortawesome/vue-fontawesome'
import {
    library,
} from '@fortawesome/fontawesome-svg-core'
import {
    faDice,
} from '@fortawesome/free-solid-svg-icons'
library.add(faDice)


const props = defineProps<{
    maxNumVotes: number
    isNumVotesVaried: boolean
    voters: Voters
    scoreByIndex: ScoreByIndex
}>()

const maxNumVotes = toRef(props, 'maxNumVotes')
const scoreByIndex = toRef(props, 'scoreByIndex')

const fill = (votes: Vote[], vote: Vote) => maxNumVotes.value - votes.length
    ? Array(maxNumVotes.value - votes.length).fill(vote)
    : []
const combine = (head: string[], tail: string[]) => [...head, ...tail]
const topHeavy = (votes: Vote[]) => combine(fill(votes, votes[0]), votes)
const bottomHeavy = (votes: Vote[]) => combine(votes, fill(votes, votes[votes.length - 1]))

const score = (maxScore: number, votes: Vote[], vote: Vote) => votes
    .map((v,i) => vote === v
        ? scoreByIndex.value(maxScore, i)
        : 0
    )
    .reduce((prev, curr) => prev + curr, 0)

const topDownScorer  = (voter: Voter, vote: Vote) => score(maxNumVotes.value,  topHeavy(voter.votes), vote)
const bottomUpScorer = (voter: Voter, vote: Vote) => score(maxNumVotes.value, bottomHeavy(voter.votes), vote)
</script>


<script lang="ts">
export default {
    name: 'Multi-Vote Weights Group',
}
</script>


<template>
    <Group
        :isNumVotesVaried="true"
        :voters="voters"
        :topDownScorer="topDownScorer"
        :bottomUpScorer="bottomUpScorer"
    >
        <template #header>
            <FontAwesomeIcon
                :icon="['fas', 'dice']"
            />
            Multi-Vote Strength
        </template>

        <template #desc>
            Edge Choice Counts Multiple Times
        </template>
    </Group>
</template>