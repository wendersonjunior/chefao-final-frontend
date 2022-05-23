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
        'http://localhost:3001/events/' + filters
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
    subTagFilter() {
      this.findEvents()
    },
  },
  methods: {
    filterEventsByName(name) {
      if (name) {
        name = name.toUpperCase();
        this.currentEventList = this.currentEventList.filter((event) =>
          event.name.toUpperCase().includes(name)
        )
      }
      this.filterEventsBySubtag(this.subTagFilter)
    },
    filterEventsByTag(tag) {
      if (tag) {
        tag = Number.parseInt(tag);
        this.currentEventList = this.currentEventList.filter(
          (event) => event.tag === tag
        )
      }
      this.filterEventsByName(this.nameFilter)
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
      this.currentEventList = this.eventList
      this.filterEventsByTag(this.tagFilter)
    },
  },
}
</script>

<style></style>
