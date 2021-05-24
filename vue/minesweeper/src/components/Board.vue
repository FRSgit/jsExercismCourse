<template>
  <Map 
    :map="board" 
    @click-cell="onCellClick" 
    @right-click="toggleFlag"
  />
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs, watch } from 'vue';
import Map from './Map.vue';
import { parseMap, revealMap, revealBombs } from '@/utils/mapUtils';

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
    },
    stillPlay:{
      type: Boolean,
      required: true,
    }
  },
  emits:['update:clickCounter', 'update:flagCounter', 'loseGame', 'winGame'],
  components: {
      Map,
  },
  setup(props,{emit}){
      const { map, clickCounter, flagCounter, stillPlay } = toRefs(props);
      const board = ref(parseMap(map));
      const hiddenFields = computed(() => board.value
        .reduce((acc, cur) => {
          cur.forEach((val)=> val.hidden && acc.push(val));
          return acc;
        }, []).length
      );
      const existingBombs = computed(() =>
        board.value.reduce((acc, cur) => {
          cur.forEach((val)=> val.value==='*' && ++acc);
          return acc;
        }, 0)
      )


      watch(map, () => board.value = parseMap(map));
      watch(hiddenFields, () => hiddenFields.value===existingBombs.value && emit('winGame'));

      const toggleFlag = (x: number, y: number) => {
        if(!stillPlay.value) return;
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
        if(!stillPlay.value) return;
        const cell = board.value[y][x];
        if(cell.value === '*'){
          emit('loseGame');
          revealBombs(board.value);
        }
        if(cell.flag || !cell.hidden) return;
        emit('update:clickCounter', clickCounter.value+1);
        revealMap(board.value, y, x);
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