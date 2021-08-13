<template>
  <div class="bar">
    <template v-if="username !== undefined">
      <div>
        <Btn @click="removeUser">🗑</Btn>
        <Btn class="ml-10px" @click="logout">X</Btn>
        {{ username }}
      </div>
      <div v-if="stats">
        🕓 {{ stats.avgWinTime }}
        🏆 {{ stats.wins }}
        😵 {{ stats.losses }}
      </div>
    </template>
    <template v-else>
      <div class="my-10px">To store stats:</div>
      <div class="my-10px">
        <Btn @click="navigateToLogin">Login</Btn>
        or
        <Btn @click="navigateToRegister">Register</Btn>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import store, { Page } from '@/store';
import Btn from '@/components/Btn.vue';

export default defineComponent({
  name: 'UserBar',
  components: { Btn },
  setup() {
    if (store.state.user?.username) {
      store.dispatch('getStats');
    }

    return {
      username: computed(() => store.state.user?.username),
      stats: computed(() => store.state.stats),
      navigateToLogin() {
        store.commit('setCurrentPage', Page.Login);
      },
      navigateToRegister() {
        store.commit('setCurrentPage', Page.Register);
      },
      logout() {
        store.dispatch('logout');
      },
      removeUser() {
        store.dispatch('removeUser');
      }
    };
  },
})
</script>

<style lang="scss" scoped>
.bar {
  display: flex;
  justify-content: space-between;
}
</style>

