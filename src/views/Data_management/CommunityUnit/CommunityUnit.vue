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
      <!-- <div class="h-100 w-69"> -->
      <Mytable
        :size="UnitData.size"
        :tableData="UnitData.tableData"
        :tableColumns="UnitData.tableColumns"
        :tableOption="UnitData.tableOption"
        :HeaderCellStyle="UnitData.HeaderCellStyle"
        @sizeChange="sizeChange"
        @pageChange="pageChange"
        @clickButton="clickButton"
        :CardAttributes="UnitData.CardAttributes"
        :pagination="UnitData.pagination"
      ></Mytable>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import Mytable from "../../../components/table/table"; // table组件
import Myform from "../../../components/Form/Form.vue";
import MyformData from "./Unitform/Unitform";
import UnitData from "./Unittable/Unittable";
export default {
  components: {
    Myform,
    Mytable
  },
  data() {
    return {
      MyformData,
      UnitData
    };
  },
  methods: {
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
    toView(val) {
      // 我是查看
      console.log(val);
    },
    editor(val) {
      // 我是编辑
      console.log(val);
    },
    search() {
      console.log("搜索");
    },
    Increase() {
      console.log("新增");
    }
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
