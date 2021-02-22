<template>
  <div class="w-100 h-100 dflex direction-column">
    <div class="dflex1">
      <el-breadcrumb separator=">>">
        <!-- :to="{ path: '/UserManagement' }" -->
        <el-breadcrumb-item>
          <span @click="changePage('1')" class="pointer"> 小区综合档案 </span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <span @click="changePage('5')" class="pointer"> 辉煌国际 </span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <span @click="changePage('8')" class="pointer"> 3栋 </span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>2单元</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="relationship_content">
      <el-row type="flex" justify="space-around" class="w-100 h-100">
        <el-col :span="7" style="background-color: red" class="dflex">
          <div class="w-50 h-100">
            <!-- <span>姓名：</span>
            <span style="display: inline-block; width: 20px"> </span>
            <span>姓名</span><br />
            <span>身份证号：</span><span>身份证号</span><br />
            <span>与房主关系：</span><span>与房主关系</span><br />
            <span>办理日期：</span><span>办理日期</span><br />
            <span>居住事由：</span><span>居住事由</span><br />
            <span>居住方式：</span><span>居住方式</span><br />
            <span>入住日期：</span><span>入住日期</span><br />
            <span>撤离日期：</span><span>撤离日期</span><br />
            <span>地址：</span><span>地址</span>
          </div>
          <div class="w-50 h-100" style="display: none">
            <span>登记人姓名：</span><span>姓名</span><br />
            <span>登记人身份证号：</span><span>身份证号</span><br />
            <span>登记人联系电话：</span><span>与房主关系</span><br />
            <span>所属警务责任区：</span><span>办理日期</span><br />
            <span>数据更新时间：</span><span>居住事由</span><br />
            <span>数据来源：</span><span>居住方式</span><br />
            <span>数据状态：</span><span>入住日期</span> -->
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Roomrelationship',
  props: {
    currentPage: {
      type: String,
      required: true
    }
  },
  methods: {
    // 跳转页面
    changePage(target) {
      // 更新父组件传入的prop ‘currentPage’
      this.$emit('update:currentPage', target)
    }
  }
}
</script>

<style lang="less" scoped>
::v-deep .el-breadcrumb__item {
  margin: 10px 0px 10px 10px;
  span {
    color: #ff6600 !important;
  }
}
.relationship_content {
  width: 100%;
  padding: 40px;
  height: calc(100% - 34px);
}
</style>
