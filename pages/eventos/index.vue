<template>
  <div>
    <v-container class="mt-6">
      <v-row>
        <v-col>
          <h2 class="text-h5 font-weight-bold black11--text">Encontre os melhores rolês da cidade</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
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
          <span>
          </span>
          <v-slide-group>
            <v-slide-item
              v-for="categorie in categories"
              :key="categorie.id"
              v-slot="{ active, toggle }"
            >
              <v-btn
                class="mx-2"
                :input-value="active"
                active-class="primary white--text"
                color="primary"
                :outlined="categorieSelected !== categorie.id"
                rounded
                @click="toggle; categorieSelected = categorie.id"
              >
                {{ categorie.description }}
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <EventList :name-filter="nameFilter" :tag-filter="categorieSelected" />
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
    categorieSelected: null,
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
