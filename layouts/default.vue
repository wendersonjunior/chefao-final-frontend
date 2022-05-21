<template>
  <v-app>
    <!-- <v-app-bar elevation="2" color="rgb(254, 254, 254)" app>
      <v-container>
        <v-row>
          <v-col>
            <h2>logo</h2>
          </v-col>
          <v-spacer></v-spacer>
          <v-col align="end">
            <NuxtLink to="/produtor/cadastro" class="text-decoration-none">
              <v-btn text color="primary" class="mr-2">SEJA UM PRODUTOR</v-btn>
            </NuxtLink>
            <NuxtLink to="/produtor/autenticacao" class="text-decoration-none">
              <v-btn color="primary">ACESSAR</v-btn>
            </NuxtLink>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar> -->
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
