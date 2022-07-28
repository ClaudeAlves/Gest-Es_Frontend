<!-- Page that displays information about the current user -->
<template>
    <v-card>
      <v-card-title class="page-title">
        Page utilisateur
      </v-card-title>
      <v-card-text>
        <v-container class="flex">
          <div class="font-weight-bold">
            Nom d'utilisateur :
          </div>
          <div class="teal--text">
            {{ this.$store.getters.getLogin.data.username }}
          </div>
        </v-container>
        <v-container class="flex">
          <div class="font-weight-bold">
            Prénom :
          </div>
          <div class="teal--text">
            {{ this.$store.getters.getProfile.data.firstname }}
          </div>
        </v-container>
        <v-container class="flex">
          <div class="font-weight-bold">
            Nom :
          </div>
          <div class="teal--text">
            {{ this.$store.getters.getProfile.data.lastname }}
          </div>
        </v-container>
        <v-container class="flex">
          <div class="font-weight-bold">
            Email :
          </div>
          <div class="teal--text">
            {{ this.$store.getters.getProfile.data.email }}
          </div>
        </v-container>
        <v-container class="flex">
          <div class="font-weight-bold">
            Roles :
          </div>
          <div class="teal--text" v-for="item in this.$store.getters.getLogin.data.roles">
            {{ item }}
          </div>
        </v-container>
      </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: "userInfos",
  mounted() {
    this.$store.dispatch("actionGetUser", this.$store.getters.getLogin.data.username)
  }
}
</script>