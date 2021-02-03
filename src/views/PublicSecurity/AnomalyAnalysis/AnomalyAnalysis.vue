<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator=">>">
        <el-breadcrumb-item :to="{ path: '/StaffAnalysis' }">
          治安防范
        </el-breadcrumb-item>
        <el-breadcrumb-item>异常研判分析</el-breadcrumb-item>
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
          :label="`${item.label}(${item.number})`"
          :name="item.name"
        >
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
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- :title="title" -->

    <Editor
      :title="title"
      v-if="editorVisible"
      :type="editorType"
      :visible.sync="editorVisible"
      :inline="inline"
      :fields="fields"
      :width="width"
      :editData="editData"
      @confirm="confirm"
    />
  </div>
</template>

<script>
import {
  getPersonnelAll,
  getVehicleAll,
  getGatherAll,
  getPersonnelOne,
  getVehicleOne,
  getGatherOne,
  putPersonnelupdate,
  putVehicleupdate,
  putGatherupdate
} from "@/api/PublicSecurity/AnomalyAnalysis/index";
import MyformData from "./AnomalyAnalysisform/AnomalyAnalysisform";
import personnelTable from "./AnomalyAnalysistable/personnelTable";
import vehicleTable from "./AnomalyAnalysistable/vehicleTable";
import GatherTable from "./AnomalyAnalysistable/GatherTable";
import fields from "./editor";

export default {
  data() {
    return {
      MyformData,
      personnelTable,
      vehicleTable,
      GatherTable,
      tabsData: personnelTable,
      fields,
      editorType: "edit",
      inline: false,
      width: "25%",
      editorVisible: false,
      activeName: "ryyc",
      tabs: [
        {
          label: "人员异常",
          name: "ryyc",
          number: 2182
        },
        {
          label: "车辆异常",
          name: "clyc",
          number: 2182
        },
        {
          label: "聚集异常",
          name: "jjyc",
          number: 2182
        }
      ],
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
        xqxxbz: ""
      },
      editData: {},
      title: ""
    };
  },
  created() {
    this.getPersonnelInfo();
    this.getVehicleInfo();
    this.getGatherInfo();
  },
  computed: {},
  methods: {
    getPersonnelInfo() {
      this.tableData = [];
      getPersonnelAll({
        ...this.paramsData,
        current: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        if (res.code === 1) {
          console.log(res.data);
          this.tabs[0].number = res.data.total;
          this.tableData = res.data.records;
          this.pagination.total = res.data.total;
          Object.assign(this.$data.paramsData, this.$options.data().paramsData);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    getVehicleInfo() {
      this.tableData = [];
      getVehicleAll({
        ...this.paramsData,
        current: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        if (res.code === 1) {
          this.tabs[1].number = res.data.total;
          this.tableData = res.data.records;
          this.pagination.total = res.data.total;
          Object.assign(this.$data.paramsData, this.$options.data().paramsData);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    getGatherInfo() {
      this.tableData = [];
      getGatherAll({
        ...this.paramsData,
        current: this.pagination.currentPage,
        size: this.pagination.size
      }).then(res => {
        if (res.code === 1) {
          this.tabs[2].number = res.data.total;
          this.tableData = res.data.records;
          this.pagination.total = res.data.total;
          Object.assign(this.$data.paramsData, this.$options.data().paramsData);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    putPersonnelData(formData) {
      putPersonnelupdate(formData).then(res => {
        if (res.code === 1) {
          this.$message.success(res.message);
          this.editorVisible = false;
          this.getPersonnelInfo();
        } else {
          this.$message.error(res.message);
        }
      });
    },
    putVehicleData(formData) {
      putVehicleupdate(formData).then(res => {
        if (res.code === 1) {
          this.$message.success(res.message);
          this.editorVisible = false;
          this.getVehicleInfo();
        } else {
          this.$message.error(res.message);
        }
      });
    },
    putGatherData(formData) {
      putGatherupdate(formData).then(res => {
        if (res.code === 1) {
          this.$message.success(res.message);
          this.editorVisible = false;
          this.putGatherupdate();
        } else {
          this.$message.error(res.message);
        }
      });
    },
    getPersonneColumns(row) {
      getPersonnelOne(row.id).then(res => {
        console.log(res);
        if (res.code === 1) {
          this.editData = res.data;
          this.editorVisible = true;
          this.$message.success(res.message);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    getVehicleColumns(row) {
      getVehicleOne(row.id).then(res => {
        if (res.code === 1) {
          this.editData = res.data;
          this.editorVisible = true;
          this.$message.success(res.message);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    getGatherColumns(row) {
      getGatherOne(row.id).then(res => {
        if (res.code === 1) {
          this.editData = res.data;
          this.editorVisible = true;
          this.$message.success(res.message);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    handleClick() {
      if (this.activeName === "ryyc") {
        this.tabsData = [];
        this.title = "人员处理";
        this.tabsData = personnelTable;
        this.getPersonnelInfo();
      } else if (this.activeName === "clyc") {
        this.tabsData = [];
        this.title = "车辆处理";
        this.tabsData = vehicleTable;
        this.getVehicleInfo();
      } else {
        this.tabsData = [];
        this.title = "聚集处理";
        this.tabsData = GatherTable;
        this.getGatherInfo();
      }
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
      switch (this.activeName) {
        case "ryyc":
          return this.getPersonnelInfo();
        case "clyc":
          return this.getVehicleInfo();
        case "jjyc":
          return this.getGatherInfo();
      }
    },
    // 翻页
    pageChange(val) {
      this.pagination.currentPage = val;
      switch (this.activeName) {
        case "ryyc":
          return this.getPersonnelInfo();
        case "clyc":
          return this.getVehicleInfo();
        case "jjyc":
          return this.getGatherInfo();
      }
    },
    search(v) {
      this.paramsData = { ...v };
      switch (this.activeName) {
        case "ryyc":
          return this.getPersonnelInfo();
        case "clyc":
          return this.getVehicleInfo();
        case "jjyc":
          return this.getGatherInfo();
      }
    },
    dealWith(row) {
      switch (this.activeName) {
        case "ryyc":
          return this.getPersonneColumns(row);
        case "clyc":
          return this.getVehicleColumns(row);
        case "jjyc":
          return this.getGatherColumns(row);
      }
    }
  }
};
</script>

<style lang="less" scoped>
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
    height: calc(100% - 117px);
    margin-top: 10px;
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
::v-deep .el-dialog__body {
  .el-form-item--mini {
    width: 100%;
    text-align: center;
  }
}
</style>
