<template>
  <div class="mwidth fill_height">
    <el-row type="flex" justify="space-between" align="middle">
      <el-col :span="5" class="header-lh">
        <span class="header_title">智慧安防小区</span>
      </el-col>
      <el-col :span="12">
        <NavMenu></NavMenu>
      </el-col>
      <el-col :span="5">
        <div class="fll clearfix">
          <p class="right-title title-color">{{ nowDate }}</p>
          <h1 class="title1-color">{{ period }}，欢迎XXX登入系统</h1>
        </div>
        <div class="flr clearfix mr-20">
          <el-link type="danger">退 出</el-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getCurrentDate } from "@/utils/date.js";
import NavMenu from "./NavMenu";
export default {
  components: {
    NavMenu
  },
  data() {
    return {
      nowDate: "",
      period: ""
    };
  },
  mounted() {
    let that = this;
    this.timer = setInterval(() => {
      that.nowDate = getCurrentDate();
      that.period = this.PeriodofTime();
    }, 1000);
  },
  methods: {
    PeriodofTime() {
      let time = new Date();
      let Hour = time.getHours(); // 时
      if (6 <= Hour < 9) {
        return "早上好";
      } else if (6 <= Hour && Hour < 11) {
        return "上午好";
      } else if (11 <= Hour && Hour < 14) {
        return "中午好";
      } else if (14 <= Hour && Hour < 18) {
        return "下午好";
      } else if (18 <= Hour && Hour < 22) {
        return "晚上好";
      } else {
        return "您好";
      }
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
};
</script>

<style lang="less">
.mwidth {
  .header-lh {
    line-height: 80px;
    text-align: center;
    .header_title {
      font-size: 32px;
      font-weight: 700;
      color: rgb(255, 255, 255);
    }
  }
  .right-title {
    font-size: 14px;
  }
  .title-color {
    color: #33ffff;
  }
  .title1-color {
    margin-top: 10px;
    font-size: 16px;
    color: #fff;
  }
  .header-right {
    text-align: center;
  }
  // .h88 {
  //   height: 50px;
  //   line-height: 50px;
  // }
}
</style>
