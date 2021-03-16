<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="h-10">
      <el-breadcrumb separator=">>">
        <!-- :to="{ path: '/UserManagement' }" -->
        <el-breadcrumb-item :to="{ path: '/UserManagement' }">
          系统管理
        </el-breadcrumb-item>
        <el-breadcrumb-item>异常设置</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
    </div>
    <div class="h-80">
      <el-row class="h-100" type="flex" align="middle" justify="space-around">
        <!-- 人员预警 -->
        <el-col
          :span="7"
          class="h-100"
        >
          <el-card
            class="box-card h-100"
            body-style="height: calc(100% - 58px)"
          >
            <div slot="header" class="clearfix">
              <span class="header_title">{{ title }}</span>
            </div>
            <el-form ref="form" :model="formData">
              <div class="header_content">
              <span>1、人脸比对相似率 </span>
              <el-input-number
                v-model="formData.rlbdxsl"
                :controls="false"
                size="mini"
                :min="1"
                :max="100"
                class="w80"
                ></el-input-number>
                <span> %以下</span>
              </div>
              <div class="header_content">
              <span>2、近 </span>
              <el-input-number
                v-model="formData.jcts"
                :controls="false"
                :min="1"
                :max="100"
                size="mini"
                class="w80"
              ></el-input-number>
              <span> 天出入次数频率高达 </span>
              <el-input-number
                v-model="formData.jccs"
                :controls="false"
                :min="1"
                :max="100"
                size="mini"
                class="w80"
              ></el-input-number>
              <span> 次</span>
            </div>
            <div class="header_content">
              <span>3、在 </span>
              <el-date-picker
                v-model="time1"
                type="datetimerange"
                range-separator="-"
                style="width: 360px"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd HH:mm:ss"
              >
              </el-date-picker>
              <span> 出入次数高达</span>
              <el-input-number
                v-model="formData.jscrcs"
                :controls="false"
                :min="1"
                :max="100"
                size="mini"
                class="w80"
              ></el-input-number>
              <span> 次</span>
            </div>
            </el-form>
          </el-card>
        </el-col>

        <!-- 车辆预警 -->
        <el-col
          :span="7"
          class="h-100"
        >
          <el-card
            class="box-card h-100"
            body-style="height: calc(100% - 58px)"
          >
            <div slot="header" class="clearfix">
              <span class="header_title">{{ title1 }}</span>
            </div>
            <el-form ref="form1" :model="formData1">
              <div class="header_content">
              <span>1、不是本小区登记在档案的车牌号码进出次数高达 </span>
              <el-input-number
                v-model="formData1.crcs"
                :controls="false"
                :min="1"
                :max="100"
                size="mini"
                class="w80"
              ></el-input-number>
              <span> 次</span>
              </div>
              <div class="header_content">
              <span>2、近 </span>
              <el-input-number
                v-model="formData1.jcts"
                :controls="false"
                :min="1"
                :max="100"
                size="mini"
                class="w80"
              ></el-input-number>
              <span> 天出入次数频率高达 </span>
              <el-input-number
                v-model="formData1.jccs"
                :controls="false"
                :min="1"
                :max="100"
                size="mini"
                class="w80"
              ></el-input-number>
              <span> 次</span>
              </div>
              <div class="header_content">
              <span>3、在 </span>
              <el-date-picker
                v-model="time2"
                type="datetimerange"
                range-separator="-"
                style="width: 360px"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd HH:mm:ss"
              >
              </el-date-picker>
              <span> 出入次数高达</span>
              <el-input-number
                v-model="formData1.jscrcs"
                :controls="false"
                :min="1"
                :max="100"
                size="mini"
                class="w80"
              ></el-input-number>
              <span> 次</span>
              </div>
              <div class="header_content" >
              <span>4、不是本小区登录在档案的车牌号码进入本小区长达 </span>
              <el-input-number
                v-model="formData1.jrsj"
                :controls="false"
                :min="1"
                :max="100"
                size="mini"
                class="w80"
              ></el-input-number>
              <span> 小时</span>
              </div>
            </el-form>
          </el-card>
        </el-col>

        <!-- 聚集预警 -->
        <el-col
          :span="7"
          class="h-100"
        >
          <el-card
            class="box-card h-100"
            body-style="height: calc(100% - 58px)"
          >
            <div slot="header" class="clearfix">
              <span class="header_title">{{ title2 }}</span>
            </div>
            <el-form ref="form2" :model="formData2">
              <div class="header_content">
              <span>1、聚集人数达 </span>
              <el-input-number
                v-model="formData2.jjrs"
                :controls="false"
                :min="1"
                :max="100"
                size="mini"
                class="w80"
              ></el-input-number>
              <span> 人以上</span>
              </div>
              <div class="header_content">
                <span>2、聚集时间达 </span>
                <el-input-number
                  v-model="formData2.jjsj"
                  :controls="false"
                  :min="1"
                  :max="100"
                  size="mini"
                  class="w80"
                ></el-input-number>
                <span> 小时</span>
              </div>
            </el-form>
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
import { getSelectYcsz, updateYcsz } from '@/api/System_management/ExceptionSetting/index'
export default {
  data() {
    return {
      ExceptionData: {},
      userId: 1,
      title: '人员预警',
      title1: '车辆预警',
      title2: '聚集预警',
      formData: {
        jccs: 0,
        jcts: 0,
        jscrcs: 0,
        jsrq: '',
        ksrq: '',
        rlbdxsl: 0
      },
      formData1: {
        crcs: 0,
        jccs: 0,
        jcts: 0,
        jrsj: 0,
        jscrcs: 0,
        jsrq: '',
        ksrq: ''
      },
      formData2: {
        jjrs: 0,
        jjsj: 0
      }
    }
  },
  computed: {
    time1: {
      set(v) {
        this.formData.ksrq = v[0]
        this.formData.jsrq = v[1]
      },
      get() {
        return [
          this.formData.ksrq,
          this.formData.jsrq
        ]
      }
    },
    time2: {
      set(v) {
        this.formData1.ksrq = v[0]
        this.formData1.jsrq = v[1]
      },
      get() {
        return [
          this.formData1.ksrq,
          this.formData1.jsrq
        ]
      }
    }
  },
  created() {
    this.getSelectYcszInfo()
  },
  methods: {
    getSelectYcszInfo() {
      getSelectYcsz().then(res => {
        console.log(res)
        if (res.code === 1) {
          this.formData = res.data.ryyj
          this.formData1 = res.data.clyj
          this.formData2 = res.data.jjyj
          // // this.$message.success(res.message)
        } else {
          this.$message.error('查询成功')
        }
      })
    },
    Clear() {},
    Save() {
      const ycsz = {
        'ryyj': {
          ...this.formData
        },
        'clyj': {
          ...this.formData1
        },
        'jjyj': {
          ...this.formData2
        }
      }
      updateYcsz(this.userId, ycsz).then(res => {
        if (res.code === 1) {
          // this.$message.success(res.message)
          this.getSelectYcszInfo()
        } else {
          this.$message.error(res.message)
        }
      })
    }
  }
}
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
