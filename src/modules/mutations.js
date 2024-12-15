export default {

    increase(state, payload) {
        state.count += payload;
      },
      multByFive(state, payload = 5) {
        state.count *= payload;
      },
}