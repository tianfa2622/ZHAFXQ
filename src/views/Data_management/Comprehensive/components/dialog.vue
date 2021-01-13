<template>
  <div>
    <el-table :data="tableData" style="width: 100%" size="mini">
      <el-table-column
        prop="idNumber"
        label="车牌号码"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="address"
        label="车辆位置"
        width="180"
      ></el-table-column>
      <el-table-column prop="VehicleColor" label="车辆颜色"></el-table-column>
      <el-table-column>
        <el-popover placement="bottom" width="400" trigger="click">
          <el-image :src="src"></el-image>
          <el-link slot="reference" type="primary">查看图片</el-link>
        </el-popover>
      </el-table-column>
    </el-table>
    <div class="mt-10">
      <el-link type="primary">侦查区</el-link>
      <el-link type="primary" class="ml-20">检查区</el-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          VehicleColor: '褐色',
          idNumber: '123123123123123123',
          address: '往家里检查站，城西检查站'
        }
      ],
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'

    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-table,
/deep/ .el-table__expanded-cell {
  background-color: rgba(255, 255, 255, 0.8);
}
/* 表格内背景颜色 */
/deep/ .el-table th,
/deep/ .el-table tr,
/deep/ .el-table td {
  background-color: transparent;
}
</style>
