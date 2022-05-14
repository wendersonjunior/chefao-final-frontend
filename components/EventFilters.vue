<template>
  <v-row>
    <v-col cols="12">
      <v-slide-group v-model="model" show-arrows>
        <v-slide-item
          v-for="tag in tags"
          :key="tag.id"
        >
        <v-hover v-slot="{ hover }">
          <v-card
            class="mr-2 elevation-0 rounded-lg"
            height="150"
            width="200"
          >
            <NuxtLink :to="`/events/${tag.id}`" class="text-decoration-none"> 
              <v-img
                :class="{ 'on-hover': hover }"
                :src="tag.banner"
                dark
                height="100%"
                :gradient="'to top left, rgba(0,0,0,.7), rgba(25,32,72,.1)'"
                class="d-flex align-end text-center rounded-lg img-banner"
              >
                <p class="display-6 font-weight-bold">
                  {{ tag.description }}
                </p>
              </v-img>
            </NuxtLink>
          </v-card>
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

<style>
.img-banner {
  transition: transform .2s ease-in-out;
}

.img-banner:not(.on-hover) {
  transform: scale(.95);
}

</style>
