<template>
    <Scored>
        <template #title>Bottom Weighted Vote</template>
        <template #desc>Last choice gets minimal voting influence</template>
    </Scored>
</template>


<script>
export default {
    name: 'Bottom Weighted',
}
</script>


<script setup>
import Scored from '../../../tmpl/scored.vue'
</script>