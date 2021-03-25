<template>
    {{ checkSum }}
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from 'vue'
import { calculateModuloRows } from '../methods/ex2'

export default defineComponent({
    name: 'CheckSumModulo',
    props: {
        matrix:{
            type: Array as PropType<number[][]>,
            required: true
        }
    },
    setup(props) {
        const { matrix } = toRefs(props);
        const checkSum = computed(() => calculateModuloRows(matrix.value));
        return {
            checkSum,
        }
    },
})
</script>
