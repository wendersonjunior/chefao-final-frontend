<template>
  <v-app>
    <v-app-bar elevation="2" color="rgb(254, 254, 254)" app>
      <v-container>
        <v-row class="align-center">
          <v-col>
            <h2>logo</h2>
          </v-col>
          <v-spacer></v-spacer>
          <v-col align="end">
            <span class="body-1">
              {{ userData.name }}
            </span>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { VuexPersistence } from 'vuex-persist'
export default {
  name: 'DefaultProducer',
  data: () => ({
    userData: {},
  }),
  created() {
    const storage = new VuexPersistence();
    this.userData = storage.storage;
  }
}
</script>
