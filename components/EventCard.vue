<template>
  <!-- <v-hover v-slot="{ hover }">
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
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </NuxtLink>
  </v-hover> -->
  <v-hover v-slot="{ hover }">
    <NuxtLink :to="`/evento/${eventData.id}`" class="text-decoration-none">
      <v-card
        :class="{ 'card-shadow': hover }"
        class="mx-auto rounded-lg elevation-0 pa-2"
        height="100%"
        color="mediumgray"
      >
      <div class="d-flex">
        <v-img
          max-height="50"
          max-width="50"
          :src="eventData.banner"
        >
        </v-img>
        <div class="d-flex flex-column justify-center ml-2">
          <h2 class="body-1 black11--text font-weight-medium"> {{ eventData.name }}</h2>
          <span class="caption black09--text"> 
            {{ $moment(eventData.date).format('dddd') }}, 
            {{ $moment(eventData.date).format('LL') }} - {{ eventData.schedule }}
          </span>
        </div>
      </div>
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
}
</script>
<style lang="scss" scoped>
.card-shadow {
  transition: all 0.4s ease;
}
.card-shadow:not(.on-hover) {
  box-shadow: 0px 0px 8px 0px #cecececf !important;
}
</style>
