import { createRouter, createWebHistory } from "vue-router";
import UserLayout from "@/layouts/UserLayout.vue";
import Login from "@/layouts/Login.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";

import AllAdmin from "@/views/Admin/AllAdmin.vue";
import AddAdmin from "@/views/Admin/AddAdmin.vue";
import EditAdmin from "@/views/Admin/EditAdmin.vue";

import Service from "@/views/Service/Service.vue";
import AddService from "@/views/Service/AddService.vue";
import EditService from "@/views/Service/EditService.vue";

import Team from "@/views/Team/Team.vue";
import AddTeam from "@/views/Team/AddTeam.vue";
import EditTeam from "@/views/Team/EditTeam.vue";

import Works from "@/views/Works/Works.vue";
import AddWorks from "@/views/Works/AddWorks.vue";
import EditWorks from "@/views/Works/EditWorks.vue";

import Message from "@/views/Message/Message.vue";
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
          path: "edit/:id",
          component: EditAdmin,
        },
        {
          path: "service",
          component: Service,
        },
        {
          path: "service/:id/edit",
          component: EditService,
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
          path: "team/:id/edit",
          component: EditTeam,
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
          path: "works/:id/edit",
          component: EditWorks,
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

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
