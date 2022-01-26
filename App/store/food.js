import axios from 'axios';

const _defaultMessage = '식품 이름을 검색해주세요!';

export default {
  namespaced: true,
  state: () => ({
    foods: [],
    message: _defaultMessage,
    loading: false,
    theFood: {},
  }),
  mutations: {
    updateState: (state, payload) => {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
    resetMovies(state) {
      state.foods = [];
      state.message = _defaultMessage;
      state.loading = false;
    },
  },
  actions: {
    async searchFoods({ state, commit }, payload) {
      const { name } = payload;

      const API_KEY =
        '%2B%2FIm5j1T7QlZAUwzFL9dWaTPwfKay%2B%2BuAKfoBQsixwWd7Klt7ALIFepp9rQcCnSqw6oIY82%2FK%2FiOsja2j4zZ9g%3D%3D';
      const url = `http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService?serviceKey=${API_KEY}&prdlstNm=${name}&returnType=json&pageNo=1&numOfRows=30`;
      const res = await axios.get(`/api${url}`);
      console.log(res);
      const { list } = res.data;
      commit('updateState', {
        foods: list,
      });
    },
  },
};
async function _fetchFood(payload) {
  const url = process.client ? '/api/food' : `${process.env.CLIENT_URL}/api/food`;
  return await axios.post(url, payload);
}
