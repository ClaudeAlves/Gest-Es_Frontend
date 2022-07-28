<!-- Page to look the marks of students -->
<template>
  <v-card class="margin: 0 auto">
    <v-card-title class="page-title">
      {{ this.title }}
    </v-card-title>
    <v-container class="align-center">
      choix de la classe
      <v-select
          text
          v-model="selectedIdClass"
          :items="Object.values(this.classes)"
          @input="loadModules()"
          item-text="name"
          item-value="id">
      </v-select>
      <v-btn
          color="teal lighten-1"
          text
          width="wide"
          @click="setMode()">
        {{ this.moduleModeButton }}
      </v-btn>
    </v-container>
    <v-container v-if="this.moduleMode">
      choix du module
      <v-select
          ref="moduleSelect"
          text
          mandatory
          v-model="selectedModuleId"
          :items="Object.values(this.modules)"
          @input="loadModuleInfos()"
          item-text="name"
          item-value="id">
      </v-select>
    </v-container>
    <v-container>
      <!-- TABLE SYNTHESIS VIEW -->
      <v-simple-table v-if="!this.moduleMode">
        <thead>
          <tr>
            <th></th>
            <th v-for="module in this.synthesis.modules">
              {{ module }}
            </th>
            <th>
              moyenne globale
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="studentMarks in this.synthesis.studentMarks">
            <th class="teal--text">
              {{ studentMarks.studentName }}
            </th>
            <th v-for="mark in studentMarks.marks">
              {{ mark.mean + " - " + mark.marksUnderMean }}
            </th>
            <th v-if="studentMarks.globalMean < 4"
                class="red--text">
              {{ studentMarks.globalMean }}
            </th>
            <th v-else-if="isNaN(studentMarks.globalMean)">
              -
            </th>
            <th v-else>
              {{ studentMarks.globalMean }}
            </th>
          </tr>
        </tbody>
      </v-simple-table>
      <!-- TABLE MODULE VIEW -->
      <v-simple-table v-if="this.moduleMode">
          <thead>
          <tr>
            <th></th>
            <th v-for="subject in this.moduleInfos.subjects" :colspan="subject.marksNumber">
              {{ subject.subjectName }}
            </th>
          </tr>
          <tr>
            <th class="">
              élève
            </th>
            <th v-for="test in this.moduleInfos.tests">
              {{ test.testName }}<br>
              {{test.date}}
            </th>
            <th>
              moyenne pondérée
            </th>
            <th>
              notes < 4
            </th>
          </tr>
          </thead>

        <tbody>
          <tr v-for="item in this.moduleInfos.marks">
            <th class="teal--text"> {{ item.studentName }}</th>
            <template v-for="mark in item.marks">
              <th v-if="isNaN(mark) || mark === null || mark === 0">
                -
              </th>
              <th v-else-if="mark >= 4">
                {{ mark }}
              </th>
              <th v-else
                class="red--text">
                {{ mark }}
              </th>
            </template>
            <template>
              <th v-if="isNaN(item.moduleMean)">
                -
              </th>
              <th v-else-if="item.moduleMean < 4"
                  class="red--text">
                {{ item.moduleMean}}
              </th>
              <th v-else>
                {{ item.moduleMean }}
              </th>
              <th>
                {{ item.marksUnderMean }}
              </th>

            </template>
          </tr>
        </tbody>
      </v-simple-table>
    </v-container>
  </v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "MarkVue",
  data: () => {
    return {
      moduleModeButton: "Basculer sur la vue en module",
      title: "Synthèses des notes",
      moduleMode: false,
      selectedIdClass: 0,
      selectedModuleId: 0,
    }
  },
  mounted() {
    this.$store.dispatch('actionGetClasses');
  },
  methods: {
    loadModules() {
      this.selectedModuleId = 0;
      this.$store.dispatch('actionGetModulesSelectableFromClass', this.selectedIdClass);
      this.$store.dispatch('actionGetSynthesisFromClass', this.selectedIdClass);
    },
    loadModuleInfos() {
      const payload = [this.selectedModuleId, this.selectedIdClass];
      this.$store.dispatch('actionGetModuleInfos', payload);
    },
    setMode() {
      this.title = this.moduleMode ? "Synthèses des notes" : "Résultats par module"
      this.moduleModeButton = this.moduleMode ? "Basculer sur la vue en module" : "Basculer sur la vue en synthèse";
      this.moduleMode = !(this.moduleMode);
    }
  },
  computed: {
    ...mapGetters({
      classes: 'getClasses',
      moduleInfos: 'getModuleTestInfos',
      modules: 'getModulesSelect',
      synthesis: 'getSynthesis'
    })
  }
}
</script>

<style scoped>

</style>