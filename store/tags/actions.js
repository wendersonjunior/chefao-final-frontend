export default {
  async getTags({ commit } ) {
    const tags = await this.$axios.$get("http://localhost:3001/tags")
    commit("SET_TAGS", tags);
  }
}