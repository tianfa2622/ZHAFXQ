<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator=">>">
        <el-breadcrumb-item :to="{ path: '/UserManagement' }">
          系统管理
        </el-breadcrumb-item>
        <el-breadcrumb-item>设备管理</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="card_style">
        <Myform
          :formData="paramsData"
          :form="MyformData.form"
          :itemColumns="MyformData.itemColumns"
          :btnData="MyformData.btnData"
          @clickButton="clickButton"
        ></Myform>
      </el-card>
    </div>
    <div class="vehicle_bottom dflex">
      <el-card
        class="pb-40 flex1 posi-rel over-h"
        body-style="height: 100%;overflow:auto; padding-bottom:0px"
      >
        <el-row type="flex" :gutter="20" class="row_warp">
          <el-col
            :span="6"
            v-for="(item, index) in equipmentData"
            :key="index"
            class="mb-10"
          >
            <el-card body-style=" padding:0px; text-align:center">
              <img
                src="../../../assets/images/Equipment/u4236.svg"
                class="image"
              />
              <div style="padding: 14px">
                <p>
                  <span class="equipment">设备名：{{ item.sbmc }}</span>
                </p>
                <p>
                  <span class="address">IP地址：{{ item.ipdz }}</span>
                </p>
                <!-- <div class="bottom clearfix">
                </div> -->
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
          :page-size="size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          class="posi-abs b-10 ta-c offset"
        >
        </el-pagination>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getSelectAll } from "@/api/System_management/Equipment/index";
import MyformData from "./Equipmentform/Equipmentform";
export default {
  data() {
    return {
      MyformData,
      // EquipmentName: "XX设备",
      // IPAddress: "192.168.1.1",
      currentPage: 1,
      size: 10,
      total: 20,
      equipmentData: [],
      paramsData: {
        area: [],
        // xqxxbz: "",
        sbmc: null
        // ipdz: ""
      }
    };
  },
  created() {
    this.getselectAllInfo();
  },
  methods: {
    getselectAllInfo() {
      getSelectAll({
        current: this.currentPage,
        size: this.size,
        ...this.paramsData
      }).then(res => {
        if (res.code === 1) {
          this.equipmentData = res.data.records;
          this.total = res.data.total;
          Object.assign(this.$data.paramsData, this.$options.data().paramsData);
          this.$message.success(res.message);
        } else {
          this.$message.error(res.message);
        }
      });
    },
    // onSubmit() {
    // },
    // 切换当前一页展示多少条
    handleSizeChange(val) {
      this.size = val;
      this.getselectAllInfo();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getselectAllInfo();
    },
    // 点击事件
    clickButton(val) {
      // 调用事件
      this[val.methods](val.formData);
    },
    search(v) {
      this.paramsData = { ...v };
      this.getselectAllInfo();
    }
  }
};
</script>

<style lang="less" scoped>
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
.w300 {
  width: 300px;
}
.bgc {
  background-color: #fff;
  .vehicle_bottom {
    width: 100%;
    height: calc(100% - 125px);
    margin-top: 10px;
    .w-69 {
      width: 69%;
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
