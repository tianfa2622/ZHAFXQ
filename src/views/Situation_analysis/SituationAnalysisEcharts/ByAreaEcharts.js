var xAxisData = ["重点人员", "重点车辆", "人员异常", "车辆异常", "聚集异常"];
var legendData = ["辉煌国际", "中隆玉溪", "中国国际", "东玺门"];
// var title = "多横向折线图";
var serieData = [];
var metaDate = [
  [686, 864, 459, 682, 746, 356],
  [974, 689, 756, 423, 615, 531],
  [817, 598, 864, 476, 582, 465],
  [617, 765, 946, 555, 465, 763]
];
for (var v = 0; v < legendData.length; v++) {
  var serie = {
    name: legendData[v],
    type: "line",
    symbol: "circle",
    symbolSize: 10,
    data: metaDate[v]
  };
  serieData.push(serie);
}
var colors = ["#5c90f9", "#6cdcb0", "#5e7193", "#f7c42f"];
const options = {
  // backgroundColor: '#0f375f',
  // title : {text: title,textAlign:'left',textStyle:{color:"#fff",fontSize:"16",fontWeight:"normal"}},
  legend: {
    show: true,
    left: "left",
    data: legendData,
    y: "5%",
    itemWidth: 18,
    itemHeight: 12,
    textStyle: { color: "#c9c9c9", fontSize: 14 }
  },
  color: colors,
  grid: {
    left: "2%",
    top: "12%",
    bottom: "5%",
    right: "5%",
    containLabel: true
  },
  tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
  xAxis: [
    {
      type: "category",
      axisLine: { show: true, lineStyle: { color: "#000" } },
      axisLabel: { interval: 0, textStyle: { color: "#000", fontSize: 14 } },
      // axisTick : {show: false},
      data: xAxisData
    }
  ],
  yAxis: [
    {
      // axisTick : {show: true},
      // splitLine: {show:false},
      axisLabel: { textStyle: { color: "#000", fontSize: 14 } },
      axisLine: { show: true, lineStyle: { color: "#000" } }
    }
  ],
  series: serieData
};
export default options;
