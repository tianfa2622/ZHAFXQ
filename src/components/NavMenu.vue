<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      background-color="#040a3e"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/VideoSurveillance">
        <template slot="title">视频监控</template>
        <el-menu-item index="/RealTime">实时监控</el-menu-item>
        <el-menu-item index="/HistoricalMonitoring">历史监控</el-menu-item>
      </el-submenu>
      <el-submenu index="/DataManagement">
        <template slot="title">数据管理</template>
        <el-menu-item index="/Comprehensive">小区综合档案</el-menu-item>
        <el-menu-item index="/personnel">小区人员档案</el-menu-item>
        <el-menu-item index="/vehicle">小区车辆档案</el-menu-item>
        <el-menu-item index="/housing">小区房屋档案</el-menu-item>
        <el-menu-item index="/CommunityUnit">小区单位档案</el-menu-item>
        <el-menu-item index="/IntegratedQuery">综合查询</el-menu-item>
      </el-submenu>
      <el-submenu index="/PublicSecurity">
        <template slot="title">治安防范</template>
        <el-menu-item index="/StaffAnalysis">实有人口分析</el-menu-item>
        <el-menu-item index="/AnomalyAnalysis">异常研判分析</el-menu-item>
        <el-menu-item index="/KeyObjectControl">重点对象管控</el-menu-item>
        <el-menu-item index="/VerifyFeedback">信息核实反馈</el-menu-item>
        <el-menu-item index="/EarlyWarningDisposal">预警处理</el-menu-item>
      </el-submenu>
      <el-menu-item index="/SituationAnalysis">态势分析</el-menu-item>
      <el-submenu index="/SystemManagement">
        <template slot="title">系统管理</template>
        <el-menu-item index="/UserManagement">用户管理</el-menu-item>
        <el-menu-item index="/EquipmentManagement">设备管理</el-menu-item>
        <el-menu-item index="/LogManagement">日志管理</el-menu-item>
        <el-menu-item index="/ExceptionSetting">异常设置</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped></style>
