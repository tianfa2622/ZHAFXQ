// 通行人车流量折线图
// eslint-disable-next-line no-unused-vars
import echarts from 'echarts'
const bgColor = '#fff'
// let fontColor = "#333";
const titleColor = '#fff'
const scale = 1
const title = '车辆总数'
export const echartData = []
const total = echartData.reduce((a, b) => {
  return a + b.value * 1
}, 0)
const options = {
  color: ['#7af4ff', '#ff5065', '#77e872'],
  tooltip: {
    trigger: 'item'
  },
  title: {
    text: '{name|' + title + '}\n{val|' + total + '}',
    top: 'center',
    left: '12%',
    textStyle: {
      rich: {
        name: {
          fontSize: 12 * scale,
          color: titleColor,
          padding: [5, 5]
        },
        val: {
          fontSize: 12 * scale,
          color: titleColor,
          padding: [0, 20]
        }
      }
    }
  },
  legend: {
    orient: 'vertical',
    icon: 'rect',
    x: '50%',
    y: 'center',
    itemWidth: 14 * scale,
    itemHeight: 14 * scale,
    align: 'left',
    textStyle: {
      rich: {
        name: {
          fontSize: 14 * scale,
          color: titleColor
        },
        value: {
          fontSize: 14 * scale,
          padding: [0, 8, 0, 15],
          color: '#66ff99'
        },
        unit: {
          fontSize: 12 * scale,
          color: titleColor
        }
      }
    },
    formatter: function(name) {
      let res = echartData.filter(v => v.name === name)
      res = res[0] || {}
      const unit = res.unit || ''
      return (
        '{name|' + name + '}  {value|' + res.value + '}{unit|' + unit + '}'
      )
    }
    // data: legendName
  },
  series: [
    {
      type: 'pie',
      radius: ['40%', '80%'],
      center: ['20%', '45%'],
      data: echartData,

      itemStyle: {
        normal: {
          borderColor: bgColor,
          borderWidth: 1
        }
      },
      labelLine: {
        show: false // 隐藏标示线
      },
      label: {
        show: false // 隐藏标示文字
        // normal: {
        //   position: 'top',
        //   color: "#fff",
        //   fontSize: 12,
        //   formatter: (params) => {
        //     return `${params.name} \r\n ${params.percent}%`
        //   }
        // }
      }
    }
  ]
}
export default options
