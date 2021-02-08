<template>
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
            autoPan
            :position="item.markerPoint"
            :show="item.showFlag"
            @close="infoWindowClose(item)"
            @open="infoWindowOpen(item)"
          >
            <div>
              <el-form size="mini" :model="from">
                <el-form-item label="楼栋数量："> </el-form-item>
                <el-form-item label="人员总数：">
                  <span>{{ from.xianghao }}</span>
                </el-form-item>
                <el-form-item label="车位数量：">
                  <span>{{ from.xianghao }}</span>
                </el-form-item>
                <el-form-item label="设备数量：">
                  <span>{{ from.time }}</span>
                </el-form-item>
                <el-form-item label="房屋数量：">
                  <span>{{ from.adds }}</span>
                </el-form-item>
              </el-form>
            </div>
          </bm-info-window>
        </bm-marker>
      </template>
    </baidu-map>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
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
          xianghao: "333",
          adds: "444",
          time: "555",
          showFlag: true
        },
        {
          name: "xiaoqu1",
          markerPoint: { lng: 116.39, lat: 39.915 },
          xianghao: "222",
          adds: "989",
          time: "456",
          showFlag: false
        },
        {
          name: "xiaoqu2",
          markerPoint: { lng: 116.38, lat: 39.915 },
          xianghao: "888",
          adds: "666",
          time: "100",
          showFlag: false
        }
      ]
    };
  },
  methods: {
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
    }
  }
};
</script>

.<style lang="less" scoped>
.map_Content {
  width: 100%;
  height: 100%;
}
.map {
  width: 100%;
  height: 100%;
}
::v-deep .el-form-item--mini.el-form-item {
  margin-bottom: 5px;
}
::v-deep .anchorBL {
  display: none;
}
</style>
<style lang="less"></style>
