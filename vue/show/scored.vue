<template>
    <Card>
        <template #header>
            <slot />
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
    name: 'Votes By Score',
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
    scorer: Function,
})


const voters = toRef(props, 'voters')
const scorer = props.scorer
const votes = computed(() => voters.value // [{ name:shady, votes:[foo,bar] }, { name:sal, votes:[bar] }]
    .map(voter => voter.votes) // [[foo,bar], [bar]]
    .flat() // [foo,bar,bar]
    .filter((value, index, self) => self.indexOf(value) === index) // [foo,bar]
    .map(vote => ({
        vote,                                               // foo
        voters: voters.value                                // [{ name:shady, ...}, { name:sal, ...}]
            .filter(voter => voter.votes.includes(vote)),   // [{ name:shady, ...}]
    })) // [{ vote:'foo', voters:[{ name:shady }] }]
    .map(vote => ({ ...vote, score: scorer(vote) })) // [{ vote:foo, score:1, voters:[{ name:shady }] }]
    .sort((a,b) => b.score - a.score || b.voters.length - a.voters.length) // sort by score, then number of voters
)
</script>