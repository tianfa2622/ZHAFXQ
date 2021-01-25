<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>综合查询</el-breadcrumb-item>
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
      <!-- <div class="h-100 w-69"> -->
      <Mytable
        :size="MyTableData.size"
        :tableData="MyTableData.tableData"
        :tableColumns="MyTableData.tableColumns"
        :tableOption="MyTableData.tableOption"
        :HeaderCellStyle="MyTableData.HeaderCellStyle"
        @sizeChange="sizeChange"
        @pageChange="pageChange"
        @clickButton="clickButton"
        :CardAttributes="MyTableData.CardAttributes"
        :pagination="MyTableData.pagination"
      ></Mytable>
      <!-- </div> -->
    </div>
    <el-dialog :visible.sync="dialogVisible" :width="width">
      <el-tabs type="border-card">
        <el-tab-pane label="人员信息">
          <my-form
            ref="form"
            :disabled="disabled"
            :type="type"
            :fields="fields"
            @change="handlerChange"
            :labelWidth="labelWidth"
          />
        </el-tab-pane>
        <el-tab-pane label="车辆信息">
          <el-tabs v-model="activeName1" type="card" @tab-click="handleClick">
            <el-tab-pane label="机动车1" name="first1">
              <my-form
                ref="form"
                :disabled="disabled"
                :type="type"
                :fields="fields1"
                @change="handlerChange"
                :labelWidth="labelWidth"
              />
            </el-tab-pane>
            <el-tab-pane label="电动车" name="second2">
              <my-form
                ref="form"
                :disabled="disabled"
                :type="type"
                :fields="fields2"
                @change="handlerChange"
                :labelWidth="labelWidth"
              />
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="房屋信息">
          <el-tabs v-model="activeName11" type="card" @tab-click="handleClick">
            <el-tab-pane label="房屋1" name="first11">
              <my-form
                ref="form"
                :disabled="disabled"
                :type="type"
                :fields="fields3"
                @change="handlerChange"
                :labelWidth="labelWidth"
              />
            </el-tab-pane>
            <el-tab-pane label="房屋2" name="second22">
              <my-form
                ref="form"
                :disabled="disabled"
                :type="type"
                :fields="fields3"
                @change="handlerChange"
                :labelWidth="labelWidth"
              />
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="人员轨迹">
          <Peopletrack></Peopletrack>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
import MyformData from "./IntegratedQueryForm/IntegratedQueryForm";
import MyTableData from "./IntegratedQueryTable/IntegratedQueryTable";
import Peopletrack from "./component/index";
import fields from "./Editor";
import fields1 from "./Editor1";
import fields2 from "./Editor2";
import fields3 from "./Editor3";
export default {
  components: {
    Peopletrack
  },
  data() {
    return {
      MyformData,
      MyTableData,
      dialogVisible: false,
      activeName1: "first1",
      activeName11: "first11",
      width: "80%",
      formData: {},
      fields,
      fields1,
      fields2,
      fields3,
      labelWidth: "220px",
      type: "view"
    };
  },
  computed: {
    disabled() {
      return this.type === "view";
    }
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
      this.dialogVisible = true;
    },
    confirm(formData) {
      console.log(formData);
      // 请求接口提交数据 等等
      this.dialogVisible = false;
    },
    handlerChange(formData) {
      this.formData = { ...formData };
    },
    handleClick() {},
    // confirm() {
    //   this.$refs.form.validateForm().then(() => {
    //     this.$emit("confirm", { ...this.formData });
    //   });
    // },
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
::v-deep .area-select-wrap {
  text-align: left;
}
</style>
