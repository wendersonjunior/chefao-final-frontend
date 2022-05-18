<template>
  <v-col cols="12">
    <h2 class="text-center darken--text text--darken-4">Acessar área do produtor</h2>
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
    hasError: "",
    rules: {
      required: (value) => !!value || 'Este campo é obrigatório.',
      min: (v) => v.length >= 8 || 'Senha mínima de 8 caracteres.',
      mail: (v) => /.+@.+\..+/.test(v) || 'E-mail inválido.',
    },
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        const auth = this.authentication(this.email, this.password);
        auth.then((res) => {
          if (res.length > 0) {
            localStorage.name = `${res[0].name} ${res[0].lastName}`;
            localStorage.id = res[0].id;
          } else {
            this.hasError = "Login ou senha inválido, tenta novamente"
          }
        })
      }
    },
    async authentication(email, password) {
      const auth = await this.$axios.$get(
        `http://localhost:3001/producers/?email=${email}&password=${password}`
      )
      return auth
    },
  },
}
</script>

<style></style>
