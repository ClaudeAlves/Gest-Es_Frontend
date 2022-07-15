import Vue from 'vue';
import Vuex from 'vuex';
import connexion from "@/state/module/connexion";
import profile from "@/state/module/profile";
import calendar from "@/state/module/calendar";
import evaluation from "@/state/module/evaluation";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        connexion,
        profile,
        calendar,
        evaluation,
    }
});

export default store;
