<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator=">>">
        <el-breadcrumb-item :to="{ path: '/StaffAnalysis' }">
          治安防范
        </el-breadcrumb-item>
        <el-breadcrumb-item>预警处置</el-breadcrumb-item>
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
import { getSelectAll } from "@/api/PublicSecurity/EarlyWarningDisposal/index";
import MyformData from "./EarlyWarningform/EarlyWarningform";
import MytableData from "./EarlyWarningtable/EarlyWarningtable";
import options from "./EarlyWarningEcharts/EarlyWarningEcharts";
import fields from "./editor";
export default {
  data() {
    return {
      MyformData,
      MytableData,
      options,
      fields,
      editorType: "add",
      editorVisible: false,
      width: "30%",
      labelWidth: "160px",
      tableData: [],
      pagination: {
        isBackC: true,
        isShow: true,
        currentPage: 1,
        size: 10,
        total: 10
      },
      paramsData: {
        fblx: "",
        fbRqsj: "",
        fbnr: ""
      },
      editData: {},
      title: ""
    };
  },
  created() {
    this.getTableInfo();
  },
  methods: {
    getTableInfo(selectData) {
      getSelectAll({
        currentPage: this.pagination.currentPage,
        size: this.pagination.size,
        ...selectData
      }).then(res => {
        console.log(res);
        if (res.code === 1) {
          this.tableData = res.data.records;
          this.pagination.total = res.data.total;
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
    confirm(formData) {
      console.log(formData);
      // 请求接口提交数据 等等
      this.editorVisible = false;
    },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.pagination.size = val;
      this.getTableInfo();
    },
    // 翻页
    pageChange(val) {
      this.paramsData.currentPage = val;
      this.getTableInfo();
    },
    edit(val) {
      this.editorType = "edit";
      this.editorVisible = true;
      console.log(val);
      // 我是处理
    },
    view(val) {
      console.log(val);
      this.editorType = "view";
      this.editorVisible = true;
      // 我是处理结果
    },
    search(v) {
      this.paramsData = { ...v };
      let selectData = this.paramsData;
      this.getTableInfo(selectData);
    },
    add() {
      this.editorType = "add";
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
