<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>小区房屋档案</el-breadcrumb-item>
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
          :size="HousingData.size"
          :tableData="tableData"
          :tableColumns="HousingData.tableColumns"
          :tableOption="HousingData.tableOption"
          :HeaderCellStyle="HousingData.HeaderCellStyle"
          @sizeChange="sizeChange"
          @pageChange="pageChange"
          @clickButton="clickButton"
          :CardAttributes="HousingData.CardAttributes"
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
            <span>小区房屋类别</span>
          </div>
          <div class="w-100 h-60">
            <MyEcharts :option="options"></MyEcharts>
          </div>
          <el-table border class="right_table" :data="classification">
            <el-table-column type="index" width="50" align="center">
            </el-table-column>
            <el-table-column prop="categoryMc" :resizable="false" label="类别">
            </el-table-column>
            <el-table-column prop="id" :resizable="false" label="数量">
            </el-table-column>
          </el-table>
        </el-card>
      </div>
    </div>
    <Editor
      :title="title"
      :type="editorType"
      :width="width"
      v-if="editorVisible"
      :visible.sync="editorVisible"
      :fields="fields"
      @confirm="confirm"
      :labelWidth="labelWidth"
      :editData="editData"
    />
  </div>
</template>

<script>
import {
  getSelectAll,
  getSelectOne,
  PutUpdate,
  PostInsert,
  getHousingCategory
} from '@/api/Data_management/housing/index'
import { getCurrentDate } from '@/utils/date'
import MyformData from './Housingform/Housing'
import HousingData from './Housingtable/Housingtable'
import options from './HousingEcharts/HousingEcharts'
import fields from './editor'

export default {
  data() {
    return {
      MyformData,
      HousingData,
      options,
      fields,
      editorType: 'add',
      editorVisible: false,
      width: '60%',
      labelWidth: '230px',
      tableData: [
        // {
        //   number: "数量",
        //   MotorVehicles: 504,
        //   ElectricVehicle: 312
        // }
      ],
      classification: [],
      pagination: {
        isBackC: true,
        isShow: true,
        currentPage: 1,
        size: 10,
        total: 10
      },
      editData: {},
      paramsData: {
        area: [],
        xqxxbz: '',
        fwlbdm: '',
        fzXm: '',
        fzGmsfzhm: ''
      }
    }
  },
  created() {
    this.getHousingInfo()
    this.getCategoryData()
  },
  computed: {
    title() {
      switch (this.editorType) {
        case 'add':
          return '添加房屋信息'
        case 'edit':
          return '编辑房屋信息'
        case 'view':
          return '查看房屋信息'
        default:
          return '新增房屋信息'
      }
    }
  },
  methods: {
    getHousingInfo() {
      getSelectAll({
        ...this.paramsData,
        current: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        if (res.code === 1) {
          this.tableData = res.data.records
          this.pagination.total = res.data.total
          Object.assign(this.$data.paramsData, this.$options.data().paramsData)
        } else {
          Object.assign(this.$data.paramsData, this.$options.data().paramsData)
          this.$message.error('查询成功')
        }
      })
    },
    getColumnData(row) {
      getSelectOne({ fwxxbz: row.fwxxbz }).then(res => {
        if (res.code === 1) {
          this.editData = res.data
          this.editorVisible = true
          this.$message.success(res.message)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    editHousingData(data) {
      data.gxsj = getCurrentDate(true)
      PutUpdate(data).then(res => {
        if (res.code === 1) {
          this.editorVisible = false
          this.getHousingInfo()
          this.$message.success(res.message)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    addHousingData(data) {
      data.gxsj = getCurrentDate(true)
      PostInsert(data).then(res => {
        if (res.code === 1) {
          // this.$message.success(res.message)
          this.$message.success('添加成功')
        } else {
          this.$message.error(res.message)
        }
      })
    },
    getCategoryData() {
      getHousingCategory({
        currentPage: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        if (res.code === 1) {
          this.classification = res.data.records
          // for (const key in data) {
          //   chartData.push({
          //     name: key,
          //     value: data[key],
          //     unit: "栋"
          //   });
        }
      })
    },
    // 点击事件
    clickButton(val) {
      this[val.methods](val.row)
    },
    FormclickButton(val) {
      this[val.methods](val.formData)
    },
    confirm(formData) {
      if (this.editorType === 'add') {
        this.addHousingData(formData)
      } else {
        this.editHousingData(formData)
      }
      // 请求接口提交数据 等等
      this.getHousingInfo()
      this.editorVisible = false
    },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.pagination.size = val
      this.getHousingInfo()
    },
    // 翻页
    pageChange(val) {
      this.paramsData.currentPage = val
      this.getHousingInfo()
    },
    search(v) {
      this.paramsData = { ...v }
      this.getHousingInfo()
    },
    add() {
      this.editorType = 'add'
      this.editorVisible = true
    },
    toView(row) {
      this.editorType = 'view'
      this.getColumnData(row)
    },
    editor(row) {
      this.editorType = 'edit'
      this.getColumnData(row)
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
.right_table {
  height: 40%;
  width: 100%;
  margin: 0 5px;
  overflow: overlay !important;
  // height: 30%;
  // overflow: overlay;
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
