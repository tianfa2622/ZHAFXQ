import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./element/index";
import "./style/css/global.css";
import echarts from "echarts";
import VueArealinkage from "vue-area-linkage";
import "vue-area-linkage/dist/index.css";
import PCAA from "area-data/pcaa";
import BaiduMap from "vue-baidu-map";
import "@/components/index";
import "@/utils/axios";

Vue.config.productionTip = false;
Vue.prototype.$PCAA = PCAA;
Vue.prototype.$echarts = echarts;
Vue.use(VueArealinkage);

Vue.use(BaiduMap, {
  ak: "KYYG6kg5BQuVGWUqDt0SulwpjUts7Ffg"
});

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
