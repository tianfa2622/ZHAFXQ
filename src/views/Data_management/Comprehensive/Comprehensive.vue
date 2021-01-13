<template>
  <div id="container"></div>
</template>

<script>
import AMap from "AMap";
import Dialog from "./components/dialog";
import Vue from "vue";
// var map
export default {
  data() {
    return {
      dialogVisible: false
      // map: undefined
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var map = new AMap.Map("container", {
        // center: [112.932841, 28.206193],
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
      // map.setMapStyle('amap://styles/10cb4770982508767fdce2bf5e5f7412')
      const icon = new AMap.Icon({
        size: new AMap.Size(40, 40),
        image: require("../../../assets/images/DataManagement/u765.png"),
        imageSize: new AMap.Size(40, 40),
        anchor: "center"
      });
      const langlats = [
        [113.041681, 28.175402],
        [113.050425, 28.169996]
      ];
      var markers = [];
      var infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(5, -40) });
      for (let i = 0; i < langlats.length; i++) {
        const lnglat = langlats[i];
        // 创建点实例
        var marker = new AMap.Marker({
          position: new AMap.LngLat(lnglat[0], lnglat[1]),
          icon: icon,
          extData: {
            id: i + 1
          },
          offset: new AMap.Pixel(-15, -40)
        });
        markers.push(marker);
        const Content = Vue.extend({
          render: function(createElement) {
            return createElement(Dialog);
          }
        });
        marker.content = new Content().$mount().$el;
        const markerClick = function(e) {
          infoWindow.setContent(e.target.content);
          infoWindow.open(map, e.target.getPosition());
        };
        marker.on("click", markerClick);
        // marker.emit('click', { target: marker })
      }
      map.setFitView();
      var overlayGroups = new AMap.OverlayGroup(markers);
      map.add(overlayGroups);
      AMap.plugin(
        ["AMap.ToolBar", "AMap.Scale", "AMap.ControlBar", "AMap.Weather"],
        function() {
          map.addControl(
            new AMap.ToolBar({
              position: "RB",
              offset: new AMap.Pixel(40, 115),
              ruler: false,
              locate: true,
              liteStyle: true
            })
          );
          map.addControl(new AMap.Scale());
          map.addControl(
            new AMap.ControlBar({
              showZoomBar: false,
              showControlButton: true,
              position: {
                right: "20px",
                bottom: "80px"
              }
            })
          );
          var weather = new AMap.Weather();
          // 执行实时天气信息查询
          weather.getLive("长沙市", function(err, data) {
            console.log(err, data);
          });
        }
      );
    },
    handleClose() {},
    Display() {
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="less">
#container {
  width: 100%;
  height: 100%;
}
.amap-info-content {
  padding: 22px 18px 10px 10px;
  background-color: rgba(255, 255, 255, 0.4);
}
</style>
<style lang="less">
.table1 tr th,
.table1 tr td {
  border: 1px solid #ccc;
  padding: 20px;
}
.Astyle {
  margin-top: 10px;
  a {
    margin-left: 20px;
  }
}
// .tabel1 tfoot tr td {
//   border: none;
// }
// .tabel1 tfoot tr td > a {
//   margin-left: 20px;
// }
.table1 {
  background-color: rgba(255, 255, 255, 0.1);
  text-align: center;
  border-collapse: collapse;
}
</style>
