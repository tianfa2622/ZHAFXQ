// 通行人车流量折线图
// eslint-disable-next-line no-unused-vars
import echarts from "echarts";
import { getqueryCl } from "@/api/home/api";
let bgColor = "#fff";
// let fontColor = "#333";
let titleColor = "#fff";
let scale = 1;
let title = "车辆总数";
let echartData = [
  {
    name: "常驻车辆",
    value: "7000",
    unit: "辆"
  },
  {
    name: "重点车辆",
    value: "7000",
    unit: "辆"
  },
  {
    name: "临时车辆",
    value: "7000",
    unit: "辆"
  }
];
getqueryCl().then(res => {
  let data = res;
  let array = Object.keys(data);
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    obj.name = array[i];
    obj.value = data[array[i]];
    obj.unit = "辆";
    echartData.push(obj);
  }
  return echartData;
});
let total = echartData.reduce((a, b) => {
  return a + b.value * 1;
}, 0);
const options = {
  color: ["#7af4ff", "#ff5065", "#77e872"],
  tooltip: {
    trigger: "item"
  },
  title: {
    text: "{name|" + title + "}\n{val|" + total + "}",
    top: "center",
    left: "13%",
    textStyle: {
      rich: {
        name: {
          fontSize: 12 * scale,
          color: titleColor,
          padding: [5, 0]
        },
        val: {
          fontSize: 12 * scale,
          color: titleColor,
          padding: [0, 6]
        }
      }
    }
  },
  legend: {
    orient: "vertical",
    icon: "rect",
    x: "50%",
    y: "center",
    itemWidth: 14 * scale,
    itemHeight: 14 * scale,
    align: "left",
    textStyle: {
      rich: {
        name: {
          fontSize: 14 * scale,
          color: titleColor
        },
        value: {
          fontSize: 14 * scale,
          padding: [0, 8, 0, 15],
          color: "#66ff99"
        },
        unit: {
          fontSize: 12 * scale,
          color: titleColor
        }
      }
    },
    // eslint-disable-next-line prettier/prettier
    formatter: function (name) {
      let res = echartData.filter(v => v.name === name);
      res = res[0] || {};
      let unit = res.unit || "";
      return (
        "{name|" + name + "}  {value|" + res.value + "}{unit|" + unit + "}"
      );
    }
    // data: legendName
  },
  series: [
    {
      type: "pie",
      radius: ["30%", "60%"],
      center: ["20%", "50%"],
      data: echartData,

      itemStyle: {
        normal: {
          borderColor: bgColor,
          borderWidth: 1
        }
      },
      labelLine: {
        show: false //隐藏标示线
      },
      label: {
        show: false //隐藏标示文字
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
};
export default options;
