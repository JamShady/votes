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
    </div>
</template>


<script>
export default {
    name: 'Weighted Rankings',
}
</script>


<script setup>
import Linear from './weighted/linear.vue'
import TopPriority from './weighted/top-prority.vue'

import {
    toRef,
    computed,
} from 'vue'


const props = defineProps({
    voters: Array,
})

const voters = toRef(props, 'voters')
const maxNumVotes = computed(() => Math.max(...voters.value.map(voter => voter.votes.length)))
</script>