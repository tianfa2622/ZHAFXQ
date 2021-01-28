<template>
  <div class="bgc w-100 h-100">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>小区人员档案</el-breadcrumb-item>
    </el-breadcrumb>
    <el-tabs
      tab-position="left"
      type="border-card"
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        v-for="(item, index) in tabs"
        :key="index"
        :label="item.label"
        :name="item.name"
        class="w-100 h-100"
      >
        <el-card class="card_style">
          <Myform
            :formData="MyformData.formData"
            :form="MyformData.form"
            :itemColumns="MyformData.itemColumns"
            :btnData="MyformData.btnData"
            @clickButton="FormclickButton"
          ></Myform>
        </el-card>
        <div class="card_bottom">
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
          ></Mytable>
        </div>
      </el-tab-pane>
    </el-tabs>
    <Editor
      :title="title"
      :type="editorType"
      :width="width"
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
  getSelectOne,
  getSelectAll,
  getUpdate,
  getInsert
} from "@/api/Data_management/personnel/index";
import { getCurrentDate } from "@/utils/date.js";
import ThePermanent from "./personnelTable/ThePermanent";
import FloatingPopulation from "./personnelTable/FloatingPopulation";
import MyformData from "./personnelForm/personnelform";
import Permanent from "./Editor";

export default {
  data() {
    return {
      ThePermanent,
      FloatingPopulation,
      MyformData,
      editorType: "add",
      editorVisible: false,
      width: "60%",
      labelWidth: "230px",
      fields: Permanent,
      tabsData: ThePermanent,
      activeName: "1",
      tabs: [
        {
          label: "常住人口",
          name: "1"
        },
        {
          label: "流动人口",
          name: "2"
        }
      ],
      // 表格数据
      tableData: [],
      pagination: {
        isBackC: true,
        isShow: true,
        currentPage: 1,
        size: 10,
        total: 10
      },
      paramsData: {
        rkdjlx: "1",
        xm: "",
        xqxxbz: "",
        zjhm: ""
      },
      editData: {}
    };
  },
  created() {
    this.getPersonnelInfo();
  },
  mounted() {},
  computed: {
    title() {
      switch (this.editorType) {
        case "add":
          return "添加人员信息";
        case "edit":
          return "修改人员信息";
        case "view":
          return "查看人员信息";
        default:
          return "新增人员信息";
      }
    }
  },
  methods: {
    getPersonnelInfo() {
      this.paramsData.rkdjlx = this.activeName;
      getSelectAll({
        ...this.paramsData,
        current: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        if (res.code === 1) {
          this.tableData = res.data.records;
          this.pagination.total = res.data.total;
        } else {
          this.$message.error(res.message);
        }
      });
    },
    // table点击事件
    clickButton(val) {
      // this.openEditor(val.methods, val.row);
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
    // 弹出框数据
    openEditor(row) {
      getSelectOne(row.ryxxbz).then(res => {
        if (res.code === 1) {
          this.editData = res.data;
          this.editorVisible = true;
        } else {
          this.$message.error(res.message);
        }
      });
    },
    confirm(formData) {
      if (this.editorType !== "add") {
        getUpdate(formData).then(res => {
          if (res.code === 1) {
            this.$message.success(res.message);
            this.editorVisible = false;
            this.getPersonnelInfo();
          } else {
            this.$message.error(res.message);
          }
        });
        // this.editorVisible = false;
      } else {
        let gxsj = getCurrentDate(true);
        let rkdjlx = this.activeName;
        let ryxxbz = this.pagination.total + 1;
        // let csrq = "2020-12-12";
        formData.gxsj = gxsj;
        // formData.csrq = csrq;
        formData.rkdjlx = rkdjlx;
        formData.ryxxbz = ryxxbz;
        formData.xqxxbz = "1";
        formData.cyzjdm = "1";
        formData.zjhm = "4565132158498";
        formData.hjdzXzqhdm = "1";
        console.log(formData);
        getInsert(formData).then(res => {
          if (res.code === 1) {
            this.$message.success(res.message);
            this.editorVisible = false;
            this.getPersonnelInfo();
          } else {
            this.$message.error(res.message);
          }
        });
      }

      // 请求接口提交数据 等等
    },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.pagination.size = val;
      this.getPersonnelInfo();
    },
    // 翻页
    pageChange(val) {
      this.paramsData.current = val;
      this.getPersonnelInfo();
    },
    handleClick() {
      if (this.activeName === "1") {
        this.tabsData = ThePermanent;
        this.getPersonnelInfo();
      } else {
        this.tabsData = FloatingPopulation;
        this.getPersonnelInfo();
      }
    },
    FormclickButton(val) {
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
      this[val.methods](val.formData);
    },
    search(v) {
      this.paramsData = { ...v };
      // this.paramsData.push({ rkdjlx: this.activeName });
      this.getPersonnelInfo();
    },
    // eslint-disable-next-line no-unused-vars
    Increase(v) {
      this.editorVisible = true;
    },
    editor(row) {
      this.openEditor(row);
    },
    toView(row) {
      this.openEditor(row);
    }
  }
};
</script>

<style lang="less" scoped>
.row_warp {
  flex-wrap: wrap;
  align-content: flex-start;
}
.card_bottom {
  height: calc(100% - 137px);
}
.bgc {
  background-color: #fff;
}
::v-deep .el-breadcrumb__item {
  margin: 10px 0px 10px 10px;
  span {
    color: #ff6600 !important;
  }
}
::v-deep .el-tabs--left {
  height: calc(100% - 34px) !important;
}
// ::v-deep .el-tabs__header {
//   writing-mode: vertical-rl;
//   text-align: center;
// }
::v-deep .el-tabs__nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
::v-deep .el-tabs__item {
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  flex: 1;
  border-radius: 12px;
  background-color: #ccc;
  color: #000;
  writing-mode: vertical-rl;
  text-align: center !important;
}
::v-deep .el-tabs__content {
  height: 100%;
}
::v-deep .area-select .area-selected-trigger {
  padding: 0px 20px 0px 12px;
}
::v-deep .area-selectable-list-wrap {
  top: 30px !important;
}
.card_style {
  overflow: visible !important;
}
</style>
