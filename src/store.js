import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 1,
    }
  },
  mutations: {
    increase(state, payload) {
      state.count += payload;
    },
    multByFive(state, payload = 5) {
      state.count *= payload;
    },
  },
  getters: {
    count(state) {
      return state.count;
    },
    multByThree(_, getters) {
      return getters.count * 3;
    },
  },
  actions: {
    asyncMultByFive({ commit }) {
      setTimeout(() => {
        commit('multByFive'); // Теперь нет необходимости передавать значение, оно берётся по умолчанию
      }, 1000);
    },
  },
});

export default store;

