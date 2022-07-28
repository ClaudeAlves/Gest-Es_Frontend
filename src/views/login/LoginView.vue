<!-- Login view let's a user log in -->
<template>
  <v-app>
    <v-container fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card elevation="2">

              <v-toolbar dark color="teal">
                <v-toolbar-title>Connexion</v-toolbar-title>
              </v-toolbar>

              <form v-on:submit.prevent="methodLogin">
                <v-container class="text-left">
                  <v-text-field
                      v-model="usernameOrEmail"
                      label="Nom d'utilisateur ou E-mail"
                      type="text"
                  ></v-text-field>
              </v-container>

              <v-container class="text-left">
                <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                ></v-text-field>

              </v-container>

              <v-container class="text-center">
                <v-btn
                    type="submit"
                    class="button-general"
                    color="teal"
                >
                  Connexion
                  {{
                    this.$store.getters.getLogin.state === "WAITING"
                        ? "..."
                        : ""
                  }}
                </v-btn>
              </v-container>
            </form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<style>
.container .row {
  margin: 0 auto;
  width: 50%;
  height: 50%;
}
</style>

<script>
import LoginRequestDTO from "@/gen/model/LoginRequestDTO";

export default {
  data() {
    return {
      usernameOrEmail: undefined,
      password: undefined,
    };
  },
  methods: {
    methodLogin() {
      let loginRequestDTO = new LoginRequestDTO();
      loginRequestDTO.usernameOrEmail = this.usernameOrEmail;
      loginRequestDTO.password = this.password;

      this.$store.dispatch("actionLogin", loginRequestDTO);

    }
  },
};
</script>


