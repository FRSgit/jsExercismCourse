<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <input type="number" v-model.number="someNumber">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :armstrong="someNumber"/>
  cos tam
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :armstrong="someNumber+1"/>
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
    const someNumber = ref(0);
    return {
      someNumber,
    }
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
