<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator=">>">
        <el-breadcrumb-item :to="{ path: '/StaffAnalysis' }">
          治安防范
        </el-breadcrumb-item>
        <el-breadcrumb-item>实有人口分析</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="card_style" body-style="padding-bottom: 0px;">
        <Myform
          :formData="paramsData"
          :form="MyformData.form"
          :itemColumns="MyformData.itemColumns"
          @clickButton="FormclickButton"
        ></Myform>
      </el-card>
    </div>
    <div class="vehicle_bottom dflex">
      <div class="h-100 w-40">
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
          :tableData="tableData"
          :tableColumns="MytableData.tableColumns"
          :HeaderCellStyle="MytableData.HeaderCellStyle"
          @sizeChange="sizeChange"
          @pageChange="pageChange"
          :CardAttributes="MytableData.CardAttributes"
          :pagination="pagination"
        ></Mytable>
      </div>
    </div>
  </div>
</template>

<script>
import MyformData from './StaffAnalysisform/StaffAnalysisform'
import MytableData from './StaffAnalysistable/StaffAnalysistable'
import options1 from './StaffAnalysisEcharts/administrative'
import options from './StaffAnalysisEcharts/Community'
import { getSelectAll } from '@/api/PublicSecurity/StaffAnalysis/index'
export default {
  data() {
    return {
      MyformData,
      MytableData,
      options,
      options1,
      // 表格数据
      tableData: [],
      pagination: {
        isBackC: true,
        isShow: true,
        currentPage: 1,
        size: 10,
        total: 20
      },
      paramsData: {
        area: [],
        jlxxqmc: ''
      }
    }
  },
  created() {
    this.getTableData()
  },
  methods: {
    getTableData() {
      getSelectAll({
        ...this.paramsData,
        current: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        if (res.code === 1) {
          this.tableData = res.data.records
          this.pagination.total = res.data.total
          // this.$message.success(res.message)
        } else {
          this.$message.error('查询成功')
        }
      })
    },

    // onSubmit() {
    // },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.pagination.size = val
      this.getTableData()
    },
    // 翻页
    pageChange(val) {
      this.pagination.currentPage = val
      this.getTableData()
    },
    // 点击事件
    FormclickButton(val) {
      this[val.methods](val.formData)
    },
    search(v) {
      this.paramsData = { ...v }
      this.getTableData()
    }
  }
}
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
    .w-59 {
      width: 59%;
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
