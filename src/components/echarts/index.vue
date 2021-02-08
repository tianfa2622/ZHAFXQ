<template>
  <div :id="elId" class="chart"></div>
</template>

<script>
import echarts from "echarts";
import UUID from "uuid/v1";
export default {
  props: {
    option: {
      type: Object,
      default: function() {
        return {};
      },
      required: true
    }
  },
  data() {
    return {
      elId: "",
      myChart: null
    };
  },
  created() {
    this.elId = UUID();
  },
  watch: {
    option: {
      handler: function(v) {
        this.myChart.setOption(v);
      },
      deep: true
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    handlerResize() {
      this.myChart.resize();
    },
    drawLine() {
      this.myChart = echarts.init(document.getElementById(this.elId));
      this.myChart.setOption(this.option);
      window.addEventListener("resize", this.handlerResize);
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handlerResize);
  }
};
</script>

<style lang="less">
.chart {
  width: 100% !important;
  height: 100% !important;
}
</style>
