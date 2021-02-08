const options = {
  color: [
    "#37a2da",
    "#32c5e9",
    "#9fe6b8",
    "#ffdb5c",
    "#ff9f7f",
    "#fb7293",
    "#e7bcf3",
    "#8378ea"
  ],
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    // left: 'left',
    x: "30%",
    y: "60%",
    align: "left",

    formatter: function(name) {
      var oa = options.series[0].data;
      // var num = oa[0].value + oa[1].value + oa[2].value;
      for (var i = 0; i < options.series[0].data.length; i++) {
        if (name == oa[i].name) {
          return name + ": " + "（" + oa[i].time + "）";
        }
      }
    },
    icon: "circle",
    padding: 3,
    itemGap: 20, // 各个item之间的间隔，单位px，默认为10， // 横向布局时为水平间隔，纵向布局时为纵向间隔
    itemWidth: 20, // 图例图形宽度
    itemHeight: 14, // 图例图形高度
    textStyle: {
      // padding:[0,0,50,0],
      fontSize: 14,
      color: "#000"
    },
    data: ["凌晨", "早上", "上午", "下午", "晚上"]
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: "50%",
      center: ["50%", "30%"],
      data: [
        { value: 34, name: "凌晨", time: "00:00:00 - 04:59:59" },
        { value: 32, name: "早上", time: "05:00:00 - 07:59:59" },
        { value: 109, name: "上午", time: "08:00:00 - 11:59:59" },
        { value: 121, name: "下午", time: "12:00:00 - 17:59:59" },
        { value: 85, name: "晚上", time: "18:00:00 - 23:59:59" }
      ],

      label: {
        normal: {
          show: false
        }
      }
    }
  ]
};
export default options;
