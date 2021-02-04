<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator=">>">
        <el-breadcrumb-item :to="{ path: '/StaffAnalysis' }">
          治安防范
        </el-breadcrumb-item>
        <el-breadcrumb-item>预警处置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="vehicle_bottom">
      <el-tabs
        v-model="activeName"
        class="h-100 tabs_header"
        @tab-click="handleClick"
        type="border-card"
        :stretch="true"
        :lazy="true"
      >
        <el-tab-pane label="巡查预警" name="xcyj" class="tabs_content">
          <Inspection></Inspection>
        </el-tab-pane>
        <el-tab-pane label="感知预警" name="gzyj" class="tabs_content">
          <perceived></perceived>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Inspection from "./InspectionWarning/index";
import perceived from "./PerceivedWarning/index";

export default {
  components: {
    Inspection,
    perceived
  },
  data() {
    return {
      activeName: "xcyj"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="less" scoped>
.bgc {
  background-color: #fff;
  .vehicle_bottom {
    width: 100%;
    height: calc(100% - 45px);
    margin-top: 10px;
  }
}
::v-deep .el-breadcrumb__item {
  margin: 10px 0px 10px 10px;
  span {
    color: #ff6600 !important;
  }
}
::v-deep .tabs_header {
  .el-tabs__header {
    margin: 0;
  }
  .el-tabs__content {
    height: calc(100% - 40px);
    .tabs_content {
      height: 100%;
    }
  }
}
</style>
