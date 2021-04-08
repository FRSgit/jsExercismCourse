<template>
  <div class="map">
    <div class="map__row" v-for="(row, y) in map" :key="y">
      <span class="map__cell" v-for="(col, x) in row" :key="x">
        {{ col==='*'? '💣' : col }}
      </span>
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Map',
  props: {
    map: Array as PropType<string[]>,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.map{
  background-color: #AAA;
  &__cell{
    display: inline-block;
    height: 3ch;
    width: 3ch;
    border: thin solid black;
    vertical-align: middle;
  }
}
</style>
