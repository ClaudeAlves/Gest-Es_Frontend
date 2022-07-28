<!-- menu navbar that provides navigation tools thru router -->
<template>
	<nav>
    <v-app-bar flat app color="teal">
      <v-toolbar-title class="text-uppercase text--darken-4 red--text">
        Gest-ES
      </v-toolbar-title>
      <v-spacer/>
      <v-btn text v-if="this.isLoggedIn">
        <router-link
                   tag="div"
                   to="/profile"
        >
          Profil
        </router-link>
      </v-btn>
      <v-btn text v-if="this.isLoggedIn && !isAdmin">
        <router-link
                   tag="div"
                   to="/selfCalendar"
        >
          Calendrier
        </router-link>
      </v-btn>
      <v-btn text v-if="this.isLoggedIn && !this.isStudent">
        <router-link
                   tag="div"
                   to="/calendars"
        >
          Horaires
        </router-link>
      </v-btn>
      <v-menu offset-y text v-if="this.isLoggedIn && !this.isStudent">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text
              v-bind="attrs"
              v-on="on"
          >
            Tests
          </v-btn>
        </template>
          <v-list class="teal lighten-4">
            <v-list-item>
              <v-btn text>
                <router-link tag="div" to="/testCreation">Créer test</router-link>
              </v-btn>
          </v-list-item>
            <v-list-item>
              <v-btn text>
                <router-link tag="div" to="/testAnnotation">Saisir des notes</router-link>
              </v-btn>
            </v-list-item>
            <v-list-item>
            <v-btn text>
              <router-link tag="div" to="/testEdit">Editer des notes</router-link>
            </v-btn>
          </v-list-item>

        </v-list>
      </v-menu>
      <v-btn text v-if="this.isLoggedIn && !this.isStudent">
        <router-link
            tag="div"
            to="/notes"
        >
          notes
        </router-link>
      </v-btn>
      <v-btn text v-if="this.isLoggedIn && this.isStudent"
      @click="resetStudentMarks()">
        <router-link
            tag="div"
            to="/selfNotes"
        >
          notes
        </router-link>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text @click="logoutMethod()" v-if="this.isLoggedIn">
        <router-link tag="div" to="/login">Déconnexion</router-link>
      </v-btn>

      <div v-if="this.isLoggedIn">
        utilisateur : {{ this.$store.getters.getLogin.data.username }}
      </div>
    </v-app-bar>
  </nav>
</template>

<style>
  @import './../assets/css/main.css';
</style>

<script>
import router from "@/router/Router";

export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    isStudent() {
      return !(this.isTeacher || this.isAdmin);
    },
    isTeacher() {
      return this.$store.getters.isTeacher
    },
    isAdmin() {
      return this.$store.getters.isAdmin
    },
    isNotLoggedIn() {
      return !this.$store.getters.isLoggedIn
    },

  },
  mounted() {
    router.replace("/login")
  },
  methods: {
    logoutMethod() {
      this.$store.dispatch("actionLogout")
      router.replace("/login")
    },
    resetStudentMarks() {
      this.$store.dispatch('actionGetSelfSynthesis');
      this.$store.dispatch('actionGetSelfModulesSelectable');
      this.$store.dispatch('actionResetInfosModules');
    }
  }
}

</script>
