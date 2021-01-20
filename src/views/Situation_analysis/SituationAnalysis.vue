<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator=">>">
        <el-breadcrumb-item>态势分析</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <el-tabs
        type="border-card"
        class="h-100 w-100"
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          :lazy="true"
          v-for="(item, index) in tabs"
          :key="index"
          :label="item.label"
          :name="item.name"
          class="dflex direction-column"
        >
          <div class="w-100 h-15">
            <Myform
              :formData="MyformData.formData"
              :form="MyformData.form"
              :itemColumns="MyformData.itemColumns"
              :btnData="MyformData.btnData"
              @clickButton="clickButton"
            ></Myform>
            <el-row type="flex" class="pl-10 pr-10" justify="space-between">
              <el-col :span="6">
                <el-select
                  v-model="Community"
                  placeholder="选择小区"
                  size="small"
                >
                  <el-option
                    v-for="item in CommunityData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
              <el-col :span="6" class="ta-c">
                <el-button type="success" size="small">近四周</el-button>
                <el-button type="success" size="small">近六月</el-button>
                <el-button type="success" size="small">按每年</el-button>
              </el-col>
            </el-row>
          </div>
          <div class="content_bottom dflex mt-10">
            <div class="h-100 w-59">
              <Mytable
                :size="tabsData.size"
                :tableData="tabsData.tableData"
                :tableColumns="tabsData.tableColumns"
                :HeaderCellStyle="tabsData.HeaderCellStyle"
                @sizeChange="sizeChange"
                @pageChange="pageChange"
                :CardAttributes="tabsData.CardAttributes"
                :pagination="tabsData.pagination"
              ></Mytable>
            </div>
            <div class="w-1"></div>
            <div class="w-40 h-100">
              <el-card
                class="w-100 h-100"
                :body-style="{ padding: '20px', height: '100%' }"
              >
                <!-- <div slot="header">
                  <span>信息核实</span>
                </div> -->
                <MyEcharts
                  v-show="activeName === 'first'"
                  :option="BytimeEcharts"
                ></MyEcharts>
                <MyEcharts
                  v-show="activeName === 'second'"
                  :option="ByAreaEcharts"
                ></MyEcharts>
                <!-- <MyEcharts
                  v-if="'second' === activeName"
                  :option="ByAreaEcharts"
                ></MyEcharts> -->
              </el-card>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Mytable from "../../components/table/table.vue"; // table组件
import Myform from "../../components/Form/Form.vue";
import MyEcharts from "../../components/echarts/index";
import MyformData from "./SituationAnalysisform/SituationAnalysisform";
import Bytimetabel from "./SituationAnalysistable/Bytimetabel";
import ByAreatabel from "./SituationAnalysistable/ByAreatabel";
import BytimeEcharts from "./SituationAnalysisEcharts/BytimeEcharts";
import ByAreaEcharts from "./SituationAnalysisEcharts/ByAreaEcharts";
export default {
  components: {
    Mytable,
    Myform,
    MyEcharts
  },
  data() {
    return {
      Bytimetabel,
      ByAreatabel,
      MyformData,
      BytimeEcharts,
      ByAreaEcharts,
      tabsData: {},
      Community: "",
      activeName: "first",
      tabs: [
        {
          label: "按时间",
          name: "first"
        },
        {
          label: "按区域",
          name: "second"
        }
      ],
      CommunityData: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  created() {
    this.tabsdata();
  },
  methods: {
    handleClick() {
      this.tabsdata();
    },
    tabsdata() {
      if (this.activeName === "first") {
        this.tabsData = Bytimetabel;
      } else {
        this.tabsData = ByAreatabel;
      }
    },
    // onSubmit() {
    // },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.rows = val;
    },
    // 翻页
    pageChange(val) {
      this.page = val;
    },
    // 点击事件
    clickButton(val) {
      // 调用事件
      this[val.methods](val.row);
    },
    search() {},
    Increase() {}
  }
};
</script>

<style lang="less" scoped>
.h-1 {
  height: 1%;
}
.w-59 {
  width: 59%;
}
.w-1 {
  width: 1%;
}
.h-49 {
  height: 49%;
}
.bgc {
  background-color: #fff;
  .content {
    width: 100%;
    height: 100%;
  }
}
::v-deep .el-breadcrumb__item {
  margin: 10px 0px 10px 10px;
  span {
    color: #ff6600 !important;
  }
}
::v-deep .el-tabs__content {
  height: calc(100% - 39px);
  padding-bottom: 0px;
  .el-tab-pane {
    height: 100%;
  }
}
.content_bottom {
  width: 100%;
  height: calc(100% - 10px);
}
.card_style {
  overflow: visible !important;
}
::v-deep .status-Yes {
  color: #5efb99 !important;
}
::v-deep .status-No {
  color: #ff5065 !important;
}
</style>
