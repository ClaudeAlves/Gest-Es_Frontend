<!-- Page to create a test -->
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
          item-text="name"
          item-value="id">
      </v-select>
    </v-container>
    <v-spacer></v-spacer>

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
                <v-btn color="teal lighten-3" @click="menuTimeStart = false">Annuler</v-btn>
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
                  color="teal lighten-3"
                  format="24hr"
              >
                <v-spacer></v-spacer>
                <v-btn color="teal lighten-3" @click="menuTimeEnd = false">Annuler</v-btn>
                <v-btn color="teal lighten-3" @click="$refs.dialogEnd.save(selectedEndTime)">OK</v-btn>
              </v-time-picker>
            </v-dialog>
          </v-flex>
        </v-container>
        <v-spacer></v-spacer>
        <v-container>
          <v-text-field
              v-model="inputtedTestWeighting"
              hide-details
              single-line
              label="Pondération en pourcent"
              type="number"
          />
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
                  text
                  v-bind="attrs"
                  v-on="on"
              >
                Créer
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h6">
                Êtes vous sûr de vouloir créer le test?
              </v-card-title>
              <v-card-text>
                Date : {{ this.selectedDate }}<br/>
                Heure de début : {{ this.selectedStartTime }}<br/>
                Heure de fin : {{ this.selectedEndTime }}<br/>
                Commentaire : {{ this.testComment }}<br/>
                Pondération : {{ this.inputtedTestWeighting }}
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="teal lighten-1"
                    text
                    @click="dialog = false"
                >
                  Annuler
                </v-btn>
                <v-btn
                    color="teal lighten-1"
                    text
                    @click="createTest"
                >
                  Créer
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
    selectedCourseId: -1,
    testComment: "",
    selectedDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    selectedStartTime: null,
    selectedEndTime: null,
    inputtedTestWeighting: null,
    dialog: false,
    menuDate: false,
    menuTimeStart: false,
    menuTimeEnd: false,
  }),
  methods: {
    createTest() {

      if(this.selectedCourseId !== -1 &&
          this.selectedStartTime !== null &&
          this.selectedEndTime !== null &&
          this.inputtedTestWeighting !== null
          ) {
        if(EventsUtils.areTimesValid(this.selectedStartTime, this.selectedEndTime)) {
          let testDTO = new TestDTO();
          testDTO.text = this.testComment;
          testDTO.courseId = this.selectedCourseId;
          testDTO.start = new Date(EventsUtils.formatDateToBackend(this.selectedDate, this.selectedStartTime));
          testDTO.end = new Date(EventsUtils.formatDateToBackend(this.selectedDate, this.selectedEndTime));
          testDTO.weighting = this.inputtedTestWeighting/100;
          this.$store.dispatch("actionCreateTest", testDTO)
        } else {
          Notifications.error("Erreur Dates", "Date de fin avant date de début")
        }
      } else {
        Notifications.error("Contenu du test incomplet", "Veuillez remplir tous les champs")
      }

      this.dialog = false;
    }
  },
  mounted() {
    this.$store.dispatch('actionGetCourses');
  },
  computed: {
    ...mapGetters({
      courses: 'getCourses',
    })
  },
}
</script>

<style scoped>

</style>