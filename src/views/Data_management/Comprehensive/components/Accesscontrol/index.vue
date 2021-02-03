/* eslint-disable no-unused-vars */
<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator=">>">
        <!-- :to="{ path: '/UserManagement' }" -->
        <el-breadcrumb-item>
          <span @click="changePage('1')" class="pointer"> 小区综合档案 </span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>辉煌国际门禁</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="card_style" body-style="padding-bottom: 0px;">
        <Myform
          :formData="paramsData"
          :form="MyformData.form"
          :itemColumns="MyformData.itemColumns"
          :btnData="MyformData.btnData"
          @clickButton="FormclickButton"
        ></Myform>
      </el-card>
    </div>
    <div class="vehicle_bottom dflex">
      <!-- <div class="h-100 w-69"> -->
      <Mytable
        :size="MyTableData.size"
        :tableData="tableData"
        :tableColumns="MyTableData.tableColumns"
        :tableOption="MyTableData.tableOption"
        :HeaderCellStyle="MyTableData.HeaderCellStyle"
        @sizeChange="sizeChange"
        @pageChange="pageChange"
        @clickButton="clickButton"
        :CardAttributes="MyTableData.CardAttributes"
        :pagination="pagination"
      ></Mytable>
      <!-- </div> -->
    </div>
    <Editor
      :title="title"
      v-if="editorVisible"
      :type="editorType"
      :visible.sync="editorVisible"
      :fields="fields"
      :width="width"
      :editData="editData"
      @confirm="confirm"
      :labelWidth="labelWidth"
    />
  </div>
</template>

<script>
import { getSelectAll } from "@/api/Data_management/index/Accesscontrol/index";
import MyformData from "./AccesscontrolForm/AccesscontrolForm";
import MyTableData from "./AccesscontrolTable/AccesscontrolTable";
import fields from "./editor";
export default {
  name: "Accesscontrol",
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
      editorType: "add",
      editorVisible: false,
      labelWidth: "150px",
      pagination: {
        isBackC: true,
        isShow: true,
        currentPage: 1,
        size: 10,
        total: 10
      },
      editData: {},
      paramsData: {
        mc: "",
        xjfx: ""
      },
      tableData: [],
      width: ""
    };
  },
  created() {
    this.getSelectInfo();
  },
  methods: {
    getSelectInfo() {
      getSelectAll({
        ...this.paramsData,
        current: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        console.log(res);
        if (res.code === 1) {
          this.tableData = res.data.records;
          for (const key in this.tableData) {
            let value = "djrXmDh";
            let XmDh = `${this.tableData[key].djrXm} | ${this.tableData[key].djrLxdh}`;
            this.tableData[key][value] = XmDh;
          }
          this.pagination.total = res.data.total;
          Object.assign(this.$data.paramsData, this.$options.data().paramsData);
          this.$message.success(res.message);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.pagination.size = val;
      this.getSelectInfo();
    },
    // 翻页
    pageChange(val) {
      this.paramsData.currentPage = val;
      this.getSelectInfo();
    },
    // 点击事件
    clickButton(val) {
      // 调用事件
      this[val.methods](val.row);
    },
    FormclickButton(val) {
      this[val.methods](val.formData);
    },
    openEditor(type, row) {
      console.log(type, row);
      this.editorVisible = true;
    },
    confirm(formData) {
      console.log(formData);
      // 请求接口提交数据 等等
      this.editorVisible = false;
    },
    search(v) {
      this.paramsData = { ...v };
      this.getSelectInfo();
    },
    record() {
      this.changePage("7");
    },
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
