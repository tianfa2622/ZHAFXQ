import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/index/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/index/Home.vue"),
    meta: { hidden: true, title: "首页" }
  },
  {
    path: "/dom",
    name: "dom",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/index1.vue")
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
