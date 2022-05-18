export default {
  getAllTags: (state) => {
    return state
  },
  getTagById: (state) => (id) => {
    return state.tags.find(tag => tag.id === Number.parseInt(id))
  }
}