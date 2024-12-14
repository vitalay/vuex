import {createStore} from 'vuex'

const store = createStore({
    state () {
      return {
        count: 1
      }
    },
    mutations: {
      increase (state, payload) {
        state.count += payload
      }
    }
})

export default store