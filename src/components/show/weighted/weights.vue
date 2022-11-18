<script setup lang="ts">
import {
    Voters,
    ScoreAdjuster,
} from '../../../../votes'

import {
    toRef,
    computed,
} from 'vue'

import Card from '../../card.vue'

import Singular from './weights/singular.vue'

const props = defineProps<{
    title: string,
    desc: string,
    voters: Voters
    scoreAdjuster: ScoreAdjuster
}>()

const voters = toRef(props, 'voters')
const numVotes = computed(() => voters.value
    .map(voter => voter.votes.length)
    .filter((num, index, self) => self.indexOf(num) === index)
)

const maxNumVotes = computed(() => Math.max(...numVotes.value))
const isNumVotesVaried = computed(() => numVotes.value.length > 1)
</script>


<script lang="ts">
export default {
    name: 'Weight Group',
}
</script>


<template>
    <Card
        class="rounded-b-2xl"
    >
        <template #header>
            {{ title }} Weighted Votes
        </template>

        <template #desc>
            {{ desc }}, i.e.
            {{ [...Array(maxNumVotes).keys()].reverse().map(score => score + 1).map(scoreAdjuster).join(', ') }}
        </template>

        <template #default>
            <div
                class="flex flex-wrap justify-center gap-2"
            >
                <Singular
                    :voters="voters"
                    :maxNumVotes="maxNumVotes"
                    :isNumVotesVaried="isNumVotesVaried"
                    :scoreAdjuster="scoreAdjuster"
                />
            </div>
        </template>
    </Card>
</template>