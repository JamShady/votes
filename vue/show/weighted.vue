<template>
    <div
        class="flex flex-wrap justify-center gap-4"
    >
        <Top    v-bind="$attrs" />
        <Bottom v-bind="$attrs" />
    </div>
</template>


<script>
export default {
    name: 'Weighted Rankings',
    inheritAttrs: false,
}
</script>


<script setup>
import Top    from './weighted/top.vue'
import Bottom from './weighted/bottom.vue'
</script>