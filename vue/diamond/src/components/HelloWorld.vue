<template>
    <div v-for="(val, lineIndex) in diamond" :key="lineIndex">
      <template v-for="(char, charIndex) in val" :key="charIndex">
        <span v-if="char === ' '" class="char" />
        <span v-else class="char char__letter">{{ char }}</span>
      </template>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from 'vue';
import { rows } from '../methods/diamond'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    letter: { type: String, required: true },
  },
  setup(props){
    const { letter } = toRefs(props);
    const diamond = computed(() => {
      return rows(letter.value);
    });
  
    return {
      diamond,
    };
  }
});
</script>

<style scoped>
.char {
  display: inline-block;
  width: 2ch;
}

.char__letter {
  background-color: black;
  color: white;
}
</style>
