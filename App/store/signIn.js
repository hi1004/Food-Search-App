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
        const res = await axios.get('/api/user/user');
        const res2 = await axios.get('/api/allergy/manage');
        console.log(res2.data);
        commit('updateState', {
          isAuthorized: true,
          username: res.data.name,
          email: res.data.email,
          allergiesInfo: res2.data,
        });
        console.log('인증성공!');
      } catch (error) {
        commit('updateState', {
          isAuthorized: false,
          username: '',
        });
        console.log('인증실패 T_T');
      }
    },
  },
};
