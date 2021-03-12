<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator=">>">
        <el-breadcrumb-item :to="{ path: '/StaffAnalysis' }">
          治安防范
        </el-breadcrumb-item>
        <el-breadcrumb-item>重点对象管控</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="vehicle_bottom">
      <el-tabs
        type="border-card"
        class="h-100 w-100"
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          v-for="(item, index) in tabs"
          :key="index"
          :label="item.label"
          :name="item.name"
          class="dflex direction-column"
        >
          <div class="searchbar">
            <el-input
              :placeholder="placeholder"
              v-model="input"
              class="w300"
              @click="search"
            >
              <el-button
                slot="append"
                @click="search"
                icon="el-icon-search"
              ></el-button>
            </el-input>
          </div>
          <div class="table-content">
            <Mytable
              :size="tabsData.size"
              :tableData="tableData"
              :tableColumns="tabsData.tableColumns"
              :tableOption="tabsData.tableOption"
              @sizeChange="sizeChange"
              @pageChange="pageChange"
              @clickButton="clickButton"
              :CardAttributes="tabsData.CardAttributes"
              :pagination="pagination"
            >
            </Mytable>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <Editor
      :title="title"
      v-if="editorVisible"
      :type="editorType"
      :visible.sync="editorVisible"
      :fields="fieldsData"
      :labelWidth="labelWidth"
      :editData="editData"
    />
    <!-- @confirm="confirm" -->
  </div>
</template>

<script>
import {
  getPersonnelAll,
  getVehicleAll,
  getPersonnelOne,
  getVehicleOne
} from '@/api/PublicSecurity/KeyObjectControl/index'
import personnelTable from './KeyObjectControltable/personnelTable'
import vehicleTable from './KeyObjectControltable/vehicleTable'
import fields from './editor'
import carfields from './careditor'
export default {
  data() {
    return {
      placeholder: '',
      personnelTable,
      vehicleTable,
      tabsData: personnelTable,
      input: '',
      fields,
      carfields,
      fieldsData: fields,
      editorType: 'view',
      labelWidth: '170px',
      // inline: false,
      editorVisible: false,
      activeName: 'zdry',
      tabs: [
        {
          label: '重点人员',
          name: 'zdry'
        },
        {
          label: '重点车辆',
          name: 'zdcl'
        }
      ],
      tableData: [],
      pagination: {
        isBackC: true,
        isShow: true,
        currentPage: 1,
        size: 10,
        total: 10
      },
      paramsData: {
        srk: ''
        // djrXm: "",
        // xm: "",
        // cphm: ""
      },
      editData: {},
      title: ''
    }
  },
  created() {
    // this.getPersonnelInfo();
    // this.handleClick();
  },
  mounted() {
    this.handleClick()
  },
  methods: {
    getPersonnelInfo() {
      this.tableData = []
      getPersonnelAll({
        ...this.paramsData,
        current: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        if (res.code === 1) {
          this.tableData = res.data.records
          this.pagination.total = res.data.total
          this.input = ''
          this.$message.success(res.message)
        } else {
          this.$message.error('查询成功')
        }
      })
    },
    getVehicleInfo() {
      this.tableData = []
      getVehicleAll({
        ...this.paramsData,
        current: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        if (res.code === 1) {
          this.tableData = res.data.records
          this.pagination.total = res.data.total
          this.input = ''
          this.$message.success(res.message)
        } else {
          this.$message.error('查询成功')
        }
      })
    },
    getPersonnelInfoOne(row) {
      getPersonnelOne(row.zdryxxbz).then(res => {
        console.log(res)
        if (res.code === 1) {
          this.editData = res.data
          this.editorVisible = true
          this.$message.success(res.message)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    getVehicleInfoOne(row) {
      getVehicleOne(row.zdclxxbs).then(res => {
        console.log(res)
        if (res.code === 1) {
          this.editData = res.data
          this.editorVisible = true
          this.$message.success(res.message)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    handleClick() {
      if (this.activeName === 'zdry') {
        this.tabsData = []
        this.title = '查看重点人员'
        this.placeholder = '请输入姓名、联系电话、身份证号'
        this.tabsData = personnelTable
        this.fieldsData = fields
        this.getPersonnelInfo()
      } else {
        this.tabsData = []
        this.title = '查看重点车辆'
        this.placeholder = '请输入姓名、车牌号码'
        this.tabsData = vehicleTable
        this.fieldsData = carfields
        this.getVehicleInfo()
      }
    },
    // 点击事件
    clickButton(val) {
      // 调用事件
      this[val.methods](val.row)
    },
    // confirm(formData) {
    //   console.log(formData);
    //   // 请求接口提交数据 等等
    //   this.editorVisible = false;
    // },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.pagination.size = val
      switch (this.activeName) {
        case 'zdry':
          return this.getPersonnelInfo()
        case 'zdcl':
          return this.getVehicleInfo()
      }
    },
    // 翻页
    pageChange(val) {
      this.pagination.currentPage = val
      switch (this.activeName) {
        case 'zdry':
          return this.getPersonnelInfo()
        case 'zdcl':
          return this.getVehicleInfo()
      }
    },
    search() {
      if (this.activeName === 'zdry') {
        this.paramsData.srk = this.input
        this.getPersonnelInfo()
        this.paramsData.srk = ''
      } else {
        this.paramsData.srk = this.input
        this.getVehicleInfo()
        this.paramsData.srk = ''
      }
    },
    toView(val) {
      this.editorType = 'view'
      this.getPersonnelInfoOne(val)
    },
    cartoView(val) {
      this.editorType = 'view'
      this.getVehicleInfoOne(val)
    }
  }
}
</script>

<style lang="less" scoped>
.table-content {
  height: calc(100% - 45px);
}
.searchbar {
  width: 100%;
  margin-bottom: 5px;
  text-align: end;
  .w300 {
    width: 300px;
  }
}
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
    height: calc(100% - 34px);
  }
}
::v-deep .el-breadcrumb__item {
  margin: 10px 0px 10px 10px;
  span {
    color: #ff6600 !important;
  }
}
::v-deep .el-tabs__content {
  height: calc(100% - 54px);
  padding-bottom: 0px;
  .el-tab-pane {
    height: 100%;
  }
}
.card_style {
  overflow: visible !important;
}
::v-deep .status-Yes {
  color: #5efb99 !important;
}
::v-deep .status-No {
  color: #ff5065 !important;
}
</style>
