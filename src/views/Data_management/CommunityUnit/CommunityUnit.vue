/* eslint-disable no-unused-vars */
<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>小区单位档案</el-breadcrumb-item>
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
        :size="UnitData.size"
        :tableData="tableData"
        :tableColumns="UnitData.tableColumns"
        :tableOption="UnitData.tableOption"
        :HeaderCellStyle="UnitData.HeaderCellStyle"
        @sizeChange="sizeChange"
        @pageChange="pageChange"
        @clickButton="clickButton"
        :CardAttributes="UnitData.CardAttributes"
        :pagination="pagination"
      ></Mytable>
      <!-- </div> -->
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
  PostInsert
} from "@/api/Data_management/Residential_units";
import MyformData from "./Unitform/Unitform";
import UnitData from "./Unittable/Unittable";
import fields from "./editor";
export default {
  data() {
    return {
      MyformData,
      UnitData,
      fields,
      editorType: "add",
      editorVisible: false,
      width: "60%",
      labelWidth: "230px",
      tableData: [],
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
        xqxxbz: "",
        wtdlrXm: "",
        dwmc: "",
        tyshxydm: ""
      }
    };
  },
  created() {
    this.getUnitInfo();
  },
  computed: {
    title() {
      switch (this.editorType) {
        case "add":
          return "添加单位信息";
        case "view":
          return "查看单位信息";
        case "edit":
          return "编辑单位信息";
        default:
          return "添加单位信息";
      }
    }
  },
  methods: {
    getUnitInfo() {
      getSelectAll({
        ...this.paramsData,
        currentPage: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        if (res.code === 1) {
          this.tableData = res.data.records;
          this.pagination.total = res.data.total;
          Object.assign(this.$data.paramsData, this.$options.data().paramsData);
          this.$message.success(res.message);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    getColumnData(row) {
      getSelectOne({ dwxxbz: row.dwxxbz }).then(res => {
        console.log(res);
        if (res.code === 1) {
          this.editData = res.data;
          this.editorVisible = true;
        } else {
          this.$message.error(res.message);
        }
      });
    },
    editUnitData(data) {
      PutUpdate(data).then(res => {
        if (res.code === 1) {
          this.$message.success(res.message);
          this.editorVisible = false;
          this.getUnitInfo();
        } else {
          this.$message.error(res.message);
        }
      });
    },
    addUnitData(data) {
      PostInsert(data).then(res => {
        if (res.code === 1) {
          this.$message.success(res.message);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    // 点击事件
    clickButton(val) {
      this[val.methods](val.row);
    },
    FormclickButton(val) {
      this[val.methods](val.formData);
    },
    confirm(formData) {
      if (this.editorType === "add") {
        this.addUnitData(formData);
      } else {
        this.editUnitData(formData);
      }
      // 请求接口提交数据 等等
      this.getUnitInfo();
      this.editorVisible = false;
    },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.pagination.size = val;
      this.getUnitInfo();
    },
    // 翻页
    pageChange(val) {
      this.pagination.currentPage = val;
      this.getUnitInfo();
    },
    search(v) {
      this.paramsData = { ...v };
      this.getUnitInfo();
    },
    add() {
      this.editorType = "add";
      this.editorVisible = true;
    },
    toView(row) {
      this.editorType = "view";
      this.getColumnData(row);
    },
    editor(row) {
      this.editorType = "edit";
      this.getColumnData(row);
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
