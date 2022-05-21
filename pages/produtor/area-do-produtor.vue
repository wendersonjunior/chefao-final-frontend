<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center mt-4">
        <h2 class="primary--text">Seja bem-vindo</h2>
      </v-col>
    </v-row>
    <pre>
      {{ $auth.user }}
    </pre>
    <v-row>
      <v-col class="elevation-2 white rounded-lg">
        <span class="subtitle-1 font-weight-bold gray--text text--darken-4">Meus eventos</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProducerHome',
  layout: 'default-producer',
  middleware: 'auth',
}
</script>

<style></style>
