<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator=">>">
        <!-- :to="{ path: '/UserManagement' }" -->
        <el-breadcrumb-item :to="{ path: '/UserManagement' }">
          系统管理
        </el-breadcrumb-item>
        <el-breadcrumb-item>日志管理</el-breadcrumb-item>
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
    </div>

    <!-- 详情 -->
    <el-dialog
      :visible.sync="dialogVisible"
      title="详情"
      width="40%"
      style="height: 100%"
    >
      <el-table :data="tableDate1" size="small" fit border style="width: 100%">
        <el-table-column
          type="index"
          label="NO."
          align="center"
          width="50px"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="TableName"
          :resizable="false"
          label="表名"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="FieldName"
          :resizable="false"
          label="字段名"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="ValueBeforeModification"
          label="修改前的值"
          align="center"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="ModifiedValue"
          label="修改后的值"
          align="center"
          :resizable="false"
        >
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import MyformData from "./LogManagementform/LogManagementform";
import MyTableData from "./LogManagementtable/LogManagementtable";
export default {
  data() {
    return {
      MyformData,
      MyTableData,
      dialogVisible: false,
      tableDate1: [
        {
          TableName: "MotorVehicleEvent",
          FieldName: "FW_SY",
          ValueBeforeModification: "你好",
          ModifiedValue: "再见"
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
    Details(val) {
      console.log(val);
      this.dialogVisible = true;
      // 我是详情
    },
    search() {}
  }
};
</script>

<style lang="less" scoped>
.bgc {
  background-color: #fff;
  .vehicle_bottom {
    width: 100%;
    height: calc(100% - 117px);
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
