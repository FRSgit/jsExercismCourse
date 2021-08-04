<template>
  <div class="game">
    <UserBar v-model:update="updateUserBar" :username="username" @reset-username="$emit('reset-username')" />
    
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
import { computed, defineComponent, ref, toRefs, watch } from 'vue';
import Board from './Board.vue';
import UserBar from './UserBar.vue';
import Counter from './Counter.vue';
import TimeCounter from './TimeCounter.vue';
import ResetButton from './ResetButton.vue';
import Flag from '@/assets/flag.svg';
import { MAP_BOMB_NUMBER, useMap } from '@/composables/useMap';
import { useAxios } from '@vueuse/integrations';
import { instance } from '@/utils/axiosUtils';

export default defineComponent({
  name: 'Game',
  events: ['reset-username'],
  components: {
    UserBar,
    Board,
    Counter,
    Flag,
    TimeCounter,
    ResetButton,
  },
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { username } = toRefs(props);
    const timeCounter = ref(0);
    const startCounter = ref(0);
    const clickCounter = ref(0);
    const flagCounter = ref(MAP_BOMB_NUMBER);
    const bombNumber = ref(MAP_BOMB_NUMBER);
    const flagDisplay = computed(() => flagCounter.value.toString().padStart(3, '0'));
    const { map, reset: resetMap } = useMap(bombNumber);
    let firstClick = true;
    const stillPlay = ref(true);
    const winGame = ref(false);
    const updateUserBar = ref(true);

    watch([flagCounter, clickCounter], () => {
        if(firstClick){
          firstClick = false;
          startCounter.value = Date.now();
        }
    });

    const stopTime = () => {
      startCounter.value = 0;
    };

    const countGame = (data: { won: boolean, time: number }) => {
      const { isFinished } = useAxios(
        '/stats/countGame',
        { method: 'POST', data: { ...data, username: username.value} },
        instance,
      );
      watch(isFinished, isFinished => {
        if (isFinished) updateUserBar.value = true;
      });
    }

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
      updateUserBar,
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