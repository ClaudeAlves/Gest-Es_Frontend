import Vue from 'vue';
import Material from "vue-material";
import router from '@/router/Router';
import App from './App.vue';
import store from '@/state/States';

Vue.use(Material);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

