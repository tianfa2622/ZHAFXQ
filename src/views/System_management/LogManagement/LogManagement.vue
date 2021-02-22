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
          :formData="paramsData"
          :form="MyformData.form"
          :itemColumns="MyformData.itemColumns"
          :btnData="MyformData.btnData"
          @clickButton="FormclickButton"
        ></Myform>
      </el-card>
    </div>
    <div class="vehicle_bottom dflex">
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
    </div>

    <!-- 详情 -->
    <el-dialog
      :visible.sync="dialogVisible"
      title="详情"
      width="40%"
      style="height: 100%"
    >
      <el-table
        :data="viewtableDate"
        size="small"
        fit
        border
        style="width: 100%"
      >
        <el-table-column
          type="index"
          label="NO."
          align="center"
          width="50px"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="tableName"
          :resizable="false"
          label="表名"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="columnName"
          :resizable="false"
          label="字段名"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="updateFront"
          label="修改前的值"
          align="center"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="updateEnd"
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
import {
  getSelectAll,
  getSelectOne
} from '@/api/System_management/LogManagement/index'
import MyformData from './LogManagementform/LogManagementform'
import MyTableData from './LogManagementtable/LogManagementtable'
export default {
  data() {
    return {
      MyformData,
      MyTableData,
      dialogVisible: false,
      viewtableDate: [],
      tableData: [],
      pagination: {
        isBackC: true,
        isShow: true,
        currentPage: 1,
        size: 10,
        total: 10
      },
      paramsData: { operationTime: null }
    }
  },
  created() {
    this.getSelectAllInfo()
  },
  methods: {
    getSelectAllInfo() {
      getSelectAll({
        ...this.paramsData,
        current: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        if (res.code === 1) {
          this.tableData = res.data.records
          this.pagination.total = res.data.total
          Object.assign(this.$data.paramsData, this.$options.data().paramsData)
          this.$message.success(res.message)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    getSelectOneInfo(row) {
      getSelectOne(row.id).then(res => {
        console.log(res)
        if (res.code === 1) {
          this.viewtableDate = [res.data]
          this.dialogVisible = true
          this.$message.success(res.message)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    // onSubmit() {
    // },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.pagination.size = val
      this.getSelectAllInfo()
    },
    // 翻页
    pageChange(val) {
      this.pagination.currentPage = val
      this.getSelectAllInfo()
    },
    // 点击事件
    clickButton(val) {
      // 调用事件
      this[val.methods](val.row)
    },
    FormclickButton(val) {
      this[val.methods](val.formData)
    },
    view(row) {
      this.getSelectOneInfo(row)
    },
    search(v) {
      this.paramsData = { ...v }
      this.getSelectAllInfo()
    }
  }
}
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
