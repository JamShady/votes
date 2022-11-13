<script setup lang="ts">
import {
    Voters,
} from '../../../votes'

import Scored from './../tmpl/scored.vue'

defineProps<{
    voters: Voters
}>()

const scorer = () => 1 // each voter gives 1 vote
</script>


<script lang="ts">
export default {
    name: 'Popularity',
}
</script>


<template>
    <Scored
        :voters="voters"
        :scorer="scorer"
        :bars="false"
    >
        <template #title>Popularity By Vote</template>
        <template #desc>Ranking by counting voters</template>
    </Scored>
</template>