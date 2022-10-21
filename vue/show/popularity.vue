<template>
    <Scored
        :scorer="scorer"
    >
        <template #title>Popularity By Vote</template>
        <template #desc>Ranking by counting voters</template>
    </Scored>
</template>


<script>
export default {
    name: 'Popularity',
}
</script>


<script setup>
import Scored from './../tmpl/scored.vue'

const scorer = vote => vote.voters.length
</script>