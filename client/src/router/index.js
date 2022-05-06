import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/registration",
    name: "registration",
    component: () =>
      import(
        /* webpackChunkName: "registration" */ "@/views/RegistrationPage.vue"
      ),
  },
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/HomePage"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "custom-route-link",
});

export default router;
