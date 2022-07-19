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
                tests: [
                    {
                        "testId": 1,
                        "testName": "nom du test",
                        "students": [
                            {
                                "name": "s1",
                                "id": 5,
                                "testValue": null
                            }]
                    }
                ], // current loaded tests infos
            }
        }
    }),
    getters: {
        getTestsInfos(state) {
            return state.tests.data.tests;
        }
    },
    actions: {
        actionCreateTest({commit}, testDTO) {
            commit('mutationCreateTestWaiting');
            const api = new EvaluationApi();

            api.createTest({testDTO}, (e, d, r) => {
                if (e) {
                    StateHelper.simpleErrorManagement(e, 'mutationCreateTestError')
                } else {
                    commit('mutationCreateTestSuccess', {});
                    Notifications.success("Création réussie", "test");
                }
            })
        },
        actionGetTests({commit}) {
            commit('mutationGetTestsInfoWaiting', {});
            const api = new EvaluationApi();
            api.getTestsInfoUser((e,d,r) => {
                if(e) {
                    StateHelper.simpleErrorManagement(e, 'mutationGetTestsInfoError', commit);
                } {
                    commit('mutationGetTestsInfoSuccess', {...d})
                }
            })
        }
    },
    mutations: {
        mutationCreateTestWaiting(state, data) {
            state.tests.state = States.WAITING;
        },
        mutationGetTestsInfoWaiting(state, data) {
            state.tests.state = States.WAITING;
        },
        mutationCreateTestError(state, data) {
            state.tests.state = States.ERROR;
            state.tests.message = data.message;
            Notifications.error("Erreur de Chargement", data.message);
        },
        mutationGetTestsInfoError(state, data) {
            state.tests.state = States.ERROR;
            state.tests.message = data.message;
            Notifications.error("Erreur de Chargement", data.message);
        },
        mutationCreateTestSuccess(state, data) {
            state.tests.state = States.SUCCESS;
            Notifications.debug("Tests", "Created Successfully")
        },
        mutationGetTestsInfoSuccess(state, data) {
            state.tests.state = States.SUCCESS;
            state.tests.data.tests = {...data}
            Notifications.debug("Tests", "Created Successfully")
        }
    }
}
export default tests;