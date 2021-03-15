<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{fizzBuzzValue}}
    {{someNumber}}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from 'vue';
import { fizzBuzz } from '../methods/fizzBuzz';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
    someNumber: Number
  },
  setup(props) {
    const { someNumber } = toRefs(props);
    const fizzBuzzValue = computed(() => {
      if (someNumber && someNumber.value !== undefined) return fizzBuzz(someNumber.value);
      return '';
    });
    const count = ref(1);
    const plusOne = computed(() => {
      console.log('computed');
      return count.value + 1;
    });

    console.log(plusOne.value); // 2
    console.log(plusOne.value); // 2

    count.value = 3;

    console.log(plusOne.value); // 4

    /* const someNumber = ref(2);
     * someNumber.value = 3;
     * console.log(someNumber.value);
     * {
       value: {
         _value: undefined,
         set(value) {
           ZAZNACZ_ZE_TA_ZMIENNA_SIE_ZMIENILA();
           this._value = value;
         },
         get() {
           return this_value;
         }
       }
      }
     */
    return {
      fizzBuzzValue,
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
