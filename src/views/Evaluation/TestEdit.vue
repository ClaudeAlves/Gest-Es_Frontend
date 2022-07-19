<template>
  <v-card>
    <v-card-title class="page-title">
      Modification de tests

    </v-card-title>
    <v-container>
      Choix du cours
      <v-select
          ref="courseSelect"
          text
          mandatory
          v-model="selectedCourseId"
          :items="Object.values(this.courses)"
          @click="loadStudents()"
          item-text="name"
          item-value="id">
      </v-select>
    </v-container>
    <v-spacer></v-spacer>
    <v-container
        v-for="item in Object.entries(tests).filter(([key, value]) => value.courseId === selectedCourseId).map(([key, value]) => [value.testName, value.testId])" >
      {{ item[0] }}
      <v-container class="flex"
      v-for="item in Object.entries(tests).filter(([key, value]) => value.courseId === selectedCourseId).map(([key, value]) => value.students)[0]">
        {{ item.name }}

      </v-container>
    </v-container>
    <v-container>
      <!--v-container>
        {{ selectedCourseId }}
      </v-container>
      <v-container>
        {{ Object.entries(tests).filter(([key, value]) => value.courseId === selectedCourseId) }}
      </v-container>
      <v-container>
        {{ Object.entries(tests)}}
      </v-container>
      <v-container>
        {{ Object.entries(tests).map(([key, value]) => value.students) }}
      </v-container>
      <v-container>
        {{ Object.entries(tests).filter(([key, value]) => value.courseId === selectedCourseId).map(([key, value]) => value.students)[0] }}
      </v-container-->




    </v-container>
  </v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "testEdit",
  data: () => ({
    selectedCourseId: -1,
  }),
  mounted() {
    this.$store.dispatch('actionGetCourses');
  },
  methods: {
    loadStudents() {
      this.$store.dispatch('actionGetTests', this.selectedCourseId);
    }
  },
  computed: {
    ...mapGetters({
      classes: 'getClasses',
      courses: 'getCourses',
      tests: 'getTestsInfos'
    })
  }
}
</script>

<style scoped>

</style>