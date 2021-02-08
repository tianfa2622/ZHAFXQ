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
            :formData="paramsData"
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
      v-if="editorVisible"
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
        area: [],
        rkdjlx: "1",
        xm: "",
        xqxxbz: "",
        zjhm: ""
      },
      editData: {},
      personinfo: {
        csrq: "",
        cym: "",
        cyzjdm: "",
        djr: "",
        djrGmsfzhm: "",
        djrLxdh: "",
        djrXm: "",
        dwmc: "",
        fwxxbz: "",
        gjdm: "",
        gxsj: "",
        hjdz: "",
        hjdzQhnxxdz: "",
        hjdzXzqhdm: "",
        hkxzflydm: "",
        hlxdm: "",
        hyzkdm: "",
        jdchphm: "",
        jgssxdm: "",
        lxdh: "",
        mzdm: "",
        po: "",
        poGmsfzhm: "",
        poLxdh: "",
        poXm: "",
        rjLxdh: "",
        rjRq: "",
        rkdjlx: "",
        rydjlx: "",
        ryxxbz: "",
        sjjzd: "",
        sjjzdQhnxxdz: "",
        sjjzdXzqhdm: "",
        sjly: "",
        sjzt: "",
        syxqmc: "",
        tssfdm: "",
        wwm: "",
        wwx: "",
        xbdm: "",
        xldm: "",
        xm: "",
        xp: "",
        xqxxbz: "",
        zaglxxssjwzrqdm: "",
        zjhm: "",
        zjxydm: "",
        zylbdm: "",
        zzmmdm: ""
      }
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
          Object.assign(this.$data.paramsData, this.$options.data().paramsData);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    putUpData(formData) {
      getUpdate(formData).then(res => {
        if (res.code === 1) {
          this.$message.success(res.message);
          this.editorVisible = false;
          this.getPersonnelInfo();
        } else {
          this.$message.error(res.message);
        }
      });
    },
    postInsert(formData) {
      getInsert(formData).then(res => {
        if (res.code === 1) {
          this.editorVisible = false;
          this.getPersonnelInfo();
        } else {
          this.$message.error(res.message);
        }
      });
    },
    // table点击事件
    clickButton(val) {
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
        this.putUpData(formData);
      } else {
        formData.xqxxbz = "";
        formData.cyzjdm = "";
        formData.zjhm = "";
        formData.hjdzXzqhdm = "";
        formData.hjdzQhnxxdz = "";
        formData.sjjzdXzqhdm = "";
        formData.sjjzdQhnxxdz = "";
        formData.rydjlx = "";
        formData.rkdjlx = this.activeName;
        formData.djrXm = "";
        formData.djrLxdh = "";
        formData.gxsj = getCurrentDate(true);
        formData.sjly = "";
        formData.sjzt = "";
        formData.ryxxbz = `ry+${this.pagination.total + 1}`;
        console.log(formData);
        this.postInsert(formData);
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
      this.pagination.currentPage = val;
      this.getPersonnelInfo();
    },
    handleClick() {
      this.tableData = [];
      if (this.activeName === "1") {
        this.tabsData = ThePermanent;
        this.pagination.currentPage = 1;
      } else {
        this.tabsData = FloatingPopulation;
        this.pagination.currentPage = 1;
      }
      this.getPersonnelInfo();
    },
    FormclickButton(val) {
      this[val.methods](val.formData);
    },
    search(v) {
      this.paramsData = { ...v };
      // this.paramsData.push({ rkdjlx: this.activeName });
      this.getPersonnelInfo();
    },
    // eslint-disable-next-line no-unused-vars
    Increase() {
      this.editorType = "add";
      this.editorVisible = true;
    },
    editor(row) {
      this.editorType = "edit";
      this.openEditor(row);
    },
    toView(row) {
      this.editorType = "view";
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
