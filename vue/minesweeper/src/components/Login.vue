<template>
  <main>
    <form @submit.prevent="login" class="form">
      <h1 class="title">Login</h1>
      <Input v-model="username" name="username" class="mt-10px" placeholder="Type in your username" />
      <Input v-model="password" name="password" class="mt-10px" type="password" placeholder="Type in your password" />
      <div class="mt-20px">
        <Btn @click="navigateToGame">Cancel</Btn>
        <Btn class="ml-10px" type="submit" :disabled="!username || !password">Login</Btn>
      </div>
      <div class="error mt-10px" v-for="error in errorArray" :key="error">
        <small>{{ error }}</small>
      </div>
      <div class="mt-20px">
        <small>Don't have an account yet?</small>
        <Btn class="ml-10px" @click="navigateToRegister">Register</Btn>
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
  name: 'Login',
  setup() {
    const username = ref('');
    const password = ref('');
    const errorArray = ref([]);

    return {
      username,
      password,
      errorArray,
      navigateToGame: () => store.commit('setCurrentPage', Page.Game),
      navigateToRegister: () => store.commit('setCurrentPage', Page.Register),
      login: async () => {
        errorArray.value = [];
        const res = await store.dispatch('login', { 
          username: username.value,
          password: password.value,
         })
          .catch(({ data }) => { 
            errorArray.value = data?.errors
              ? data.errors
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
