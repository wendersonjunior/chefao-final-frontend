<template>
  <v-card
    class="mx-auto rounded-lg elevation-4"
  >
    <v-img
      height="100px"
      :src="eventData.banner"
    >
    </v-img>

    <v-card-subtitle class="caption text-uppercase pb-2">
      {{ formattedDate }} - {{ eventData.schedule }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <h3 class="mb-2">{{ eventData.name }} - {{ eventData.address }}</h3>
      <v-chip 
        v-for="tag in eventData.subtags" 
        :key="tag.id" 
        small 
        :color="tag.color" 
        text-color="white" 
        class="mr-2 mt-2"
      >
        {{ tag.description }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    eventData: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedDate() {
      const options = { weekday: 'short', month: 'short', day: 'numeric' };
      const date = new Date(this.eventData.date);
      
      return date.toLocaleDateString("pt-BR", options)
    }
  }
}
</script>