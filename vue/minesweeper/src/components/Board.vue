<template>
  <Map 
    :map="board" 
    @click-cell="onCellClick" 
    @right-click="toggleFlag"
  />
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
    flagCounter: {
      type: Number,
      required: true,
    }
  },
  emits:['update:clickCounter', 'update:flagCounter'],
  components: {
      Map,
  },
  setup(props,{emit}){
      const { map, clickCounter, flagCounter } = toRefs(props);
      const board = ref(parseMap(map));
      watch(map, () => board.value = parseMap(map));

      const toggleFlag = (x: number, y: number) => {
        const cell = board.value[y][x]; 
        if(!cell.hidden) return;

        if (cell.flag) {
          cell.flag = false;
          emit('update:flagCounter', flagCounter.value + 1);
        } else if (flagCounter.value > 0) {
          cell.flag = true;
          emit('update:flagCounter', flagCounter.value - 1)
        }
      };

      const onCellClick = (x: number, y: number) => {
        const cell = board.value[y][x];
        if(cell.flag || !cell.hidden) return;
        emit('update:clickCounter', clickCounter.value+1);
        cell.hidden = false;
      };

      return {
          board,
          onCellClick,
          toggleFlag,
      };
  },


});
</script>


<style scoped lang="scss">

</style>