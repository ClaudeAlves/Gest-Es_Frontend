import Vue from 'vue';
import Material from "vue-material";
import router from '@/router/Router';
import App from './App.vue';
import store from '@/state/store';
import vuetify from './plugins/vuetify'
import Notifications from "vue-notification";

/**
 * Base of the vue application we define here the router, store, vuetify and the app and we mount it.
 */
Vue.use(Material);
Vue.use(Notifications)

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');

