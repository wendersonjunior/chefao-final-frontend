<template>
  <v-col cols="12">
    <v-btn fab absolute top right outlined dark class="mr-2 mt-16 rounded-lg">
      <v-icon> mdi-close </v-icon>
    </v-btn>
    <div class="d-flex justify-center align-center flex-column">
      <v-img src="/logo.svg" width="168px" height="69px"></v-img>
      <span class="text-center white--text text-h6 mt-6">
        Todo mundo tá indo. Só falta você.
      </span>
    </div>
    <v-form ref="form" v-model="valid" lazy-validation class="mt-8">
      <v-text-field
        v-model="email"
        :rules="[rules.mail, rules.required]"
        label="Insira seu login"
        required
        dark
        solo
      ></v-text-field>
      <v-text-field
        v-model="password"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show ? 'text' : 'password'"
        label="Insira sua senha"
        required
        dark
        solo
        @click:append="show = !show"
      ></v-text-field>
      <span v-if="hasError" class="caption red--text">{{ hasError }}</span>
      <v-btn
        :disabled="!valid"
        large
        color="white"
        class="mr-4 rounded-pill primary--text body-1 text-capitalize"
        block
        @click="validate"
      >
        Entrar
      </v-btn>
      <NuxtLink to="/produtor/cadastro" class="text-decoration-none">
        <v-btn
          block
          dark
          outlined
          large
          class="mr-2 mt-4 body-1 text-capitalize rounded-pill"
          >Criar conta</v-btn
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
      this.$auth.loginWith('local', { data: login }).then((res) => {
        this.$auth.setUser(res.data.user)
      })
    },
  },
}
</script>
