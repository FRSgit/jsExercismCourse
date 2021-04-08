<template>
  <Map :map="map"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Map from './Map.vue';

export default defineComponent({
  name: 'Game',
  components: {
      Map,
  },
  setup(){
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
      }
  }
});
</script>


<style scoped lang="scss">

</style>