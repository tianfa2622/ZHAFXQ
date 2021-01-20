<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator=">>">
        <!-- :to="{ path: '/StaffAnalysis' }" -->
        <el-breadcrumb-item> 视频监控 </el-breadcrumb-item>
        <el-breadcrumb-item>实时监控</el-breadcrumb-item>
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
      <div class="w-58">
        <div class="VideoContent">
          <el-card
            class="pb-40 flex1 posi-rel over-h"
            style="border: none"
            body-style="height: 100%;overflow:auto; padding-bottom:0px"
          >
            <el-row type="flex" :gutter="20" class="row_warp">
              <el-col
                :span="8"
                v-for="(o, index) in 1"
                :key="index"
                class="mb-10"
              >
                <el-card body-style=" padding:0px; text-align:center">
                  <div class="w-100 h-100">
                    <VideoPlayer></VideoPlayer>
                  </div>
                  <!-- <img src="../../../assets/images/Equipment/u4236.svg" /> -->
                  <div style="padding: 14px">
                    <p>
                      <span class="equipment">{{ EquipmentName }}</span>
                    </p>
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
      <div class="w-1"></div>
      <div class="flex2">
        <Mytable
          :size="MytableData.size"
          :tableData="MytableData.tableData"
          :tableColumns="MytableData.tableColumns"
          :HeaderCellStyle="MytableData.HeaderCellStyle"
          :CardAttributes="MytableData.CardAttributes"
        ></Mytable>
        <!-- :tableOption="MytableData.tableOption" -->
        <!-- @clickButton="clickButton" -->
        <!-- @sizeChange="sizeChange" -->
        <!-- @pageChange="pageChange" -->
        <!-- :pagination="MytableData.pagination" -->
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "../../../components/VideoPlayer/VideoPlayer";
import Mytable from "../../../components/table/table"; // table组件
import Myform from "../../../components/Form/Form";
import MyformData from "./RealTimeForm/RealTimeForm";
import MytableData from "./RealTimeTable/RealTimeTable";
export default {
  components: {
    Myform,
    Mytable,
    VideoPlayer
  },
  data() {
    return {
      MyformData,
      MytableData,
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
      date: "2020-7-6 9:37:22",
      currentPage: 1
    };
  },
  methods: {
    // onSubmit() {
    // },
    handleSizeChange(val) {},
    handleCurrentChange(val) {},
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
