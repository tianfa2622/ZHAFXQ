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
        <el-breadcrumb-item>3栋</el-breadcrumb-item>
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
      :width="width"
      :type="editorType"
      :visible.sync="editorVisible"
      :fields="fields"
      @confirm="confirm"
      :editData="editData"
      :labelWidth="labelWidth"
    />
    <el-dialog :visible.sync="dialogVisible" width="30%">
      <el-image :src="src">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
      </el-image>
    </el-dialog>
  </div>
</template>

<script>
import { getSelectAll } from "@/api/Data_management/index/Unit_Info/index";
import MyformData from "./Unit_InfoForm/Unit_Info";
import MyTableData from "./Unit_InfoTable/Unit_Info";
import fields from "./editor";
export default {
  name: "Unit_info",
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
      dialogVisible: false,
      fields,
      editorType: "view",
      editorVisible: false,
      labelWidth: "210px",
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      pagination: {
        isBackC: true,
        isShow: true,
        currentPage: 1,
        size: 10,
        total: 10
      },
      editData: {},
      paramsData: {
        mc: ""
      },
      tableData: []
    };
  },
  created() {
    this.getSelectInfo();
  },
  methods: {
    getSelectInfo() {
      getSelectAll({
        // shdyBh: "123",
        ...this.paramsData,
        current: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        console.log(res.data);
        if (res.code === 1) {
          this.tableData = res.data.records;
          this.pagination.total = res.data.total;
          Object.assign(this.$data.paramsData, this.$options.data().paramsData);
        } else {
          this.$message.error(res.message);
        }
      });
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
      this.pagination.size = val;
      this.getSelectInfo();
    },
    // 翻页
    pageChange(val) {
      this.paramsData.currentPage = val;
      this.getSelectInfo();
    },
    // eslint-disable-next-line no-unused-vars
    unitImg(val) {
      this.dialogVisible = true;
    },
    // eslint-disable-next-line no-unused-vars
    HousingInfo(val) {
      this.changePage("9");
    },
    search(v) {
      this.paramsData = { ...v };
      this.getSelectInfo();
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
