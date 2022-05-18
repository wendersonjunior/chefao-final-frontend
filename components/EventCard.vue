<template>
  <v-hover v-slot="{ hover }">
    <NuxtLink :to="`/evento/${eventData.id}`" class="text-decoration-none">
      <v-card
        :class="{ 'card-shadow': hover }"
        class="mx-auto rounded-lg elevation-0"
        height="100%"
      >
        <v-img
          height="135px"
          cover
          :class="{ 'rounded-b-0': hover, 'rounded-lg': !hover }"
          :src="eventData.banner"
        >
        </v-img>
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="d-flex flex-column my-2">
                <span class="body-2 red--text text--darken-1 text-uppercase">
                  {{ $moment(eventData.date).format('ddd, DD MMM') }} -
                  {{ eventData.schedule }}
                </span>
                <span
                  class="text-h6 font-weight-medium grey--text text--darken-2 mt-1"
                >
                  {{ eventData.name }}
                </span>
                <span class="body-2 grey--text text--darken-1 mt-1">
                  {{ eventData.address }}
                </span>
              </div>
              <!-- <v-divider class="my-2"></v-divider> -->
              <!-- <div class="">
                <v-chip
                  v-for="tag in eventData.subtags"
                  :key="tag.id"
                  small
                  color="primary"
                  text-color="primary"
                  class="mr-1 mt-1"
                  outlined
                >
                  #{{ tag.description }}
                </v-chip>
              </div> -->
            </v-col>
            <!-- <v-col cols="3">
              <div class="d-flex flex-column text-center text-uppercase">
                <span
                  class="subtitle-2 font-weight-bold grey--text text--darken-1"
                >
                  {{ $moment(eventData.date).format('ddd') }}
                </span>
                <span class="text-h4 font-weight-black primary--text">
                  {{ $moment(eventData.date).format('DD') }}
                </span>
                <span
                  class="subtitle-2 font-weight-bold grey--text text--darken-1"
                >
                  {{ $moment(eventData.date).format('MMM') }}
                </span>
                <span class="overline grey--text text--darken-1">
                  {{ eventData.schedule }}
                </span>
              </div>
            </v-col>
            <v-col cols="9">
              <span class="text-h5 grey--text text--darken-4">
                {{ eventData.name }}
              </span>
              <div>
                <v-icon color="primary" small>mdi-map-marker</v-icon>
                <span class="body-2 grey--text text--darken-1">
                  {{ eventData.address }}
                </span>
              </div>
            </v-col> -->
          </v-row>
        </v-container>
      </v-card>
    </NuxtLink>
  </v-hover>
</template>

<script>
export default {
  props: {
    eventData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    date() {
      const options = { weekday: 'short', month: 'short', day: 'numeric' }
      const date = new Date(this.eventData.date)

      return date.toLocaleDateString('pt-BR', options)
    },
  },
}
</script>
<style lang="scss" scoped>
.card-shadow {
  transition: all 0.4s ease;
}

.card-shadow:not(.on-hover) {
  box-shadow: 0px 0px 18px 2px #e2e1e1 !important;
}
/* .card-shadow {
  
} */
</style>
