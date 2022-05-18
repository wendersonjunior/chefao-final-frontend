<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="text-center mt-4">
          <h2 class="primary--text">Acompanhe os melhores eventos de BH e região!</h2>
        </v-col>
        <v-col cols="12">
          <EventCategories />
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-container fluid>
      <v-row>
        <v-col>
          <v-carousel
            cycle
            height="300"
            hide-delimiter-background
            show-arrows-on-hover
            vertical-delimiters
            delimiter-icon="mdi-circle-small"
          >
            <v-carousel-item
              v-for="(slide, i) in slides"
              :key="i"
            >
              <v-img :src="`https://picsum.photos/id/${i}/900/300`" cover></v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>

import EventCategories from "@/components/EventCategories";

export default {
  name: 'IndexPage',
  components: {
    EventCategories,
  },
  data: () => ({
    colors: [
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4',
    ],
    slides: [
      'First',
      'Second',
      'Third',
      'Fourth',
      'Fifth',
    ],
  })
}
</script>
