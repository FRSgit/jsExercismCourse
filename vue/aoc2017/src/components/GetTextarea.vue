<template>
    <form>
      <textarea cols="30" rows="10" v-model="matrix" @input="matrixChanged" />
    </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { parseToNumbers} from '../methods/parse.utils'

export default defineComponent({
  name: 'GetTextarea',
  emits: ['add-matrix'],
  setup( props, ctx ) {
    const matrix = ref('');
    const matrixChanged = () => {
      ctx.emit('add-matrix', parseToNumbers(matrix.value));
    }
    return {
      matrix,
      matrixChanged,
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
