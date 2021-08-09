<template>
  <input class="input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"> 
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Input',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.input {
    -webkit-appearance: none;
    appearance: none;
    border: 0;
    padding: .25em .5em;
    background: #fff;
    border-radius: 5px;
}
</style>
