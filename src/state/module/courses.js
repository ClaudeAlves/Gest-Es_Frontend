import States from '@/state/States'
import {UserApi} from "@/gen";
import StateHelper from "@/state/StateHelper";
import Notifications from "@/utils/Notifications";

/**
 * Courses module stores data about courses and students.
 */
const courses = {
    state: () => ({
        courses: {
            state: States.INIT,
            message: "messageCourses",
            data: {
                courses: [], // courses of the user
                students: [], // students of a specific course
            }
        }
    }),
    getters: {
        getCourses(state) {
            return state.courses.data.courses;
        },
        getStudentsFromCourse(state) {
            return state.courses.data.students;
        }
    },
    actions: {
        actionGetCourses({commit}) {
            commit('mutationGetCoursesWaiting', {});
            const api = new UserApi();
            api.getCourses((e, d, r) => {
                if(e) {
                    StateHelper.simpleErrorManagement(e, 'mutationGetCoursesError', commit);
                } else {
                    commit('mutationGetCoursesSuccess', {...d});
                }
            });
        },
        actionGetStudentsFromCourse({commit}, idCourse) {
            commit('mutationGetStudentsCourseWaiting', {});
            const api = new UserApi();
            api.getStudentsFromCourse(idCourse, (e, d, r) => {
                if(e) {
                    StateHelper.simpleErrorManagement(e, 'mutationGetStudentsCourseError', commit);
                } else {
                    commit('mutationGetStudentsCourseSuccess', {...d});
                }
            });
        },
        actionResetCourses({commit}) {
            commit('mutationResetCoursesWaiting', {})
            commit('mutationResetCoursesSuccess', {});
        }



    },
    mutations: {
        mutationGetCoursesWaiting(state, data) {
            state.courses.state = States.WAITING;
        },
        mutationGetCoursesError(state, data) {
            state.courses.state = States.ERROR;
            state.courses.message = data.message;
            Notifications.error("Erreur de Chargement", data.message);
        },
        mutationGetCoursesSuccess(state, data) {
            state.courses.state = States.SUCCESS;
            state.courses.data.courses = {...data}
            Notifications.debug("Courses", "Loaded Successfully")
        },
        mutationResetCoursesWaiting(state, data) {
            state.courses.state = States.WAITING;
        },
        mutationResetCoursesSuccess(state, data) {
            state.courses.state = States.SUCCESS
            state.courses.data.courses = [];
        },
        mutationGetStudentsCourseWaiting(state, data) {
            state.courses.state = States.WAITING;
        },
        mutationGetStudentsCourseError(state, data) {
            state.courses.state = States.ERROR;
            state.courses.message = data.message;
            Notifications.error("Erreur de Chargement", data.message);
        },
        mutationGetStudentsCourseSuccess(state, data) {
            state.courses.state = States.SUCCESS;
            state.courses.data.students = {...data}
            Notifications.debug("Students from courses", "Loaded Successfully")
        }
    }

}

export default courses;