<template>
  <div>
    <div class="black header">
      <div class="sub-banner" :style="{'background-image': 'url('+event.banner+')'}"></div>
      <div class="position-banner-header">
        <div class="banner-header" :style="{'background-image': 'url('+event.banner+')'}"></div>
      </div>
    </div>
    <v-container class="mt-16 pt-8">
      <v-row>
        <v-col cols="12">
          <span class="text-h4 font-weight-black grey--text text--darken-4">
            {{ event.name }}
          </span>
          <div class="d-flex align-center grey--text font-weight-medium text--darken-4 mt-4 body-1">
            <v-icon class="mr-2">mdi-calendar</v-icon>
            <span class="text-uppercase">{{ $moment(event.date).format('LLLL') }}</span>
          </div>
          <div class="d-flex align-center grey--text font-weight-medium text--darken-4 mt-2 body-1">
            <v-icon class="mr-2">mdi-map-marker</v-icon>
            <span>{{ event.completeAddress }}</span>
          </div>
        </v-col>
      </v-row>
      <v-divider class="my-8"></v-divider>
      <v-row>
        <v-col cols="12">
          <span class="body-1 grey--text text--darken-4">SOBRE O EVENTO</span>
        </v-col>
        <v-col cols="12">
          {{ event.description }}
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
  }),
  async fetch() {
    this.event = await fetch(`http://localhost:3001/events/${this.$route.params.id}`).then((res) =>
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
      filter: blur(8px);
    }

    .position-banner-header {
      position: absolute;
      bottom: -75px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .banner-header {
        background-size: cover;
        max-width: 720px;
        width: 100%;
        height: 350px;
        background-position: center;
        border-radius: 24px;
      }
    }
  }
</style>
