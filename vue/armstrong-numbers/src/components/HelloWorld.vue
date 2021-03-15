<template>
    <div v-if="calculated" class="bg-grey">✅</div>
    <div v-else-if="armstrong === ''">empty</div>
    <div v-else>❌</div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore 
import { isArmstrongNumber } from '../methods/armstrong-numbers';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
    armstrong: [Number,String],
  },
  setup(props){
    const { armstrong } = toRefs(props);
    const calculated = computed(() => isArmstrongNumber(armstrong?.value));
    return {
      calculated,
    }
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

.bg-grey{
  background-color: grey;
}
</style>
