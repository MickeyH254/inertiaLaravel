import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SettingsView from "@/views/SettingsView.vue";
import GameView from "@/views/GameView.vue";
import HistoryView from "@/views/HistoryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsView,
    },
    {
      path: "/game",
      name: "game",
      component: GameView,
    },
    {
      path: "/history",
      name: "history",
      component: HistoryView,
    },
  ],
});

export default router;
