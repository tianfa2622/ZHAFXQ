import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./element/index";
import "./style/css/global.css";
import echarts from "echarts";

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
