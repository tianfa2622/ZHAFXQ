/* eslint-disable no-unused-vars */
<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>小区单位档案</el-breadcrumb-item>
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
