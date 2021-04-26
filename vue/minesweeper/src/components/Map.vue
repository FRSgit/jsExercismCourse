<template>
  <div class="map">
    <div class="map__row" v-for="(row, y) in map" :key="y">
      <span 
        class="map__cell"
        :class="{
          'map__cell--hidden': hidden,
          ['map__cell--value-'+value]: !hidden,
        }" 
        v-for="({ value, hidden, flag }, x) in row" 
        :key="x" 
        @click="$emit('clickCell', x, y)"
        @contextmenu.prevent="$emit('rightClick', x, y)"
      >
        <template v-if="!hidden">
          {{ value==='*'? '💣' : value }}
        </template>
        <Flag v-else-if="flag" class="map__cell-flag"/>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Flag from '@/assets/flag.svg';

export type Cell = {
  value: string,
  hidden: boolean,
  flag: boolean,
};

export default defineComponent({
  name: 'Map',
  components: {
    Flag,
  },
  props: {
    map: Array as PropType<Cell[][]>,
  },
  emits: ['clickCell', 'rightClick'],
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$cellBorder: 1px;

.map{
  background-color: #ddeee7;

  &__cell{
    box-sizing: border-box;
    display: inline-block;
    margin: $cellBorder;
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
    &--value-{
      border-bottom: none;
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

    &-flag {
      fill: #fb4499;
      margin: calc(15% - #{2*$cellBorder});
      height: calc(80% - #{2*$cellBorder});
      width: calc(80% - #{2*$cellBorder});
    }
    // TODO: add more colours
  }
  .d-none{
    display: none;
  }
}
</style>
