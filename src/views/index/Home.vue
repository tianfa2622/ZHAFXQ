<template>
  <div class="fill_height fill_width dflex">
    <div class="w-60 h-100 dlfex direction-column">
      <div class="dflex h-60 w-100">
        <div class="dflex direction-column h-100 w-50">
          <div class="h-40 w-100 yjbg p-10">
            <el-card class="box-card" shadow="never">
              <div slot="header">
                <span>人员概况</span>
              </div>
              <el-row
                type="flex"
                class="h-100"
                justify="space-around"
                align="middle"
              >
                <el-col
                  :span="6"
                  v-for="(item, index) in StaffProfile"
                  :key="index"
                >
                  <div class="personnel_box">
                    <span>{{ item.number }}</span>
                    <h1>{{ item.name }}</h1>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </div>

          <div class="h-2"></div>

          <div class="h-58 w-100 yjbg p-10">
            <el-card
              class="box-card h-100 w-100"
              :body-style="{ padding: '0px' }"
              shadow="never"
            >
              <div slot="header">
                <span>车辆统计</span>
              </div>
              <MyEcharts :option="options"></MyEcharts>
            </el-card>
          </div>
        </div>

        <div class="w-2"></div>

        <div class="h-100 w-58">
          <el-card
            class="box-card h-100 w-100"
            :body-style="{ padding: '0px' }"
          >
            <div slot="header">
              <span>小区基本信息</span>
            </div>
            <IndexMap></IndexMap>
          </el-card>
        </div>
      </div>

      <div class="h-2 w-100"></div>

      <div class="h-38 w-100 yjbg p-20">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane
            v-for="(item, index) in tabs"
            :key="index"
            :label="item.label"
            :name="item.name"
          >
            <Mytable
              :size="tabsData.size"
              :CardAttributes="tabsData.CardAttributes"
              :tableData="tabsData.tableData"
              :tableColumns="tabsData.tableColumns"
              :tableOption="tabsData.tableOption"
              :HeaderCellStyle="tabsData.HeaderCellStyle"
              :RowStyle="tabsData.RowStyle"
            ></Mytable>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <div class="w-1 h-100 p-10"></div>

    <div class="w-39 h-100 dflex direction-column">
      <div class="h-48 w-100 yjbg p-10">
        <Mytable
          class="Mytable"
          :tableData="tableoptions.tableData"
          :tableColumns="tableoptions.tableColumns"
          :tableOption="tableoptions.tableOption"
          :CardAttributes="tableoptions.CardAttributes"
          :HeaderCellStyle="tableoptions.HeaderCellStyle"
          :RowStyle="tableoptions.RowStyle"
        ></Mytable>
      </div>
      <div class="h-2 w-100"></div>
      <div class="h-50 w-100 yjbg p-10">
        <el-card
          class="box-card h-100 w-100"
          shadow="never"
          :body-style="{ padding: '0px' }"
        >
          <div slot="header">
            <span>房屋使用情况</span>
          </div>
          <MyEcharts :option="options1"></MyEcharts>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import options from "./indexEchartsData/VehicleStatistics"; // echarts 车辆统计数据
import options1 from "./indexEchartsData/HousingUsage"; // echarts 房屋使用情况数据
import IndexMap from "./map/indexMap"; // 地图
import tableoptions from "./tableData/Equipment"; // 设备table数据
import Inspection from "./tableData/Inspection"; // 巡查table数据
import Perceive from "./tableData/Perceive"; // 感知table数据
import { getStaffProfile } from "@/api/home/api";
export default {
  components: {
    IndexMap
  },
  data() {
    return {
      options,
      options1,
      tableoptions,
      tabsData: {},
      StaffProfile: [],
      activeName: "first",
      tabs: [
        {
          label: "巡查预警",
          name: "first"
        },
        {
          label: "感知预警",
          name: "second"
        }
      ]
    };
  },
  created() {
    this.tabsdata();
  },
  mounted() {
    getStaffProfile().then(res => {
      let data = res;
      let array = Object.keys(data);
      let obj = {};
      for (let i = 0; i < array.length; i++) {
        (obj.name = array[i]), (obj.number = data[array[i]]);
        this.StaffProfile.push(obj);
      }
    });
  },
  methods: {
    handleClick() {
      this.tabsdata();
    },
    tabsdata() {
      if (this.activeName === "first") {
        this.tabsData = Inspection;
      } else {
        this.tabsData = Perceive;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.w-1 {
  width: 1%;
}
.w-39 {
  width: 39%;
}
.w-2 {
  width: 2%;
}
.h-58 {
  height: 58%;
}
.w-58 {
  width: 58%;
}
.w-38 {
  width: 38%;
}
.h-48 {
  height: 48%;
}
.h-2 {
  height: 2%;
}
::v-deep .el-table {
  background-color: rgba(0, 0, 0, 0);
}
::v-deep .el-card {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  height: 100%;
  .el-card__header {
    // background-color: rgb(0, 51, 102);
    background-color: rgba(0, 0, 0, 0);
    font-size: 16px;
    padding: 10px 20px !important;
    border: none;
    color: rgb(0, 110, 255);
  }
  .el-card__body {
    // background-color: rgb(51, 51, 153);
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: calc(100% - 41px);
    .el-table__body-wrapper {
      background-color: rgba(0, 0, 0, 0);
    }
  }
}
.personnel_box {
  width: 97px;
  height: 52px;
  border: 1px solid rgba(121, 121, 121, 1);
  text-align: center;
  span {
    color: #66ff99;
    font-weight: 700;
    font-size: 18px;
  }
  h1 {
    font-weight: 14px;
    color: #ffffff;
    font-weight: 400;
    margin-top: 3px;
  }
}
::v-deep .status-Online {
  color: #66ff99 !important;
}
::v-deep .status-Offline {
  color: #ccc !important;
}
::v-deep .el-tabs__item {
  color: #ffffff;
  overflow: hidden;
  margin-right: 20px;
  background-image: url(../../assets/images/index/Unselected.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
::v-deep .is-active {
  overflow: hidden;
  background-image: url(../../assets/images/index/Selected.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
::v-deep .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  padding: 0 20px;
}
::v-deep .el-tabs--top .el-tabs__item.is-top:last-child {
  padding: 0 20px;
}
::v-deep .el-tabs__nav-wrap::after {
  display: none;
}
::v-deep .el-tabs__active-bar {
  display: none;
}
.yjbg {
  overflow: hidden;
  background-image: url(../../assets/images/index/yjbj.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  // -moz-border-image: url(../../assets/images/index/yjbj.png) 16 23 20 14 round; /* Old Firefox */
  // -webkit-border-image: url(../../assets/images/index/yjbj.png) 16 23 20 14
  //   round; /* Safari and Chrome */
  // -o-border-image: url(../../assets/images/index/yjbj.png) 16 23 20 14 round; /* Opera */
  // border-image: url(../../assets/images/index/yjbj.png) 16 23 20 14 round;
}
::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #006291;
}
</style>
