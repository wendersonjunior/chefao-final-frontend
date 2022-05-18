<template>
  <v-col cols="12">
    <h2 class="text-center darken--text text--darken-4">
      Cadastro de produtor
    </h2>
    <v-form ref="form" v-model="valid" lazy-validation class="mt-8">
      <v-text-field
        v-model="name"
        :rules="[rules.required]"
        label="Primeiro nome"
        required
        solo
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        :rules="[rules.required]"
        label="Sobrenome"
        required
        solo
      ></v-text-field>
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
        :disabled="!valid || loading"
        large
        color="primary"
        block
        @click="validate"
      >
        CADASTRAR
      </v-btn>
      <NuxtLink to="/produtor/autenticacao" class="text-decoration-none">
        <v-btn
          large
          outlined
          color="primary"
          block
          class="mt-4"
        >
          Voltar para login
        </v-btn>
      </NuxtLink>
    </v-form>
  </v-col>
</template>

<script>
export default {
  name: 'ProducerRegister',
  layout: 'auth',
  data: () => ({
    valid: false,
    loading: false,
    name: '',
    lastName: '',
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
      if (this.$refs.form.validate()) {
        this.valid = true;
        const createUser = this.createUser(
          this.name,
          this.lastName,
          this.email,
          this.password
        )
        createUser.then((res) => {
          console.log(res);
          // if (res.length > 0) {
          // } else {
          //   this.hasError = 'Erro ao cadastrar usuário'
          // }
        })
      }
    },
    async createUser(name, lastName, email, password) {
      const createProducer = await this.$axios.$post('http://localhost:3001/producers', {
        name,
        lastName,
        email,
        password,
      })
      return createProducer
    },
  },
}
</script>

<style></style>
