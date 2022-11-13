<script setup lang="ts">
import {
    Scorer,
    Voters,
} from '../../../../../votes'

import Scored from '../../../tmpl/scored.vue'

import {
    faCalculator,
} from '@fortawesome/free-solid-svg-icons'

const icon = {
    definition: faCalculator,
    reference: ['fas','calculator'],
}

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
        :icon="icon"
    >
        <template #title>Combined Weighted Vote</template>
        <template #desc>Combine Top + Bottom influences</template>
    </Scored>
</template>