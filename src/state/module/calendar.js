import States from "@/state/States";
import Notifications from "@/utils/Notifications";
import {CalendarApi} from "@/gen";
import StateHelper from "@/state/StateHelper";
import EventsUtils from "@/utils/EventsUtils";

function calendarInitialState() {
       return {

       }
}
const calendar = {
    state: () => ({
        calendar: {
            state: States.INIT,
            message: "messageCalendar",
            data: {
                Events: [],
            },
            isDisplayable: false
        }/*,
        myCalendar: {
            state: States.INIT,
            message: "messageMyCalendar",
            data: {
                MyEvents: [],
            }
        }*/
    }),
    getters: {
        getCalendar(state) {
            return state.calendar.data.Events;
        },
        isCalendarDisplayable(state) {
            return state.calendar.isDisplayable;
        }/*,
        geCalendarEvents(state) {
            return state.calendar.data.Events
        }*/
    },
    actions: {
        actionGetCalendar({commit}, idUser) {
            commit('mutationGetCalendarWaiting', {});
            const api = new CalendarApi();
            api.getCalendar(idUser, (e, d, /* eslint-disable */r/* eslint-enable */) => {
                if (e) {
                    StateHelper.simpleErrorManagement(e, 'mutationGetCalendarError', commit);
                } else {
                    commit('mutationGetCalendarSuccess', { ...d });
                }
            });
        },
        actionGetMyCalendar({commit}) {
            commit('mutationGetMyCalendarWaiting', {});
            const api = new CalendarApi();
            api.getCalendarUser((e, d, /* eslint-disable */r/* eslint-enable */) => {
                if (e) {
                    StateHelper.simpleErrorManagement(e, 'mutationGetMyCalendarError', commit);
                } else {
                    commit('mutationGetMyCalendarSuccess', { ...d });
                }
            });
        },
        actionLogout({commit}) {
            commit('mutationLogoutSuccess');
        },
        actionGetClassCalendar({commit}, idClass) {
            commit('mutationGetCalendarWaiting', {});
            const api = new CalendarApi();
            api.getClassCalendar(idClass, (e, d, /* eslint-disable */r/* eslint-enable */) => {
                if (e) {
                    StateHelper.simpleErrorManagement(e, 'mutationGetCalendarError', commit);
                } else {
                    commit('mutationGetCalendarSuccess', { ...d });
                }
            });
        }
    },
    mutations: {
        /**
         *
         * @param {*} state the application state in Vuex store to modify.
         * @param {*} data Additional data to update the state accordingly.
         */

        // Get Calendar
        mutationGetMyCalendarWaiting(state, data) {
            state.calendar.state = States.WAITING;
        },
        mutationGetCalendarWaiting(state, data) {
            state.calendar.state = States.WAITING;
        },
        mutationGetCalendarSuccess(state, data) {
            state.calendar.state = States.SUCCESS;
            state.calendar.data.Events = EventsUtils.convertPeriodsToEvents(data.periods);
            state.calendar.isDisplayable = true;
            Notifications.debug("Calendar", "Loaded Successfully.");
        },
        mutationGetMyCalendarSuccess(state, data) {
            state.calendar.state = States.SUCCESS;
            //console.log(data.periods)
            state.calendar.data.Events = EventsUtils.convertPeriodsToEvents(data.periods);
            //console.log(EventsUtils.convertPeriodsToEvents(data.periods))
            //console.log("DATA IN GETMYCALENDAR " + JSON.stringify(state.calendar.data.MyEvents))
            state.calendar.isDisplayable = true;
            Notifications.debug("My Calendar", "Loaded Successfully.");
        },
        mutationGetMyCalendarError(state, data) {
            state.calendar.state = States.ERROR;
            state.calendar.message = data.message;
            state.calendar.isDisplayable = false;
            Notifications.error("Erreur de Chargement", data.message);
        },
        mutationGetCalendarError(state, data) {
            state.calendar.state = States.ERROR;
            state.calendar.message = data.message;
            state.calendar.isDisplayable = false;
            Notifications.error("Erreur de Chargement", data.message);
        },
        mutationLogoutSuccess(state, data) {
            state.calendar.isDisplayable = false;
        },
        // Update Calendar
        mutationUpdateCalendarWaiting(state, data) {
            state.calendar.state = States.WAITING;
        },
        mutationUpdateCalendarSuccess(state, data) {
            state.calendar.state = States.SUCCESS;
            state.calendar.data = {...data};
            Notifications.success("Modification Réussie", "Votre calendrier a été mis à jour.");
        },
        mutationUpdateCalendarError(state, data) {
            state.calendar.state = States.ERROR;
            state.calendar.message = data.message;
            Notifications.error("Erreur de Modification", data.message);
        },
    }
}
export default calendar;