<template>
  <div>
    <v-container class="mt-6">
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="search"
            label="Buscar eventos"
            solo
            :flat="true"
            class="rounded-pill elevation-0"
            color="primary"
            background-color="mediumgray"
            prepend-inner-icon="mdi-magnify"
            @keyup="nameFilter = search"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <EventList :name-filter="nameFilter" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import EventList from '@/components/EventList'

export default {
  name: 'EventPage',
  components: {
    EventList,
  },
  props: {},
  data: () => ({
    search: '',
    nameFilter: '',
    categories: [],
    // subTags: [],
    // subTagsSelected: null,
  }),
  async fetch() {
    this.categories = await fetch(`http://localhost:3001/tags`).then((res) =>
      res.json()
    )
    // this.subTags = await fetch(
    //   `http://localhost:3001/subtags/?tag=${this.$route.params.id}`
    // ).then((res) => res.json());
  },
}
</script>

<style>
.blur-img {
  filter: blur(2px);
}
</style>
