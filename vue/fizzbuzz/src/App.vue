<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <input type="text" v-model="name" />
  {{ name }}
  <HelloWorld msg="Welcome to Your Vue.js + "/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    return {
      name: ref('cokolwiek'),
    };
  },
});
</script>

<style lang="scss">
$elo: 60px;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: $elo;
}
</style>
