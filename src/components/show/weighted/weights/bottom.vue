<script setup lang="ts">
import {
    Scorer,
    Voters,
} from '../../../../../votes'

import Scored from '../../../tmpl/scored.vue'

defineProps<{
    voters: Voters
    scorer: Scorer
}>()
</script>


<script lang="ts">
export default {
    name: 'Bottom Weighted',
}
</script>


<template>
    <Scored
        :voters="voters"
        :scorer="scorer"
    >
        <template #title>Bottom Weighted Vote</template>
        <template #desc>Last choice gets minimal voting influence</template>
    </Scored>
</template>