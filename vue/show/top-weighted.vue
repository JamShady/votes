<template>
    <Scored
        :voters="voters"
        :scorer="scorer"
    >
        Popularity By Top Weighted Vote ({{ maxNumVotes }})
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


import Scored from './scored.vue'


const props = defineProps({
    voters: Array,
})


const voters = toRef(props, 'voters')
const maxNumVotes = computed(() => Math.max(...voters.value.map(voter => voter.votes.length)))

const scorer = vote => vote.voters
    .map(voter => maxNumVotes.value - voter.votes.indexOf(vote.vote))
    .reduce((prev, curr) => prev + curr, 0)
</script>