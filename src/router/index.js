import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Ethereum from "../views/Ethereum.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Bitcoins",
    name: "Bitcoins",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Bitcoins.vue"),
  },
  {
    path: "/Ethereum",
    name: "Ethereum",
    component: Ethereum,
    // () => import("../views/Ethereum.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
