<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{fizzBuzz(someNumber)}}
    {{someNumber}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fizzBuzz } from '../methods/fizzBuzz';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
    someNumber: Number
  },
  setup() {
    return {
      fizzBuzz,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
