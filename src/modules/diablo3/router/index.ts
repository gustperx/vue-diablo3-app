import type { RouteRecordRaw } from "vue-router";

const DiabloIIIRouter: RouteRecordRaw = {
  path: "/diablo-3",
  name: "diablo3",
  component: () => import("@/modules/diablo3/layouts/MainLayout.vue"),
  children: [
    {
      path: "",
      name: "diablo3-home",
      component: () => import("@/modules/diablo3/views/Home/HomeView.vue"),
    },
    {
      path: "/region/:region/profile/:battleTag",
      name: "diablo3-profile",
      props: (router) => ({
        region: router.params.region,
        battleTag: router.params.battleTag,
      }),
      component: () =>
        import("@/modules/diablo3/views/Profile/ProfileView.vue"),
    },
    {
      path: "/region/:region/profile/:battleTag/hero/:heroId",
      name: "diablo3-hero",
      component: () => import("@/modules/diablo3/views/Hero/HeroView.vue"),
    },
    {
      path: "/error",
      name: "diablo3-error",
      component: () => import("@/modules/diablo3/views/Error/ErrorView.vue"),
    },
  ],
};

export { DiabloIIIRouter };
