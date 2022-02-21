import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import { DiabloIIIRouter } from "@/modules/diablo3/router";
import HomeView from "@/views/HomeView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/modules/diablo3/views/About/AboutView.vue"),
  },

  // Router Diablo 3
  DiabloIIIRouter,

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/modules/diablo3/views/Error/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
