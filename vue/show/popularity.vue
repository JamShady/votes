<template>
    <Scored
        :scorer="scorer"
        :bars="false"
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

const scorer = () => 1 // each voter gives 1 vote
</script>