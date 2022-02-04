import axios from 'axios';
import _uniqBy from 'lodash/uniqBy';

const _defaultMessage = 'Search for the food name!';
let pageNo = 1;
export default {
  namespaced: true,
  state: () => ({
    foods: [],
    message: _defaultMessage,
    loading: false,
    theFood: {},
    foodName: '',
    total: '',
    pgNo: 0,
    scrollData: [],
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
      state.foods.length = 0;
    },
  },
  actions: {
    async searchFoods({ state, commit }, payload) {
      pageNo = 1;
      if (state.loading) return;

      commit('updateState', {
        message: '',
        loading: true,
        foodName: payload.foodName,
      });

      try {
        const res = await _fetchFood({
          ...payload,
          pageNo,
        });
        const { list, totalCount } = res.data;
        // 같은 이름 중복제거
        commit('updateState', {
          foods: _uniqBy(list, 'prdlstNm'),
        });

        // 잘못 입력했을 때
        if (!list.length) {
          commit('updateState', {
            message: `[ ${payload.foodName} ]의 상품이 존재하지 않거나 잘 못 입력하였습니다!`,
          });
        } else if (payload.foodName === '') {
          commit('updateState', {
            message: `아무것도 입력하지 않으셨습니다. 다시 입력해주세요!`,
            foods: [],
            foodName: '',
          });
        }
        const total = parseInt(totalCount, 10);
        commit('updateState', {
          total,
        });
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

    async searchResult({ state, commit }, payload) {
      if (state.loading) return;
      try {
        const res = await _fetchFood({
          ...payload,
          pageNo: 1,
        });
        const { totalCount } = res.data;

        const total = parseInt(totalCount, 10);
        const pageLength = Math.ceil(total / 12);
        setTimeout(async () => {
          if (pageNo < pageLength) {
            pageNo++;
            const res = await _fetchFood({
              ...payload,
              pageNo,
            });
            const { list } = res.data;
            commit('updateState', {
              foods: [...state.foods, ...list],
              pgNo: pageNo,
            });
          }
        }, 1000);
      } catch ({ message }) {
        commit('updateState', {
          message,
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
