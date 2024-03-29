import { instance } from '@/utils/axiosUtils';
import { createStore } from 'vuex'

export type User = {
  id: string;
  username: string;
  token: string;
}

export type Stats = {
  avgWinTime: number;
  wins: number;
  losses: number;
}

export enum Page {
  Game,
  Register,
  Login
}

const user = localStorage.getItem('user');

export default createStore({
  state: {
    user: user
      ? JSON.parse(user)
      : undefined as User | undefined,
    stats: undefined as Stats | undefined,
    currentPage: Page.Game,
  },
  mutations: {
    setUser(state, user?: User) {
      if (user) localStorage.setItem('user', JSON.stringify(user));
      else localStorage.removeItem('user');
      state.user = user;
    },
    setStats(state, stats: Stats) {
      state.stats = stats;
    },
    setCurrentPage(state, page: Page) {
      state.currentPage = page;
    }
  },
  actions: {
    async getStats(store) {
      if (!store.state.user?.token) return;
      const stats = await instance.get(`/stats?id=${store.state.user.id}&token=${store.state.user.token}`);
      store.commit('setStats', stats.data);
    },
    async postGame(store, data: { won: boolean; time: number }) {
      if (!store.state.user?.username) return;
      await instance.post('/stats/countGame', {
        ...data,
        id: store.state.user.id,
        token: store.state.user.token,
      });
      await store.dispatch('getStats');
    },
    async register(_store, payload: { username: string; password: string }) {
      return instance.post<{ token: string }>('/register', payload);
    },
    async login(store, payload: { username: string; password: string }) {
      const { data } = await instance.post<{ token: string, id: string }>('/login', payload);
      store.commit('setUser', {
        username: payload.username,
        id: data.id,
        token: data.token
      });
      await store.dispatch('getStats');

      return data;
    },
    logout: (store) => {
      store.commit('setUser', undefined);
      store.commit('setStats', undefined);
    },
    removeUser: (store) => {
      if (!store.state.user?.id) return;
      return instance.post(`/user/${store.state.user.id}/sendDeleteEmail`, { token: store.state.user.token });
    },
    deleteUser: (store, token: string) => {
      if (!store.state.user?.id) return;
      return instance.delete(`/user/${store.state.user.id}`, { 
        params: {
          token: store.state.user.token,
          deleteToken: token
        }
      });
    }
  }
})
