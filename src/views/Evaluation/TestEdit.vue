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
    <v-container>
      choix du test
      <v-select
          ref="testSelect"
          :items="Object.values(this.tests).filter(item => item.courseId === this.selectedCourseId)"
          v-model="selectedTest"
          item-text="testName"
          item-value="testId"
          @input="setHide();"
          no-data-text="Choisissez un cours">
      </v-select>
    </v-container>
    <v-spacer></v-spacer>
    <v-container v-if="hide"
                 v-for="item in Object.values(this.tests).filter(item => item.courseId === this.selectedCourseId && item.testId === this.selectedTest)"
                 :key="item.id">
      <v-subheader>{{ item.testName }}</v-subheader>
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-left">
              élève
            </th>
            <th style="width:100px;">
              note
            </th>
            <th/>
          </tr>
        </thead>
        <tbody>
          <tr
              v-for="student in Object.values(item.students)"
              :key="student.id">
            <td>
              {{ student.name }}
            </td>
            <td>
              <v-spacer></v-spacer>
              <v-select
                type="number"
                value="student.testValue"
                dense
                v-model="student.testValue"
                :items="markValues">
              </v-select>
              <v-spacer></v-spacer>
            </td>
            <td>
              <v-btn text
                     color="teal lighten-1"
                     @click="note(student.id, selectedTest, student.testValue)">
                modifier
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-container>
  </v-card>
</template>

<script>
import {mapGetters} from "vuex";
import {MarkDTO} from "@/gen";

export default {
  name: "testEdit",
  data: () => ({
    selectedCourseId: -1,
    selectedMarkValue: -1,
    selectedTest: -1,
    markValues: [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0],
    hide: false,
  }),
  mounted() {
    this.$store.dispatch('actionGetCourses');
  },
  methods: {
    loadStudents() {
      this.$store.dispatch('actionGetTests', this.selectedCourseId);
      this.hide = false;
    },
    note(idStudent, idTest, value) {
      let markDTO = new MarkDTO();
      markDTO.testId = idTest;
      markDTO.studentId = idStudent;
      markDTO.value = value;
      this.$store.dispatch('actionNoteTest', markDTO);
    },
    setHide() {
      this.$store.dispatch('actionGetTests', this.selectedCourseId);
      this.hide = true;
    }
  },
  computed: {
    ...mapGetters({
      courses: 'getCourses',
      tests: 'getTestsInfos'
    })
  }
}
</script>

<style scoped>

</style>