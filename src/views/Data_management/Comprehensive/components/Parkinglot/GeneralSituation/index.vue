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
          <span @click="changePage('3')" class="pointer"> 辉煌国际停车场 </span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>停车位概况</el-breadcrumb-item>
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
      :type="editorType"
      :visible.sync="editorVisible"
      :fields="fields"
      :labelWidth="labelWidth"
      :width="width"
      :editData="editData"
      v-if="editorVisible"
    />
    <!-- @confirm="confirm" -->
  </div>
</template>

<script>
import {
  getSelectAll,
  getSelectOne
} from '@/api/Data_management/index/GeneralSituation/index'
import MyformData from './GeneralSituationform/GeneralSituationform'
import MyTableData from './GeneralSituationtable/GeneralSituationtable'
import fields from './editor'
export default {
  name: 'GeneralSituation',
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
      width: '60%',
      editorType: 'view',
      editorVisible: false,
      labelWidth: '210px',
      // 表格数据
      tableData: [],
      pagination: {
        isBackC: true,
        isShow: true,
        currentPage: 1,
        size: 10,
        total: 10
      },
      paramsData: {
        cwgslx: null,
        cwlx: null,
        cwsyrXm: null,
        tcwbh: null
      },
      editData: {}
    }
  },
  created() {
    // this.getGeneralInfo();
    this.search()
  },
  methods: {
    getGeneralInfo() {
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
          Object.assign(this.$data.paramsData, this.$options.data().paramsData)
          this.$message.error('查询成功')
        }
      })
    },
    getGeneralInfoOne(row) {
      getSelectOne(row.tcwxxbz).then(res => {
        if (res.code === 1) {
          console.log(res)
          this.editData = res.data
          this.editorVisible = true
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
    openEditor(type, row) {
      console.log(type, row)
      switch (type) {
        case 'Increase':
          this.editorType = 'add'
          break
      }
      this.editorVisible = true
    },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.pagination.size = val
      this.getGeneralInfo()
    },
    // 翻页
    pageChange(val) {
      this.pagination.currentPage = val
      this.getGeneralInfo()
    },
    // eslint-disable-next-line no-unused-vars
    Details(val) {
      this.editorType = 'view'
      this.getGeneralInfoOne(val)
    },
    search(v) {
      this.paramsData = { ...v }
      this.getGeneralInfo()
    },
    // 跳转页面
    changePage(target) {
      // 更新父组件传入的prop ‘currentPage’
      this.$emit('update:currentPage', target)
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
