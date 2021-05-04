<template>
  <Counter :clickCounter="clickCounter"/>
  <Counter :clickCounter="flagDisplay">
    <template v-slot:icon>
      <Flag/>
    </template>
  </Counter>
  <Counter :clickCounter="timeCounter"/>
  <button @click="resetTime">reset</button>
  <Board
    v-model:clickCounter="clickCounter"
    v-model:flagCounter="flagCounter"
    :map="map"
  />
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import Board from './Board.vue';
import Counter from './Counter.vue';
import Flag from '@/assets/flag.svg';

const BombNumber = 10;

export default defineComponent({
  name: 'Game',
  components: {
      Board,
      Counter,
      Flag,
  },
  setup(){
      const startCounter = ref(0);
      const timeCounter = ref(0);
      let intervalId: number;
      const calculateSecond = () => {
        timeCounter.value =  Math.floor((Date.now() - startCounter.value)/1000)
      }
      const clickCounter = ref(0);
      const flagCounter = ref(BombNumber);
      const flagDisplay = computed(() => flagCounter.value.toString().padStart(3, '0'));
      const map = new Array(8)
        .fill(0)
        .map(() => new Array(8).fill(' '));
      const temp = new Array(64)
        .fill(0)
        .map((_val, index) => index);
      
      for(let i = 0; i < BombNumber; ++i){
        const index_temp = Math.floor(Math.random() * temp.length);
        const pos = temp[index_temp];
        const y = Math.floor(pos / 8);
        const x = pos % 8;
        map[y][x] = '*';
        temp.splice(index_temp, 1);
      }
      let firstClick = true;
      watch([flagCounter, clickCounter], () => {
         if(firstClick){
           firstClick = false;
           startCounter.value = Date.now();
           intervalId = setInterval(calculateSecond, 1000);
         }
      })

      const resetTime = () => {
        timeCounter.value = 0;
        firstClick = true;
        clearInterval(intervalId);
      }

      return {
          map: map.map((val) => val.join('')),
          clickCounter,
          flagCounter,
          flagDisplay,
          timeCounter,
          resetTime,
      }
  }
});
</script>


<style scoped lang="scss">

</style>