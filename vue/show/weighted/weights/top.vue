<template>
    <Scored>
        <template #title>Top Weighted Vote</template>
        <template #desc>First choice gets maximum voting influence</template>
    </Scored>
</template>


<script>
export default {
    name: 'Top Weighted',
}
</script>


<script setup>
import Scored from '../../../tmpl/scored.vue'
</script>