import Vue from "vue"
import VueRouter from "vue-router"
import store from '@/state/store'

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("../views/login/LoginView.vue")

    },
    {
        path: "/forgot-password",
        name: "forgot-password",
        component: () => import("../views/login/ForgotPassword.vue")
    },
    {
        path: "/home",
        name: "home",
        component: () => import("../views/HomeView.vue"),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/profile",
        name: "userprofile",
        component: () => import("../views/UserInfos.vue"),
        meta: {
            requiresAuth: true,
        }
    },
];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

/**
 * Redirections for auth and admin
 * Source:
 * https://router.vuejs.org/guide/advanced/navigation-guards.html#per-route-guard
 */
router.beforeEach((to, from, next) => {
    // Auth required not Public
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Not logged in
        if (!store.getters.isLoggedIn) {
            next({
                name: 'login',
                params: { nextUrl: to.fullPath }
            });
        }
        // Logged in
        else {
            // Admin is required
            if (to.matched.some(record => record.meta.isAdmin)) {
                // isAdmin
                if (store.getters.isAdmin) {
                    next();
                }
                //is Not Admin
                else {
                    next({ name: 'NotFound' });
                }
            }
            // Admin is not required
            else {
                next();
            }
        }
    }
    // Public
    else {
        next();
    }
});

export default router;
