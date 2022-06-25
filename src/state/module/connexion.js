import States from '@/state/States'
import AuthenticationApi from '@/gen/api/AuthenticationApi'
import router from '@/router/Router'
import Notifications from '../../utils/Notifications';
import StateHelper from '@/state/StateHelper';
import ApiClient from '../../gen/ApiClient'

function initialState() {
    return {
        login: {
            state: States.INIT,
            message: "string",
            isLoggedIn: false,
            data: {
                jwt: "string",
                username: "username",
                roles: [],
            }
        },
        register: {
            state: States.INIT,
            message: "string",
        }
    }
}

const connexion = {
    state: () => (initialState()),
    getters: {
        getLogin(state) {
            return state.login;
        },
        getRegister(state) {
            return state.register;
        },
        isLoggedIn(state) {
            return state.login.isLoggedIn;
        },
        isAdmin(state) {
            return isRole("ROLE_ADMIN", state)
        },
        isTeacher(state) {
            return isRole("ROLE_TEACHER", state)
        }
    },
    actions: {
        /**
         *
         * @param {*} { commit } the context contains a function called commit used to commit mutations.
         * @param loginRequestDTO
         */
        actionLogin({ commit }, loginRequestDTO) {
            // First commit the waiting mutation
            commit('mutationLoginWaiting', {});
            const api = new AuthenticationApi();
            console.log(loginRequestDTO);
            api.login({ loginRequestDTO }, (e, d, /* eslint-disable */r/* eslint-enable */) => {
                if (e) {
                    console.log("dans le login avec erreur");
                    StateHelper.simpleErrorManagement(e, 'mutationLoginError', commit);
                } else {
                    console.log("dans le login sans erreur");
                    commit('mutationLoginSuccess', { ...d });
                }
            });
        },
        actionRegister({ commit }, registerDTO) {
            // First commit the waiting mutation
            commit('mutationRegisterWaiting', {});
            const api = new AuthenticationApi();

            api.register({ registerDTO }, (e, d, /* eslint-disable */r/* eslint-enable */) => {
                if (e) {
                    StateHelper.simpleErrorManagement(e, 'mutationRegisterError', commit);
                } else {
                    commit('mutationRegisterSuccess', { ...d });
                }
            });
        },
        actionLogout({ commit }) {
            // First commit the waiting mutation
            commit('mutationLogoutWaiting', {});
            const api = new AuthenticationApi();

            api.logout(  (e, d, /* eslint-disable */r/* eslint-enable */) => {
                if (e) {
                    StateHelper.simpleErrorManagement(e, 'mutationLogoutError', commit);
                } else {
                    commit('mutationLogoutSuccess', { ...d });
                }
            });
        },
    },
    mutations: {
        /**
         *
         * @param {*} state the application state in Vuex store to modify.
         * @param {*} data Additional data to update the state accordingly.
         */
        mutationLoginWaiting(state, /* eslint-disable */data/* eslint-enable */) {
            state.login.state = States.WAITING;
        },
        mutationLoginSuccess(state, data) {
            state.login.state = States.SUCCESS;
            state.login.data = { ...data };
            state.login.isLoggedIn = true;
            const jwt = data.jwt;
            ApiClient.instance.authentications.JWTSecurity = {
                type: 'bearer',
                accessToken: jwt
            };

            // Go to the wanted url or to the homepage
            if (router.currentRoute.params.nextUrl !== undefined) {
                router.push(router.currentRoute.params.nextUrl)
            } else {
                router.push('/home');
            }
            Notifications.success("Authentication Réussie", "Bienvenue " + data.username + " !");
        },
        mutationLoginError(state, data) {
            state.login.state = States.ERROR;
            state.login.message = data.message;
            Notifications.error("Erreur d'Authentication", data.message);
        },
        mutationRegisterWaiting(state, /* eslint-disable */data/* eslint-enable */) {
            state.register.state = States.WAITING;
        },
        mutationRegisterSuccess(state, data) {
            state.register.state = States.SUCCESS;
            state.register.data = { ...data };

            // Reset the login for better UX
            state.login = initialState().login;

            Notifications.success("Inscription Réussie", "Vous pouvez vous connecter maintenant.");
            router.push({ name: 'login' });
        },
        mutationRegisterError(state, data) {
            state.register.state = States.ERROR;
            state.register.message = data.message;
            Notifications.error("Erreur d'Inscription", data.message);
        },

        mutationLogoutWaiting(state, /* eslint-disable */data/* eslint-enable */) {
            state.login.state = States.WAITING;
        },
        mutationLogoutSuccess(state, /* eslint-disable */data/* eslint-enable */) {
            state.login = initialState().login;
            Notifications.success("Déconnexion Réussie", "Au revoir !");
        },
        mutationLogoutError(state, data) {
            state.login.state = States.ERROR;
            state.login.message = data.message;
            Notifications.error("Erreur de Déconnexion", data.message);
        },
    },
}
var isRole = function (role, state) {
    for (let i = 0; i < state.login.data.roles.length; i++) {
        const e = state.login.data.roles[i];
        if (e === role) {
            return true;
        }
    }
    return false;
}
export default connexion;
