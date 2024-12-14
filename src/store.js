import {createStore} from 'vuex'

const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increase (state, payload) {
        state.count += payload
      }
    },
    getters: {
      count (state) {
        return state.count
      },
      multBythree (state) {
        return state.count * 3
      }
    }
})

export default store