export default {
    simpleErrorManagement(error, mutationName, commit) {
        if (error.timeout) {
            commit(mutationName, { message: "Timeout check your network !" });
        }
        else if (error.response === undefined) {
            commit(mutationName, { message: "Unexpected error, contact the developers !" });
        }
        else if (error.response.body) {
            commit(mutationName, { ...error.response.body });
        } else {
            commit(mutationName, { message: "Unexpected error, contact the developers !" });
        }
    }
}
