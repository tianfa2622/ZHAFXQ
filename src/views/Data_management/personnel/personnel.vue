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
            @clickButton="clickButton"
          ></Myform>
        </el-card>
        <div class="card_bottom">
          <Mytable
            :size="tabsData.size"
            :tableData="tabsData.tableData"
            :tableColumns="tabsData.tableColumns"
            :tableOption="tabsData.tableOption"
            @sizeChange="sizeChange"
            @pageChange="pageChange"
            @clickButton="clickButton"
            :CardAttributes="tabsData.CardAttributes"
            :pagination="tabsData.pagination"
          ></Mytable>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Mytable from "../../../components/table/table"; // table组件
import ThePermanent from "./ThePermanent";
import FloatingPopulation from "./FloatingPopulation";
import Myform from "../../../components/Form/Form.vue";
import MyformData from "./personnelform";

export default {
  components: {
    Mytable,
    Myform
  },
  data() {
    return {
      ThePermanent,
      FloatingPopulation,
      MyformData,
      tabsData: {},
      // formInline: {
      //   communityName: "",
      //   select: []
      // },
      activeName: "first",
      tabs: [
        {
          label: "常住人口",
          name: "first"
        },
        {
          label: "流动人口",
          name: "second"
        }
      ]
    };
  },
  created() {
    this.tabsdata();
  },
  methods: {
    // onSubmit() {
    //   console.log("submit!");
    // },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.rows = val;
      console.log(`每页 ${val} 条`);
    },
    // 翻页
    pageChange(val) {
      this.page = val;
      console.log(`当前页: ${val}`);
    },
    // 点击事件
    clickButton(val) {
      // 调用事件
      console.log(val);
      this[val.methods](val.row);
    },
    toView(val) {
      // 我是查看
      console.log(val);
    },
    editor(val) {
      // 我是编辑
      console.log(val);
    },
    handleClick() {
      this.tabsdata();
    },
    tabsdata() {
      if (this.activeName === "first") {
        this.tabsData = ThePermanent;
      } else {
        this.tabsData = FloatingPopulation;
      }
    },
    search() {
      console.log("搜索");
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
  height: calc(100% - 91px);
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
