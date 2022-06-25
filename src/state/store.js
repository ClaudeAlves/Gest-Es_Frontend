import Vue from 'vue';
import Vuex from 'vuex';
import connexion from "@/state/module/connexion";
import profile from "@/state/module/profile";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        connexion,
        profile,
    }
});

export default store;
