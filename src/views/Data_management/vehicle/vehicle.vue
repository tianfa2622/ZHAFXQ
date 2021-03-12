<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>小区车辆档案</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="card_style" body-style="padding-bottom: 0px;">
        <Myform
          :formData="paramsData"
          :form="MyformData.form"
          :itemColumns="MyformData.itemColumns"
          :btnData="MyformData.btnData"
          @clickButton="FormclickButton"
          @selectClick='selectTrigger'
        ></Myform>
      </el-card>
    </div>
    <div class="vehicle_bottom dflex">
      <div class="h-100 w-69">
        <Mytable
          :size="vehicleData.size"
          :tableData="VehicleTabelData"
          :tableColumns="vehicleData.tableColumns"
          :tableOption="vehicleData.tableOption"
          :HeaderCellStyle="vehicleData.HeaderCellStyle"
          @sizeChange="sizeChange"
          @pageChange="pageChange"
          @clickButton="clickButton"
          :CardAttributes="vehicleData.CardAttributes"
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
            <span>小区车辆类别</span>
          </div>
          <div class="w-100 h-70">
            <MyEcharts :option="options"></MyEcharts>
          </div>
          <el-table border :data="tableData" style="width: 100%">
            <el-table-column prop="number" :resizable="false">
            </el-table-column>
            <el-table-column
              prop="MotorVehicles"
              :resizable="false"
              label="机动车"
            >
            </el-table-column>
            <el-table-column
              prop="ElectricVehicle"
              :resizable="false"
              label="电动车"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </div>
    </div>
    <Editor
      :title="title"
      v-if="editorVisible"
      :type="editorType"
      :editData="editData"
      :visible.sync="editorVisible"
      :fields="editvehicleData"
      @confirm="confirm"
      :labelWidth="labelWidth"
    />
  </div>
</template>

<script>
import {
  getMotorSelectAll,
  getElectricSelectAll,
  getElectricSelectOne,
  getMotorSelectOne,
  putMotorUpdate,
  putElectricUpdate,
  postMotorInsert,
  postElectricInsert
} from '@/api/Data_management/vehicle/index'
import { getCurrentDate } from '@/utils/date'
import MyformData from './vehicleform/vehicle'
import vehicleData from './vehicletable/vehicletable'
import options from './vehicleEcharts/vehicleEcharts'
import fields from './Motoreditor'
import fields1 from './Electriceditor'
export default {
  data() {
    return {
      MyformData,
      vehicleData,
      options,
      fields1,
      fields,
      tableData: [
        {
          number: '数量',
          MotorVehicles: 504,
          ElectricVehicle: 312
        }
      ],
      pagination: {
        isBackC: true,
        isShow: true,
        currentPage: 1,
        size: 10,
        total: 10
      },
      paramsData: {
        area: [],
        xqMc: '',
        czXm: '',
        cphm: '',
        cllb: '1'
      },
      editData: {},
      editorType: 'add',
      editorVisible: false,
      labelWidth: '160px',
      editvehicleData: fields,
      title: '',
      VehicleTabelData: [],
      rowsData: null
    }
  },
  mounted() {
    this.JudgmentType()
  },
  created() {},
  methods: {
    getMotorVehicleData() {
      getMotorSelectAll({
        ...this.paramsData,
        current: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        if (res.code === 1) {
          this.VehicleTabelData = res.data.records
          this.pagination.total = res.data.total
          for (const key in this.VehicleTabelData) {
            const cphm = 'cphm'
            this.VehicleTabelData[key][cphm] = this.VehicleTabelData[key].jdchphm
            this.VehicleTabelData[key].cllb = '机动车'
          }
          // Object.assign(this.$data.paramsData, this.$options.data().paramsData)
          // this.$message.success(res.message)
        } else {
          this.$message.error('查询成功')
        }
      })
    },
    getElectricVehicleData() {
      getElectricSelectAll({
        ...this.paramsData,
        current: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        if (res.code === 1) {
          this.VehicleTabelData = res.data.records
          this.pagination.total = res.data.total
          for (const key in this.VehicleTabelData) {
            const cphm = 'cphm'
            this.VehicleTabelData[key][cphm] = this.VehicleTabelData[key].ddzxccphm
            this.VehicleTabelData[key].cllb = '电动车'
          }
          // Object.assign(this.$data.paramsData, this.$options.data().paramsData)
          // this.$message.success(res.message)
        } else {
          this.$message.error('查询成功')
        }
      })
    },
    // 判断车辆类型调用接口
    JudgmentType() {
      this.pagination.currentPage = 1
      if (this.paramsData.cllb === '1') {
        this.getMotorVehicleData()
      } else if (this.paramsData.cllb === '2') {
        this.getElectricVehicleData()
      }
    },
    openEditor(data) {
      // // this.editorVisible = true;
      // if (this.paramsData.cllb === 1) {
      //   const parkingmotorvehiclesinfo = data
      //   this.editMotorData(parkingmotorvehiclesinfo)
      // } else {
      //   this.editElectricData(data)
      // }

      if (this.rowsData.cllb === '机动车') {
        this.editMotorData(data)
      } else {
        this.editElectricData(data)
      }
    },
    getMotorColumnData(row) {
      this.rowsData = row
      getMotorSelectOne(row.jdcxxbz).then(res => {
        if (res.code === 1) {
          this.editData = res.data
          const long = res.data.clcd
          const wide = res.data.clkd
          const high = res.data.clgd
          this.editData.cltj = long * wide * high
          console.log(this.editData.cltj)
          this.editorVisible = true
          this.$message.success(res.message)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    getElectricColumnData(row) {
      this.rowsData = row
      getElectricSelectOne(row.ddzxcxxbz).then(res => {
        if (res.code === 1) {
          this.editData = res.data
          const long = res.data.cd
          const wide = res.data.kd
          const high = res.data.gd
          this.editData.cltj = long * wide * high
          console.log(this.editData.cltj)
          this.editorVisible = true
          this.$message.success(res.message)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    editMotorData(data) {
      data.gxsj = getCurrentDate(true)
      putMotorUpdate(data).then(res => {
        if (res.code === 1) {
          this.$message.success(res.message)
          this.editorVisible = false
          this.getMotorVehicleData()
          // this.JudgmentType()
        } else {
          this.$message.error(res.message)
        }
      })
    },
    editElectricData(data) {
      data.gxsj = getCurrentDate(true)
      putElectricUpdate(data).then(res => {
        if (res.code === 1) {
          this.$message.success(res.message)
          this.editorVisible = false
          this.getElectricVehicleData()
          // this.JudgmentType()
        } else {
          this.$message.error(res.message)
        }
      })
    },
    AddMotorData(data) {
      data.jdcxxbz = `${this.pagination.total + 1}`
      data.cltj = data.clcd * data.clkd * data.clgd
      data.gxsj = getCurrentDate(true)
      postMotorInsert(data).then(res => {
        if (res.code === 1) {
          this.$message.success(res.message)
          this.editorVisible = false
          this.getMotorVehicleData()
        } else {
          this.$message.error(res.message)
        }
      })
    },
    AddElectricData(data) {
      data.ddzxcxxbz = `${this.pagination.total + 1}`
      data.gxsj = getCurrentDate(true)
      postElectricInsert(data).then(res => {
        if (res.code === 1) {
          this.$message.success(res.message)
          this.editorVisible = false
          this.getElectricVehicleData()
        } else {
          this.$message.error(res.message)
        }
      })
    },
    confirm(formData) {
      if (this.editorType !== 'add') {
        this.openEditor(formData)
      } else {
        this.addVehicle(formData)
      }
      // 请求接口提交数据 等等
      this.editorVisible = false
    },
    addVehicle(data) {
      if (this.paramsData.cllb === '1') {
        this.AddMotorData(data)
      } else {
        this.AddElectricData(data)
      }
    },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.pagination.size = 0
      if (this.paramsData.cllb === '1') {
        this.pagination.size = val
        this.getMotorVehicleData()
      } else {
        this.pagination.size = val
        this.getElectricVehicleData()
      }
    },
    // 翻页
    pageChange(val) {
      this.pagination.currentPage = 1
      console.log('🚀 ~ file: vehicle.vue ~ line 323 ~ this.paramsData.cllb', this.paramsData.cllb)
      if (this.paramsData.cllb === '1') {
        this.pagination.currentPage = val
        this.getMotorVehicleData()
      } else if (this.paramsData.cllb === '2') {
        this.pagination.currentPage = val
        this.getElectricVehicleData()
      }
    },
    // 点击事件
    clickButton(val) {
      // 调用事件
      this[val.methods](val.row)
    },
    FormclickButton(val) {
      this[val.methods](val.formData)
    },
    // 切换类型点击事件
    selectTrigger(value) {
      this.paramsData.cllb = value
      this.JudgmentType()
    },
    search(v) {
      if (this.paramsData.cllb === '1') {
        Object.assign(this.paramsData, {
          area: v.area,
          xqMc: v.xqMc,
          jdchphm: v.cphm,
          czXm: v.czXm
        })
        this.getMotorVehicleData()
      } else if (this.paramsData.cllb === '2') {
        Object.assign(this.paramsData, {
          area: v.area,
          xqMc: v.xqMc,
          ddzxccphm: v.cphm,
          czXm: v.czXm
        })
        this.getElectricVehicleData()
      }
    },
    add() {
      this.editorType = 'add'
      if (this.paramsData.cllb === '1') {
        this.editvehicleData = this.fields
        this.editorVisible = true
      } else {
        this.editvehicleData = this.fields1
        this.editorVisible = true
      }
    },
    toView(row) {
      this.editorType = 'view'
      if (row.cllb === '机动车') {
        this.editvehicleData = this.fields
        this.getMotorColumnData(row)
      } else {
        this.editvehicleData = this.fields1
        this.getElectricColumnData(row)
      }
    },
    editor(row) {
      this.editorType = 'edit'
      if (row.cllb === '机动车') {
        this.editvehicleData = this.fields
        this.getMotorColumnData(row)
      } else {
        this.editvehicleData = this.fields1
        this.getElectricColumnData(row)
      }
    }
    // Increase() {}
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
