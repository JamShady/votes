<script setup lang="ts">
import {
    Voter,
    Voters,
} from '../../../votes'

import Linear from './weighted/linear.vue'
import TopPriority from './weighted/top-prority.vue'
import Logarithmic from './weighted/logarithmic.vue'

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
        <Linear
            :voters="voters"
            :maxNumVotes="maxNumVotes"
        />

        <TopPriority
            :voters="voters"
            :maxNumVotes="maxNumVotes"
        />

        <Logarithmic
            :voters="voters"
            :maxNumVotes="maxNumVotes"
        />
    </div>
</template>