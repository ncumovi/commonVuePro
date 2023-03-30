import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index"),
      },
    ],
  },

  // 首页菜单
  {
    path: "/",
    component: Layout,
    redirect: "/homePage",
    hidden: false,
    children: [
      {
        path: "homePage",
        component: () => import("@/views/homePage/index"),
        name: "homePage",
        meta: {
          title: "首页",
        },
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
  },
  {
    path: "/layout",
    component: Layout,
    children: [
      {
        path: "user",
        component: () => import("@/views/user/index"),
        name: "user",
        meta: {
          title: "用户",
        },
      },
    ],
  },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
