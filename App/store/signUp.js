import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    userName: '',
  }),
  mutations: {
    updateState: (state, payload) => {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    async userRegister({ state, commit }, payload) {
      commit('updateState', {
        userName: payload.userinfo.username,
      });

      try {
        await axios.post('https://foodsearch.shop/api/user/register', {
          name: state.userName,
          email: payload.userinfo.email,
          password: payload.userinfo.password,
        });
        alert(`${state.userName}님 회원가입에 성공하셨습니다.`);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          alert(error.response.data.email);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      }
    },
  },
};
