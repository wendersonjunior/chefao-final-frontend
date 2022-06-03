<template>
  <v-app>
    <v-main>
      <div id="bg-auth">
        <v-container id="content-auth">
          <v-row>
            <Nuxt />
          </v-row>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AuthLayout',
}
</script>
<style scoped lang="scss">
  #bg-auth {
    background-image: url("../static/background.png");
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
  }

  #content-auth {
    width: 90%;
    max-width: 548px;
    min-height: 400px;
  }
</style>
