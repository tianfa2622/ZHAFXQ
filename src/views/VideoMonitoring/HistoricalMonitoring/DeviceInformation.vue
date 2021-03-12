<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator=">>">
        <!-- :to="{ path: '/HistoricalMonitoring'}" -->
        <el-breadcrumb-item>
          <span @click="changePage('1')" class="pointer"> 历史监控 </span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ EquipmentName }}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider class="mt-5"></el-divider>
      <div style="margin-top: 15px">
        <!-- <el-input
          placeholder="请输入内容"
          v-model="input3"
          class="input-with-select"
        >
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input> -->
        <el-date-picker
          class="ml-20"
          v-model="value1"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
    </div>
    <div class="vehicle_bottom dflex">
      <div class="VideoContent">
        <el-card
          class="pb-40 flex1 posi-rel over-h"
          style="border: none"
          body-style="height: 100%;overflow:auto; padding-bottom:0px"
        >
          <el-row type="flex" :gutter="20" class="row_warp">
            <el-col
              :span="6"
              v-for="(o, index) in 6"
              :key="index"
              class="mb-10"
            >
              <el-card body-style=" padding:0px; text-align:center">
                <!-- <div class="w-100 h-100">
                  <VideoPlayer></VideoPlayer>
                </div> -->
                <img src="../../../assets/images/VideoMonitoring/u155.png" />
                <div style="padding: 14px">
                  <p>
                    <span class="address">{{ date }}</span>
                  </p>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <!-- 分页 -->
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 15, 20, 25]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="20"
            class="posi-abs b-10 ta-c offset"
          >
          </el-pagination>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
// import VideoPlayer from "../../../components/VideoPlayer/VideoPlayer";
export default {
  components: {
    // VideoPlayer
  },
  data() {
    return {
      EquipmentName: 'XX设备',
      date: '2020-7-6',
      currentPage: 1,
      value1: ''
    }
  },
  methods: {
    // onSubmit() {
    // },
    handleSizeChange(val) {
      console.log(val)
    },
    handleCurrentChange(val) {
      console.log(val)
    },
    // 点击事件
    clickButton(val) {
      // 调用事件
      this[val.methods](val.row)
    },
    search() {},
    // 跳转页面
    changePage(target) {
      // 更新父组件传入的prop ‘Page’
      this.$emit('update:page', target)
    }
  }
}
</script>

<style lang="less" scoped>
.VideoContent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .row_warp {
    flex-wrap: wrap;
    align-content: flex-start;
    // .image {
    // }
  }
  .equipment {
    font-size: 14px;
  }
  .address {
    font-size: 16px;
  }
}
.h-1 {
  height: 1%;
}
.h-49 {
  height: 49%;
}
.w-20 {
  width: 20%;
}
.w-58 {
  width: 58%;
}
.bgc {
  background-color: #fff;
  .vehicle_bottom {
    width: 100%;
    height: calc(100% - 124px);
    margin-top: 10px;
    .w-59 {
      width: 59%;
    }
    .w-1 {
      width: 1%;
    }
  }
}
::v-deep .el-breadcrumb__item {
  margin: 10px 0px 10px 10px;
  span {
    color: #ff6600 !important;
  }
}
.card_style {
  overflow: visible !important;
}
</style>
