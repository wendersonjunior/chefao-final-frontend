export default {
  SET_PRODUCER(state, payload) {
    console.log(payload);
    state.producer = payload;
  }
}