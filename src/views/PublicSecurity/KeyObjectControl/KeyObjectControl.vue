<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator=">>">
        <el-breadcrumb-item :to="{ path: '/StaffAnalysis' }">
          治安防范
        </el-breadcrumb-item>
        <el-breadcrumb-item>重点对象管控</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="vehicle_bottom">
      <el-tabs
        type="border-card"
        class="h-100 w-100"
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          v-for="(item, index) in tabs"
          :key="index"
          :label="item.label"
          :name="item.name"
          class="dflex direction-column"
        >
          <div class="searchbar">
            <el-input placeholder="请输入内容" v-model="input3" class="w300">
              <el-button
                slot="append"
                @click="search"
                icon="el-icon-search"
              ></el-button>
            </el-input>
          </div>
          <div class="table-content">
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
            >
            </Mytable>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <Editor
      :type="editorType"
      :visible.sync="editorVisible"
      :fields="fieldsData"
      :labelWidth="labelWidth"
      @confirm="confirm"
    />
  </div>
</template>

<script>
import personnelTable from "./KeyObjectControltable/personnelTable";
import vehicleTable from "./KeyObjectControltable/vehicleTable";
import fields from "./editor";
import carfields from "./careditor";
export default {
  data() {
    return {
      personnelTable,
      vehicleTable,
      tabsData: {},
      input3: "",
      fields,
      carfields,
      fieldsData: fields,
      editorType: "view",
      labelWidth: "170px",
      // inline: false,
      editorVisible: false,
      activeName: "first",
      tabs: [
        {
          label: "重点人员",
          name: "first",
          number: 2182
        },
        {
          label: "重点车辆",
          name: "second",
          number: 2182
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
        this.tabsData = personnelTable;
      } else {
        this.tabsData = vehicleTable;
      }
    },
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
        case "toView":
          this.fieldsData = this.fields;
          break;
        case "cartoView":
          this.fieldsData = this.carfields;
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
.table-content {
  height: calc(100% - 45px);
}
.searchbar {
  width: 100%;
  margin-bottom: 5px;
  text-align: end;
  .w300 {
    width: 300px;
  }
}
.h-1 {
  height: 1%;
}
.h-49 {
  height: 49%;
}
.bgc {
  background-color: #fff;
  .vehicle_bottom {
    width: 100%;
    height: calc(100% - 34px);
  }
}
::v-deep .el-breadcrumb__item {
  margin: 10px 0px 10px 10px;
  span {
    color: #ff6600 !important;
  }
}
::v-deep .el-tabs__content {
  height: calc(100% - 54px);
  padding-bottom: 0px;
  .el-tab-pane {
    height: 100%;
  }
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
