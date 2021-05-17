<template>
  <div class="game">
    <Counter :clickCounter="clickCounter"/>
    <Counter :clickCounter="flagDisplay">
      <template v-slot:icon>
        <Flag/>
      </template>
    </Counter>
    <TimeCounter 
      v-model:time="timeCounter"
      :start="startCounter"
    />
    <ResetButton @click="resetGame"/>
    <Board class="mt-10px"
      v-model:clickCounter="clickCounter"
      v-model:flagCounter="flagCounter"
      :map="map"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import Board from './Board.vue';
import Counter from './Counter.vue';
import TimeCounter from './TimeCounter.vue';
import ResetButton from './ResetButton.vue';
import Flag from '@/assets/flag.svg';
import { MAP_BOMB_NUMBER, useMap } from '@/composables/useMap';

export default defineComponent({
  name: 'Game',
  components: {
      Board,
      Counter,
      Flag,
      TimeCounter,
      ResetButton,
  },
  setup() {
      const timeCounter = ref(0);
      const startCounter = ref(0);
      const clickCounter = ref(0);
      const flagCounter = ref(MAP_BOMB_NUMBER);
      const bombNumber = ref(MAP_BOMB_NUMBER);
      const flagDisplay = computed(() => flagCounter.value.toString().padStart(3, '0'));
      const { map, reset: resetMap } = useMap(bombNumber);
      let firstClick = true;

      watch([flagCounter, clickCounter], () => {
         if(firstClick){
           firstClick = false;
           startCounter.value = Date.now();
         }
      });

      const resetTime = () => {
        timeCounter.value = 0;
        firstClick = true;
      };

      const resetGame = () => {
        resetMap();
        resetTime();
        clickCounter.value = 0;
        flagCounter.value = bombNumber.value;
      };

      return {
          map,
          clickCounter,
          flagCounter,
          flagDisplay,
          timeCounter,
          resetGame,
          startCounter
      };
  }
});
</script>


<style scoped lang="scss">
.game {
  display: inline-block;
  padding: 10px 20px 20px;
  background-color: #ddeee7;
}

</style>