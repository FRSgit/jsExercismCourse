<template>
  <Game/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Game from './components/Game.vue';

export default defineComponent({
  name: 'App',
  components: {
    Game,
  }
});
</script>

<style lang="scss" src="./fonts/font.scss"></style>

<style lang="scss">
//@import "./fonts/font";

#app {
  font-family: zen_dotsregular, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
