import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    isAuthorized: false,
    username: '',
    email: '',
    allergiesInfo: [],
  }),
  mutations: {
    updateState: (state, payload) => {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    async userLogin({ commit }, payload) {
      try {
        const res = await axios.post(
          '/api/user/login',
          {
            email: payload.email,
            password: payload.password,
          },
          {
            withCredentials: true,
          }
        );
        alert(`${res.data.username}님 환영합니다!`);
        commit('updateState', {
          isAuthorized: true,
        });
        this.$router.push('/');
      } catch (error) {
        return;
      }
    },
    async userLogout({ commit }) {
      try {
        await axios.post('/api/user/logout');
        commit('updateState', {
          isAuthorized: false,
          allergiesInfo: [],
        });
        alert('로그아웃 하셨습니다.');
      } catch (error) {
        return;
      }
    },
    async setAuthorized({ commit }) {
      try {
        const res = await axios.get('/api/user/user');
        const res2 = await axios.get('/api/allergy/manage');
        commit('updateState', {
          isAuthorized: true,
          username: res.data.name,
          email: res.data.email,
          allergiesInfo: res2.data,
        });
      } catch (error) {
        commit('updateState', {
          isAuthorized: false,
          username: '',
          email: '',
          allergiesInfo: [],
        });
      }
    },
  },
};
