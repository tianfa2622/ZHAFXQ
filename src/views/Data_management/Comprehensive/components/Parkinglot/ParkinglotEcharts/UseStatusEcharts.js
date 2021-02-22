const options = {
  // backgroundColor: '#011c3a',
  grid: {
    left: '7%',
    right: '2%',
    top: '9%',
    bottom: '10%'
  },
  xAxis: {
    data: ['使用中', '停用', '未启动', '维修', '报废', '其他'],
    axisLine: {
      lineStyle: {
        color: '#3d5269'
      }
    },
    axisLabel: {
      color: '#000',
      fontSize: 14
    }
  },
  yAxis: {
    // 			max:2,
    // 			min:0,
    // // 			splitNumber:4,
    type: 'value',
    nameTextStyle: {
      color: '#000',
      fontSize: 16
    },
    axisLine: {
      lineStyle: {
        color: '#000'
      }
    },
    axisLabel: {
      color: '#000',
      fontSize: 16
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#ccc'
      }
    }
    // interval:500,
  },
  series: [
    {
      type: 'bar',
      barWidth: 50,
      itemStyle: {
        normal: {
          color: '#74a0fb'
        }
      },
      label: {
        normal: {
          show: true,
          fontSize: 18,
          fontWeight: 'bold',
          color: '#74a0fb',
          position: 'top'
        }
      },
      data: [2, 1, 1, 2, 1.5, 0.5]
    }
  ]
}
export default options
