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
      }
    }
})

export default store