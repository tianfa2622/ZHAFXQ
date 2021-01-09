<template>
  <div class="fill_height fill_width dflex">
    <div class="w-60 h-100 dlfex direction-column">
      <div class="dflex h-60 w-100">
        <div class="dflex direction-column h-100 w-50">
          <div class="h-40 w-100">
            <el-card class="box-card" shadow="never" body-style="height:100%">
              <div slot="header">
                <span>人员概况</span>
              </div>
              <el-row type="flex" justify="space-around" align="middle">
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
          <div class="h-58 w-100">
            <el-card class="box-card h-100 w-100" shadow="never">
              <div slot="header">
                <span>车辆统计</span>
              </div>
              <EchartsPackage :option="options"></EchartsPackage>
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
      <div class="h-40 w-100"></div>
    </div>
    <div class="w-2 h-100"></div>
    <div class="w-38 h-100 dflex direction-column">
      <div class="h-50">
        <Mytable
          :tableData="tableoptions.tableData"
          :tableColumns="tableoptions.tableColumns"
          :tableOption="tableoptions.tableOption"
          :CardAttributes="tableoptions.CardAttributes"
        ></Mytable>
      </div>
      <div class="h-50"></div>
    </div>
  </div>
</template>

<script>
import EchartsPackage from "../../components/echarts/index";
import options from "./indexEchartsData/VehicleStatistics";
import IndexMap from "./map/indexMap";
import Mytable from "../../components/table/table";
import tableoptions from "./tableData/Equipment";
export default {
  components: {
    EchartsPackage,
    IndexMap,
    Mytable
  },
  data() {
    return {
      options,
      tableoptions,
      StaffProfile: [
        {
          number: "12000",
          name: "常住人口"
        },
        {
          number: "8000",
          name: "流动人口"
        },
        {
          number: "4500",
          name: "重点人员"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
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
::v-deep .el-card {
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  .el-card__header {
    background-color: rgb(0, 51, 102);
    font-size: 16px;
    padding: 10px 20px !important;
    border: none;
    color: rgb(0, 110, 255);
  }
  .el-card__body {
    background-color: rgb(51, 51, 153);
    width: 100%;
    height: calc(100% - 41px);
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
</style>
