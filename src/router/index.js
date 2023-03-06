import { createRouter, createWebHistory } from "vue-router";
import UserLayout from "@/layouts/UserLayout.vue";
import Login from "@/layouts/Login.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import AllAdmin from "@/views/AllAdmin.vue";
import Service from "@/views/Service.vue";
import Team from "@/views/Team.vue";
import Works from "@/views/Works.vue";
import Message from "@/views/Message.vue";
import NotFound from "@/layouts/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: UserLayout,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/admin/",
      component: AdminLayout,
      children: [
        {
          path: "all",
          component: AllAdmin,
        },
        {
          path: "service",
          component: Service,
        },
        {
          path: "team",
          component: Team,
        },
        {
          path: "works",
          component: Works,
        },
        {
          path: "msg",
          component: Message,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
