import States from "@/state/States";

const students = {
    state: () => ({
        state: States.INIT,
        data: {
            students: {

            }
        }

    }),
    getters: {
        getStudents(state) {
            return state.data.students;
        }
    },
    actions: {

    },
    mutations: {

    }
}
export default students;