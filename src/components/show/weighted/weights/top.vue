<script setup lang="ts">
import {
    Scorer,
    Voters,
} from '../../../../../votes'

import Scored from '../../../tmpl/scored.vue'

import {
    faArrowDownWideShort,
} from '@fortawesome/free-solid-svg-icons'

const icon = {
    definition: faArrowDownWideShort,
    reference: ['fas','arrow-down-wide-short'],
}

defineProps<{
    voters: Voters
    scorer: Scorer
}>()
</script>


<script lang="ts">
export default {
    name: 'Top Weighted',
}
</script>


<template>
    <Scored
        :voters="voters"
        :scorer="scorer"
        :icon="icon"
    >
        <template #title>Top Weighted Vote</template>
        <template #desc>First choice gets maximum voting influence</template>
    </Scored>
</template>
