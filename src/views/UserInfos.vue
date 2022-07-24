<template>
    <v-card>
      <v-card-title class="page-title">
        Page utilisateur
      </v-card-title>
      <v-card-text>
        <v-container>
          username : {{ this.$store.getters.getLogin.data.username }}
        </v-container>
        <v-container>
          jwt : {{ this.$store.getters.getLogin.data.jwt }}
        </v-container>
        <v-container>
          roles : {{ this.$store.getters.getLogin.data.roles }}
        </v-container>
      </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: "userInfos",

}
</script>