<template>
  <div>
    <div class="black header">
      <div class="sub-banner" :style="{'background-image': 'url('+event.banner+')'}"></div>
      <div class="position-banner-header">
        <div class="banner-header white--text pb-3 d-flex flex-column justify-space-between">
          <v-container>
            <v-row>
              <v-col>
                <NuxtLink to="/eventos" class="text-decoration-none">
                  <v-icon color="primary" class="mediumgray rounded-lg pa-3">
                    mdi-close
                  </v-icon>
                </NuxtLink>
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <v-row>
              <v-col>
                <span class="body-2">
                  {{ $moment(event.date).format('LLLL') }}
                </span>
                <h1 class="text-h5 font-weight-bold"> {{ event.name }} </h1>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </div>
    <v-container class="mt-4">
      <v-fab-transition>
        <v-btn
          color="primary"
          fab
          large
          dark
          bottom
          fixed
          right
          @click="buyTickets = !buyTickets"
        >
          <v-icon large>mdi-ticket-confirmation-outline</v-icon>
        </v-btn>
      </v-fab-transition>
      <v-bottom-sheet v-model="buyTickets">
        <v-sheet
          height="200px"
        >
          <v-container>
            <v-row>
              <v-col v-for="(ticket, index) in event.tickets" :key="index" cols="12">
                <v-card
                  v-if="ticket.platform === 'Sympla'"
                  class="mx-auto rounded-lg elevation-0 pa-2 d-flex justify-space-between align-center"
                  height="100%"
                  color="mediumgray"
                >
                  <div class="d-flex">
                    <v-img
                      max-height="50"
                      max-width="50"
                      src="/sympla-logo.png"
                      class="rounded-lg"
                    >
                    </v-img>
                    <div class="d-flex flex-column justify-center ml-2">
                      <h2 class="body-1 black11--text font-weight-medium">Sympla</h2>
                      <span v-if="event.ticketPrice != 0" class="caption black09--text"> 
                        A partir de R$ {{ event.ticketPrice }}
                      </span>
                      <span v-else class="caption black09--text">
                        Gratuito
                      </span>
                    </div>
                  </div>
                  <v-btn color="primary" small class="rounded-pill" :href="ticket.url">
                    COMPRAR
                  </v-btn>
                </v-card>
                <v-card
                  v-if="ticket.platform === 'Eventim'"
                  class="mx-auto rounded-lg elevation-0 pa-2 d-flex justify-space-between align-center"
                  height="100%"
                  color="mediumgray"
                >
                  <div class="d-flex">
                    <v-img
                      max-height="50"
                      max-width="50"
                      src="/eventim-logo.png"
                      class="rounded-lg"
                    >
                    </v-img>
                    <div class="d-flex flex-column justify-center ml-2">
                      <h2 class="body-1 black11--text font-weight-medium">Eventim</h2>
                      <span v-if="event.ticketPrice != 0" class="caption black09--text"> 
                        A partir de R$ {{ event.ticketPrice }}
                      </span>
                      <span v-else class="caption black09--text">
                        Gratuito
                      </span>
                    </div>
                  </div>
                  <v-btn color="primary" small class="rounded-pill" :href="ticket.url">
                    COMPRAR
                  </v-btn>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-bottom-sheet>
      <v-row>
        <v-col cols="12">
          <div class="d-flex align-center grey--text font-weight-medium text--darken-4 mt-2 body-1">
            <v-icon class="mr-2" color="primary">mdi-map-marker</v-icon>
            <span>{{ event.completeAddress }}</span>
          </div>
        </v-col>
        <v-col cols="12" class="mb-16">
          <span class="text-h6 font-weight-bold">SOBRE</span>
          <p class="mt-1">
            {{ event.description }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'EventDetailsPage',
  props: {},
  data: () => ({
    event: {},
    buyTickets: false,
  }),
  async fetch() {
    this.event = await fetch(`https://api-squad5.herokuapp.com/events/${this.$route.params.id}`).then((res) =>
      res.json()
    );
  },
}
</script>

<style scoped lang="scss">
  .header {
    height: 300px;
    position: relative;
    width: 100%;

    .sub-banner {
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      box-shadow: inset 0px -130px 100px 0px #000000b0;
    }

    .position-banner-header {
      position: absolute;
      bottom: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .banner-header {
        height: 300px;
        width: 100%;
      }
    }
  }
</style>
