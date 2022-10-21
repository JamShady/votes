<template>
    <Scored
        :voters="voters"
        :scorer="scorer"
    >
        <template #title>Popularity By Top Weighted Vote</template>
        <template #desc>Ranking choices by descending weights, starting from {{ maxNumVotes }}</template>
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

const scorer = vote => vote.voters
    .map(voter => maxNumVotes.value - voter.votes.indexOf(vote.vote))
    .reduce((prev, curr) => prev + curr, 0)
</script>