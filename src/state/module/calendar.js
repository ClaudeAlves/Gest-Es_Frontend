import States from "@/state/States";
import Notifications from "@/utils/Notifications";

const calendar = {
    state: () => ({
        calendar: {
            state: States.INIT,
            message: "",
            data: {
                "MyEvents": [
                    {
                        "id": "1",
                        "start": "2022-02-28T10:00:00",
                        "end": "2022-02-28T10:00:00",
                        "text": "test"
                    },
                    {
                        "id": "2",
                        "start": "2022-05-28T10:00:00",
                        "end": "2022-05-28T10:00:00",
                        "text": "test"
                    }
                ]
            }
        }
    }),
    getters: {
        getCalendar(state) {
            return state.calendar;
        }
    },
    actions: {
        actionGetCalendar({commit}, username) {
            // TODO avec modification du api yaml
        }
    },
    mutations: {
        /**
         *
         * @param {*} state the application state in Vuex store to modify.
         * @param {*} data Additional data to update the state accordingly.
         */

        // Get Calendar
        mutationGetCalendarWaiting(state, data) {
            state.calendar.state = States.WAITING;
        },
        mutationGetCalendarSuccess(state, data) {
            state.calendar.state = States.SUCCESS;
            state.calendar.data = {...data};
            Notifications.debug("Calendar", "Loaded Successfully.");
        },
        mutationGetCalendarError(state, data) {
            state.calendar.state = States.ERROR;
            state.calendar.message = data.message;
            Notifications.error("Erreur de Chargement", data.message);
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