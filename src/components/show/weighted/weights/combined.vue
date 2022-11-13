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
    name: 'Combined Weights',
}
</script>


<template>
    <Scored
        :voters="voters"
        :scorer="scorer"
    >
        <template #title>Combined Weighted Vote</template>
        <template #desc>Combine Top + Bottom influences</template>
    </Scored>
</template>