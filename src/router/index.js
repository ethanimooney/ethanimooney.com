import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Images from "../views/Images.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
    },
    {
      path: "/images",
      component: Images,
      name: "images",
    },
    {
      path: "/:pathMatch(.*)",
      component: Home,
    },
  ],
});

export default router;
