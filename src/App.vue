<template>
  <div id="app">
    <el-container class="fill_height">
      <el-header height="40">
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style lang="less"></style>
