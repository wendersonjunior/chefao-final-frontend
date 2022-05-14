<template>
  <div>
    <v-parallax
      :src="categorie.banner"
      height="300"
    >
      <v-overlay absolute opacity="0.7">
        <v-container>
          <v-row>
            <v-col>
              <h1>{{categorie.description}}</h1>
              <p class="body-1">
                {{categorie.text}}
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-overlay>
    </v-parallax>
    <v-card elevation="0" class="rounded-xl white mt-n5">
      <v-container>
        <h1>{{ $route.params }}</h1>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'EventPage',
  props: {},
  data: () => ({
    categorie: {},
  }),
  async fetch() {
    this.categorie = await fetch(`http://localhost:3001/tags/${this.$route.params.id}`).then((res) =>
      res.json()
    )
  },
}
</script>

<style></style>
