export default {
  async getEvents({ commit } ) {
    const events = await this.$axios.$get("http://localhost:3001/events")
    commit("SET_EVENTS", events);
  }
}