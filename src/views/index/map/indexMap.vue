<template>
  <div id="container"></div>
</template>

<script>
import AMap from "AMap";
// eslint-disable-next-line no-unused-vars
import Vue from "vue";
// var map
export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // eslint-disable-next-line no-unused-vars
      var map = new AMap.Map("container", {
        center: [113.050425, 28.169996],
        resizeEnable: true,
        rotateEnable: true,
        // pitch: 80,
        zoom: 16,
        zooms: [3, 20],
        viewMode: "3D", // 开启3D视图,默认为关闭
        buildingAnimation: true,
        features: ["bg", "road", "building"]
      });
    }
  }
};
</script>

<style lang="less">
#container {
  width: 100%;
  height: 100%;
}
</style>
