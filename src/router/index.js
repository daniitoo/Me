import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ("../views/About.vue"),
    },
    {
        path: "/services",
        name: "Services",
        component: () =>
            import ("../views/Services.vue"),
    },
    {
        path: "/work",
        name: "Work",
        component: () =>
            import ("../views/Work.vue"),
    },
    {
        path: "/work/:id/:llave",
        name: "Portafolio",
        component: () =>
            import ("../components/Portfolio.vue"),
        props: true,
    },
    {
        path: "/contact",
        name: "Contact",
        component: () =>
            import ("../views/Contact.vue"),
        props: true,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;