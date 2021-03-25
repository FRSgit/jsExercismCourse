<template>
  <table>
    <tr
      v-for="(grade,index) in roster"
      :key="index"
    >
      <td>
        <strong>{{ index }}</strong>
      </td>
      <td v-for="name in grade" :key="name">
        {{ name }}
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Roster',
  props: {
    roster: Object,
  }
});
</script>

<style scoped lang="scss">

</style>
