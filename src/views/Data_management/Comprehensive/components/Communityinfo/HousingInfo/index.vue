/* eslint-disable no-unused-vars */
<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator=">>">
        <!-- :to="{ path: '/UserManagement' }" -->
        <el-breadcrumb-item>
          <span @click="changePage('1')" class="pointer"> 小区综合档案 </span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <span @click="changePage('5')" class="pointer"> 辉煌国际 </span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <span @click="changePage('8')" class="pointer"> 3栋 </span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>2单元</el-breadcrumb-item>
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
        :size="MyTableData.size"
        :tableData="MyTableData.tableData"
        :tableColumns="MyTableData.tableColumns"
        :tableOption="MyTableData.tableOption"
        :HeaderCellStyle="MyTableData.HeaderCellStyle"
        @sizeChange="sizeChange"
        @pageChange="pageChange"
        @clickButton="clickButton"
        :CardAttributes="MyTableData.CardAttributes"
        :pagination="MyTableData.pagination"
      ></Mytable>
      <!-- </div> -->
    </div>
    <Editor
      :type="editorType"
      :visible.sync="editorVisible"
      :fields="fields"
      @confirm="confirm"
      :labelWidth="labelWidth"
    />
  </div>
</template>

<script>
import MyformData from "./HousingInfoForm/HousingInfo";
import MyTableData from "./HousingInfoTable/HousingInfo";
import fields from "./editor";
export default {
  name: "HousingInfo",
  props: {
    currentPage: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      MyformData,
      MyTableData,
      fields,
      editorType: "view",
      editorVisible: false,
      labelWidth: "210px"
    };
  },
  methods: {
    // 点击事件
    clickButton(val) {
      // 调用事件
      // this[val.methods](val.row);
      if (val.methods === "details") {
        this.openEditor(val.methods, val.row);
      } else {
        this[val.methods](val.row);
      }
    },
    openEditor(type, row) {
      console.log(type, row);
      switch (type) {
        case "Increase":
          this.editorType = "add";
          break;
      }
      this.editorVisible = true;
    },
    confirm(formData) {
      console.log(formData);
      // 请求接口提交数据 等等
      this.editorVisible = false;
    },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.rows = val;
    },
    // 翻页
    pageChange(val) {
      this.page = val;
    },
    // eslint-disable-next-line no-unused-vars
    ViewRelationship(val) {
      this.changePage("10");
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

<style lang="less" scoped>
.bgc {
  background-color: #fff;
  .vehicle_bottom {
    width: 100%;
    height: calc(100% - 70px);
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
