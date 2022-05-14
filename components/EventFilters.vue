<template>
  <v-row>
    <v-col cols="12">
      <v-slide-group v-model="model" show-arrows class="mt-12">
        <v-slide-item
          v-for="tag in tags"
          :key="tag.id"
        >
        <v-hover v-slot="{ hover }">
          <v-card
            :class="{ 'on-hover': hover }"
            class="mr-2 elevation-0 rounded-lg text-decoration-none"
            height="150"
            width="200"
          >
            <NuxtLink :to="`/events/${tag.id}`"> 
              <v-img
                :src="tag.banner"
                dark
                height="100%"
                :gradient="'to top left, rgba(0,0,0,.7), rgba(25,32,72,.1)'"
                class="d-flex align-end text-center rounded-lg"
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
.v-card {
  transition: filter .4s ease-in-out;
}

.v-card:not(.on-hover) {
  filter: grayscale(1);
}
</style>
