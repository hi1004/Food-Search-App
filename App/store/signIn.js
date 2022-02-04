export default {
  namespaced: true,
  state: () => ({
    isAuthorized: false,
  }),
  mutations: {
    checkAuthorized: state => {
      return state.isAuthorized;
    },
    setAuthorized: (state, auth) => {
      console.log(auth);
      state.isAuthorized = auth;
    },
  },
};
