<script setup lang="ts">
const props = withDefaults(defineProps<{
    color?: string
}>(), {
    color: 'slate',
})
</script>


<script lang="ts">
export default {
    name: 'Card',
    inheritAttrs: false,
}
</script>


<template>
    <div><!-- allows every card to retain independent height sizing -->
        <div
            class="border border-solid rounded-md bg-gradient-to-b from-white shadow-lg"
            :class="`border-${color}-300 via-${color}-50 to-${color}-100 shadow-${color}-300/30`"
            v-bind="$attrs"
        >
            <div
                v-if="$slots['header']"
                class="border border-solid rounded-t-md p-2 text-lg font-bold bg-gradient-to-t whitespace-nowrap"
                :class="`text-${color}-600 from-${color}-100 to-${color}-200 border-${color}-200 border-b-${color}-300`"
            >
                <slot name="header" />

                <div
                    v-if="$slots['desc']"
                    class="text-xs italic"
                    :class="`text-${color}-400`"
                >
                    <slot name="desc" />
                </div>
            </div>

            <div
                class="p-2 shadow-inner"
                :class="`text-${color}-700`"
            >
                <slot
                    :color="color"
                />
            </div>
        </div>
    </div>
</template>