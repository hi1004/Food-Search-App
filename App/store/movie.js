// import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    movies: [],
  }),
  mutations: {
    updateState: (state, payload) => {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
  },
  // actions: {
  //   async searchMovies({ state, commit }, payload) {
  //     const { title } = payload;

  //     // commit('updateState', {
  //     //   movies: Search,
  //     // });
  //   },
  // },
};
