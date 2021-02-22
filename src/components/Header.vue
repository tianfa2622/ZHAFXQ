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
          <!-- <p class="right-title title-color"></p> -->
          <h1 class="title1-color">{{ period }}，XXX。今天是{{ nowDate }}</h1>
        </div>
        <div class="logout clearfix mr-20">
          <el-link type="danger">退 出</el-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getCurrentDate } from '@/utils/date.js'
import NavMenu from './NavMenu'
export default {
  components: {
    NavMenu
  },
  data() {
    return {
      nowDate: '',
      period: ''
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.nowDate = getCurrentDate()
      this.period = this.PeriodofTime()
    }, 1000)
  },
  methods: {
    PeriodofTime() {
      const time = new Date()
      const Hour = time.getHours() // 时
      if (Hour >= 6 && Hour < 9) {
        return '早上好'
      } else if (Hour >= 9 && Hour < 11) {
        return '上午好'
      } else if (Hour >= 11 && Hour < 14) {
        return '中午好'
      } else if (Hour >= 14 && Hour < 18) {
        return '下午好'
      } else if (Hour >= 18 && Hour < 22) {
        return '晚上好'
      } else {
        return '您好'
      }
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}
</script>

<style lang="less">
.mwidth {
  position: relative;
  .header-lh {
    height: 80px;
    text-align: center;
    .header_title {
      font-size: 38px;
      line-height: 80px;
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
    font-size: 16px;
    color: #fff;
  }
  .header-right {
    text-align: center;
  }
  .logout {
    position: absolute;
    right: 0;
    top: 5px;
  }
  // .h88 {
  //   height: 50px;
  //   line-height: 50px;
  // }
}
</style>
