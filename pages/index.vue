<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Hoje vamos de...</h2>
      </v-col>
      <v-col cols="12">
        <EventFilters />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EventFilters from "@/components/EventFilters";

export default {
  name: 'IndexPage',
  components: {
    EventFilters,
  }
}
</script>
