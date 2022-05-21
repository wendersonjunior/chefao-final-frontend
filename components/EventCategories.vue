<template>
  <v-row>
    <v-col cols="12">
      <v-slide-group v-model="model" show-arrows>
        <v-slide-item v-for="tag in tags" :key="tag.id">
          <v-hover v-slot="{ hover }">
            <NuxtLink
              :to="`/eventos/${tag.id}`"
              class="text-decoration-none content-card"
            >
              <v-img
                :class="{ 'on-hover': hover }"
                :src="tag.banner"
                dark
                height="300"
                width="200"
                cover
                class="img-bannerl"
              >
              </v-img>
              <p class="body-1 grey--text text--darken-4 text-center mt-2">
                {{ tag.description }}
              </p>
            </NuxtLink>
          </v-hover>
        </v-slide-item>
      </v-slide-group>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    model: null,
    tags: [],
  }),
  async fetch() {
    this.tags = await fetch('http://localhost:3001/tags').then((res) =>
      res.json()
    )
  },
}
</script>

<style lang="scss">
.img-banner {
  transition: transform 0.4s ease-in-out;
}

.img-banner:not(.on-hover) {
  transform: scale(0.95);
}

.v-slide-group__next,
.v-slide-group__prev {
  min-width: 0px !important;
}

.content-card {
  margin: 4px;
  width: 150px;
  height: auto;

  p {
    white-space: normal;
    overflow-wrap: break-word;
  }
}
</style>
