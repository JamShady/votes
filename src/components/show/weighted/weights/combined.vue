<template>
    <Scored>
        <template #title>Combined Weighted Vote</template>
        <template #desc>Combine Top + Bottom influences</template>
    </Scored>
</template>


<script>
export default {
    name: 'Combined Weights',
}
</script>


<script setup>
import Scored from '../../../tmpl/scored.vue'
</script>