<template>
  <div class="h-100 w-100 dflex direction-column">
    <div class="header_title">
      <el-breadcrumb class="breadcrumb" separator=">>">
        <!-- :to="{ path: '/UserManagement' }" -->
        <el-breadcrumb-item>
          <span @click="changePage('1')" class="pointer"> 小区综合档案 </span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <span @click="changePage('5')" class="pointer"> 辉煌国际 </span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <span @click="changePage('8')" class="pointer"> 3栋 </span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <span @click="changePage('9')" class="pointer"> 2单元 </span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="wrap">
      <div class="left-arrow arrow" @click="scrollLeft -= 400">
        <i class="el-icon-arrow-left" style="display: block"></i>
      </div>
      <div class="dflex fill_height no-scrollbar cards" ref="cards">
        <div
          v-for="(item, i) in SelectAllData"
          :key="i"
          class="ma-10 card"
          :class="{ active: active === i }"
          @click="changeActive(i)"
        >
          <el-card
            class="fill_height"
            body-style="overflow: hidden;display: flex"
          >
            <div
              style="
                width: 250px;
                font-size: 15px;
                flex-grow: 0;
                flex-shrink: 0;
                line-height: 60px;
              "
            >
              <div>姓名:{{ item.djr }}</div>
              <div>身份证号:{{ item.djrGmsfzhm }}</div>
              <div>与房主关系:{{ item.ypzgxdm }}</div>
              <div>办理日期:{{ item.blRq }}</div>
              <div>居住事由:{{ item.jzSy }}</div>
              <div>居住方式:{{ item.jzfs }}</div>
              <div>入住日期:{{ item.rzRq }}</div>
              <div>撤离日期:{{ item.clRq }}</div>
              <div>地址:{{ item.dzmc }}</div>
            </div>
            <div
              style="
                width: 250px;
                font-size: 15px;
                flex-grow: 0;
                flex-shrink: 0;
                line-height: 60px;
              "
            >
              <div>登记人姓名:{{ item.djrXm }}</div>
              <div>登记人身份证号:{{ item.djrGmsfzhm }}</div>
              <div>登记人联系电话:{{ item.djrLxdh }}</div>
              <div>所属警务责任区:{{ item.zaglxxssjwzrqdm }}</div>
              <div>数据更新时间:{{ item.gxsj }}</div>
              <div>数据来源:{{ item.sjly }}</div>
              <div>数据状态:{{ item.sjzt }}</div>
            </div>
          </el-card>
        </div>
      </div>
      <div class="right-arrow arrow" @click="scrollLeft += 400">
        <i class="el-icon-arrow-right" style="display: block"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { getSelectAll } from "@/api/Data_management/index/Roomrelationship/index";
export default {
  name: "Roomrelationship",
  props: {
    currentPage: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // 当前展开的卡片
      active: 0,
      // 卡片盒子的总宽度
      cardsWidth: 0,
      // 左侧滚动距离
      scrollLeft: 0,
      // 显示出来的卡片盒子的宽度
      viewWidth: 0,
      SelectAllData: []
    };
  },
  watch: {
    scrollLeft: {
      handler() {
        if (this.scrollLeft < 0) {
          this.scrollLeft = 0;
        }
        if (this.scrollLeft + this.viewWidth > this.cardsWidth) {
          this.scrollLeft = this.cardsWidth - this.viewWidth;
        }
        this.$refs.cards.scrollTo({
          left: this.scrollLeft,
          behavior: "smooth"
        });
      }
    }
  },
  created() {
    this.getSelectInfo();
  },
  methods: {
    getSelectInfo() {
      getSelectAll({
        // ...this.paramsData
        // current: this.pagination.currentPage,
        // size: this.pagination.size
      }).then(res => {
        console.log(res);
        if (res.code === 1) {
          this.SelectAllData = res.data.records;
        } else {
          this.$message.error(res.message);
        }
      });
    },
    changeActive(i) {
      if (i === this.active) {
        this.active = 0;
      } else {
        this.active = i;
      }
      setTimeout(() => {
        this.initData();
      }, 200);
    },
    initData() {
      this.cardsWidth = this.$refs.cards.scrollWidth;
      this.viewWidth = this.$refs.cards.clientWidth;
    },
    // 跳转页面
    changePage(target) {
      // 更新父组件传入的prop ‘currentPage’
      this.$emit("update:currentPage", target);
    }
  },
  mounted() {
    this.initData();
    window.addEventListener("resize", this.initData);
  },
  destroyed() {
    window.removeEventListener("resize", this.initData);
  }
};
</script>

<style lang="less" scoped>
.wrap {
  height: calc(100% - 55px);
  position: relative;
  .cards {
    overflow: hidden;
    margin: 0 32px;
    box-sizing: border-box;
  }
  .card {
    flex-shrink: 0;
    flex-grow: 0;
    width: 250px;
    transition: width 0.2s;
    box-sizing: border-box;
    height: calc(100% - 20px);
  }
  .active {
    width: 480px;
  }
  .arrow {
    width: 32px;
    height: 32px;
    position: absolute;
    font-size: 32px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    &:hover {
      color: #06f;
    }
    &.left-arrow {
      left: 0;
    }
    &.right-arrow {
      right: 0;
    }
  }
}
::v-deep .el-breadcrumb__item {
  margin: 10px 0px 10px 10px;
  span {
    color: #ff6600 !important;
  }
}
</style>
