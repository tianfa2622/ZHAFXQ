<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator=">>">
        <el-breadcrumb-item>
          <span @click="changePage('1')" class="pointer"> 小区综合档案 </span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>辉煌国际访客信息</el-breadcrumb-item>
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
            <span>访客数</span>
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
  getSelectOne
} from "@/api/Data_management/index/VisitorManagement/index";
import MyformData from "./VisitorManagementForm/VisitorManagementForm";
import MytableData from "./VisitorManagementTable/VisitorManagementTable";
import options from "./VisitorManagementEcharts/VisitorManagementEcharts";
import fields from "./editor";
export default {
  name: "VisitorManagement",
  props: {
    currentPage: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      MyformData,
      MytableData,
      options,
      fields,
      editorType: "view",
      editorVisible: false,
      labelWidth: "150px",
      pagination: {
        isBackC: true,
        isShow: true,
        currentPage: 1,
        size: 10,
        total: 10
      },
      editData: {},
      paramsData: {
        fkxxXm: "",
        fkxxGmsfzhm: "",
        fwRqsj: null
      },
      tableData: [],
      title: "访客信息"
    };
  },
  created() {
    this.getSelectInfo();
  },
  methods: {
    getSelectInfo() {
      getSelectAll({
        ...this.paramsData,
        current: this.pagination.currentPage,
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
    getselectInfoOne(row) {
      getSelectOne(row.fkdjxxbz).then(res => {
        if (res.code === 1) {
          console.log(res);
          this.editData = res.data;
          this.editorVisible = true;
          this.$message.success(res.message);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    // 点击事件
    clickButton(val) {
      // 调用事件
      this[val.methods](val.row);
    },
    FormclickButton(val) {
      this[val.methods](val.formData);
    },
    openEditor(type, row) {
      console.log(type, row);
      this.editorVisible = true;
    },
    confirm(formData) {
      console.log(formData);
      // 请求接口提交数据 等等
      this.editorVisible = false;
    },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.pagination.size = val;
      this.getSelectInfo();
    },
    // 翻页
    pageChange(val) {
      this.paramsData.currentPage = val;
      this.getSelectInfo();
    },
    // eslint-disable-next-line no-unused-vars
    toView(val) {
      this.getselectInfoOne(val);
      // 我是查看
    },
    search(v) {
      this.paramsData = { ...v };
      this.getSelectInfo();
    },
    // 跳转页面
    changePage(target) {
      // 更新父组件传入的prop ‘currentPage’
      this.$emit("update:currentPage", target);
    }
  }
};
</script>

<style lang="less" scoped>
.bgc {
  background-color: #fff;
  .vehicle_bottom {
    width: 100%;
    height: calc(100% - 105px);
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
::v-deep .el-dialog__body {
  .el-row .el-col:nth-child(-n + 2) {
    .el-form-item--mini {
      width: 100%;
      height: 100%;
      .el-form-item__content {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
