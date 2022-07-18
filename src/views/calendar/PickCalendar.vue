<template>
  <v-card>
    <v-card-title class ="page-title">
      Horaires
    </v-card-title>
    <v-card-subtitle>
      <v-select
          text
          v-model="selectId"
          :items="Object.values(this.classes)"
          @input="loadCalendarSelect()"
          item-text="name"
          item-value="id">
      </v-select>
    </v-card-subtitle>
      <calendar></calendar>
  </v-card>
</template>

<script>
import calendar from "@/components/calendar";
import {mapGetters} from "vuex";

export default {
  name: "pickCalendarVue",
  data: () => ({
    items: [],
    selectId: -1,
  }),
  methods: {
    loadCalendarSelect() {
      console.log(this.selectId)
      this.$store.dispatch('actionGetClassCalendar', this.selectId);
    }
  },
  mounted() {
    this.$store.dispatch('actionGetClasses')
  },
  computed: {
    ...mapGetters({
        classes: 'getClasses',
    }),
  },

  components: {calendar}
}
</script>


<style scoped>

</style>