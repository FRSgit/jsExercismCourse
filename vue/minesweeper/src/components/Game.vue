<template>
  <Counter :clickCounter="clickCounter"/>
  <Board
    v-model:clickCounter="clickCounter"
    :map="map"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Board from './Board.vue';
import Counter from './Counter.vue';

export default defineComponent({
  name: 'Game',
  components: {
      Board,
      Counter,
  },
  setup(){
      const clickCounter = ref(0);
      const map = new Array(8)
        .fill(0)
        .map(() => new Array(8).fill(' '));
      const temp = new Array(64)
        .fill(0)
        .map((_val, index) => index);
      
      for(let i = 0; i < 10; ++i){
        const index_temp = Math.floor(Math.random() * temp.length);
        const pos = temp[index_temp];
        const y = Math.floor(pos / 8);
        const x = pos % 8;
        map[y][x] = '*';
        temp.splice(index_temp, 1);
      }
      
      return {
          map: map.map((val) => val.join('')),
          clickCounter,
      }
  }
});
</script>


<style scoped lang="scss">

</style>