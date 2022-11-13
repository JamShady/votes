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
                            <template v-if="bars">
                                <span
                                    v-if="voter.score % 5 !== 0"
                                    class="fa-stack"
                                    :class="`w-${voter.score % 5}`"
                                >
                                    <i
                                        v-if="[1,3].includes(voter.score % 5)"
                                        class="fa-stack-1x fa-solid fa-minus"
                                        data-fa-transform="rotate-90 left-8 grow-1.5"
                                    ></i>

                                    <!-- generates vertical bars for 2, 3 and 4 tallys, which are identical except for the transform positioning -->
                                    <i
                                        v-for="transform in {1:[],2:['left-6'],3:['left-2'],4:['left-6','right-2']}[voter.score % 5]"
                                        class="fa-stack-1x fa-solid fa-grip-lines-vertical fa-fw"
                                        :data-fa-transform="transform"
                                    ></i>
                                </span>

                                <span
                                    v-for="i of Math.floor(voter.score / 5)"
                                    class="fa-stack w-4 ml-0.5"
                                >
                                    <i
                                        class="fa-stack-1x fa-solid fa-grip-lines-vertical"
                                        data-fa-transform="left-6"
                                    ></i>
                                    <i
                                        class="fa-stack-1x fa-solid fa-grip-lines-vertical"
                                        data-fa-transform="right-2"
                                    ></i>
                                    <i
                                        class="fa-stack-1x fa-solid fa-minus"
                                        data-fa-transform="rotate--30 grow-6 left-2"
                                    ></i>
                                </span>
                            </template>

                            <template v-else>
                                <i
                                    v-for="i of voter.score"
                                    class="fa-solid fa-square-check m-0.25 shadow-md"
                                    :class="`shadow-${voter.color}-200`"
                                ></i>
                            </template>
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
    bars: {
        type: Boolean,
        default: true,
    },
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