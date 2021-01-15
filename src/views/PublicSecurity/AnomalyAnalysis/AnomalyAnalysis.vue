<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator=">>">
        <el-breadcrumb-item :to="{ path: '/StaffAnalysis' }">
          治安防范
        </el-breadcrumb-item>
        <el-breadcrumb-item>异常研判分析</el-breadcrumb-item>
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
    <div class="vehicle_bottom">
      <el-tabs
        type="border-card"
        class="h-100 w-100"
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          v-for="(item, index) in tabs"
          :key="index"
          :label="`${item.label}(${item.number})`"
          :name="item.name"
        >
          <Mytable
            :size="tabsData.size"
            :tableData="tabsData.tableData"
            :tableColumns="tabsData.tableColumns"
            :tableOption="tabsData.tableOption"
            @sizeChange="sizeChange"
            @pageChange="pageChange"
            @clickButton="clickButton"
            :CardAttributes="tabsData.CardAttributes"
            :pagination="tabsData.pagination"
          ></Mytable>
        </el-tab-pane>
      </el-tabs>

      <!-- <div class="h-100 w-40">
        <el-card
          class="w-100 h-50"
          :body-style="{ padding: '0px', height: 'calc(100% - 53px)' }"
        >
          <div slot="header">
            <span>小区人员分析</span>
          </div>
          <MyEcharts :option="options"></MyEcharts>
        </el-card>
        <div class="h-1"></div>
        <el-card
          class="w-100 h-49"
          :body-style="{ padding: '0px', height: 'calc(100% - 53px)' }"
        >
          <div slot="header">
            <span>行政区域人员分析</span>
          </div>
          <MyEcharts :option="options1"></MyEcharts>
        </el-card>
      </div>
      <div class="w-1"></div>
      <div class="w-59 h-100">
        <Mytable
          :size="MytableData.size"
          :tableData="MytableData.tableData"
          :tableColumns="MytableData.tableColumns"
          :HeaderCellStyle="MytableData.HeaderCellStyle"
          @sizeChange="sizeChange"
          @pageChange="pageChange"
          :CardAttributes="MytableData.CardAttributes"
          :pagination="MytableData.pagination"
        ></Mytable>
      </div> -->
    </div>
  </div>
</template>

<script>
import Mytable from "../../../components/table/table"; // table组件
import Myform from "../../../components/Form/Form.vue";
import MyformData from "./AnomalyAnalysisform/AnomalyAnalysisform";
import personnelTable from "./AnomalyAnalysistable/personnelTable";
import vehicleTable from "./AnomalyAnalysistable/vehicleTable";
import GatherTable from "./AnomalyAnalysistable/GatherTable";
export default {
  components: {
    Myform,
    Mytable
  },
  data() {
    return {
      MyformData,
      personnelTable,
      vehicleTable,
      GatherTable,
      tabsData: {},
      activeName: "first",
      tabs: [
        {
          label: "人员异常",
          name: "first",
          number: 2182
        },
        {
          label: "车辆异常",
          name: "second",
          number: 2182
        },
        {
          label: "聚集异常",
          name: "third",
          number: 2182
        }
      ]
    };
  },
  created() {
    this.tabsdata();
  },
  methods: {
    handleClick() {
      this.tabsdata();
    },
    tabsdata() {
      if (this.activeName === "first") {
        this.tabsData = personnelTable;
      } else if (this.activeName === "second") {
        this.tabsData = vehicleTable;
      } else {
        this.tabsData = GatherTable;
      }
    },
    // onSubmit() {
    //   console.log("submit!");
    // },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.rows = val;
      console.log(`每页 ${val} 条`);
    },
    // 翻页
    pageChange(val) {
      this.page = val;
      console.log(`当前页: ${val}`);
    },
    // 点击事件
    clickButton(val) {
      // 调用事件
      console.log(val);
      this[val.methods](val.row);
    },
    dealWith(val) {
      // 我是处理
      console.log(val);
    },
    search() {
      console.log("搜索");
    }
  }
};
</script>

<style lang="less" scoped>
.h-1 {
  height: 1%;
}
.h-49 {
  height: 49%;
}
.bgc {
  background-color: #fff;
  .vehicle_bottom {
    width: 100%;
    height: calc(100% - 117px);
    margin-top: 10px;
  }
}
::v-deep .el-breadcrumb__item {
  margin: 10px 0px 10px 10px;
  span {
    color: #ff6600 !important;
  }
}
::v-deep .el-tabs__content {
  height: calc(100% - 54px);
  padding-bottom: 0px;
  .el-tab-pane {
    height: 100%;
  }
}
.card_style {
  overflow: visible !important;
}
::v-deep .status-Yes {
  color: #5efb99 !important;
}
::v-deep .status-No {
  color: #ff5065 !important;
}
</style>
