<script setup lang="ts">
import {
    Vote,
    Voter,
    Voters,
    ScoreByIndex,
} from '../../../../../votes'

import {
    toRef,
    computed,
} from 'vue'

import Group from './group.vue'

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
    scoreByIndex: ScoreByIndex
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

const scoreByIndex = toRef(props, 'scoreByIndex')
const score = (maxScore: number, votes: Vote[], vote: Vote) => scoreByIndex.value(maxScore, votes.indexOf(vote))

const topDownScorer  = (voter: Voter, vote: Vote) => score(maxNumVotes.value,  voter.votes, vote)
const bottomUpScorer = (voter: Voter, vote: Vote) => score(voter.votes.length, voter.votes, vote)
</script>


<script lang="ts">
export default {
    name: 'Singular Vote Weights Group',
}
</script>


<template>
    <Group
        :isNumVotesVaried="isNumVotesVaried"
        :voters="voters"
        :topDownScorer="topDownScorer"
        :bottomUpScorer="bottomUpScorer"
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
    </Group>
</template>