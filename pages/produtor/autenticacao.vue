<template>
  <v-col cols="12">
    <h2 class="text-center darken--text text--darken-4">
      Acessar área do produtor
    </h2>
    <v-form ref="form" v-model="valid" lazy-validation class="mt-8">
      <v-text-field
        v-model="email"
        :rules="[rules.mail, rules.required]"
        label="E-mail"
        required
        solo
      ></v-text-field>
      <v-text-field
        v-model="password"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show ? 'text' : 'password'"
        label="Senha"
        required
        solo
        @click:append="show = !show"
      ></v-text-field>
      <span v-if="hasError" class="caption red--text">{{ hasError }}</span>
      <v-btn
        :disabled="!valid"
        large
        color="primary"
        class="mr-4"
        block
        @click="validate"
      >
        Acessar
      </v-btn>
      <NuxtLink to="/produtor/cadastro" class="text-decoration-none">
        <v-btn block outlined color="primary" class="mr-2 mt-4"
          >Cadastre-se</v-btn
        >
      </NuxtLink>
    </v-form>
  </v-col>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'auth',
  data: () => ({
    valid: false,
    email: '',
    password: '',
    show: false,
    hasError: '',
    rules: {
      required: (value) => !!value || 'Este campo é obrigatório.',
      min: (v) => v.length >= 8 || 'Senha mínima de 8 caracteres.',
      mail: (v) => /.+@.+\..+/.test(v) || 'E-mail inválido.',
    },
  }),
  methods: {
    validate() {
      this.loading = true
      if (this.$refs.form.validate()) {
        this.getProducer()
      }
    },
    getProducer() {
      const login = {
        email: this.email,
        password: this.password,
      }
      this.$auth
        .loginWith('local', { data: login })
        .then((res) => {
          this.$auth.setUser(res.data.user);
        })
        .catch((err) => console.log(err))
      // this.$store.dispatch('producer/getProducer', data)
      // .then((res) => {
      //   this.$store.commit('producer/SET_PRODUCER', res[0]);
      //   window.location.href = "area-do-produtor"
      // })
      // .finally(() => {
      //   this.loading = false;
      // })
    },
  },
}
</script>

<style></style>
