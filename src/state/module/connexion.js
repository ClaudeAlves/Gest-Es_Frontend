import States from '@/state/States'
import AuthenticationApi from '@/gen/api/AuthenticationApi'
import router from '@/router/Router'
import Notifications from '../../utils/Notifications';
import StateHelper from '@/state/StateHelper';
import ApiClient from '../../gen/ApiClient'

/**
 * Connexion module stores information about the login session.
 */
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
        actionLogin({ commit }, loginRequestDTO) {
            // First commit the waiting mutation
            commit('mutationLoginWaiting', {});
            const api = new AuthenticationApi();
            api.login({ loginRequestDTO }, (e, d, r) => {
                if (e) {
                    StateHelper.simpleErrorManagement(e, 'mutationLoginError', commit);
                } else {
                    commit('mutationLoginSuccess', { ...d });
                }
            });
        },
        actionLogout({ commit }) {
            // First commit the waiting mutation
            commit('mutationLogoutWaiting', {});
            const api = new AuthenticationApi();

            api.logout(  (e, d, r) => {
                if (e) {
                    StateHelper.simpleErrorManagement(e, 'mutationLogoutError', commit);
                } else {
                    commit('mutationLogoutSuccess', { ...d });
                }
            });
        },
    },
    mutations: {
        mutationLoginWaiting(state, data) {
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
                router.push('/profile');
            }
            Notifications.success("Authentication Réussie", "Bienvenue " + data.username + " !");
        },
        mutationLoginError(state, data) {
            state.login.state = States.ERROR;
            state.login.message = data.message;
            Notifications.error("Erreur d'Authentication", data.message);
        },
        mutationLogoutWaiting(state, data) {
            state.login.state = States.WAITING;
        },
        mutationLogoutSuccess(state, data) {
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
