import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MovieDetail from "../views/MovieDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/movie/:id",
      name: "Movie detail",
      component: MovieDetail,
    },
  ],
});

export default router;
