<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator=">>">
        <el-breadcrumb-item :to="{ path: '/StaffAnalysis' }">
          治安防范
        </el-breadcrumb-item>
        <el-breadcrumb-item>信息核实反馈</el-breadcrumb-item>
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
            <span>信息核实</span>
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
      :editData="editData"
      :labelWidth="labelWidth"
    />
  </div>
</template>

<script>
import {
  getSelectAll,
  postInsert,
  getSelectOne
} from '@/api/PublicSecurity/VerifyFeedback/index'
import MyformData from './VerifyFeedbackform/VerifyFeedbackform'
import MytableData from './VerifyFeedbacktable/VerifyFeedbacktable'
import fields from './editor'
import options from './VerifyFeedbackEcharts/VerifyFeedbackEcharts'
export default {
  data() {
    return {
      MyformData,
      MytableData,
      options,
      fields,
      editorType: 'view',
      labelWidth: '150px',
      // inline: false,
      editorVisible: false,
      tableData: [],
      pagination: {
        isBackC: true,
        isShow: true,
        currentPage: 1,
        size: 10,
        total: 10
      },
      paramsData: {
        fblx: null,
        fbRqsj: '',
        fbnr: '',
        fbRqsjks: '',
        fbRqsjjs: ''
      },
      editData: {},
      title: ''
    }
  },
  created() {
    this.getFeedbackInfo()
  },
  methods: {
    getFeedbackInfo() {
      this.paramsData.fbRqsjks = this.paramsData.fbRqsj[0]
      this.paramsData.fbRqsjjs = this.paramsData.fbRqsj[1]
      this.paramsData.fbRqsj = ''
      getSelectAll({
        ...this.paramsData,
        current: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        if (res.code === 1) {
          this.tableData = res.data.records
          this.pagination.total = res.data.total
          Object.assign(this.$data.paramsData, this.$options.data().paramsData)
          // this.$message.success(res.message)
        } else {
          this.$message.error('查询成功')
        }
      })
    },
    getSelectOneInfo(row) {
      getSelectOne(row.xxfbsjxxbz).then(res => {
        if (res.code === 1) {
          console.log(res)
          this.editData = res.data
          this.editorVisible = true
          // this.$message.success(res.message)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    postInsertInfo(formData) {
      postInsert(formData).then(res => {
        if (res.code === 1) {
          this.editorVisible = false
          this.getFeedbackInfo()
          // this.$message.success(res.message)
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
      this.editorVisible = false
      formData.xxfbsjxxbz = `xxfbsj${this.pagination.total + 1}`
      this.postInsertInfo(formData)
    },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.pagination.size = val
      this.getFeedbackInfo()
    },
    // 翻页
    pageChange(val) {
      this.pagination.currentPage = val
      this.getFeedbackInfo()
      this.pagination.currentPage = 1
    },
    search(v) {
      this.paramsData = { ...v }
      this.getFeedbackInfo()
    },
    toView(row) {
      this.editorType = 'view'
      this.getSelectOneInfo(row)
      // this.editorVisible = true;
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
