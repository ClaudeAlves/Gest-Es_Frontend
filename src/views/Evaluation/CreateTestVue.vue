<template>
  <v-card>
    <v-card-title class="page-title">
      Creation de test

    </v-card-title>
    <v-container>
      Choix du cours
      <v-select
          text
          v-model="selectedCourseId"
          :items="Object.values(this.courses)"
          @input="loadClasses()"
          item-text="name"
          item-value="id">
      </v-select>
    </v-container>
    <v-spacer></v-spacer>
    <!--v-container>
      Choix de la classe
      <v-select
          text
          no-data-text="Choisissez un cours"
          v-model="selectedClassId"
          :items="Object.values(this.classes)"
          item-text="name"
          item-value="id">
      </v-select>
    </v-container-->

      <v-container>
        <v-container>
          <v-flex xs12 sm6 md4>
            <v-menu
                v-model="menuDate"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                    v-model="selectedDate"
                    label="Sélectionner la date"
                    readonly
                    v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker color="teal lighten-3" v-model="selectedDate" @input="menuDate = false"></v-date-picker>
            </v-menu>
          </v-flex>
        </v-container>
        <v-container>
          <v-flex xs11 sm5>
            <v-dialog
                ref="dialog"
                v-model="menuTimeStart"
                :return-value.sync="selectedStartTime"
                persistent
                width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                    v-model="selectedStartTime"
                    label="Sélectionner le début du test"
                    readonly
                    v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                  v-if="menuTimeStart"
                  v-model="selectedStartTime"
                  full-width
                  color="teal lighten-3"
                  format="24hr"
              >
                <v-spacer></v-spacer>
                <v-btn color="teal lighten-3" @click="menuTimeStart = false">Cancel</v-btn>
                <v-btn color="teal lighten-3" @click="$refs.dialog.save(selectedStartTime)">OK</v-btn>
              </v-time-picker>
            </v-dialog>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs11 sm5>
            <v-dialog
                ref="dialogEnd"
                v-model="menuTimeEnd"
                :return-value.sync="selectedEndTime"
                persistent
                width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                    v-model="selectedEndTime"
                    label="Sélectionner la fin du test"
                    readonly
                    v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                  v-if="menuTimeEnd"
                  v-model="selectedEndTime"
                  full-width
                  color="teal lighten-3"
                  format="24hr"
              >
                <v-spacer></v-spacer>
                <v-btn color="teal lighten-3" @click="menuTimeEnd = false">Cancel</v-btn>
                <v-btn color="teal lighten-3" @click="$refs.dialogEnd.save(selectedEndTime)">OK</v-btn>
              </v-time-picker>
            </v-dialog>
          </v-flex>
        </v-container>
        <v-spacer></v-spacer>
        <v-container>
          <v-textarea
              v-model="testComment"
              label="commentaire">
          </v-textarea>
        </v-container>

        <v-row justify="center">
          <v-dialog
              v-model="dialog"
              persistent
              max-width="450"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="teal lighten-1"
                  v-bind="attrs"
                  v-on="on"
              >
                Créer
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5">
                Êtes vous sûr de vouloir créer le test?
              </v-card-title>
              <v-card-text>
                date : {{ this.selectedDate}}<br/>
                heure de début : {{ this.selectedStartTime}}<br/>
                heure de fin : {{ this.selectedEndTime}}<br/>
                commentaire : {{ this.testComment}}<br/>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="teal darken-1"
                    text
                    @click="dialog = false"
                >
                  Disagree
                </v-btn>
                <v-btn
                    color="teal darken-1"
                    text
                    @click="createTest"
                >
                  Agree
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-container>
  </v-card>
</template>

<script>
import {mapGetters} from "vuex";
import {TestDTO} from "@/gen";
import EventsUtils from "@/utils/EventsUtils";
import Notifications from "@/utils/Notifications";

export default {
  name: "createTestVue",
  data: () => ({
    selectedClassId: -1,
    selectedCourseId: -1,
    testComment: "",
    selectedDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    selectedStartTime: null,
    selectedEndTime: null,
    dialog: false,
    menuDate: false,
    menuTimeStart: false,
    menuTimeEnd: false,
  }),
  methods: {
    loadClasses() {
      this.$store.dispatch('actionGetClassesFromCourse', this.selectedCourseId);
    },
    createTest() {

      if(this.selectedCourseId !== -1 &&
          //this.selectedClassId !== -1 &&
          this.selectedStartTime !== null &&
          this.selectedEndTime !== null
          ) {
        if(EventsUtils.areTimesValid(this.selectedStartTime, this.selectedEndTime)) {
          let testDTO = new TestDTO();
          testDTO.text = this.testComment;
          //testDTO.classId = this.selectedClassId;
          testDTO.courseId = this.selectedCourseId;
          testDTO.start = new Date(EventsUtils.formatDateToBackend(this.selectedDate, this.selectedStartTime))
          testDTO.end = new Date(EventsUtils.formatDateToBackend(this.selectedDate, this.selectedEndTime))
          this.$store.dispatch("actionCreateTest", testDTO)
        } else {
          Notifications.error("Erreur Dates", "Date de fin avant date de début")
        }
      } else {
        Notifications.error("Contenu du test incomplet", "Veuillez entrer tous les champs")
      }

      this.dialog = false;
    },
    returnClass() {
      return (this.classes).map(aClass => aClass.idClass).indexOf(this.selectedClassId);
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