<template>
  <div>
    <div class="wrap">
      <h1 class ="page-title">
        Calendrier personnel
      </h1>
    </div>
    <calendar v-if=this.$store.getters.isCalendarDisplayable class="calendar-div"/>
  </div>
</template>
<script>
import Calendar from "@/components/calendar";
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
  components: {Calendar}
}
</script>