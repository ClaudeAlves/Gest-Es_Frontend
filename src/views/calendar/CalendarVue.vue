<template>
  <v-card>
    <v-card-title class="page-title">

    </v-card-title>

  </v-card>
  <div class="calendar-div">
    <h1 class ="page-title">
      {{ this.title }}
    </h1>
    <calendar v-if=this.$store.getters.isCalendarDisplayable class="calendar-div"/>
  </div>
</template>

<script>
import calendar from "@/components/calendar";

export default {
  props: {
    id: {required: true}
  },
  beforeMount() {
    //this.$store.dispatch('actionGetClassCalendar', id);
  },
  mounted() {
    //this.$store.dispatch('actionCalendarNotDisplayable')
  },
  components: {calendar}
}
</script>