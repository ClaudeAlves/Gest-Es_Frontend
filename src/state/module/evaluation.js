import States from '@/state/States'
import {EvaluationApi} from "@/gen";
import StateHelper from "@/state/StateHelper";
import Notifications from "@/utils/Notifications";

/**
 * Evaluation module stores information about modules marks grades etc.
 */
const evaluation = {
    state: () => ({
        evaluation: {
            state: States.INIT,
            message: "messageEvaluation",
            data: {
                moduleInfos: {},
                modulesSelect: [],
                synthesis: {}
            }
        }
    }),
    getters: {
        getModuleTestInfos(state) {
            return state.evaluation.data.moduleInfos;
        },
        getModulesSelect(state) {
            return state.evaluation.data.modulesSelect;
        },
        getSynthesis(state) {
            return state.evaluation.data.synthesis;
        }
    },
    actions: {
        actionGetModuleInfos({commit}, payload) {
            commit('mutationGetModuleInfosWaiting');
            const api = new EvaluationApi();
            const [idModule, idClass] = payload;
            api.getModuleInfosByClass(idModule, idClass, (e,d,r) => {
                if (e) {
                    StateHelper.simpleErrorManagement(e, 'mutationGetModuleInfosError');
                } else {
                    commit('mutationGetModuleInfosSuccess', d);
                }
            });
        },
        actionGetModulesSelectableFromClass({commit}, idClass) {
            commit('mutationGetModulesWaiting');
            const api = new EvaluationApi();

            api.getModulesByClass(idClass, (e, d, r) => {
                if (e) {
                    StateHelper.simpleErrorManagement(e, 'mutationGetModulesError');
                } else {
                    commit('mutationGetModuleSuccess', {...d});
                }
            });
        },
        actionGetSynthesisFromClass({commit}, idClass) {
            commit('mutationGetSynthesisWaiting')
            const api = new EvaluationApi();

            api.getSynthesisFromClass(idClass, (e, d, r) => {
                if (e) {
                    StateHelper.simpleErrorManagement(e, 'mutationGetSynthesisError');
                } else {
                    commit('mutationGetSynthesisSuccess', d);
                }
            })
        },
        actionGetSelfModuleInfos({commit}, idModule) {
            commit('mutationGetModuleInfosWaiting');
            const api = new EvaluationApi();
            api.getSelfModuleInfos(idModule, (e,d,r) => {
                if (e) {
                    StateHelper.simpleErrorManagement(e, 'mutationGetModuleInfosError');
                } else {
                    commit('mutationGetModuleInfosSuccess', d);
                }
            });
        },
        actionGetSelfModulesSelectable({commit}) {
            commit('mutationGetModulesWaiting');
            const api = new EvaluationApi();

            api.getSelfModules((e, d, r) => {
                if (e) {
                    StateHelper.simpleErrorManagement(e, 'mutationGetModulesError');
                } else {
                    commit('mutationGetModuleSuccess', {...d});
                }
            });
        },
        actionGetSelfSynthesis({commit}) {
            commit('mutationGetSynthesisWaiting')
            const api = new EvaluationApi();

            api.getSelfSynthesis((e, d, r) => {
                if (e) {
                    StateHelper.simpleErrorManagement(e, 'mutationGetSynthesisError');
                } else {
                    commit('mutationGetSynthesisSuccess', d);
                }
            })
        },
        actionResetInfosModules({commit}) {
            commit('mutationGetModuleInfosWaiting');
            commit('mutationResetModuleInfosSuccess');
        }
    },
    mutations: {
        mutationGetModuleInfosWaiting(state, data) {
            state.evaluation.state = States.WAITING;
        },
        mutationGetModuleInfosError(state, data) {
            state.evaluation.state = States.ERROR;
            Notifications.error("Erreur lors du chargement des information du module", data.message);
        },
        mutationGetModuleInfosSuccess(state, data) {
            state.evaluation.state = States.SUCCESS;
            state.evaluation.data.moduleInfos = data;
            Notifications.debug("Infos module", "Accèdez avec succès");
        },
        mutationGetModulesWaiting(state, data) {
            state.evaluation.state = States.WAITING;
        },
        mutationGetModulesError(state, data) {
            state.evaluation.state = States.ERROR;
            Notifications.error("Erreur lors du chargement des modules", data.message);
        },
        mutationGetModuleSuccess(state, data) {
            state.evaluation.state = States.SUCCESS;
            state.evaluation.data.modulesSelect = {...data};
            Notifications.debug("Modules", "Accèdez avec succès");
        },
        mutationResetModuleInfosSuccess(state, data) {
            state.evaluation.data.moduleInfos = {};
        },
        mutationGetSynthesisWaiting(state, data) {
            state.evaluation.state = States.WAITING;
        },
        mutationGetSynthesisError(state, data) {
            state.evaluation.state = States.ERROR;
            Notifications.error("Erreur lors du chargement des modules", data.message);
        },
        mutationGetSynthesisSuccess(state, data) {
            state.evaluation.state = States.SUCCESS;
            state.evaluation.data.synthesis = data;
            Notifications.debug("Modules", "Accèdez avec succès");
        },
    }
}
export default evaluation;