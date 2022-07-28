import States from "@/state/States";
import {UserApi} from "@/gen";
import StateHelper from "@/state/StateHelper";
import Notifications from "@/utils/Notifications";

/**
 * Classes module stores classes.
 */
const classes = {
    state: () => ({
        classes: {
            state: States.INIT,
            message: "messageClasses",
            data: {
                classes: [], // classes of the user
            }
        }
    }),
    getters: {
        getClasses(state) {
            return state.classes.data.classes;
        }
    },
    actions: {
        actionGetClasses({commit}) {
            commit('mutationGetClassesWaiting', {});
            const api = new UserApi();
            api.getClasses((e, d, r) => {
                if(e) {
                    StateHelper.simpleErrorManagement(e, 'mutationGetClassesError', commit);
                } else {
                    commit('mutationGetClassesSuccess', {...d});
                }
            });
        },
        actionGetClassesFromCourse({commit}, idCourse) {
            commit('mutationGetClassesWaiting', {});
            const api = new UserApi();
            api.getClassesFromCourse(idCourse, (e, d, r) => {
                if(e) {
                    StateHelper.simpleErrorManagement(e, 'mutationGetClassesError', commit);
                } else {
                    commit('mutationGetClassesSuccess', {...d});
                }
            } )
        },
        actionResetClasses({commit}) {
            commit('mutationGetClassesWaiting', {})
            commit('mutationResetClassesSuccess', {});
        }

    },
    mutations: {
        mutationGetClassesWaiting(state, data) {
            state.classes.state = States.WAITING;
        },
        mutationGetClassesError(state, data) {
            state.classes.state = States.ERROR;
            state.classes.message = data.message;
            Notifications.error("Erreur de Chargement", data.message);
        },
        mutationGetClassesSuccess(state, data) {
            state.classes.state = States.SUCCESS;
            state.classes.data.classes = data
            Notifications.debug("Classes", "Loaded Successfully")
        },
        mutationResetClassesSuccess(state, data) {
            state.classes.state = States.SUCCESS;
            state.classes.data.classes = [];
        }
    }
}
export default classes;