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
    path: "/Comprehensive",
    name: "Comprehensive",
    component: () =>
      import(
        /* webpackChunkName: "Comprehensive" */ "../views/Data_management/Comprehensive/Comprehensive.vue"
      ),
    meta: { hidden: true, title: "综合管理" }
  },
  {
    path: "/personnel",
    name: "personnel",
    component: () =>
      import(
        /* webpackChunkName: "personnel" */ "../views/Data_management/personnel/personnel.vue"
      ),
    meta: { hidden: true, title: "人员管理" }
  },
  {
    path: "/vehicle",
    name: "vehicle",
    component: () =>
      import(
        /* webpackChunkName: "vehicle" */ "../views/Data_management/vehicle/vehicle.vue"
      ),
    meta: { hidden: true, title: "车辆管理" }
  },
  {
    path: "/housing",
    name: "Housing",
    component: () =>
      import(
        /* webpackChunkName: "Housing" */ "../views/Data_management/Housing/Housing.vue"
      ),
    meta: { hidden: true, title: "房屋管理" }
  },
  {
    path: "/CommunityUnit",
    name: "CommunityUnit",
    component: () =>
      import(
        /* webpackChunkName: "CommunityUnit" */ "../views/Data_management/CommunityUnit/CommunityUnit.vue"
      ),
    meta: { hidden: true, title: "小区单位管理" }
  },
  {
    path: "/StaffAnalysis",
    name: "StaffAnalysis",
    component: () =>
      import(
        /* webpackChunkName: "StaffAnalysis" */ "../views/PublicSecurity/StaffAnalysis/StaffAnalysis.vue"
      ),
    meta: { hidden: true, title: "实有人口分析" }
  },
  {
    path: "/AnomalyAnalysis",
    name: "AnomalyAnalysis",
    component: () =>
      import(
        /* webpackChunkName: "AnomalyAnalysis" */ "../views/PublicSecurity/AnomalyAnalysis/AnomalyAnalysis.vue"
      ),
    meta: { hidden: true, title: "异常研判分析" }
  },
  {
    path: "/KeyObjectControl",
    name: "KeyObjectControl",
    component: () =>
      import(
        /* webpackChunkName: "KeyObjectControl" */ "../views/PublicSecurity/KeyObjectControl/KeyObjectControl.vue"
      ),
    meta: { hidden: true, title: "重点对象管控" }
  },
  {
    path: "/VerifyFeedback",
    name: "VerifyFeedback",
    component: () =>
      import(
        /* webpackChunkName: "VerifyFeedback" */ "../views/PublicSecurity/VerifyFeedback/VerifyFeedback.vue"
      ),
    meta: { hidden: true, title: "信息核实反馈" }
  },
  {
    path: "/EarlyWarningDisposal",
    name: "EarlyWarningDisposal",
    component: () =>
      import(
        /* webpackChunkName: "EarlyWarningDisposal" */ "../views/PublicSecurity/EarlyWarningDisposal/EarlyWarningDisposal.vue"
      ),
    meta: { hidden: true, title: "预警处理" }
  },
  {
    path: "/SituationAnalysis",
    name: "SituationAnalysis",
    component: () =>
      import(
        /* webpackChunkName: "SituationAnalysis" */ "../views/Situation_analysis/SituationAnalysis.vue"
      ),
    meta: { hidden: true, title: "态势分析" }
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
