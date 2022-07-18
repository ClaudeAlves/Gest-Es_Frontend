import Vue from 'vue';
import Vuex from 'vuex';
import connexion from "@/state/module/connexion";
import profile from "@/state/module/profile";
import calendar from "@/state/module/calendar";
import evaluation from "@/state/module/evaluation";
import students from "@/state/module/students"
import courses from "@/state/module/courses";
import classes from "@/state/module/classes";
import tests from "@/state/module/tests";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        connexion,
        profile,
        calendar,
        courses,
        students,
        evaluation,
        classes,
        tests,
    }
});

export default store;
