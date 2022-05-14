<template>
  <v-app>
    <v-app-bar elevation="0" color="rgb(254, 254, 254)" app>
        <v-container>
          <div class="d-flex align-center">
            <h1>5 Estrelas</h1>
              <v-spacer></v-spacer>
            <v-btn text color="primary" class="mr-2">SEJA UM PRODUTOR</v-btn>
            <v-btn color="primary">ACESSAR</v-btn>
          </div>
        </v-container>
    </v-app-bar>
    <v-main>
      <v-parallax src="https://soubh.uai.com.br/uploads/post/image/13270/main_EAFO.jpg" height="250">
      <v-overlay absolute opacity="0.7">
        <v-container>
          <v-row>
            <v-col>
              <h1>Belo Horizonte</h1>
              <p class="body-1">
                Que tal aproveitar a gastronomia mineira, ir a um festival com os amigos, 
                começar a noite na boemia e ainda explorar a programação cultural em BH?<br> 
                Encontre os melhores eventos, passeios turísticos, shows, festas e muito 
                mais em Belo Horizonte!
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-overlay>
      </v-parallax>
      <v-card elevation="0" class="rounded-xl white mt-n5">
        <v-container>
          <Nuxt />
        </v-container>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
