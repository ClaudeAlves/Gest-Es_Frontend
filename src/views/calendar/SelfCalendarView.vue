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
import {mapGetters} from "vuex";

export default {
  /*
  data() {
    return {
      events: [],
     }
  },
  watch() {

  },*/
  beforeMount() {
    this.$store.dispatch('actionGetMyCalendar');
    /*
    this.$store.state.calendar.data.Events

    console.log("OOOOOOOOOOOOOO")
    this.$store.dispatch('actionGetMyCalendar').then(this.$nextTick).then(() => {
      this.events = this.$store.getters.getMyCalendarEvents
      console.log("NNNNNNNNNNNNNN")
    })*/

  },
  mounted() {
    //this.$store.dispatch('actionCalendarNotDisplayable')
  },
  components: {Calendar}
}
</script>