<template>
  <Counter class="time-display" :clickCounter="formattedTime">
    <template v-slot:icon>
      <Clock/>
    </template>
  </Counter>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs, watch } from 'vue';
import Counter from './Counter.vue';
import Clock from '@/assets/clock.svg';

const formatTime = (time: number) => {
  const seconds = time % 60;
  const minutes = (time - seconds) / 60;
  return minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
};

export default defineComponent({
  name: 'TimeCounter',
  props:{
      time: {
          type: Number,
          required: true, 
      },
      start:{
        type: Number,
        required: true,
      }
  },
  emits:['update:time'],
  components: {
    Counter,
    Clock,
  },
  setup(props, {emit}){
      let intervalId: number;
      const {time, start} = toRefs(props);
      const calculateSecond = () => {
        emit('update:time', Math.floor((Date.now() - start.value)/1000));  
      }; 
      const formattedTime = computed(() => formatTime(time.value));
      watch(start, ()=>{
        if(start.value !== 0){
          intervalId = setInterval(calculateSecond, 1000);
        } else {
          clearInterval(intervalId);
        }
      });
      // watch(time, ()=>{
      //   if(time.value === 0){
      //     clearInterval(intervalId);
      //   }
      // });

      return {
          formattedTime,
      };
  }
});
</script>


<style lang="scss" scoped>
.time-display{
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 0.8rem; 
}
</style>
