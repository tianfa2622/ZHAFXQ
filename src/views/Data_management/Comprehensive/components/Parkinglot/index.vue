<template>
  <div class="w-100 h-100 bgc dflex direction-column">
    <div class="flex1">
      <el-breadcrumb separator=">>">
        <!-- :to="{ path: '/UserManagement' }" -->
        <el-breadcrumb-item>
          <span @click="changePage('1')" class="pointer"> 小区综合档案 </span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>辉煌国际停车场</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
    </div>
    <div class="bottom_Content dflex">
      <div class="h-100 w-60">
        <el-popover
          v-for="o in 3"
          :key="o"
          placement="bottom"
          width="350"
          trigger="hover"
        >
          <el-button class="btncolor">详情</el-button>
          <el-button class="btncolor">出入口信息</el-button>
          <el-button class="btncolor" @click="changePage('4')">
            停车场信息
          </el-button>
          <template slot="reference">
            <div class="Parkinglot_box dflex">
              <div class="w-80 h-100">
                <el-row
                  class="row_content"
                  type="flex"
                  align="middle"
                  justify="space-around"
                >
                  <el-col :span="24">
                    <h6>辉煌国际停车场A区</h6>
                  </el-col>
                  <el-col :span="12">
                    <span>停车场编号:</span>
                    <span style="display: inline-block; width: 20px"> </span>
                    <span>12356</span>
                  </el-col>
                  <el-col :span="12">
                    <span>管理单位名称:</span>
                    <span style="display: inline-block; width: 20px"> </span>
                    <span>12356</span>
                  </el-col>
                  <el-col :span="12">
                    <span>停车场类型:</span>
                    <span style="display: inline-block; width: 20px"> </span>
                    <span>12356</span>
                  </el-col>
                  <el-col :span="12">
                    <span>管理单位电话:</span>
                    <span style="display: inline-block; width: 20px"> </span>
                    <span>12356</span>
                  </el-col>
                  <el-col :span="12">
                    <span>停车位数量:</span>
                    <span style="display: inline-block; width: 20px"> </span>
                    <span>12356</span>
                  </el-col>
                  <el-col :span="12">
                    <span>停车场出入口数:</span>
                    <span style="display: inline-block; width: 20px"> </span>
                    <span>12356</span>
                  </el-col>
                </el-row>
              </div>
              <div class="Right_state">
                <div class="img_box">
                  <img
                    v-if="o === 1"
                    src="../../../../../assets/images/parkinglot/u1462.png"
                  />
                  <img
                    v-if="o === 2"
                    src="../../../../../assets/images/parkinglot/u1472.png"
                  />
                  <img
                    v-if="o === 3"
                    src="../../../../../assets/images/parkinglot/u1480.png"
                  />
                  <span v-if="o === 1">使用中</span>
                  <span v-if="o === 2">停用</span>
                  <span v-if="o === 3">废弃</span>
                </div>
              </div>
            </div>
          </template>
        </el-popover>
      </div>
      <div class="w-1"></div>
      <div class="h-100 w-39 dflex direction-column">
        <el-card
          class="w-100 h-50"
          :body-style="{ padding: '0px', height: 'calc(100% - 53px)' }"
        >
          <div slot="header">
            <span>停车场使用状态概况</span>
          </div>
          <MyEcharts :option="UseStatus"></MyEcharts>
        </el-card>
        <div class="h-1"></div>
        <el-card
          class="w-100 h-49"
          :body-style="{ padding: '0px', height: 'calc(100% - 53px)' }"
        >
          <div slot="header">
            <span>停车场停车位数量</span>
          </div>
          <MyEcharts :option="ParkingSpace"></MyEcharts>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import MyEcharts from "@/components/echarts/index";
import ParkingSpace from "./ParkinglotEcharts/ParkingSpaceEcharts";
import UseStatus from "./ParkinglotEcharts/UseStatusEcharts";

export default {
  name: "Parkinglot",
  props: {
    currentPage: {
      type: String,
      required: true
    }
  },
  components: {
    MyEcharts
  },
  data() {
    return {
      UseStatus,
      ParkingSpace
    };
  },
  methods: {
    // 跳转页面
    changePage(target) {
      // 更新父组件传入的prop ‘currentPage’
      this.$emit("update:currentPage", target);
    }
  }
};
</script>

<style lang="less" scoped>
.h-49 {
  height: 49%;
}
.h-1 {
  height: 1%;
}
.w-1 {
  width: 1%;
}
.w-39 {
  width: 39%;
}
.bgc {
  background-color: #ffffff;
}
.bottom_Content {
  width: 100%;
  height: calc(100% - 60px);
  .Parkinglot_box {
    align-items: center;
    margin: 10px;
    width: calc(100% - 20px);
    height: calc(30%);
    border-radius: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(121, 121, 121);
    padding: 20px;
    background-color: #f4f4f4;
    .row_content {
      width: 100%;
      height: 100%;
      flex-wrap: wrap;
      h6 {
        font-size: 18px;
        font-weight: 650;
      }
      span {
        font-size: 14px;
        font-weight: 400;
      }
    }
    .Right_state {
      flex: 1;
      display: flex;
      align-items: center;
      span {
        font-size: 16px;
        font-weight: 400;
        margin-left: 10px;
      }
      .img_box {
        img {
          vertical-align: middle;
        }
        span {
          line-height: 27px;
        }
      }
    }
  }
}
::v-deep .el-breadcrumb__item {
  margin: 15px 0px 0px 10px;
  span {
    color: #ff6600 !important;
  }
}
.card_style {
  overflow: visible !important;
}
::v-deep .el-divider--horizontal {
  margin: 15px 0;
}
.btncolor {
  background: #3498db;
  color: #ffffff;
}
</style>
