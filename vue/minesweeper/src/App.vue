<template>
  <Game v-if="username" :username="username" @reset-username="username = ''" />
  <ChangeName v-model:username="username" v-else />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Game from './components/Game.vue';
import ChangeName from './components/ChangeName.vue';

export default defineComponent({
  name: 'App',
  components: {
    Game, ChangeName,
  },
  setup() {
    return { username: ref(''), console };
  },
});
</script>

<style lang="scss" src="./fonts/font.scss"></style>

<style lang="scss">

#app {
  font-family: zen_dotsregular, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

svg {
  width: 100%;
  height: 100%;
}

.mt-10px{
  margin-top: 10px;
}
</style>
