<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <GetTextarea @add-matrix="matrix = $event" />
  <CheckSum :matrix="matrix"/>
  <CheckSumModulo :matrix="matrix"/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CheckSum from './components/CheckSum.vue';
import CheckSumModulo from './components/CheckSumModulo.vue';
import GetTextarea from './components/GetTextarea.vue';

export default defineComponent({
  name: 'App',
  components: {
    GetTextarea,
    CheckSum,
    CheckSumModulo,
  },
  setup() {
    const matrix = ref([]);
    return {
      matrix,
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
