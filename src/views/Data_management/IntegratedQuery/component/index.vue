<template>
  <div>
    <div>
      <el-date-picker v-model="date1" type="date" placeholder="选择日期">
      </el-date-picker>
      -
      <el-date-picker v-model="date2" type="date" placeholder="选择日期">
      </el-date-picker>
      <el-button type="primary" class="ml-10">查询</el-button>
    </div>
    <div v-for="i in 3" :key="i" style="float: left" class="table-box">
      <h3>2020-12-01</h3>
      <el-table :data="data1" :show-header="false" style="width: 300px">
        <el-table-column prop="time" />
        <el-table-column prop="position" />
        <el-table-column>
          <template slot-scope="scope">
            <el-link type="primary" @click="viewImage(scope.row)">
              查看照片
            </el-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :visible.sync="imgVuew">
      <div>imgUrl</div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date1: '',
      date2: '',
      imgVuew: false,
      imgUrl: '',
      data1: [
        {
          time: '20:10:23',
          position: 'XX小区',
          imgUrl: '图片地址'
        },
        {
          time: '20:10:23',
          position: 'XX小区',
          imgUrl: '图片地址'
        },
        {
          time: '20:10:23',
          position: 'XX小区',
          imgUrl: '图片地址'
        }
      ]
    }
  },
  methods: {
    viewImage(row) {
      this.imgUrl = row.imgUrl
      this.imgVuew = true
    }
  }
}
</script>
<style lang="less" scoped>
.table-box {
  width: 50%;
}
</style>
