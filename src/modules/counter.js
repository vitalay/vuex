import mutations from "./mutations";    
export default {
    state() {
    return {
      count: 1,
    }
  },
  mutations: mutations,
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
}



