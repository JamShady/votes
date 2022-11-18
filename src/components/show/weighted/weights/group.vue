<script setup lang="ts">
import {
    Voters,
    Scorer,
} from '../../../../../votes'

import Card from '../../../card.vue'
import Scored from '../../../tmpl/scored.vue'

import Top    from './top.vue'
import Bottom from './bottom.vue'
import Combined from './combined.vue'

const props = defineProps<{
    isNumVotesVaried: boolean
    voters: Voters
    topDownScorer: Scorer
    bottomUpScorer: Scorer
}>()
</script>


<script lang="ts">
export default {
    name: 'Weights Group',
}
</script>


<template>
    <Card
        v-if="isNumVotesVaried"
        class="rounded-b-2xl"
    >
        <template #header>
            <slot name="header" />
        </template>

        <template #desc>
            <slot name="desc" />
        </template>

        <template #default>
            <div
                class="flex flex-wrap justify-center gap-2"
            >
                <Top
                    :voters="voters"
                    :scorer="topDownScorer"
                />
                <Bottom
                    :voters="voters"
                    :scorer="bottomUpScorer"
                />
                <Combined
                    :voters="voters"
                    :scorer="(...args) => topDownScorer(...args) + bottomUpScorer(...args)"
                />
            </div>
        </template>
    </Card>
    <Scored
        v-else
        :voters="voters"
        :scorer="topDownScorer"
    >
        <template #title>
            <slot name="header" />
        </template>

        <template #desc>
            <slot name="desc" />
        </template>
    </Scored>
</template>