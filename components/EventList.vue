<template>
  <v-row>
    <v-col
      v-for="event in currentEventList"
      :key="event.id"
      cols="12"
      sm="6"
      md="4"
      lg="3"
      xl="2"
    >
      <EventCard :event-data="event" />
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
      type: String,
      required: true,
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
  },
  data: () => ({
    eventList: [],
    currentEventList: [],
    tagList: [],
  }),
  async fetch() {
    this.eventList = await fetch(
      `http://localhost:3001/events/?tag=${this.tagFilter}`
    ).then((res) => res.json())
    this.currentEventList = this.eventList
  },
  watch: {
    nameFilter() {
      this.findEvents()
    },
    subTagFilter() {
      this.findEvents()
    },
  },
  methods: {
    filterEventsByName(name) {
      name = name.toUpperCase()
      if (name) {
        this.currentEventList = this.eventList.filter((event) =>
          event.name.toUpperCase().includes(name)
        )
      } else {
        this.currentEventList = this.eventList
      }
      if (this.subTagFilter) {
        this.filterEventsBySubtag(this.subTagFilter)
      }
    },
    filterEventsBySubtag(subTag) {
      if (subTag) {
        this.currentEventList = this.currentEventList.filter(
          (event) =>
            event.subtags.find((element) => element.id === subTag) !== undefined
        )
      }
    },
    findEvents() {
      this.filterEventsByName(this.nameFilter)
    },
  },
}
</script>

<style></style>
