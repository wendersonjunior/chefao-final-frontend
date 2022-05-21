<template>
  <v-container>
    <v-row class="my-4">
      <v-col>
        <CurrentDate />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <NuxtLink to="/eventos" class="text-decoration-none">
          <div class="d-flex align-center justify-center rounded-pill black11--text mediumgray body-2 pa-3">
            <v-icon
              left
              color="primary"
            >
              mdi-magnify
            </v-icon>
            Encontre os melhores rolês da cidade
          </div>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2 class="text-h6 font-weight-bold black11--text">
          Eventos em destaque
        </h2>
        <v-slide-group v-model="model" :show-arrows="false" class="mt-4">
          <v-slide-item
            v-for="n in 15"
            :key="n"
            v-slot="{ active, toggle }"
          >
            <v-card
              :color="active ? undefined : 'grey lighten-1'"
              class="mr-4"
              height="160"
              width="300"
              @click="toggle"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <v-scale-transition>
                  <v-icon
                    v-if="active"
                    color="white"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                  ></v-icon>
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h6 font-weight-bold black11--text">
          A seguir
        </h2>
      </v-col>
      <v-col 
        v-for="(event, index) in events" 
        :key="index" 
        cols="12" md="6" lg="4"
      >
        <EventCard :event-data="event" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6" lg="4" align-center>
        <NuxtLink to="/eventos" class="text-decoration-none">
          <div class="d-flex align-center justify-center rounded-pill white--text primary body-2 pa-3">
            Ver a lista completa
          </div>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
  <!-- <v-container>
    <v-row>
      <v-col class="text-center mt-4">
        <h2 class="primary--text">Acompanhe os melhores eventos de BH e região!</h2>
      </v-col>
      <v-col cols="12">
        <EventCategories />
      </v-col>
    </v-row>
  </v-container> -->
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
</template>

<script>
// import EventCategories from "@/components/EventCategories";
import EventCard from "@/components/EventCard.vue";
import CurrentDate from "@/components/CurrentDateHeader.vue";

export default {
  name: 'IndexPage',
  components: {
    CurrentDate,
    EventCard,
    // EventCategories,
  },
  data: () => ({
    model: null,
    events: []
  }),
  async fetch() {
    this.events = await fetch('http://localhost:3001/events/?_limit=12').then((res) =>
      res.json()
    )
  }
}
</script>
