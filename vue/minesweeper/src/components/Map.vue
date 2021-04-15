<template>
  <div class="map">
    <div class="map__row" v-for="(row, y) in map" :key="y">
      <span 
        class="map__cell"
        :class="{
          'map__cell--hidden': hidden,
          ['map__cell--value-'+value]: !hidden,
        }" 
        v-for="({ value, hidden }, x) in row" 
        :key="x" 
        @click="$emit('clickCell', x, y)"
      >
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
  background-color: #ddeee7;

  &__cell{
    display: inline-block;
    margin: 1px;
    height: 2ch;
    width: 2ch;
    border-bottom: solid 4px rgba($color: #000, $alpha: 0.2);
    border-radius: 5px;
    vertical-align: middle;
    line-height: 2ch;
    font-size: 1.5rem;
    background-color: #cde;
    color: rgba($color: #fff, $alpha: 0.6);
    transition: border-bottom-width 0.15s;
    user-select: none;

    &:active{
      border-bottom-width: 0;
    }

    &--hidden{
      background-color: white;
    }
    &--value-1{
      background-color: #23c5ed;
    }
    &--value-2{
      background-color: #ffdd43;
    }
    &--value-3{
      background-color: #fb4499;
    }
    &--value-\*{
      background-color: red;
      color: rgba($color: #fff, $alpha: 1);
    }
    // TODO: add more colours
  }

}
</style>
