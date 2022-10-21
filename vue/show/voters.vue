<template>
    <Card>
        <template #header>
            Voters
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


<script>
export default {
    name: 'Voters',
}
</script>


<script setup>
import Card from '../card.vue'

const props = defineProps({
    voters: Array,
})
</script>