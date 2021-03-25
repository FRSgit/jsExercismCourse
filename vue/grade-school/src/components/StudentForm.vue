<template>
  <form class="form" @submit.prevent="addStudent">
    <input type="text" v-model="studentName" required>
    <input type="number" v-model.number="studentGrade" max="9" min="1">
    <button>Add student</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export type AddEventData = {
  name: string;
  grade: number;
};

export default defineComponent({
  name: 'StudentForm',
  emits: ['add'],
  setup(_props, { emit }){
    const studentName = ref("");
    const studentGrade = ref(undefined as number | undefined);

    const addStudent = () => {
      if (!studentGrade.value || !studentName.value) return;

      emit('add', {
        name: studentName.value,
        grade: studentGrade.value,
      } as AddEventData);

      studentName.value = '';
      studentGrade.value = undefined;
    }
    
    return {
      addStudent,
      studentName,
      studentGrade,
    }
  },
});
</script>