import States from "@/state/States";
import Notifications from "@/utils/Notifications";
import {CalendarApi, EvaluationApi} from "@/gen";
import StateHelper from "@/state/StateHelper";
import EventsUtils from "@/utils/EventsUtils";

/**
 * Calendar module stores the events to be displayed in the calendar.
 */
const calendar = {
    state: () => ({
        calendar: {
            state: States.INIT,
            message: "messageCalendar",
            data: {
                Events: [],
            },
            isDisplayable: false
        }
    }),
    getters: {
        getCalendar(state) {
            return state.calendar.data.Events;
        }
    },
    actions: {
        actionGetCalendar({commit}, idUser) {
            commit('mutationGetCalendarWaiting', {});
            const api = new CalendarApi();
            api.getCalendar(idUser, (e, d, r) => {
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
            api.getCalendarUser((e, d, r) => {
                if (e) {
                    StateHelper.simpleErrorManagement(e, 'mutationGetMyCalendarError', commit);
                } else {
                    commit('mutationGetMyCalendarSuccess', { ...d });
                }
            });
        },
        actionLogout({commit}) {
            commit('mutationIsDisplayable');
        },
        actionGetClassCalendar({commit}, idClass) {
            commit('mutationGetCalendarWaiting', {});
            const calendarApi = new CalendarApi();
            const evaluationApi = new EvaluationApi();
            calendarApi.getClassCalendar(idClass, (eCal, dCal, rCal) => {
                if (eCal) {
                    StateHelper.simpleErrorManagement(eCal, 'mutationGetCalendarError', commit);
                } else {
                    commit('mutationGetCalendarWaiting', {});
                    evaluationApi.getClassTests(idClass, (eTest, dTest, rTest) => {
                        if( eTest) {
                            StateHelper.simpleErrorManagement(eTest, 'mutationGetTestCalendarError', commit);
                        } else {
                            commit('mutationGetCalendarSuccess', { ...dCal});
                        }
                    })
                }
            });
        }
    },
    mutations: {
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
            state.calendar.data.Events = EventsUtils.convertPeriodsToEvents(data.periods);
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
        mutationIsDisplayable(state, data) {
            state.calendar.isDisplayable = false;
        },
    }
}
export default calendar;