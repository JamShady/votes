<script setup lang="ts">
import {
    Voter,
    Voters,
} from '../../../votes'

import Weights from './weighted/weights.vue'

import {
    toRef,
    computed,
} from 'vue'


const props = defineProps<{
    voters: Voters
}>()

const voters = toRef(props, 'voters')
const maxNumVotes = computed(() => Math.max(...voters.value.map((voter: Voter) => voter.votes.length)))
</script>


<script lang="ts">
export default {
    name: 'Weighted Rankings',
}
</script>


<template>
    <div
        v-if="voters.length > 1"
        class="flex flex-wrap justify-center gap-4"
    >
        <Weights
            title="Linearly"
            desc="Linear voting strength"
            :voters="voters"
            :maxNumVotes="maxNumVotes"
            :scoreAdjuster="score => score"
        />

        <Weights
            title="Top Priority"
            desc="Linear, but 1st choice gains +1"
            :voters="voters"
            :maxNumVotes="maxNumVotes"
            :scoreAdjuster="(score: number, index: number) => score + (index === 0 ? 1 : 0)"
        />

        <Weights
            title="Logarithmically"
            desc="Linear scoring, squared..."
            :voters="voters"
            :maxNumVotes="maxNumVotes"
            :scoreAdjuster="score => Math.pow(score, 2)"
        />
    </div>
</template>