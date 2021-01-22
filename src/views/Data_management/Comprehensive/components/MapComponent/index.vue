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
        <template>
          <bm-marker
            v-for="(item, index) in markers"
            :key="index"
            :position="item.markerPoint"
            :title="item.name"
            @click="look(item)"
          >
            <bm-info-window
              :position="item.markerPoint"
              :show="item.showFlag"
              @close="infoWindowClose(item)"
              @open="infoWindowOpen(item)"
            >
              <div>
                <div>
                  <el-form label-width="120px" size="mini" :model="from">
                    <el-form-item label="小区名称：">
                      {{ from.xianghao }}
                    </el-form-item>
                    <el-form-item label="小区楼栋数：">
                      <span>{{ from.xianghao }}</span>
                    </el-form-item>
                    <el-form-item label="小区出入口数：">
                      <span>{{ from.xianghao }}</span>
                    </el-form-item>
                    <el-form-item label="物业公司名称：">
                      <span>{{ from.time }}</span>
                    </el-form-item>
                    <el-form-item label="地址：">
                      <span>{{ from.adds }}</span>
                    </el-form-item>
                  </el-form>
                  <!-- <span>小区名称：</span>
                    <span style="display: inline-block; width: 20px"> </span>
                    <span>{{ from.xianghao }}</span
                    ><br />
                    <span>小区楼栋数：</span>
                    <span style="display: inline-block; width: 20px"> </span>
                    <span>{{ from.xianghao }}</span
                    ><br />
                    <span>小区出入口数：</span>
                    <span style="display: inline-block; width: 20px"> </span>
                    <span>{{ from.xianghao }}</span
                    ><br />
                    <span>物业公司名称：</span>
                    <span style="display: inline-block; width: 20px"> </span>
                    <span>{{ from.time }}</span
                    ><br />
                    <span>地址：</span>
                    <span style="display: inline-block; width: 20px"> </span>
                    <span>{{ from.adds }}</span
                    ><br /> -->
                </div>
                <div class="mt-5">
                  <el-button
                    type="primary"
                    size="mini"
                    @click="changePage('2')"
                  >
                    访客记录
                  </el-button>
                  <el-button
                    type="primary"
                    size="mini"
                    @click="changePage('3')"
                  >
                    物业信息
                  </el-button>
                  <el-button
                    type="primary"
                    size="mini"
                    @click="changePage('3')"
                  >
                    停车场概况
                  </el-button>
                  <el-button
                    type="primary"
                    size="mini"
                    @click="changePage('5')"
                  >
                    小区信息
                  </el-button>
                  <el-button
                    type="primary"
                    size="mini"
                    @click="changePage('6')"
                  >
                    门禁信息
                  </el-button>
                </div>
              </div>
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
import MyformData from "./Mapform";

export default {
  name: "MapComponent",
  props: {
    currentPage: {
      type: String,
      required: true
    }
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
          time: "上报时间:2020/11/01 13:48",
          showFlag: false
        },
        {
          name: "xiaoqu1",
          markerPoint: { lng: 116.39, lat: 39.915 },
          xianghao: "ABCD873873",
          adds: "差分状态:Y",
          time: "上报时间:2020/11/23 13:48",
          showFlag: false
        },
        {
          name: "xiaoqu2",
          markerPoint: { lng: 116.38, lat: 39.915 },
          xianghao: "EERQSIA21",
          adds: "差分状态:S",
          time: "上报时间:2018/11/23 11:48",
          showFlag: false
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
    infoWindowClose(item) {
      item.showFlag = false;
    },
    infoWindowOpen(item) {
      item.showFlag = true;
    },
    look(items) {
      this.from = items;
      this.position = items.markerPoint;
      items.showFlag = true;
    },
    clickButton(val) {
      // 调用事件
      this[val.methods](val.row);
    },
    search() {},
    // 跳转页面
    changePage(target) {
      // 更新父组件传入的prop ‘currentPage’
      this.$emit("update:currentPage", target);
    }
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
::v-deep .el-form-item--mini.el-form-item {
  margin-bottom: 10px;
}
</style>
