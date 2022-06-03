<template>
  <v-container>
    <v-row class="my-4">
      <v-col>
        <CurrentDate />
      </v-col>
      <v-col class="d-flex align-center justify-end">
        <NuxtLink to="/produtor/autenticacao" class="text-decoration-none">
          <v-btn
            outlined
            color="primary"
            large
            class="text-lowercase rounded-pill body-1"
          >
            Sou produtor(a)
          </v-btn>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <NuxtLink to="/eventos" class="text-decoration-none">
          <div
            class="d-flex align-center justify-center rounded-pill black11--text mediumgray body-2 pa-3"
          >
            <v-icon left color="primary"> mdi-magnify </v-icon>
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
            v-for="(featureEvent, index) in featureEvents"
            :key="index"
            v-slot="{ active }"
          >
            <NuxtLink
              :to="`/evento/${featureEvent.id}`"
              class="text-decoration-none"
            >
              <v-card
                :color="active ? undefined : 'grey lighten-1'"
                class="mr-4"
                height="160"
                width="300"
              >
                <v-img :src="featureEvent.banner" contain></v-img>
              </v-card>
            </NuxtLink>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h6 font-weight-bold black11--text">A seguir</h2>
      </v-col>
      <v-col
        v-for="(event, index) in events"
        :key="index"
        cols="12"
        md="6"
        lg="4"
      >
        <EventCard :event-data="event" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6" lg="4" align-center>
        <NuxtLink to="/eventos" class="text-decoration-none">
          <div
            class="d-flex align-center justify-center rounded-pill white--text primary body-2 pa-3"
          >
            Ver a lista completa
          </div>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import CurrentDate from '@/components/CurrentDateHeader.vue'

export default {
  name: 'IndexPage',
  components: {
    CurrentDate,
    EventCard,
  },
  data: () => ({
    model: null,
    events: [],
    featureEvents: [],
  }),
  async fetch() {
    this.events = await fetch('https://api-squad5.herokuapp.com/events?_limit=12').then(
      (res) => res.json()
    )
    this.featureEvents = await fetch(
      'https://api-squad5.herokuapp.com/events?_sort=clicked&_order=desc&_limit=5'
    ).then((res) => res.json())
  },
}
</script>
