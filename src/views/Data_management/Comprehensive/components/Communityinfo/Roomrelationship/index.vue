<template>
  <div class="wrap fill_height">
    <div class="left-arrow arrow" @click="scrollLeft -= 400">
      <i class="el-icon-arrow-left" style="display: block"></i>
    </div>
    <div class="dflex fill_height no-scrollbar cards" ref="cards">
      <div
        v-for="i in 10"
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
            style="width: 200px; flex-grow: 0; flex-shrink: 0; line-height:60px"
          >
            <div>姓名:</div>
            <div>身份证号:</div>
            <div>与房主关系:</div>
            <div>办理日期:</div>
            <div>居住事由:</div>
            <div>居住方式:</div>
            <div>入住日期:</div>
            <div>撤离日期:</div>
            <div>地址:</div>
          </div>
          <div style="width: 200px; flex-grow: 0; flex-shrink: 0">
            <div>登记人姓名:</div>
            <div>登记人身份证号:</div>
            <div>登记人联系电话:</div>
            <div>所属警务责任区:</div>
            <div>数据更新时间:</div>
            <div>数据来源:</div>
            <div>数据状态:</div>
          </div>
        </el-card>
      </div>
    </div>
    <div class="right-arrow arrow" @click="scrollLeft += 400">
      <i class="el-icon-arrow-right" style="display: block"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前展开的卡片
      active: 0,
      // 卡片盒子的总宽度
      cardsWidth: 0,
      // 左侧滚动距离
      scrollLeft: 0,
      // 显示出来的卡片盒子的宽度
      viewWidth: 0
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
  methods: {
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
  position: relative;
  .cards {
    overflow: hidden;
    margin: 0 32px;
    box-sizing: border-box;
  }
  .card {
    flex-shrink: 0;
    flex-grow: 0;
    width: 200px;
    transition: width 0.2s;
    box-sizing: border-box;
    height: calc(100% - 20px);
  }
  .active {
    width: 400px;
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
</style>
