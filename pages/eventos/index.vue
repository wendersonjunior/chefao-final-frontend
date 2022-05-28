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
            append-icon="mdi-tune"
            @click:append="dialog = true"
            @keyup="nameFilter = search"
          >
          </v-text-field>
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
                @click="toggle; setCategorie(categorie.id)"
              >
                {{ categorie.description }}
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </v-col>
        <v-col cols="12">
          <div class="secondary pa-4 rounded-xl">
            <h2 class="text-h6 font-weight-bold white--text">Bombando 🔥</h2>
            <FeaturedEvents />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <EventList 
            :name-filter="nameFilter" 
            :tag-filter="categorieSelected"
            :date-filter="date"
            :value-filter="ticketValue"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card class="white">
        <v-container>
          <v-row>
            <v-col>
              <div class="d-flex align-center justify-space-between">
                <v-icon color="primary" @click="dialog = false">mdi-close</v-icon>
                <span class="black11--text font-weight-bold text-h5">
                  Filtrar eventos
                </span>
                <span
                  class="primary--text body-1 mt-1"
                  @click="clear"
                >
                  Limpar
                </span>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <span class="text-h6 font-weight-bold black11--text">Por tipo</span>
              <v-item-group>
                <v-item 
                  v-for="categorie in categories"
                  :key="categorie.id"
                  v-slot="{ active, toggle }"
                >
                  <v-chip
                    class="mr-3 mt-4 pa-5 rounded-pill body-1"
                    :input-value="active"
                    active-class="primary white--text"
                    color="primary"
                    :outlined="categorieSelected !== categorie.id"
                    rounded
                    @click="toggle; setCategorie(categorie.id)"
                  >
                    {{ categorie.description }}
                  </v-chip>
                </v-item>
              </v-item-group>
            </v-col>
            <v-col cols="8" class="mt-4">
              <span class="text-h6 font-weight-bold black11--text">Por data</span>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    class="rounded-lg mt-4"
                    outlined
                    color="primary"
                    label="Escolha uma data"
                    append-icon="mdi-calendar-week-begin-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  scrollable
                  color="primary"
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.menu.save(date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12">
              <span class="text-h6 font-weight-bold black11--text">Por preço</span>
              <div class="d-flex justify-space-between">
                <v-subheader class="pl-0">
                  Gratuito
                </v-subheader>
                <v-subheader class="pl-0">
                  + de R$500,00
                </v-subheader>
              </div>
              <v-slider
                v-model="ticketValue"
                :max="max"
                :min="min"
                thumb-label="always"
                :thumb-size="28"
                class="mt-6"
                color="primary"
              ></v-slider>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div
                class="
                  d-flex
                  align-center
                  justify-center
                  rounded-pill
                  white--text
                  primary
                  body-2
                  pa-3
                "
                @click="dialog = false"
              >
                Aplicar filtros
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import EventList from '@/components/EventList'
import FeaturedEvents from '@/components/FeaturedEvents'

export default {
  name: 'EventPage',
  components: {
    EventList,
    FeaturedEvents
  },
  props: {},
  data: () => ({
    search: '',
    nameFilter: '',
    categories: [],
    menu: false,
    date: "",
    min: 0,
    max: 500,
    ticketValue: null,
    categorieSelected: null,
    dialog: false,
  }),
  async fetch() {
    this.categories = await fetch(`http://localhost:3001/tags`).then((res) =>
      res.json()
    )
  },
  methods: {
    setCategorie(id) {
      if (this.categorieSelected === id) {
        this.categorieSelected = null;
      } else {
        this.categorieSelected = id;
      }
    },
    clear() {
      this.nameFilter = "";
      this.categorieSelected = null;
      this.date = "";
      this.ticketValue = null;
    }
  }
}
</script>

<style>
.blur-img {
  filter: blur(2px);
}
</style>
