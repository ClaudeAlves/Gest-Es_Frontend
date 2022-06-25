<template>
	<div>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
    <div class="navbar">
      <div class="logo">
        Gest-ES
      </div>
      <div class="nav-elements">
        <router-link v-if="this.isNotLoggedIn"
                     tag="div"
                     class="nav-link"
                     to="/login">
          Connexion
        </router-link>
        <router-link v-if="this.isNotLoggedIn"
                     tag="div"
                     to="/forgot-password"
                     class="nav-link">
          Mot de passe oublié?
        </router-link>
        <router-link v-if="this.isLoggedIn"
                     tag="div"
                     to="/profile"
                     class="nav-link">
          Profile
        </router-link>
        <router-link to="/">
          <div v-if="this.isLoggedIn"
               @click="logoutMethod"
               class="nav-link">
            Déconnexion
          </div></router-link>
      </div>
      <div v-if="this.isLoggedIn" class="nav-bar-user">
        current user : {{ this.$store.getters.getLogin.data.username }}
      </div>
    </div>
  </div>
</template>

<style>
  @import './../assets/css/main.css';
</style>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
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
  methods: {
    logoutMethod() {
      this.$store.dispatch("actionLogout")
    }
  }
}

</script>
