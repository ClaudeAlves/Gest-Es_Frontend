import States from "@/state/States";
import Notifications from "@/utils/Notifications";
import {EvaluationApi} from "@/gen";
import StateHelper from "@/state/StateHelper";

const tests = {
    state: () => ({
        tests: {
            state: States.INIT,
            message: "messageTests",
            data: {
                tests: [
                    {
                        "courseId": 0,
                        "students": [
                            {
                                "id": 0,
                                "name": "string",
                                "testValue": 0
                            }
                        ],
                        "testId": 0,
                        "testName": "string",
                        "text": "string",
                        "weighting": 0
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
        },
        actionMarkTest({commit}, markDTO) {
            commit('mutationPutMarkWaiting', {});
            const api = new EvaluationApi();
            console.log(markDTO)
            api.noteStudent({markDTO}, (e, d, r) => {
                if(e) {
                    StateHelper.simpleErrorManagement(e, 'mutationPutMarkError', commit);
                } {
                    commit('mutationPutMarkSuccess', {})
                }
            })
        }
    },
    mutations: {
        mutationPutMarkWaiting(state, data) {
            state.tests.state = States.WAITING;
        },
        mutationPutMarkError(state, data) {
            state.tests.state = States.ERROR;
            Notifications.error("Erreur lors de la notation d'un test", data.message);
        },
        mutationPutMarkSuccess(state, data) {
            state.tests.state = States.SUCCESS;
        },
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