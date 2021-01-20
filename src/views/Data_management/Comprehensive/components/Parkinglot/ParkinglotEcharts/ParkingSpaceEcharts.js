let bgColor = "#fff";
let color = ["#74a0fb", "#78deb3", "#7585a3"];
let echartData = [
  {
    name: "停车场A区",
    value: "366"
  },
  {
    name: "停车场B区",
    value: "570"
  },
  {
    name: "停车场C区",
    value: "325"
  }
];

const options = {
  color: color,
  tooltip: {
    trigger: "item"
  },
  legend: {
    orient: "vertical",
    icon: "rect",
    x: "70%",
    y: "center",
    itemWidth: 12,
    itemHeight: 12,
    align: "left",
    textStyle: {
      fontSize: 14,
      padding: [0, 5, 0, 15]
    }
  },
  // data: legendName
  series: [
    {
      type: "pie",
      radius: ["40%", "70%"],
      center: ["40%", "50%"],
      label: {
        normal: {
          show: true,
          position: "inner",
          formatter: "{c}"
        }
      },
      data: echartData,
      itemStyle: {
        normal: {
          borderColor: bgColor,
          borderWidth: 4
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      }
    }
  ]
};
export default options;
