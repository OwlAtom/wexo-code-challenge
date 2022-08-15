import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/:genre/:id",
      name: "Movie",
      component: () => import("../views/Movie.vue"),
    },
    {
      path: "/:name",
      name: "Genre",
      component: () => import("../views/Genre.vue"),
    },
    {
      path: "/watchlist",
      name: "Watchlist",
      component: () => import("../views/Watchlist.vue"),
    },
  ],
});

export default router;
