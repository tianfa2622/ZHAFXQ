<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>小区房屋档案</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="card_style" body-style="padding-bottom: 0px;">
        <Myform
          :formData="MyformData.formData"
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
      :type="editorType"
      :width="width"
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
  PutUpdate
} from "@/api/Data_management/housing/index";
import MyformData from "./Housingform/Housing";
import HousingData from "./Housingtable/Housingtable";
import options from "./HousingEcharts/HousingEcharts";
import fields from "./editor";

export default {
  data() {
    return {
      MyformData,
      HousingData,
      options,
      fields,
      editorType: "add",
      editorVisible: false,
      width: "60%",
      labelWidth: "230px",
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
      editData: {},
      paramsData: {
        xqxxmc: "",
        fwlbdm: "",
        fzXm: "",
        fzGmsfzhm: ""
      }
    };
  },
  created() {
    this.getHousingInfo();
  },
  methods: {
    getHousingInfo() {
      getSelectAll({
        ...this.paramsData,
        current: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        if (res.code === 1) {
          this.tableData = res.data.records;
          // this.$message.success(res.message);
          this.pagination.total = res.data.total;
        } else {
          this.$message.error(res.message);
        }
      });
    },
    getColumnData(row) {
      getSelectOne({ fwxxbz: row.fwxxbz }).then(res => {
        if (res.code === 1) {
          console.log(res);
          this.editData = res.data;
          this.editorVisible = true;
        } else {
          this.$message.error(res.message);
        }
      });
    },
    editColumnData(data) {
      PutUpdate({ fwxxbz: this.editData.fwxxbz, ...data }).then(res => {
        console.log(res);
      });
    },
    // 点击事件
    clickButton(val) {
      // 调用事件
      switch (val.methods) {
        case "Increase":
          this.editorType = "add";
          break;
        case "editor":
          this.editorType = "edit";
          break;
        case "toView":
          this.editorType = "view";
          break;
      }
      this[val.methods](val.row);
    },
    FormclickButton(val) {
      switch (val.methods) {
        case "Increase":
          this.editorType = "add";
          break;
      }
      this[val.methods](val.formData);
    },
    // openEditor(row) {
    //   this.getColumnData(row);
    //   this.editorVisible = true;
    // },
    confirm(formData) {
      this.editColumnData(formData);
      // 请求接口提交数据 等等
      this.getHousingInfo();
      this.editorVisible = false;
    },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.pagination.size = val;
      this.getHousingInfo();
    },
    // 翻页
    pageChange(val) {
      this.paramsData.currentPage = val;
      this.getHousingInfo();
    },
    search(v) {
      console.log(v);
      this.paramsData = { ...v };
      this.getHousingInfo();
    },
    toView(row) {
      this.getColumnData(row);
      this.editorVisible = true;
    },
    editor(row) {
      this.getColumnData(row);
      this.editorVisible = true;
    }
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
