<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>小区车辆档案</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="card_style" body-style="padding-bottom: 0px;">
        <Myform
          :formData="MyformData.formData"
          :form="MyformData.form"
          :itemColumns="MyformData.itemColumns"
          :btnData="MyformData.btnData"
          @clickButton="clickButton"
        ></Myform>
      </el-card>
    </div>
    <div class="vehicle_bottom dflex">
      <div class="h-100 w-69">
        <Mytable
          :size="vehicleData.size"
          :tableData="vehicleData.tableData"
          :tableColumns="vehicleData.tableColumns"
          :tableOption="vehicleData.tableOption"
          :HeaderCellStyle="vehicleData.HeaderCellStyle"
          @sizeChange="sizeChange"
          @pageChange="pageChange"
          @clickButton="clickButton"
          :CardAttributes="vehicleData.CardAttributes"
          :pagination="vehicleData.pagination"
        ></Mytable>
      </div>
      <div class="w-1"></div>
      <div class="w-30 h-100">
        <el-card
          class="w-100 h-100"
          :body-style="{ padding: '0px', height: 'calc(100% - 53px)' }"
        >
          <div slot="header">
            <span>小区车辆类别</span>
          </div>
          <div class="w-100 h-70">
            <MyEcharts :option="options"></MyEcharts>
          </div>
          <el-table border :data="tableData" style="width: 100%">
            <el-table-column prop="number" :resizable="false">
            </el-table-column>
            <el-table-column
              prop="MotorVehicles"
              :resizable="false"
              label="机动车"
            >
            </el-table-column>
            <el-table-column
              prop="ElectricVehicle"
              :resizable="false"
              label="电动车"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import Mytable from "../../../components/table/table"; // table组件
import Myform from "../../../components/Form/Form.vue";
import MyEcharts from "../../../components/echarts/index";
import MyformData from "./vehicleform/vehicle";
import vehicleData from "./vehicletable/vehicletable";
import options from "./vehicleEcharts/vehicleEcharts";
export default {
  components: {
    Myform,
    Mytable,
    MyEcharts
  },
  data() {
    return {
      MyformData,
      vehicleData,
      options,
      tableData: [
        {
          number: "数量",
          MotorVehicles: 504,
          ElectricVehicle: 312
        }
      ]
    };
  },
  methods: {
    // onSubmit() {
    // },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.rows = val;
    },
    // 翻页
    pageChange(val) {
      this.page = val;
    },
    // 点击事件
    clickButton(val) {
      // 调用事件
      this[val.methods](val.row);
    },
    toView(val) {
      // 我是查看
    },
    editor(val) {
      // 我是编辑
    },
    search() {},
    Increase() {}
  }
};
</script>

<style lang="less" scoped>
.bgc {
  background-color: #fff;
  .vehicle_bottom {
    width: 100%;
    height: calc(100% - 168px);
    margin-top: 10px;
    .w-69 {
      width: 69%;
    }
    .w-1 {
      width: 1%;
    }
  }
}
::v-deep .el-breadcrumb__item {
  margin: 10px 0px 10px 10px;
  span {
    color: #ff6600 !important;
  }
}
.card_style {
  overflow: visible !important;
}
</style>
