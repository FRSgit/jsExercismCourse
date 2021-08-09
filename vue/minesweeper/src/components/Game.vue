<template>
  <div class="game">
    <UserBar />
    
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
    <ResetButton @click="resetGame" :stillPlay="stillPlay" :winGame="winGame"/>
    <Board class="mt-10px"
      @loseGame="lostGame"
      @winGame="onWinGame"
      v-model:clickCounter="clickCounter"
      v-model:flagCounter="flagCounter"
      :map="map"
      :stillPlay="stillPlay"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import Board from './Board.vue';
import UserBar from './UserBar.vue';
import Counter from './Counter.vue';
import TimeCounter from './TimeCounter.vue';
import ResetButton from './ResetButton.vue';
import Flag from '@/assets/flag.svg';
import { MAP_BOMB_NUMBER, useMap } from '@/composables/useMap';
import store from '@/store';

export default defineComponent({
  name: 'Game',
  components: {
    UserBar,
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
    const stillPlay = ref(true);
    const winGame = ref(false);
    let firstClick = true;

    watch([flagCounter, clickCounter], () => {
        if (firstClick){
          firstClick = false;
          startCounter.value = Date.now();
        }
    });

    const stopTime = () => {
      startCounter.value = 0;
    };

    const countGame = (data: { won: boolean, time: number }) =>
      store.dispatch('postGame', data);

    const lostGame = () => {
      stillPlay.value = false;
      countGame({ won: false, time: timeCounter.value });
      stopTime();
    }

    const onWinGame = () => {
      winGame.value = true;
      stillPlay.value = false;
      countGame({ won: true, time: timeCounter.value });
      stopTime();
    }

    const resetTime = () => {
      stopTime();
      timeCounter.value = 0;
      firstClick = true;
    };

    const resetGame = () => {
      resetMap();
      resetTime();
      stillPlay.value = true;
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
      startCounter,
      lostGame,
      stillPlay,
      winGame,
      onWinGame,
    };
  }
});
</script>


<style scoped lang="scss">
.game {
  min-width: 0;
}
</style>