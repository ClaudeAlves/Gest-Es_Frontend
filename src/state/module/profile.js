import States from '@/state/States'
import UserApi from '@/gen/api/UserApi'
import Notifications from '../../utils/Notifications';
import StateHelper from '@/state/StateHelper';

/**
 * Profile module stores information about a user.
 */
const profile = {
    state: () => ({
        profile: {
            state: States.INIT,
            message: "string",
            data: {}
        }
    }),
    getters: {
        getProfile(state) {
            return state.profile;
        },
    },
    actions: {
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
