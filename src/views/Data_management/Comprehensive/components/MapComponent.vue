<template>
  <div class="h-100 w-100">
    <el-card class="card_style" body-style="padding-bottom: 0px;">
      <Myform
        :formData="MyformData.formData"
        :form="MyformData.form"
        :itemColumns="MyformData.itemColumns"
        @clickButton="clickButton"
      ></Myform>
    </el-card>
    <div class="map_Content">
      <baidu-map
        class="map"
        :scroll-wheel-zoom="true"
        :center="center"
        :zoom="zoom"
        mapType="BMAP_SATELLITE_MAP"
      >
        <!-- :icon="{
              url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif',
              size: { width: 300, height: 157 }
            }" -->
        <template v-for="(item, index) in markers">
          <bm-marker
            :key="index"
            :position="item.markerPoint"
            :title="item.name"
            @click="look(item)"
          >
            <bm-info-window
              :posiniton="item.markerPoint"
              :show="show"
              @close="infoWindowClose(item)"
              @open="infoWindowOpen(item)"
            >
              <p>{{ from.xianghao }}</p>
              <p>{{ from.adds }}</p>
              <p>{{ from.time }}</p>
              <el-button type="text">详情</el-button>
            </bm-info-window>
          </bm-marker>
        </template>
      </baidu-map>
    </div>
  </div>
  <!-- @moving="syncCenterAndZoom"
        @moveend="syncCenterAndZoom"
        @zoomend="syncCenterAndZoom" -->
</template>

<script>
import Myform from "@/components/Form/Form";
import MyformData from "./Mapform";

export default {
  components: {
    Myform
  },
  data() {
    return {
      MyformData,
      center: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 15,
      // markerPoint:{
      //   lng:116.404,
      //   lat:39.915
      // },
      show: false,
      from: {},
      position: {},
      markers: [
        {
          markerPoint: { lng: 116.404, lat: 39.915 },
          name: "xiaoqu",
          xianghao: "BADWQI32221",
          adds: "差分状态:N",
          time: "上报时间:2020/11/01 13:48"
        },
        {
          name: "xiaoqu1",
          markerPoint: { lng: 116.39, lat: 39.915 },
          xianghao: "ABCD873873",
          adds: "差分状态:Y",
          time: "上报时间:2020/11/23 13:48"
        },
        {
          name: "xiaoqu2",
          markerPoint: { lng: 116.38, lat: 39.915 },
          xianghao: "EERQSIA21",
          adds: "差分状态:N",
          time: "上报时间:2018/11/23 11:48"
        }
      ]
    };
  },
  methods: {
    // syncCenterAndZoom (e) {
    //   const {lng, lat} = e.target.getCenter()
    //   this.center.lng = lng
    //   this.center.lat = lat
    //   this.zoom = e.target.getZoom()
    // },
    // 点击事件
    infoWindowClose() {
      this.show = false;
    },
    infoWindowOpen() {
      this.show = true;
    },
    look(items) {
      console.log(items);
      this.from = items;
      // this.position = items.markerPoint;
      this.show = true;
    },
    clickButton(val) {
      // 调用事件
      this[val.methods](val.row);
    },
    search() {}
  }
};
</script>

.<style lang="less" scoped>
.map_Content {
  width: 100%;
  height: calc(100% - 70px);
}
.map {
  width: 100%;
  height: 100%;
}
</style>
