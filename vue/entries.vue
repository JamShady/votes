<template>
    <textarea
        :placeholder="placeholder"
        v-model="responses"
    ></textarea>
</template>

<script>
export default {
    name: 'Vote Entries',
}
</script>


<script setup>
import {
    ref,
    computed,
    watch,
    onMounted,
} from 'vue'


const props = defineProps({
    modelValue: Array,
})

const emit = defineEmits(['update:modelValue'])


const placeholder = `Enter votes as per the following:
- One vote per line
- Blank line between vote groups (i.e. voters)`


const responses = ref(`Francis Drake
Libertalia
Hansa
Shipping

Cyclades
Shipping
Francis Drake
Libertalia

Libertalia
Cyclades
Francis Drake

Shipping
Libertalia
Francis Drake
Cyclades`)


const voters = computed(() => responses.value
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

const update = updated => emit('update:modelValue', updated.value)
watch(voters, () => update(voters))
onMounted(() => update(voters))
</script>