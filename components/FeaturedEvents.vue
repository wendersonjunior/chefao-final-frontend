<template>
  <v-slide-group>
    <v-slide-item v-for="event in eventList" :key="event.id" class="mr-2 mt-2">
      <EventCard :event-data="event" />
    </v-slide-item>
  </v-slide-group>
</template>

<script>
import EventCard from '@/components/EventCard'
export default {
  name: 'EventList',
  components: {
    EventCard,
  },
  data: () => ({
    eventList: [],
  }),
  async fetch() {
    this.eventList = await fetch(
      'https://api-squad5.herokuapp.com/events?_sort=date,clicked&_order=asc,desc&_limit=6'
    ).then((res) => res.json())
  },
}
</script>

<style></style>
