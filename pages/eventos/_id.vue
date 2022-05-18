<template>
  <div>
    <v-container class="mt-6">
      <v-row>
        <v-col cols="12">
          <h2 class="primary--text">{{ categorie.description }}</h2>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="search"
            label="Pesquisar"
            solo
            prepend-inner-icon="mdi-magnify"
            @keyup="nameFilter = search"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-select
            v-model="subTagsSelected"
            :items="subTags"
            item-text="description"
            item-value="id"
            label="Categorias"
            solo
            clearable
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <EventList
            :tag-filter="$route.params.id"
            :name-filter="nameFilter"
            :sub-tag-filter="subTagsSelected"
          />
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
    categorie: {},
    subTags: [],
    subTagsSelected: null,
  }),
  async fetch() {
    this.categorie = await fetch(
      `http://localhost:3001/tags/${this.$route.params.id}?name_like=${this.search}`
    ).then((res) => res.json())
    this.subTags = await fetch(
      `http://localhost:3001/subtags/?tag=${this.$route.params.id}`
    ).then((res) => res.json())
  },
}
</script>

<style>
.blur-img {
  filter: blur(2px);
}
</style>
