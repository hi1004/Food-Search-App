export default {
  state: () => ({
    token: '',
  }),
  mutations: {
    setToken(state, token) {
      state.token = token;
      console.log('토큰 등록 완료!');
      console.log(state.token);
    },
  },
};
