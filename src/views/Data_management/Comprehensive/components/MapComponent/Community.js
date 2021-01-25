// let echartData = [
//   {
//     name: "流动人口",
//     value: "856"
//   },
//   {
//     name: "常住人口",
//     value: "749"
//   }
// ];

const options = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  color: ["#fa6e86", "#5ab1ef"],
  legend: {
    data: ["重点人员", "流动人口", "常住人口"]
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: {
    type: "value"
  },
  yAxis: {
    type: "category",
    data: ["小区1", "小区2", "小区3", "小区4", "小区5", "小区6", "小区7"]
  },
  series: [
    {
      name: "重点人员",
      type: "bar",
      barWidth: 20,
      stack: "总量",
      itemStyle: {
        normal: {
          color: "#88adf8"
        }
      },
      label: {
        show: true,
        position: "insideLeft"
      },
      data: [null, null, null, null, null, 56, 123]
    },
    {
      name: "流动人口",
      type: "bar",
      barWidth: 20,
      stack: "总量",
      itemStyle: {
        normal: {
          color: "#78deb3"
        }
      },
      label: {
        show: true,
        position: "insideLeft"
      },
      data: [323, 453, 545, 242, 564, 2243, 563]
    },
    {
      name: "常住人口",
      type: "bar",
      barWidth: 20,
      stack: "总量",
      itemStyle: {
        normal: {
          color: "#7585a3"
        }
      },
      label: {
        show: true,
        position: "insideLeft"
      },
      data: [557, 724, 543, 435, 290, 343, 239]
    }
  ]
};
export default options;
