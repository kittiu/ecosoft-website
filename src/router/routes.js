const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/IndexPage.vue") },
      {
        path: "/our-approach",
        component: () => import("src/pages/OurApproachPage.vue"),
      },
      { path: "/post-list", component: () => import("pages/PostListPage.vue") },
      {
        path: "/post/:id",
        component: () => import("pages/PostPage.vue"),
      },
      { path: "/sign-in", component: () => import("pages/SignInPage.vue") },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
