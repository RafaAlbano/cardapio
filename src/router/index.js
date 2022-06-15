import { createRouter, createWebHistory } from "vue-router";
import SaboresPizzaVue from "../views/SaboresPizza.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: SaboresPizzaVue,
    },
  ],
});

export default router;
