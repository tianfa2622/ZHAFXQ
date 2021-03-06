import echarts from "echarts";
let data = [
  { stock: "类型1", fundPost: "21.987691" },
  { stock: "类型2", fundPost: "20.377176" },
  { stock: "类型3", fundPost: "19.127404" }
  // { stock: "ddd", fundPost: "18.40882" },
  // { stock: "eee", fundPost: "17.980597" },
  // { stock: "fff", fundPost: "16.957898" },
  // { stock: "ggg", fundPost: "15.099577" },
  // { stock: "eee", fundPost: "14.76103" },
  // { stock: "ttt", fundPost: "13.002175" },
  // { stock: "fff", fundPost: "12.133536" }
];
function contains(arr, dst) {
  var i = arr.length;
  while ((i -= 1)) {
    if (arr[i] == dst) {
      return i;
    }
  }
  return false;
}

var attackSourcesColor = [
  new echarts.graphic.LinearGradient(0, 1, 1, 1, [
    { offset: 0, color: "#EB3B5A" },
    { offset: 1, color: "#FE9C5A" }
  ]),
  new echarts.graphic.LinearGradient(0, 1, 1, 1, [
    { offset: 0, color: "#FA8231" },
    { offset: 1, color: "#FFD14C" }
  ]),
  new echarts.graphic.LinearGradient(0, 1, 1, 1, [
    { offset: 0, color: "#F7B731" },
    { offset: 1, color: "#FFEE96" }
  ]),
  new echarts.graphic.LinearGradient(0, 1, 1, 1, [
    { offset: 0, color: "#395CFE" },
    { offset: 1, color: "#2EC7CF" }
  ])
];
var attackSourcesColor1 = [
  "#EB3B5A",
  "#FA8231",
  "#F7B731",
  "#3860FC",
  "#1089E7",
  "#F57474",
  "#56D0E3",
  "#1089E7",
  "#F57474",
  "#1089E7",
  "#F57474",
  "#F57474"
];
var attaData = [];
var attaName = [];
var topName = [];
data.forEach((it, index) => {
  attaData[index] = parseFloat(it.fundPost).toFixed(2);
  attaName[index] = it.stock;
  topName[index] = ` ${it.stock}`;
});
var salvProMax = []; //背景按最大值
for (let i = 0; i < attaData.length; i++) {
  salvProMax.push(attaData[0]);
}
function attackSourcesDataFmt(sData) {
  var sss = [];
  // eslint-disable-next-line prettier/prettier
  sData.forEach(function (item, i) {
    let itemStyle = {
      color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i]
    };
    sss.push({
      value: item,
      itemStyle: itemStyle
    });
  });
  return sss;
}

const options = {
  // backgroundColor: "#000",
  tooltip: {
    show: false,
    backgroundColor: "rgba(3,169,244, 0.5)", //背景颜色（此时为默认色）
    textStyle: {
      fontSize: 14
    }
  },
  color: ["#F7B731"],
  legend: {
    pageIconSize: [12, 12],
    itemWidth: 20,
    itemHeight: 10,
    textStyle: {
      //图例文字的样式
      fontSize: 14,
      color: "#000"
    },
    selectedMode: false,
    data: ["发布类型"]
  },
  grid: {
    left: "5%",
    right: "2%",
    width: "80%",
    bottom: "15%",
    top: "15%",
    containLabel: true
  },
  xAxis: {
    type: "value",

    splitLine: {
      show: false
    },
    axisLabel: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    }
  },
  yAxis: [
    {
      type: "category",
      inverse: true,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisPointer: {
        label: {
          show: true
          //margin: 30
        }
      },
      pdaaing: [10, 0, 0, 0],
      postion: "right",
      data: attaName,
      axisLabel: {
        margin: 30,
        fontSize: 14,
        align: "left",
        padding: [2, 0, 0, 0],
        color: "#000",
        rich: {
          nt1: {
            color: "#000",
            backgroundColor: attackSourcesColor1[0],
            width: 15,
            height: 15,
            fontSize: 14,
            align: "center",
            borderRadius: 100,
            lineHeight: "7",
            padding: [0, 1, 2, 1]
            // padding:[0,0,2,0],
          },
          nt2: {
            color: "#000",
            backgroundColor: attackSourcesColor1[1],
            width: 15,
            height: 15,
            fontSize: 14,
            align: "center",
            borderRadius: 100,
            lineHeight: "7",
            padding: [0, 1, 2, 1]
          },
          nt3: {
            color: "#000",
            backgroundColor: attackSourcesColor1[2],
            width: 15,
            height: 15,
            fontSize: 14,
            align: "center",
            borderRadius: 100,
            lineHeight: "7",
            padding: [0, 1, 2, 1]
          },
          nt: {
            color: "#000",
            backgroundColor: attackSourcesColor1[3],
            width: 15,
            height: 15,
            fontSize: 14,
            align: "center",
            lineHeight: 5,
            borderRadius: 100,
            padding: [0, 1, 2, 1]
            // lineHeight: 5
          }
        },
        // eslint-disable-next-line prettier/prettier
        formatter: function (value, index) {
          index = contains(attaName, value) + 1;
          if (index - 1 < 3) {
            return ["{nt" + index + "|" + index + "}"].join("\n");
          } else {
            return ["{nt|" + index + "}"].join("\n");
          }
        }
      }
    },
    {
      //名称
      type: "category",
      offset: -10,
      position: "left",
      axisLine: {
        show: false
      },
      inverse: false,
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        color: ["#000"],
        align: "left",
        verticalAlign: "bottom",
        lineHeight: 32,
        fontSize: 10
      },
      data: topName
    }
  ],
  series: [
    {
      zlevel: 1,
      name: "",
      type: "bar",
      barWidth: "15px",
      animationDuration: 1500,
      data: attackSourcesDataFmt(attaData),
      align: "center",
      itemStyle: {
        normal: {
          barBorderRadius: 10
        }
      },
      label: {
        show: true,
        fontSize: 10,
        color: "#000",
        textBorderWidth: 2,
        padding: [2, 0, 0, 0]
      }
    },
    {
      name: "发布类型",
      type: "bar",
      barWidth: 15,
      barGap: "-100%",
      margin: "20",
      data: salvProMax,
      textStyle: {
        //图例文字的样式
        fontSize: 14,
        color: "#000"
      },
      itemStyle: {
        normal: {
          color: "#05325F",
          //width:"100%",
          fontSize: 14,
          barBorderRadius: 30
        }
      }
    }
  ]
};
export default options;
