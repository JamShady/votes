<script setup lang="ts">
import {
    Voters,
} from '../../../votes'

import Card from '../card.vue'

const props = defineProps<{
    voters: Voters
}>()
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
                    >
                        {{ vote }}
                    </li>
                </ol>
            </Card>
        </div>
    </Card>
</template>