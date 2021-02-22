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
const data = {
  date: ['7.1', '7.2', '7.3', '7.4', '7.5', '7.6', '7.7'],
  legend: ['聚集异常', '人员异常', '车辆异常', '重点车辆', '重点人员'],
  data: [
    [98, 123, 221, 111, 99, 67, 342],
    [123, 221, 232, 442, 232, 231, 121],
    [976, 532, 123, 321, 342, 412, 221],
    [345, 123, 321, 243, 342, 342, 234],
    [616, 213, 123, 321, 432, 234, 543]
  ],
  color: ['#74a0fb', '#78deb3', '#7585a3', '#f7c74a', '#ec8067']
}

const options = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  color: ['#fa6e86', '#5ab1ef'],
  legend: {
    data: data.legend
  },
  grid: {
    left: '2%',
    right: '4%',
    bottom: '2%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: data.date
  },
  series: [
    // {
    //   name: "聚集异常",
    //   type: "bar",
    //   barWidth: 20,
    //   stack: "总量",
    //   itemStyle: {
    //     normal: {
    //       color: "#74a0fb"
    //     }
    //   },
    //   label: {
    //     normal: {
    //       show: true,
    //       position: "inside",
    //       formatter: this.zero_format()
    //     }
    //   },
    //   z: 20,
    //   data: [98, 123, 221, 111, 99, 67, 342]
    // },
    // {
    //   name: "人员异常",
    //   type: "bar",
    //   barWidth: 20,
    //   stack: "总量",
    //   itemStyle: {
    //     normal: {
    //       color: "#78deb3"
    //     }
    //   },
    //   label: {
    //     show: true,
    //     position: "insideLeft"
    //   },
    //   z: 10,
    //   data: [123, 221, 232, 442, 232, 231, 121]
    // },
    // {
    //   name: "车辆异常",
    //   type: "bar",
    //   barWidth: 20,
    //   stack: "总量",
    //   itemStyle: {
    //     normal: {
    //       color: "#7585a3"
    //     }
    //   },
    //   label: {
    //     show: true,
    //     position: "insideLeft"
    //   },
    //   z: 10,
    //   data: [976, 532, 123, 321, 342, 412, 221]
    // },
    // {
    //   name: "重点车辆",
    //   type: "bar",
    //   barWidth: 20,
    //   stack: "总量",
    //   itemStyle: {
    //     normal: {
    //       color: "#f7c74a"
    //     }
    //   },
    //   label: {
    //     show: true,
    //     position: "insideLeft"
    //   },
    //   z: 10,
    //   data: [345, 123, 321, 243, 342, 342, 234]
    // },
    // {
    //   name: "重点人员",
    //   type: "bar",
    //   barWidth: 20,
    //   stack: "总量",
    //   itemStyle: {
    //     normal: {
    //       color: "#ec8067"
    //     }
    //   },
    //   label: {
    //     show: true,
    //     position: "insideLeft"
    //   },
    //   z: 10,
    //   data: [616, 213, 123, 321, 432, 234, 543]
    // }
  ]
}
for (let i = 0; i < data.legend.length; i++) {
  options.series.push({
    name: data.legend[i],
    type: 'bar',
    barWidth: 20,
    stack: '总量',
    itemStyle: {
      normal: {
        color: data.color[i]
      }
    },
    label: {
      normal: {
        show: true,
        position: 'inside',
        formatter: function(params) {
          if (params.value > 0) {
            return params.value
          } else {
            return ''
          }
        }
      }
    },
    z: 20,
    data: data.data[i]
  })
}
export default options
