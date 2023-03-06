import { createRouter, createWebHistory } from "vue-router";
import UserLayout from "@/layouts/UserLayout.vue";
import Login from "@/layouts/Login.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import AllAdmin from "@/views/AllAdmin.vue";
import AddAdmin from "@/views/AddAdmin.vue";
import Service from "@/views/Service.vue";
import AddService from "@/views/AddService.vue";
import Team from "@/views/Team.vue";
import AddTeam from "@/views/AddTeam.vue";
import Works from "@/views/Works.vue";
import AddWorks from "@/views/AddWorks.vue";
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
          path: "add",
          component: AddAdmin,
        },
        {
          path: "service",
          component: Service,
        },
        {
          path: "service/add",
          component: AddService,
        },
        {
          path: "team",
          component: Team,
        },
        {
          path: "team/add",
          component: AddTeam,
        },
        {
          path: "works",
          component: Works,
        },
        {
          path: "works/add",
          component: AddWorks,
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
