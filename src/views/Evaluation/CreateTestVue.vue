<template>
  <v-card>
    <v-card-title class="page-title">
      Creation de test

    </v-card-title>
    <v-card-subtitle>
      Choix du cours
      <v-select
          text
          v-model="selectedCourseId"
          :items="Object.values(this.courses)"
          @input="loadClasses()"
          item-text="name"
          item-value="id">
      </v-select>
    </v-card-subtitle>
    <v-card-subtitle>
      Choix de la classe
      <v-select
          text
          no-data-text="Choisissez un cours"
          v-model="selectedClassId"
          :items="Object.values(this.classes)"
          item-text="name"
          item-value="id">
      </v-select>
    </v-card-subtitle>

      <v-grid>
            <v-date-picker  color="teal"  text v-model="selectedDate" :landscape="$vuetify.breakpoint.smAndUp"></v-date-picker>

            <v-time-picker color="teal" v-model="selectedStartTime" :landscape="$vuetify.breakpoint.smAndUp"></v-time-picker>
            <v-time-picker color="teal" v-model="selectedEndTime" :landscape="$vuetify.breakpoint.smAndUp"></v-time-picker>


          <v-textarea
              v-model="testComment"
              label="commentaire">

          </v-textarea>
          <v-btn text color="teal"
                 @click="createTest">
            créer
          </v-btn>
      </v-grid>
  </v-card>
</template>

<script>
import {mapGetters} from "vuex";
import {TestDTO} from "@/gen";

export default {
  name: "createTestVue",
  data: () => ({
    selectedClassId: -1,
    selectedCourseId: -1,
    testComment: "",
    selectedDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    selectedStartTime: null,
    selectedEndTime: null,
  }),
  methods: {
    loadClasses() {
      this.$store.dispatch('actionGetClassesFromCourse', this.selectedCourseId);
    },
    createTest() {
      let testDTO = new TestDTO();
      console.log("ici devrait gîre la creation de test")
      console.log("id cours : " + this.selectedCourseId +
          "id class : " + this.selectedClassId +
          "date et heure début: " + this.selectedDate + " : " + this.selectedStartTime +
          "date et heure début: " + this.selectedDate + " : " + this.selectedEndTime +
          "commentaire : " + this.testComment)
    }
  },
  mounted() {
    this.$store.dispatch('actionGetCourses');
    this.$store.dispatch('actionResetClasses');
  },
  computed: {
    ...mapGetters({
      classes: 'getClasses',
      courses: 'getCourses',
    }),
    filteredData(){
      return this.items.filter(item => item.type === 'test')
    }
  },
}
</script>

<style scoped>

</style>