import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 1,
    };
  },
  mutations: {
    increase(state, payload) {
      state.count += payload;
    },
    multByFive(state) {
      state.count *= 5;
    },
  },
  getters: {
    count(state) {
      return state.count;
    },
    multByThree(state) {
      return state.count * 3;
    },
  },
  actions: {
    asyncMultByFive(context) {
      setTimeout(() => {
        context.commit('multByFive');
      }, 1000);
    },
  },
});

export default store;
