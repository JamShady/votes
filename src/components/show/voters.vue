<script setup lang="ts">
import {
    Voters,
} from '../../../votes'

import {
    toRef,
    computed,
} from 'vue'

import Card from '../card.vue'

const props = defineProps<{
    voters: Voters
}>()

const voters = toRef(props, 'voters')
const counts = computed(() => voters.value
    .map(voter => voter.votes)
    .flat()
    .reduce((count: { [x:string]:number }, vote: string) => ({ ...count, [vote]: (count[vote] || 0) + 1 }), {})
)

const votesByCount = (count: number) => Object.entries(counts.value)
    .filter(([vote, voteCount]) => voteCount === count)
    .map(([vote, voteCount]) => vote)

const common = computed(() => votesByCount(voters.value.length))
const unique = computed(() => votesByCount(1))

const commonClass = 'font-bold'
const uniqueClass = 'italic'
</script>


<script lang="ts">
export default {
    name: 'Voters',
}
</script>


<template>
    <Card
        class="rounded-b-xl"
    >
        <template #header>
            Voters
        </template>

        <template #desc>
            Recognised Voters
        </template>

        <div class="flex flex-wrap justify-evenly gap-2">
            <Card
                v-for="voter in voters"
                :color="voter.color"
            >
                <template #header>
                    {{ voter.name }}
                </template>

                <ol class="list-decimal list-inside">
                    <li
                        v-for="vote in voter.votes"
                        :class="{ [commonClass]: common.includes(vote), [uniqueClass]: unique.includes(vote) }"
                    >
                        {{ vote }}
                    </li>
                </ol>
            </Card>
        </div>
    </Card>
</template>