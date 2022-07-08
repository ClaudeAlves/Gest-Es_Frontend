import States from '@/state/States'
import UserApi from '@/gen/api/UserApi'
import Notifications from '../../utils/Notifications';
import StateHelper from '@/state/StateHelper';


const profile = {
    state: () => ({
        profile: {
            state: States.INIT,
            message: "string",
            data: {
                "idUser": 0,
                "username": "polo",
                "firstname": "paul",
                "lastname": "novo",
                "birthdate": "2000-01-09",
                "email": "polo@po.lo",
                "password": "",
                "roles": [
                    {
                        "id": 1,
                        "name": "USER"
                    }
                ],
            }
        }
    }),
    getters: {
        getProfile(state) {
            return state.profile;
        },
    },
    actions: {
        /**
         *
         * @param {*} { commit } the context contains a function called commit used to commit mutations.
         * @param {*} data additional data object for the action
         */
        actionGetUser({commit}, username) {
            // First commit the waiting mutation
            commit('mutationGetUserWaiting', {});
            const api = new UserApi();

            api.getUser(username, (e, d, r) => {
                if (e) {
                    StateHelper.simpleErrorManagement(e, 'mutationGetUserError', commit);
                } else {
                    commit('mutationGetUserSuccess', {...d});
                }
            });
        },
        actionUpdateUser({commit}, userModificationDTO) {
            // First commit the waiting mutation
            commit('mutationUpdateUserWaiting', {});
            const api = new UserApi();

            api.updateUser(userModificationDTO.username, {userModificationDTO}, (e, d, r) => {
                if (e) {
                    StateHelper.simpleErrorManagement(e, 'mutationUpdateUserError', commit);
                } else {
                    commit('mutationUpdateUserSuccess', {...d});
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

        // Get User
        mutationGetUserWaiting(state, data) {
            state.profile.state = States.WAITING;
        },
        mutationGetUserSuccess(state, data) {
            state.profile.state = States.SUCCESS;
            state.profile.data = {...data};
            Notifications.debug("Profile", "Loaded Successfully.");
        },
        mutationGetUserError(state, data) {
            state.profile.state = States.ERROR;
            state.profile.message = data.message;
            Notifications.error("Erreur de Chargement", data.message);
        },

        // Update User
        mutationUpdateUserWaiting(state, data) {
            state.profile.state = States.WAITING;
        },
        mutationUpdateUserSuccess(state, data) {
            state.profile.state = States.SUCCESS;
            state.profile.data = {...data};
            Notifications.success("Modification Réussie", "Votre profil a été mis à jour.");
        },
        mutationUpdateUserError(state, data) {
            state.profile.state = States.ERROR;
            state.profile.message = data.message;
            Notifications.error("Erreur de Modification", data.message);
        },
    }
}

export default profile;
