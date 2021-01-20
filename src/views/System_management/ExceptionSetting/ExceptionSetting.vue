<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="h-10">
      <el-breadcrumb separator=">>">
        <!-- :to="{ path: '/UserManagement' }" -->
        <el-breadcrumb-item :to="{ path: '/UserManagement' }">
          系统管理
        </el-breadcrumb-item>
        <el-breadcrumb-item>日常设置</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
    </div>
    <div class="h-80">
      <el-row class="h-100" type="flex" align="middle" justify="space-around">
        <el-col
          :span="7"
          class="h-100"
          v-for="(item, index) in Exception"
          :key="index"
        >
          <el-card
            class="box-card h-100"
            body-style="height: calc(100% - 58px)"
          >
            <div slot="header" class="clearfix">
              <span class="header_title">{{ item.title }}</span>
            </div>
            <div class="header_content" v-if="item.title === '人员预警'">
              <span>1、人脸比对相似率 </span>
              <el-input-number
                v-model="item.similar"
                :controls="false"
                size="mini"
                :min="1"
                :max="100"
                class="w80"
              ></el-input-number>
              <span> %以下</span>
            </div>
            <div class="header_content" v-else-if="item.title === '车辆预警'">
              <span>1、不是本小区登记在档案的车牌号码进出次数高达 </span>
              <el-input-number
                v-model="item.INandOut"
                :controls="false"
                :min="1"
                :max="100"
                size="mini"
                class="w80"
              ></el-input-number>
              <span> 次</span>
            </div>
            <div class="header_content" v-else>
              <span>1、聚集人数达 </span>
              <el-input-number
                v-model="item.PeopleNum"
                :controls="false"
                :min="1"
                :max="100"
                size="mini"
                class="w80"
              ></el-input-number>
              <span> 人以上</span>
            </div>
            <div class="header_content" v-if="item.title !== '聚集预警'">
              <span>2、近 </span>
              <el-input-number
                v-model="[item.range].day"
                :controls="false"
                :min="1"
                :max="100"
                size="mini"
                class="w80"
              ></el-input-number>
              <span> 天出入次数频率高达 </span>
              <el-input-number
                v-model="[item.range].frequency"
                :controls="false"
                :min="1"
                :max="100"
                size="mini"
                class="w80"
              ></el-input-number>
              <span> 次</span>
            </div>
            <div class="header_content" v-if="item.title === '聚集预警'">
              <span>2、聚集时间达 </span>
              <el-input-number
                v-model="item.GatheringTime"
                :controls="false"
                :min="1"
                :max="100"
                size="mini"
                class="w80"
              ></el-input-number>
              <span> 小时</span>
            </div>
            <div class="header_content" v-if="item.title !== '聚集预警'">
              <span>3、在 </span>
              <el-time-picker
                is-range
                size="mini"
                v-model="item.range1.time"
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                placeholder="选择时间范围"
                value-format="HH:mm:ss"
                class="w200"
              >
              </el-time-picker>
              <span> 出入次数高达</span>
              <el-input-number
                v-model="[item.range1].frequency"
                :controls="false"
                :min="1"
                :max="100"
                size="mini"
                class="w80"
              ></el-input-number>
              <span> 次</span>
            </div>
            <div class="header_content" v-if="item.title === '车辆预警'">
              <span>4、不是本小区登录在档案的车牌号码进入本小区长达 </span>
              <el-input-number
                v-model="item.hours"
                :controls="false"
                :min="1"
                :max="100"
                size="mini"
                class="w80"
              ></el-input-number>
              <span> 小时</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="h-10">
      <div class="bottom_btn">
        <el-button type="info" @click="Clear">清除</el-button>
        <el-button type="success" @click="Save">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Exception: [
        {
          title: "人员预警",
          similar: null,
          range: { day: null, frequency: null },
          range1: {
            time: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
            frequency: null
          }
        },
        {
          title: "车辆预警",
          INandOut: null,
          range: { day: null, frequency: null },
          range1: {
            time: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
            frequency: null
          },
          hours: null
        },
        {
          title: "聚集预警",
          PeopleNum: null,
          GatheringTime: null
        }
      ]
    };
  },
  methods: {
    Clear() {},
    Save() {}
  }
};
</script>
<style lang="less" scoped>
.bgc {
  background-color: #fff;
}
::v-deep .el-breadcrumb__item {
  margin: 10px 0px 10px 10px;
  span {
    color: #ff6600 !important;
  }
}
::v-deep .el-divider--horizontal {
  margin: 5px 0;
}
.header_title {
  font-size: 16px;
  font-weight: 600;
}
.header_content {
  margin-bottom: 10px;
  line-height: 40px;
  span {
    font-size: 16px;
    margin-bottom: 10px;
  }
}
.bottom_btn {
  text-align: end;
  margin-top: 10px;
  padding: 0 30px;
}
</style>
