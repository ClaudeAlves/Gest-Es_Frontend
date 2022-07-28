import Vue from "vue"
import VueRouter from "vue-router"
import store from '@/state/store'

Vue.use(VueRouter);
/**
 * Routes defines paths for the router
 * the meta property is used to filter authentication
 */
const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("../views/login/LoginView.vue")

    },
    {
        path: "/calendars",
        name: "calendars",
        component: () => import("../views/calendar/PickCalendar"),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/forgot-password",
        name: "forgot-password",
        component: () => import("../views/login/ForgotPassword.vue")
    },
    {
        path: "/selfCalendar",
        name: "selfCalendar",
        component: () => import("../views/calendar/SelfCalendarView.vue"),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/testEdit",
        name: "testEdit",
        component: () => import("../views/Evaluation/TestEdit.vue"),
        props: true,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/testAnnotation",
        name: "testAnnotation",
        component: () => import("../views/Evaluation/TestAnnotation"),
        props: true,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/testCreation",
        name: "testCreation",
        component: () => import("../views/Evaluation/CreateTestVue.vue"),
        props: true,
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
    {
        path: "/notes",
        name: "notes",
        component: () => import("../views/Evaluation/MarkVue"),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/selfNotes",
        name: "selfNotes",
        component: () => import("../views/Evaluation/SelfMarkVue"),
        meta: {
            requiresAuth: true,
        }
    }
];
/**
 * Router declaration
 */
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

/**
 * Redirections for auth and admin
 * this method is called before each change of path
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
