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
        ></Myform>
      </el-card>
    </div>
    <div class="vehicle_bottom dflex">
      <div class="h-100 w-69">
        <Mytable
          :size="vehicleData.size"
          :tableData="VehicleData"
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
      :fields="fields"
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
  putElectricUpdate
} from "@/api/Data_management/vehicle/index";
import MyformData from "./vehicleform/vehicle";
import vehicleData from "./vehicletable/vehicletable";
import options from "./vehicleEcharts/vehicleEcharts";
import fields from "./editor";
export default {
  data() {
    return {
      MyformData,
      vehicleData,
      options,
      tableData: [
        {
          number: "数量",
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
        xqMc: "",
        czXm: "",
        cphm: "",
        cllb: null
      },
      editData: {},
      editorType: "add",
      editorVisible: false,
      labelWidth: "160px",
      fields,
      title: "",
      VehicleData: []
    };
  },
  mounted() {},
  created() {
    this.JudgmentType();
  },
  methods: {
    getMotorVehicleData() {
      getMotorSelectAll({
        ...this.paramsData,
        current: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        if (res.code === 1) {
          this.VehicleData = res.data.records;
          this.pagination.total = res.data.total;
          for (const key in this.VehicleData) {
            let cphm = "cphm";
            this.VehicleData[key][cphm] = this.VehicleData[key].jdchphm;
            this.VehicleData[key].cllb = "机动车";
          }
          Object.assign(this.$data.paramsData, this.$options.data().paramsData);
          this.$message.success(res.message);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    getElectricVehicleData() {
      getElectricSelectAll({
        ...this.paramsData,
        current: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        if (res.code === 1) {
          this.VehicleData = res.data.records;
          this.pagination.total = res.data.total;
          for (const key in this.VehicleData) {
            let cphm = "cphm";
            this.VehicleData[key][cphm] = this.VehicleData[key].ddzxccphm;
            this.VehicleData[key].cllb = "机动车";
          }
          Object.assign(this.$data.paramsData, this.$options.data().paramsData);
          this.$message.success(res.message);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    JudgmentType() {
      this.pagination.currentPage = 1;
      switch (this.paramsData.cllb) {
        case 1:
          return this.getMotorVehicleData();
        case 2:
          return this.getElectricVehicleData();
      }
    },
    openEditor(data) {
      // this.editorVisible = true;
      if (this.paramsData.cllb === 1) {
        this.editMotorData(data);
      } else {
        this.editElectricData(data);
      }
    },
    getMotorColumnData(row) {
      getMotorSelectOne(row.jdcxxbz).then(res => {
        if (res.code === 1) {
          let long = res.data.clcd;
          let wide = res.data.clkd;
          let high = res.data.clgd;
          this.editData = res.data;
          this.editData.cltj = long * wide * high;
          this.editorVisible = true;
          this.$message.success(res.message);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    getElectricColumnData(row) {
      getElectricSelectOne(row.ddzxcxxbz).then(res => {
        if (res.code === 1) {
          this.editData = res.data;
          this.editorVisible = true;
          this.$message.success(res.message);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    editMotorData(data) {
      putMotorUpdate(data).then(res => {
        if (res.code === 1) {
          console.log(res);
          this.$message.success(res.message);
          this.editorVisible = false;
          this.getMotorVehicleData();
        } else {
          this.$message.error(res.message);
        }
      });
    },
    editElectricData(data) {
      putElectricUpdate(data).then(res => {
        if (res.code === 1) {
          console.log(res);
          this.$message.success(res.message);
          this.editorVisible = false;
          this.getElectricVehicleData();
        } else {
          this.$message.error(res.message);
        }
      });
    },
    confirm(formData) {
      console.log(formData);
      if (this.editorType !== "add") {
        this.openEditor(formData);
      }
      // 请求接口提交数据 等等
      this.editorVisible = false;
    },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.pagination.size = val;
      if (this.paramsData.cllb === 1) {
        this.getMotorVehicleData();
      } else {
        this.getElectricVehicleData();
      }
    },
    // 翻页
    pageChange(val) {
      this.pagination.currentPage = val;
      if (this.paramsData.cllb === 1) {
        this.getMotorVehicleData();
      } else {
        this.getElectricVehicleData();
      }
    },
    // 点击事件
    clickButton(val) {
      // 调用事件
      this[val.methods](val.row);
    },
    FormclickButton(val) {
      this[val.methods](val.formData);
    },
    search(v) {
      if (this.paramsData.cllb === 1) {
        this.paramsData = {
          area: v.area,
          xqMc: v.xqMc,
          jdchphm: v.cphm,
          czXm: v.czXm
        };
        this.getMotorVehicleData();
      } else {
        this.paramsData = {
          area: v.area,
          xqMc: v.xqMc,
          ddzxccphm: v.cphm,
          czXm: v.czXm
        };
        this.getElectricVehicleData();
      }
    },
    add() {
      this.editorType = "add";
      this.editorVisible = true;
    },
    toView(row) {
      this.editorType = "view";
      if (row.cllb === "机动车") {
        this.getMotorColumnData(row);
      } else {
        this.getElectricColumnData(row);
      }
    },
    editor(row) {
      this.editorType = "edit";
      if (row.cllb === "机动车") {
        this.getMotorColumnData(row);
      } else {
        this.getElectricColumnData(row);
      }
    }
    // Increase() {}
  }
};
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
