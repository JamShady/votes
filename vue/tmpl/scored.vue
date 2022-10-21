<template>
    <Card>
        <template #header>
            <slot name="title" />
        </template>

        <template #desc>
            <slot name="desc" />
        </template>

        <template v-slot="{ color }" #default>
            <ol>
                <li
                    v-for="vote of votes"
                    class="flex flex-wrap justify-between border-b-2"
                    :class="`border-b-${color}-100`"
                >
                    <span class="mr-2">
                        {{ vote.score }}: {{ vote.vote }}
                    </span>

                    <span class="ml-auto flex flex-wrap gap-2 justify-end cursor-pointer">
                        <span
                            v-for="voter in vote.voters.sort((a,b) => a.score - b.score)"
                            :class="`text-${voter.color}-500`"
                            :title="`${voter.name}: ${voter.score}`"
                        >
                            <i
                                v-for="i of voter.score"
                                class="fa-solid fa-square-check m-0.5 shadow-md"
                                :class="`shadow-${voter.color}-200`"
                            ></i>
                        </span>
                    </span>
                </li>
            </ol>
        </template>
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
            .filter(voter => voter.votes.includes(vote))    // [{ name:shady, ...}]
            .map(voter => ({                                // [{ name:shady, score:number, ...}]
                ...voter,
                score: scorer(voter, vote),
            })),
    })) // [{ vote:'foo', voters:[{ name:shady, score:number, ... }] }]
    .map(vote => ({
        ...vote,
        score: vote.voters
            .map(voter => voter.score)
            .reduce((prev, curr) => prev + curr, 0),
    })) // [{ vote:foo, score:1, voters:[{ name:shady, score:1 }], ... }]
    .sort((a,b) => b.score - a.score || b.voters.length - a.voters.length) // sort by score, then number of voters
)
</script>


<style scoped>
ol li:last-of-type {
    border-bottom: 0;
}
</style>