<template>
  <div>
    <Game class="page" v-if="currentPage === Page.Game" />
    <Login class="page" v-else-if="currentPage === Page.Login" />
    <Register class="page" v-else-if="currentPage === Page.Register" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import Game from './components/Game.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import store, { Page } from './store';

export default defineComponent({
  name: 'App',
  components: {
    Game,
    Login,
    Register,
  },
  setup() {
    (async () => {
      const url = new URL(window.location.href);
      const pathname = url.pathname.substring('/jsExercismCourse'.length + 1);
      const token = url.searchParams.get('token');

      if (pathname === 'deleteUser' && token) {
        await store.dispatch('deleteUser', token);
        await store.dispatch('logout');
        window.location.href = '/jsExercismCourse';
      }
    })();

    return {
      currentPage: computed(() => store.state.currentPage),
      Page,
    }
  }
});
</script>

<style lang="scss" src="./fonts/font.scss"></style>

<style lang="scss">
#app {
  font-family: zen_dotsregular, 'Lucida Console', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.page {
  display: inline-block;
  min-width: 50vw;
  padding: 10px 20px 20px;
  background-color: #ddeee7;
}

svg {
  width: 100%;
  height: 100%;
}

.mt-10px{
  margin-top: 10px;
}

.my-10px{
  margin-top: 10px;
  margin-bottom: 10px;
}

.ml-10px {
  margin-left: 10px !important;
}

.mt-20px{
  margin-top: 20px;
}

.mxw-50vw {
  max-width: 50vw;
}
</style>
