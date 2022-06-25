<template>
  <div class="container">
    <div class="row valign-wrapper">
      <md-card>
        <md-card-content>
          <form v-on:submit.prevent="methodLogin">
            <div class="login-title">
              <h3 class="title">Connexion</h3>
            </div>
            <div class="form-group">
              <md-field>
                <label>Nom d'utilisateur ou E-mail</label>
                <md-input
                    data-ruid="login"
                    v-model="usernameOrEmail"
                    id="login"
                    class="form-control form-control-lg"
                />
              </md-field>
            </div>

            <div class="form-group">
              <md-field>
                <label>Mot de passe</label>
                <md-input
                    data-ruid="password"
                    v-model="password"
                    type="password"
                    id="password"
                    class="form-control form-control-lg"
                />
              </md-field>
            </div>

            <div class="main-title">
              <v-btn
                  type="submit"
                  class="button-general"
                  data-ruid="loginButton"
                  color="#5ee4cc"
              >
                Connexion
                {{
                  this.$store.getters.getLogin.state === "WAITING"
                      ? "..."
                      : ""
                }}
              </v-btn>
            </div>
          </form>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<style>
.container .row {
  margin: 0 auto;
  width: 50%;
  height: 50%;
}

.login-title {
  text-align: center;
}

.main-title {
  text-align: center;
}
</style>

<script>
import LoginRequestDTO from "@/gen/model/LoginRequestDTO";
import States from "@/state/States";

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
    },
    methodShowError() {
      const loginState = this.$store.getters.getLogin;
      if (loginState.state === States.ERROR) {
        return loginState.message;
      } else {
        return "";
      }
    },
  },
};
</script>


