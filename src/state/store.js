import Vue from 'vue';
import Vuex from 'vuex';
import connexion from "@/state/module/connexion";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        connexion,
    }
});

export default store;
