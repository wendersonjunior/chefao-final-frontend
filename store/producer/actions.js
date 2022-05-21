export default {
  async getProducer(context, data) {
    return await this.$axios.$get(
      `http://localhost:3001/producers/?email=${data.email}&password=${data.password}`
    )
  },
  createProducer(context, data) {
    return this.$axios.$post('http://localhost:3001/register', data)
  },
}
