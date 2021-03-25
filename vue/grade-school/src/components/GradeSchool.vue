<template>
  <StudentForm @add="addStudent" />
  <Roster :roster="roster" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { GradeSchool } from '../methods/grade'
import StudentForm, { AddEventData } from './StudentForm.vue';
import Roster from './Roster.vue';

export default defineComponent({
  name: 'GradeSchool',
  components: {
    StudentForm,
    Roster,
  },
  setup(){
    const school = new GradeSchool();
    const roster = ref(school.roster());

    const addStudent = ({ name, grade }: AddEventData) => {
      school.add(name, grade);
      roster.value = school.roster();
    };
    
    return {
      roster,
      addStudent
    };
  },
});
</script>

<style scoped lang="scss">

</style>
