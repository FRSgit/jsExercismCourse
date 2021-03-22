<template>
  <form @submit.prevent="addStudent">
    <input type="text" v-model="studentName" required>
    <input type="number" v-model.number="studentGrade" max="9" min="1">
    <button>Add student</button>
  </form>
  <table>
    <tr v-for="(grade,index) in roster" :key="index">
      <td>
        {{ index }}
      </td>
      <td v-for="name in grade" :key="name">
        {{ name }}
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { GradeSchool } from '../methods/grade'

export default defineComponent({
  name: 'Roster',
  props: {
    msg: String,
  },
  setup(){
    const school = new GradeSchool();
    const roster = ref(school.roster());
    const studentName = ref("");
    const studentGrade = ref(undefined as number | undefined);

    const addStudent = () => {
      if(studentGrade.value){
        school.add(studentName.value, studentGrade.value);
        roster.value = school.roster();
      }
    }
    
    return {
      roster,
      addStudent,
      studentName,
      studentGrade,
    }
  },
});
</script>

<style scoped lang="scss">

</style>
