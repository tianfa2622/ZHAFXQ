<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="flex1">
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
      <div class="h-100 w-69">
        <Mytable
          :size="MytableData.size"
          :tableData="tableData"
          :tableColumns="MytableData.tableColumns"
          :tableOption="MytableData.tableOption"
          :HeaderCellStyle="MytableData.HeaderCellStyle"
          @sizeChange="sizeChange"
          @pageChange="pageChange"
          @clickButton="clickButton"
          :CardAttributes="MytableData.CardAttributes"
          :pagination="pagination"
        ></Mytable>
      </div>
      <div class="w-1"></div>
      <div class="w-30 h-100">
        <el-card
          class="w-100 h-100"
          :body-style="{ padding: '0px', height: 'calc(100% - 53px)' }"
        >
          <div slot="header">
            <span>预警关键词热力图</span>
          </div>
          <MyEcharts :option="options"></MyEcharts>
        </el-card>
      </div>
    </div>
    <Editor
      :title="title"
      v-if="editorVisible"
      :type="editorType"
      :visible.sync="editorVisible"
      :fields="fields"
      @confirm="confirm"
      :width="width"
      :editData="editData"
      :labelWidth="labelWidth"
    />
  </div>
</template>

<script>
import {
  getSelectAll,
  getSelectOne,
  putUpdate,
  addInsert
} from '@/api/PublicSecurity/EarlyWarningDisposal/index'
import MyformData from './formData/form'
import MytableData from './tableData/table'
import options from './EchartsData/Echarts'
import fields from './editor'
export default {
  data() {
    return {
      MyformData,
      MytableData,
      options,
      fields,
      editorType: 'add',
      editorVisible: false,
      width: '30%',
      labelWidth: '160px',
      tableData: [],
      pagination: {
        isBackC: true,
        isShow: true,
        currentPage: 1,
        size: 10,
        total: 10
      },
      paramsData: {
        ycyaMc: '',
        gjc: '',
        lrsjks: '',
        lrsjjs: '',
        lrsj: ''
      },
      editData: {},
      title: ''
    }
  },
  created() {
    this.getTableInfo()
  },
  methods: {
    getTableInfo() {
      this.paramsData.lrsjks = this.paramsData.lrsj[0]
      this.paramsData.lrsjjs = this.paramsData.lrsj[1]
      this.paramsData.lrsj = ''
      getSelectAll({
        current: this.pagination.currentPage,
        size: this.pagination.size,
        ...this.paramsData
      }).then(res => {
        if (res.code === 1) {
          this.tableData = res.data.records
          this.pagination.total = res.data.total
          Object.assign(this.$data.paramsData, this.$options.data().paramsData)
          // this.$message.success(res.message);
        } else {
          Object.assign(this.$data.paramsData, this.$options.data().paramsData)
          this.$message.error('查询成功')
        }
      })
    },
    getColumnData(row) {
      getSelectOne(row.xcyaxxbz).then(res => {
        if (res.code === 1) {
          this.editData = res.data
          this.editorVisible = true
          this.$message.success(res.message)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    editColumnData(data) {
      putUpdate(data).then(res => {
        if (res.code === 1) {
          this.editorVisible = false
          this.$message.success(res.message)
          this.getTableInfo()
        } else {
          this.$message.error(res.message)
        }
      })
    },
    addColumnData(data) {
      data.xcyaxxbz = `xcya${this.pagination.total + 1}`
      addInsert(data).then(res => {
        if (res.code === 1) {
          this.$message.success(res.message)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    // 点击事件
    clickButton(val) {
      // 调用事件
      this[val.methods](val.row)
    },
    FormclickButton(val) {
      this[val.methods](val.formData)
    },
    confirm(formData) {
      // 请求接口提交数据 等等
      if (this.editorType === 'add') {
        this.addColumnData(formData)
      } else {
        formData.ztm = 1
        this.editColumnData(formData)
      }
      // 请求接口提交数据 等等
      this.getTableInfo()
      this.editorVisible = false
    },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.pagination.size = val
      this.getTableInfo()
    },
    // 翻页
    pageChange(val) {
      this.pagination.currentPage = val
      this.getTableInfo()
    },
    edit(val) {
      this.title = '处理'
      this.editorType = 'edit'
      this.getColumnData(val)
      // 我是处理
    },
    view(val) {
      this.title = '处理结果'
      this.editorType = 'view'
      this.getColumnData(val)
      // 我是处理结果
    },
    search(v) {
      console.log(this.paramsData)
      this.paramsData = { ...v }
      this.getTableInfo()
    },
    add() {
      this.editorType = 'add'
      this.editorVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
.bgc {
  background-color: #fff;
  .vehicle_bottom {
    width: 100%;
    height: calc(100% - 124px);
    margin-top: 10px;
    .w-69 {
      width: 69%;
    }
    .w-1 {
      width: 1%;
    }
  }
}

.card_style {
  overflow: visible !important;
}
</style>
