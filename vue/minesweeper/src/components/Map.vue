<template>
  <div class="map">
    <div class="map__row" v-for="(row, y) in map" :key="y">
      <span class="map__cell" v-for="({ value, hidden }, x) in row" :key="x" @click="$emit('clickCell', x, y)">
        <template v-if="!hidden">
          {{ value==='*'? '💣' : value }}
        </template>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export type Cell = {
  value: string,
  hidden: boolean,
  flag: boolean,
};

export default defineComponent({
  name: 'Map',
  props: {
    map: Array as PropType<Cell[][]>,
  },
  emits: ['clickCell'],
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
