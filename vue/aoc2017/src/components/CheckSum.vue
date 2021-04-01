<template>
    <InfoBlock class="test" >
        <template #default>Check Sum</template>
        <template #value>{{ checkSum }}</template>
    </InfoBlock>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from 'vue'
import InfoBlock from './InfoBlock.vue'
import { calculateSumRows } from '../methods/ex1'

export default defineComponent({
    name: 'CheckSum',
    components: {
        InfoBlock,
    },
    props: {
        matrix:{
            type: Array as PropType<number[][]>,
            required: true
        }
    },
    setup(props) {
        const { matrix } = toRefs(props);
        const checkSum = computed(() => calculateSumRows(matrix.value));
        return {
            checkSum,
        }
    },
})
</script>