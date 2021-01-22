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
          :formData="MyformData.formData"
          :form="MyformData.form"
          :itemColumns="MyformData.itemColumns"
          :btnData="MyformData.btnData"
          @clickButton="clickButton"
        ></Myform>
      </el-card>
    </div>
    <div class="vehicle_bottom dflex">
      <div class="h-100 w-69">
        <Mytable
          :size="MytableData.size"
          :tableData="MytableData.tableData"
          :tableColumns="MytableData.tableColumns"
          :tableOption="MytableData.tableOption"
          :HeaderCellStyle="MytableData.HeaderCellStyle"
          @sizeChange="sizeChange"
          @pageChange="pageChange"
          @clickButton="clickButton"
          :CardAttributes="MytableData.CardAttributes"
          :pagination="MytableData.pagination"
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
          <!-- <MyEcharts :option="options"></MyEcharts> -->
        </el-card>
      </div>
    </div>
    <Editor
      :type="editorType"
      :visible.sync="editorVisible"
      :fields="fields"
      :width="width"
      @confirm="confirm"
      :labelWidth="labelWidth"
    />
  </div>
</template>

<script>
import MyformData from "./VerifyFeedbackform/VerifyFeedbackform";
import MytableData from "./VerifyFeedbacktable/VerifyFeedbacktable";
import fields from "./editor";
// import options from "./HousingEcharts/HousingEcharts";
export default {
  // components: {
  //   Myform,
  //   Mytable
  //   // MyEcharts
  // },
  data() {
    return {
      MyformData,
      MytableData,
      // options,
      fields,
      editorType: "view",
      labelWidth: "150px",
      // inline: false,
      editorVisible: false
    };
  },
  methods: {
    // 点击事件
    clickButton(val) {
      // 调用事件
      // this[val.methods](val.row);
      if (val.methods !== "search") {
        this.openEditor(val.methods, val.row);
      } else {
        this[val.methods](val.row);
      }
    },
    openEditor(type, row) {
      console.log(type, row);
      switch (type) {
        case "Increase":
          this.editorType = "add";
          break;
        case "toView":
          this.editorType = "view";
          break;
      }
      this.editorVisible = true;
    },
    confirm(formData) {
      console.log(formData);
      // 请求接口提交数据 等等
      this.editorVisible = false;
    },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.rows = val;
    },
    // 翻页
    pageChange(val) {
      this.page = val;
    },
    search() {}
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
