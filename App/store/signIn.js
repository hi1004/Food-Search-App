import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    isAuthorized: false,
    email: '',
    password: '',
  }),
  mutations: {
    updateState: (state, payload) => {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    async userLogin({ state, commit }, payload) {
      console.log('payload', payload);
      commit('updateState', {
        email: payload.email,
        password: payload.password,
      });
      try {
        await axios.post(
          '/api/user/login',
          {
            email: state.email,
            password: state.password,
          },
          {
            withCredentials: true,
          }
        );
        commit('updateState', {
          isAuthorized: true,
        });
        alert(`${state.email}님 환영합니다!`);
        this.$router.push('/');
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          alert(error.response.data);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      }
    },
    async userLogout({ commit }) {
      try {
        await axios.post('/api/user/logout');
        commit('updateState', {
          isAuthorized: false,
        });
        alert('로그아웃 하셨습니다.');
      } catch (error) {
        console.log(error);
      }
    },
    async setAuthorized({ commit }) {
      try {
        await axios.get('/api/user/user');
        commit('updateState', {
          isAuthorized: true,
        });
      } catch (error) {
        console.log(error);
        commit('updateState', {
          isAuthorized: false,
        });
      }
    },
  },
};
