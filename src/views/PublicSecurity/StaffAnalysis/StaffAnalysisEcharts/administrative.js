const bgColor = '#fff'
// let fontColor = "#333";
// let titleColor = "#666";
const scale = 1
// let title = "总数";
const echartData = [
  {
    name: '流动人口',
    value: '856'
    // unit: "辆"
  },
  {
    name: '常住人口',
    value: '749'
    // unit: "辆"
  }
]
// let total = echartData.reduce((a, b) => {
//   return a + b.value * 1;
// }, 0);

const options = {
  backgroundColor: bgColor,
  color: ['#74a0fb', '#91e5c1'],
  tooltip: {
    trigger: 'item',
    // formatter: "{b} <br/>{b}: {c} ({d}%)",
    backgroundColor: 'rgba(255,255,255,0.8)',
    textStyle: {
      color: '#000',
      lineHeight: 30
    }
  },
  legend: {
    orient: 'vertical',
    icon: 'rect',
    x: '60%',
    y: '30%',
    itemWidth: 12 * scale,
    itemHeight: 12 * scale,
    align: 'left',
    textStyle: {
      rich: {
        name: {
          fontSize: 14 * scale
        },
        value: {
          fontSize: 14 * scale,
          padding: [0, 5, 0, 15]
        },
        unit: {
          fontSize: 14 * scale
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
      radius: ['25%', '60%'],
      center: ['35%', '50%'],
      data: echartData,
      tooltip: {
        trigger: 'item',
        formatter: function(params) {
          return (
            params.name +
            '<br>' +
            params.marker +
            params.name +
            '：' +
            params.value
          )
        }
      },
      // itemStyle: {
      //     normal: {
      //         borderColor: bgColor,
      //         borderWidth: 1
      //     }
      // },
      labelLine: {
        normal: {
          length: 20,
          length2: 20
        }
      },
      label: {
        normal: {
          position: 'inner',
          color: '#fff',
          fontStyle: 'normal',
          fontWeight: 'normal',
          // fontFamily: 'sans-serif' ,
          fontSize: 14,
          formatter: params => {
            return `${params.value}`
          }
        }
      }
    }
  ]
}
export default options
