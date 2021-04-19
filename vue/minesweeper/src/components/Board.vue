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
    clickCounter: {
        type: Number,
        required: true,
    },
  },
  emits:['update:clickCounter'],
  components: {
      Map,
  },
  setup(props,{emit}){
      const { map, clickCounter } = toRefs(props);
      const board = ref(parseMap(map));
      watch(map, () => board.value = parseMap(map));

      return {
          board,
          onCellClick: (x: number, y: number) => {
            if(board.value[y][x].hidden) emit('update:clickCounter', clickCounter.value+1);
            board.value[y][x].hidden = false;
          },
      };
  },


});
</script>


<style scoped lang="scss">

</style>