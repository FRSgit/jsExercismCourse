<template>
    <InfoBlock class="modulo" :value="checkSum">Modulo Check Sum</InfoBlock>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from 'vue'
import { calculateModuloRows } from '../methods/ex2'
import InfoBlock from './InfoBlock.vue'

export default defineComponent({
    name: 'CheckSumModulo',
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
        const checkSum = computed(() => calculateModuloRows(matrix.value));
        return {
            checkSum,
        }
    },
})
</script>

<style lang="scss" scoped>
.modulo{
    margin-top: 5px;
    color: blue;
}
</style>