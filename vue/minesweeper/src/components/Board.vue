<template>
  <Map :map="board" @click-cell="onCellClick"/>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref, toRefs, watch } from 'vue';
import Map, { Cell } from './Map.vue';
import { annotate } from '../composables/annotate';

const parseMap = (map: Ref<string[]>) =>
  annotate(map.value)
    .map(row => row
      .split('')
      .map(value => ({ value, hidden: true, flag: false}))
    ) as Cell[][]

export default defineComponent({
  name: 'Board',
  props: {
    map: {
        type: Array as PropType<string[]>,
        required: true,
    },
  },
  components: {
      Map,
  },
  setup(props){
      const { map } = toRefs(props);
      const board = ref(parseMap(map));
      watch(map, () => board.value = parseMap(map));

      return {
          board,
          onCellClick: (x: number, y: number) => {
            board.value[y][x].hidden = false;
          },
      };
  },

});
</script>


<style scoped lang="scss">

</style>