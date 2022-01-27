import axios from 'axios';
import _uniqBy from 'lodash/uniqBy';

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
    resetFood(state) {
      state.foods = [];
      state.message = _defaultMessage;
      state.loading = false;
    },
  },
  actions: {
    async searchFoods({ state, commit }, payload) {
      if (state.loading) return;
      commit('updateState', {
        message: '',
        loading: true,
      });

      try {
        const res = await _fetchFood({
          ...payload,
        });
        const { list, totalCount } = res.data;
        commit('updateState', {
          foods: _uniqBy(list, 'prdlstReportNo'),
        });

        const total = parseInt(totalCount, 10);
        const pageLength = Math.ceil(total / 10);

        // 추가 요청!
        // if (pageLength > 1) {
        //   for (let page = 2; page <= pageLength; page += 1) {
        //     if (page > payload.number / 10) break;
        //     const res = await _fetchFood({
        //       ...payload,
        //       page,
        //     });
        //     const { list } = res.data;
        //     // imdbID로 고유화하는 코드 수정!
        //     commit('updateState', {
        //       foods: _uniqBy([...state.foods, ...list], 'prdlstReportNo'),
        //     });
        //   }
        // }
      } catch ({ message }) {
        commit('updateState', {
          foods: [],
          message,
        });
      } finally {
        commit('updateState', {
          loading: false,
        });
      }
    },
    async searchFoodWithId({ state, commit }, payload) {
      // const { id } = payload
      if (state.loading) return;

      commit('updateState', {
        theFood: {},
        loading: true,
      });

      try {
        const res = await _fetchFood(payload);
        console.log(res);
        commit('updateState', {
          theFood: Object.apply({}, res.data.list),
        });
      } catch (error) {
        commit('updateState', {
          theFood: {},
        });
      } finally {
        commit('updateState', {
          loading: false,
        });
      }
    },
  },
};
async function _fetchFood(payload) {
  const url = process.client ? '/api/food' : `${process.env.CLIENT_URL}/api/food`;
  return await axios.post(url, payload);
}
