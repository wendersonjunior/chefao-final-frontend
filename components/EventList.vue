<template>
  <v-row>
    <v-col 
      v-for="(event, index) in eventList" 
      :key="index" 
      cols="6" 
      md="4" 
      lg="3"
      xl="2"
    >
      <EventCard :event-data="event"/>
    </v-col>
  </v-row>
</template>

<script>
import EventCard from "@/components/EventCard"
export default {
  name: "EventList",
  components: {
    EventCard,
  },
  props: {
    eventFilters: {
      type: Array,
      required: false,
      default() { return [] }
    }
  },
  data: () => ({
    eventList: [
      {
        id: 1,
        name: "METALLICA",
        banner: "https://www.eventim.com.br/obj/media/BR-eventim/teaser/evo/artwork/2020/metallica2022-artworkbh.png",
        date: "2022-05-16",
        schedule: "12:00",
        address: "Estádio do Mineirão",
        tag: 1,
        subtags: [
          {
            id: 1,
            color: "red darken-4",
            description: "Festas e Shows"
          },
          {
            id: 2,
            color: "teal darken-4",
            description: "Teatros e espetáculos"
          },
          {
            id: 3,
            color: "blue",
            description: "Show"
          },
        ]
      },
      {
        id: 2,
        name: "EXPOSIÇÃO: PLAYMODE",
        banner: "https://www.eventim.com.br/obj/media/BR-eventim/teaser/222x222/2016/eventim-playmode-ccbbbh-222x222.png",
        date: "2022-05-09",
        schedule: "15:00",
        address: "Centro Cultural Banco do Brasil",
        tag: 2,
        subtags: [
          {
            id: 4,
            color: "pink",
            description: "Lazer"
          },
          {
            id: 5,
            color: "black",
            description: "Museu"
          },
          {
            id: 6,
            color: "brown",
            description: "Exposição"
          },
        ]
      }
    ],
  })
}
</script>

<style>

</style>