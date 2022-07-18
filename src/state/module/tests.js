import States from "@/state/States";
import Notifications from "@/utils/Notifications";
import {EvaluationApi} from "@/gen";
import testDTO from "@/gen/model/TestDTO";
import StateHelper from "@/state/StateHelper";

const tests = {
    state: () => ({
        tests: {
            state: States.INIT,
            message: "messageTests",
            data: {
                tests: [], // current loaded tests
            }
        }
    }),
    getters: {

    },
    actions: {
        actionCreateTest({commit}, TestDTO) {
            commit('mutationCreateTestWaiting');
            const api = new EvaluationApi();

            api.createTest(testDTO, (e, d, r) => {
                if (e) {
                    StateHelper.simpleErrorManagement(e, 'mutationGetTe')
                } else {
                    commit('mutationCreateTestSuccess')
                    Notifications.success("Création réussie", "test");
                }
            })
        }
    },
    mutations: {
        mutationCreateTestWaiting(state, data) {
            state.tests.state = States.WAITING;
        },
        mutationCreateTestError(state, data) {
            state.tests.state = States.ERROR;
            state.tests.message = data.message;
            Notifications.error("Erreur de Chargement", data.message);
        },
        mutationCreateTestSuccess(state, data) {
            state.tests.state = States.SUCCESS;
            Notifications.debug("Tests", "Created Successfully")
        }
    }
}
export default tests;