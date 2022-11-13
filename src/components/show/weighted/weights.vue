<template>
    <div
        class="flex flex-wrap justify-center gap-2"
    >
        <Top
            :voters="voters"
            :scorer="top"
        />
        <Bottom
            :voters="voters"
            :scorer="bottom"
        />
        <Combined
            :voters="voters"
            :scorer="(...args) => top(...args) + bottom(...args)"
        />
    </div>
</template>


<script>
export default {
    name: 'Weight Group',
}
</script>


<script setup>
import Top    from './weights/top.vue'
import Bottom from './weights/bottom.vue'
import Combined from './weights/combined.vue'

const props = defineProps({
    voters: Array,
    top: Function,
    bottom: Function,
})
</script>