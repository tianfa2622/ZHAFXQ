<template>
  <div class="w-80 h-50">
    <Table
      :size="size"
      :currentPage="page"
      :rows="rows"
      :total="20"
      :tableData="options.tableData"
      :tableColumns="options.tableColumns"
      :tableOption="options.tableOption"
      @sizeChange="sizeChange"
      @pageChange="pageChange"
      @clickButton="clickButton"
    ></Table>
  </div>
</template>

<script>
import Table from "../components/table/table";
import options from "./table1";
export default {
  components: {
    Table
  },
  data() {
    return {
      size: "mini",
      rows: 5,
      page: 1,
      options
    };
  },
  methods: {
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
    del(val) {
      // 我是删除
      console.log(val);
    }
  }
};
</script>

<style></style>
