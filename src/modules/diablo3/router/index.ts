import type { RouteRecordRaw } from "vue-router";

const DiabloIIIRouter: RouteRecordRaw = {
  path: "/diablo-3",
  name: "diablo3",
  component: () => import("@/modules/diablo3/layouts/MainLayout.vue"),
  children: [
    {
      path: "",
      name: "diablo3-profile-finder",
      component: () =>
        import("@/modules/diablo3/views/Search/SearchProfile.vue"),
    },
  ],
};

export { DiabloIIIRouter };
