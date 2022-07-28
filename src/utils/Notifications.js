import Vue from 'vue'

const debugEnabled = false;

/**
 * Methods to display notifications.
 */
export default {
    success(title, text) {
        Vue.notify({
            title: title,
            text: text,
            duration: 5000,
            type: 'success'
        });
    },
    warn(title, text) {
        Vue.notify({
            title: title,
            text: text,
            duration: 5000,
            type: 'warn'
        });
    },
    error(title, text) {
        if (text === null || text === undefined) {
            text = "Internal error";
        }
        Vue.notify({
            title: title,
            text: text,
            duration: 10000,
            type: 'error'
        });
    },
    debug(title, text) {
        if (debugEnabled) {
            Vue.notify({
                title: title,
                text: text,
                duration: 5000,
                type: 'info'
            });
        }
    }
};
