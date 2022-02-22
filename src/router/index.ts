import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import { DiabloIIIRouter } from "@/modules/diablo3/router";

const routes: RouteRecordRaw[] = [
  // Router Diablo 3
  DiabloIIIRouter,
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
