<script setup lang="ts">
import {
    Scorer,
    Voters,
} from '../../../votes'

import {
    toRef,
    computed,
} from 'vue'

import Card from '../card.vue'

import {
    IconDefinition,
    library,
} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon  } from '@fortawesome/vue-fontawesome'
import {
    faGripLinesVertical,
    faMinus,
    faSquareCheck,
} from '@fortawesome/free-solid-svg-icons'

library.add(faGripLinesVertical, faMinus, faSquareCheck)


const props = withDefaults(defineProps<{
    voters: Voters
    scorer: Scorer
    bars?: boolean
    icon?: {
        definition: IconDefinition,
        reference: string[],
    }
}>(), {
    bars: true,
})

const icon = toRef(props, 'icon')
if (icon.value && icon.value.hasOwnProperty('definition')) {
    library.add(icon.value?.definition)
}

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


<script lang="ts">
export default {
    name: 'Votes By Score',
}
</script>


<template>
    <Card>
        <template #header>
            <FontAwesomeIcon
                v-if="icon"
                :icon="icon.reference"
                class="mr-2"
            />
            <slot name="title" />
        </template>

        <template #desc>
            <slot name="desc" />
        </template>

        <template v-slot="{ color }" #default>
            <ol>
                <li
                    v-for="vote of votes"
                    class="flex flex-wrap justify-between border-b-2 items-center"
                    :class="`border-b-${color}-100`"
                >
                    <span class="mt-1 mr-2">
                        {{ vote.score }}: {{ vote.vote }}
                    </span>

                    <span class="ml-auto flex flex-wrap gap-2 justify-end cursor-pointer">
                        <span
                            v-for="voter in vote.voters.sort((a,b) => a.score - b.score)"
                            :class="`text-${voter.color}-500`"
                            :title="`${voter.name}: ${voter.score}`"
                        >
                            <template v-if="bars">
                                <!-- hint w-(1|2|3|4) -->
                                <span
                                    v-if="voter.score % 5 !== 0"
                                    class="fa-stack"
                                    :class="`w-${voter.score % 5}`"
                                >
                                    <FontAwesomeIcon
                                        v-if="[1,3].includes(voter.score % 5)"
                                        :icon="['fas','minus']"
                                        class="fa-stack-1x"
                                        transform="rotate-90 left-8 grow-1.5"
                                    />

                                    <!-- generates vertical bars for 2, 3 and 4 tallys, which are identical except for the transform positioning -->
                                    <FontAwesomeIcon
                                        v-for="transform in {1:[],2:['left-6'],3:['left-2'],4:['left-6','right-2']}[voter.score % 5]"
                                        :icon="['fas', 'grip-lines-vertical']"
                                        class="fa-stack-1x fa-fw"
                                        :transform="transform"
                                    />
                                </span>

                                <span
                                    v-for="i of Math.floor(voter.score / 5)"
                                    class="fa-stack w-4 ml-0.5"
                                >
                                    <FontAwesomeIcon
                                        :icon="['fas', 'grip-lines-vertical']"
                                        class="fa-stack-1x"
                                        transform="left-6"
                                    />
                                    <FontAwesomeIcon
                                        :icon="['fas', 'grip-lines-vertical']"
                                        class="fa-stack-1x"
                                        transform="right-2"
                                    />
                                    <FontAwesomeIcon
                                        :icon="['fas','minus']"
                                        class="fa-stack-1x"
                                        transform="rotate--30 grow-6 left-2"
                                    />
                                </span>
                            </template>

                            <template v-else>
                                <FontAwesomeIcon
                                    v-for="i of voter.score"
                                    :icon="['fas','square-check']"
                                    class="m-0.25 shadow-md"
                                    :class="`shadow-${voter.color}-200`"
                                />
                            </template>
                        </span>
                    </span>
                </li>
            </ol>
        </template>
    </Card>
</template>


<style scoped>
ol li:last-of-type {
    border-bottom: 0;
}

div :deep(div:has(> ol)) {
    padding-top: 0;
    padding-bottom: 0;
}
</style>