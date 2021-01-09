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
      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">视频监控</template>
        <el-menu-item index="2-1">实时监控</el-menu-item>
        <el-menu-item index="2-2">历史监控</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">数据管理</template>
        <el-menu-item index="3-1">小区综合档案</el-menu-item>
        <el-menu-item index="3-2">小区人员档案</el-menu-item>
        <el-menu-item index="3-3">小区车辆档案</el-menu-item>
        <el-menu-item index="3-4">小区房屋档案</el-menu-item>
        <el-menu-item index="3-5">小区单位档案</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">治安防范</template>
        <el-menu-item index="4-1">实有人口分析</el-menu-item>
        <el-menu-item index="4-2">异常研判分析</el-menu-item>
        <el-menu-item index="4-3">重点对象管控</el-menu-item>
        <el-menu-item index="4-4">异常信息反馈</el-menu-item>
        <el-menu-item index="4-5">预警处理</el-menu-item>
      </el-submenu>
      <el-menu-item index="5">态势分析</el-menu-item>
      <el-submenu index="6">
        <template slot="title">系统管理</template>
        <el-menu-item index="6-1">用户管理</el-menu-item>
        <el-menu-item index="6-2">设备管理</el-menu-item>
        <el-menu-item index="6-2">日志管理</el-menu-item>
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

<style></style>
