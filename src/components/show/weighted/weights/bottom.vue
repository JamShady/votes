<script setup lang="ts">
import {
    Scorer,
    Voters,
} from '../../../../../votes'

import Scored from '../../../tmpl/scored.vue'

import {
    faArrowUpWideShort,
} from '@fortawesome/free-solid-svg-icons'

const icon = {
    definition: faArrowUpWideShort,
    reference: ['fas','arrow-up-wide-short'],
}

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
        :icon="icon"
    >
        <template #title>Bottom Weighted Vote</template>
        <template #desc>Last choice gets minimal voting influence</template>
    </Scored>
</template>