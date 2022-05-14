<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <EventFilters />
    </v-col>
    <!-- <v-col cols="12">
      <EventList />
    </v-col> -->
  </v-row>
</template>

<script>
import EventFilters from "@/components/EventFilters";
// import EventList from "@/components/EventList";

export default {
  name: 'IndexPage',
  components: {
    EventFilters,
    // EventList,
  }
}
</script>
