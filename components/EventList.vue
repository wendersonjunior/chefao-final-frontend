<template>
  <v-row>
    <v-col
      v-for="event in currentEventList"
      :key="event.id"
      cols="12"
      sm="6"
      lg="4"
      xl="3"
    >
      <EventCard :event-data="event" />
    </v-col>
    <v-col v-if="currentEventList.length === 0" class="text-center">
      <p class="mt-4 body-1 black11--text font-weight-bold">
        Não encontramos resultados para o filtro selecionado.
      </p>
    </v-col>
  </v-row>
</template>

<script>
import EventCard from '@/components/EventCard'
export default {
  name: 'EventList',
  components: {
    EventCard,
  },
  props: {
    tagFilter: {
      type: Number,
      required: false,
      default: null,
    },
    subTagFilter: {
      type: Number,
      required: false,
      default: null,
    },
    nameFilter: {
      type: String,
      required: false,
      default: '',
    },
    producerFilter: {
      type: String,
      required: false,
      default: '',
    },
    dateFilter: {
      type: String,
      required: false,
      default: '',
    },
    valueFilter: {
      type: Number,
      required: false,
      default: null,
    },
    requiredProducerId: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: () => ({
    eventList: [],
    currentEventList: [],
    tagList: [],
  }),
  async fetch() {
    let filters = ''
    if (this.tagFilter) {
      filters = `?tag=${this.tagFilter}`
    }
    if (this.producerFilter) {
      filters = `?producer=${this.producerFilter}`
    }

    if (this.requiredProducerId && !this.producerFilter) {
      return
    } else {
      this.eventList = await fetch(
        'https://api-squad5.herokuapp.com/events/' + filters
      ).then((res) => res.json())
    }
    this.currentEventList = this.eventList
  },
  watch: {
    nameFilter() {
      this.findEvents()
    },
    tagFilter() {
      this.findEvents()
    },
    dateFilter() {
      this.findEvents()
    },
    valueFilter() {
      this.findEvents()
    },
  },
  methods: {
    filterByDate(date) {
      if (date) {
        this.currentEventList = this.currentEventList.filter((event) =>
          event.date.includes(date)
        )
      }
      this.filterEventsByTag(this.tagFilter)
    },
    filterEventsByTag(tag) {
      if (tag) {
        tag = Number.parseInt(tag)
        this.currentEventList = this.currentEventList.filter(
          (event) => event.tag === tag
        )
      }
      this.filterEventsByName(this.nameFilter)
    },
    filterEventsByName(name) {
      if (name) {
        name = name.toUpperCase()
        this.currentEventList = this.currentEventList.filter((event) =>
          event.name.toUpperCase().includes(name)
        )
      }
      this.filterByValue(this.valueFilter)
    },
    filterByValue(value) {
      if (value) {
        this.currentEventList = this.currentEventList.filter(
          (event) => event.ticketPrice <= value
        )
      }
    },
    findEvents() {
      this.currentEventList = this.eventList
      this.filterByDate(this.dateFilter)
    },
  },
}
</script>

<style></style>
