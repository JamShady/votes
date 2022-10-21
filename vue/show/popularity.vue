<template>
    <Scored
        :scorer="scorer"
    >
        Popularity By Vote
    </Scored>
</template>


<script>
export default {
    name: 'Popularity',
}
</script>


<script setup>
import Scored from './scored.vue'

const scorer = vote => vote.voters.length
</script>