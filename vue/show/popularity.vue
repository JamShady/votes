<template>
    <Card>
        <template #header>
            Popularity By Vote
        </template>

        <Card
            v-for="vote of votes"
        >
            <template #header>
                {{ vote.score }}: {{ vote.vote }}
            </template>

            <ol class="list-inside list-disc">
                <li
                    v-for="voter in vote.voters"
                    :class="`text-${voter.color}-600`"
                >
                    {{ voter.name }}
                </li>
            </ol>
        </Card>
    </Card>
</template>


<script>
export default {
    name: 'Popularity',
}
</script>


<script setup>
import {
    toRef,
    computed,
} from 'vue'


import Card from '../card.vue'


const props = defineProps({
    voters: Array,
})


const voters = toRef(props, 'voters')
const scorer = vote => vote.voters.length
const votes = computed(() => voters.value // [{ name:shady, votes:[foo,bar] }, { name:sal, votes:[bar] }]
    .map(voter => voter.votes) // [[foo,bar], [bar]]
    .flat() // [foo,bar,bar]
    .filter((value, index, self) => self.indexOf(value) === index) // [foo,bar]
    .map(vote => ({
        vote,                                               // foo
        voters: voters.value                                // [{ name:shady, ...}, { name:sal, ...}]
            .filter(voter => voter.votes.includes(vote)),   // [{ name:shady, ...}]
    })) // { vote:'foo', voters:[{ name:shady }] }
    .map(vote => ({ ...vote, score: scorer(vote) })) // { vote:string, voters:array, score:number }
    .sort((a, b) => b.score - a.score) // sort by score
)
</script>