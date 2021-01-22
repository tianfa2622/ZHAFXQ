<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator=">>">
        <!-- :to="{ path: '/StaffAnalysis' }" -->
        <el-breadcrumb-item :to="{ path: '/StaffAnalysis' }">
          视频监控
        </el-breadcrumb-item>
        <el-breadcrumb-item>历史监控</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider class="mt-5"></el-divider>
      <Myform
        :formData="MyformData.formData"
        :form="MyformData.form"
        :itemColumns="MyformData.itemColumns"
        @clickButton="clickButton"
      ></Myform>
    </div>
    <div class="vehicle_bottom dflex">
      <div class="w-20">
        <div class="AreaSelection">
          <el-checkbox-group class="checkboxgroup" v-model="checkList">
            <el-row
              type="flex"
              v-for="(item, index) in AreaSelection"
              :key="index"
              justify="space-between"
            >
              <el-col :span="20">
                <span>{{ item.title }}</span>
              </el-col>
              <el-col :span="3">
                <el-checkbox :label="item.id">{{ "" }}</el-checkbox>
              </el-col>
            </el-row>
          </el-checkbox-group>
        </div>
      </div>
      <div class="w-80">
        <div class="VideoContent">
          <el-card
            class="pb-40 flex1 posi-rel over-h"
            body-style="height: 100%;overflow:auto; padding-bottom:0px"
          >
            <router-view></router-view>
            <el-row type="flex" :gutter="20" class="row_warp">
              <el-col
                :span="6"
                v-for="(o, index) in 6"
                :key="index"
                class="mb-10"
              >
                <el-card body-style=" padding:0px; text-align:center">
                  <img
                    src="../../../assets/images/Equipment/u249.svg"
                    class="pointer"
                    @click="$router.push({ name: 'deviceInformation' })"
                  />
                  <div style="padding: 14px; border-top: 1px solid #ccc">
                    <p>
                      <span class="equipment">
                        设备名称：{{ EquipmentName }}
                      </span>
                    </p>
                    <p>
                      <span class="address">IP地址：{{ IPaddress }}</span>
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
  </div>
</template>

<script>
import MyformData from "./HistoricalForm/HistoricalForm";
export default {
  data() {
    return {
      MyformData,
      AreaSelection: [
        {
          id: 1,
          title: "辉煌国际"
        },
        {
          id: 2,
          title: "中龙玉溪"
        },
        {
          id: 3,
          title: "东玺门"
        },
        {
          id: 4,
          title: "中庭国际"
        }
      ],
      checkList: [1, 2],
      EquipmentName: "XX设备",
      IPaddress: "XX街",
      currentPage: 1
    };
  },
  methods: {
    // onSubmit() {
    // },
    // Jump() {
    //   this.$router.push("/HistoricalMonitoring/DeviceInformation");
    // },
    handleSizeChange(val) {
      console.log(val);
    },
    handleCurrentChange(val) {
      console.log(val);
    },
    // 点击事件
    clickButton(val) {
      // 调用事件
      this[val.methods](val.row);
    },
    search() {}
  }
};
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
  }
  .equipment {
    font-size: 14px;
  }
  .address {
    font-size: 16px;
  }
}
.AreaSelection {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  // border: 1px solid #ccc;
  // overflow-y: auto;
  .checkboxgroup {
    border: 1px solid #ccc;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    .el-row {
      border: 1px solid #ccc;
      border-top: 0px;
      padding: 10px;
      span {
        font-size: 15px;
      }
    }
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
