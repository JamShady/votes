<template>
    <Scored
        :scorer="scorer"
    >
        <template #title>Popularity By Bottom Weighted Vote</template>
        <template #desc>Ranking choices by ascending weights, starting from 1</template>
    </Scored>
</template>


<script>
export default {
    name: 'Bottom Weighted',
}
</script>


<script setup>
import Scored from '../../tmpl/scored.vue'


const scorer = vote => vote.voters
    .map(voter => voter.votes.length - voter.votes.indexOf(vote.vote))
    .reduce((prev, curr) => prev + curr, 0)
</script>