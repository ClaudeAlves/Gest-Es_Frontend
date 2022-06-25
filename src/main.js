import Vue from 'vue';
import Material from "vue-material";
import router from '@/router/Router';
import App from './App.vue';
import store from '@/state/store';
import vuetify from './plugins/vuetify'
import Notifications from "vue-notification";

Vue.use(Material);
Vue.use(Notifications)

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');

