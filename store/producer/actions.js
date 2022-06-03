export default {
  async getProducer(context, data) {
    return await this.$axios.$get(
      `https://api-squad5.herokuapp.com/producers/?email=${data.email}&password=${data.password}`
    )
  },
  createProducer(context, data) {
    return this.$axios.$post('https://api-squad5.herokuapp.com/register', data)
  },
}
