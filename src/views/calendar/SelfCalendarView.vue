<template>
  <v-card>
      <v-card-title class ="page-title">
        Calendrier personnel
      </v-card-title>
    <calendar class="calendar-div"/>
  </v-card>
</template>
<script>
import Calendar from "@/components/calendar";

export default {
  beforeMount() {
    this.$store.dispatch('actionGetMyCalendar');
  },
  components: {Calendar}
}
</script>