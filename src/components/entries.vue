<script setup lang="ts">
import {
    Voters,
} from '../../votes'

import {
    ref,
    computed,
    watch,
    onMounted,
} from 'vue'

import {
    debounce,
} from 'lodash'


const props = defineProps<{
    colors: string[]
    modelValue: Voters
}>()

const emit = defineEmits(['update:modelValue'])


const placeholder = `Enter votes as per the following:
- One vote per line
- Blank line between vote groups (i.e. voters)`


const storeKey = 'responses'
const get = () => window.localStorage.getItem(storeKey)
const set = debounce(value => window.localStorage.setItem(storeKey, value), 250)


const responses = ref(`# shady
Francis
Libertalia
Hansa
Shipping

# sal
Cyclades
Shipping
Francis Drake
Libertalia

# saj
Libertalia
Cyclades
Franc

# shak
Shipping
Libertalia
Fran
Cyclades`)


const textarea = ref(null)
const adjustHeight = () => {
    // @ts-ignore
    const element: HTMLTextAreaElement = textarea.value
    element.style.height = "auto"
    element.style.height = (element.scrollHeight + 2) + 'px'
}


const getColorForIndex = (index: number): string => props.colors[index]

const voterBlocks = computed(() => responses.value
    .replaceAll(String.fromCharCode(160), ' ') // some devices use char(160) instead of char(32) for spaces, which breaks comparison tests... this fixes that
    .trim()
    .split(/\n{2,}/)
    .map(voterTextBlock => voterTextBlock
        .trim()
        .split(/\n/)
        .map(line => line.trim())
        .filter((value, index, self) => self.indexOf(value) === index)
    )
    .filter(voterArrayOfLines => voterArrayOfLines
        .some(line => line.length > 0)
    )
)

const votes = computed(() => voterBlocks.value
    .flat()
    .filter(line => !line.match(/^#/))
    .filter((value, index, self) => self.indexOf(value) === index)
)

const normalise = (vote: string) => vote.toLowerCase()
const normalToVoteMap = computed(() => votes.value
    .map(vote => ({ [normalise(vote)]: vote }))
    .reduce((prev, curr) => ({ ...prev, ...curr }), {})
)
const normalised = computed(() => Object.keys(normalToVoteMap.value))
const conversions = computed(() => normalised.value
    .map(normal => ({
        [normal]: normalised.value
            .filter(value => value.substring(0, normal.length) === normal)
            .sort((a,b) => b.length - a.length)[0]
    }))
    .reduce((prev, curr) => ({ ...prev, ...curr }), {})
)

const voters = computed(() => voterBlocks.value
    .map((voterBlock: string[], index: number) => {
        const color = getColorForIndex(index)

        const name = (voterBlock[0].match(/^#/)
                ? voterBlock[0].replace(/^#/, '').trim()
                : color
        )
        .toLowerCase()
        .replace(/\b[a-z]/g, letter => letter.toUpperCase())

        const votes = voterBlock
            .filter(entry => !entry.match(/^#/))
            .map(vote => normalToVoteMap.value[conversions.value[normalise(vote)]])
            .filter((value, index, self) => self.indexOf(value) === index)

        return {
            name,
            color,
            votes,
        }
    })
    .filter(voter => voter.votes.length)
)

const update = (updated: Voters) => emit('update:modelValue', updated)
watch(voters, () => {
    set(responses.value)
    update(voters.value)
})

onMounted(() => {
    responses.value = get() || responses.value
    setTimeout(adjustHeight, 250)
    update(voters.value)
})
</script>


<script lang="ts">
export default {
    name: 'Vote Entries',
}
</script>


<template>
    <textarea
        :placeholder="placeholder"
        @input="adjustHeight"
        ref="textarea"
        v-model="responses"
    ></textarea>
</template>