<template>
    <Scored
        :voters="voters"
        :scorer="scorer"
    >
        <template #title>Popularity By Combined Weighted Vote</template>
        <template #desc>Ranking choices by combined weights, between 2-{{ maxNumVotes + 1 }}</template>
    </Scored>
</template>


<script>
export default {
    name: 'Top Weighted',
}
</script>


<script setup>
import {
    toRef,
    computed,
} from 'vue'


import Scored from '../../tmpl/scored.vue'


const props = defineProps({
    voters: Array,
})


const voters = toRef(props, 'voters')
const maxNumVotes = computed(() => Math.max(...voters.value.map(voter => voter.votes.length)))

const maxBasedScore = (voter, vote) => maxNumVotes.value - voter.votes.indexOf(vote)
const minBasedScore = (voter, vote) => voter.votes.length - voter.votes.indexOf(vote) // furthest vote counts as 1

const scorer = (voter, vote) => maxBasedScore(voter, vote) + minBasedScore(voter, vote)
</script>