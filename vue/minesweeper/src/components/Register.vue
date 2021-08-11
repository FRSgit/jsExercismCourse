<template>
  <main>
    <form @submit.prevent="register" class="form">
      <h1 class="title">Register</h1>
      <Input v-model="username" name="username" class="mt-10px" placeholder="Type in your username" />
      <Input v-model="password" name="password" class="mt-10px" type="password" placeholder="Type in your password" />
      <div class="mt-20px">
        <Btn @click="navigateToGame">Cancel</Btn>
        <Btn class="ml-10px" type="submit">Register</Btn>
      </div>
      <div class="error mt-10px mxw-50vw" v-for="error in errorArray" :key="error">
        <small>{{ error }}</small>
      </div>
      <div class="mt-20px">
        <small>Already have an account?</small>
        <Btn class="ml-10px" @click="navigateToLogin">Login</Btn>
      </div>
    </form>
  </main>
</template>

<script lang="ts">
import store, { Page } from '@/store'
import { defineComponent, ref } from 'vue'
import Btn from './Btn.vue'
import Input from './Input.vue'

export default defineComponent({
  components: { Btn, Input },
  name: 'Register',
  setup() {
    const username = ref('');
    const password = ref('');
    const errorArray = ref([]);

    return {
      username,
      password,
      errorArray,
      navigateToGame: () => store.commit('setCurrentPage', Page.Game),
      navigateToLogin: () => store.commit('setCurrentPage', Page.Login),
      register: async () => {
        errorArray.value = [];
        const res = await store.dispatch('register', { 
          username: username.value,
          password: password.value,
         })
          .catch(({ response }) => {
            errorArray.value = response.data?.errors
              ? response.data.errors
              : ['Unexpected server error'];
          });
        
        if (!res) return;

        store.commit('setCurrentPage', Page.Game);
      }
    }
  },
})
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-flow: column;
}

.title {
  font-size: 1.25em;
}

.error {
  color: red;
}
</style>
