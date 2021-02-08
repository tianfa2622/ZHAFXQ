const options = {
  size: "small",
  CardAttributes: {
    class: " pb-25 h-100 flex1 posi-rel over-h",
    body: "height: 100%"
  },
  HeaderCellStyle: { background: " #f2f2f2 !important", color: "#000" },
  // 表头数据
  tableColumns: [
    {
      label: "小区名",
      param: "area",
      align: "center"
    },
    {
      label: "重点人员",
      param: "zdry",
      align: "center"
    },
    {
      label: "重点车辆",
      param: "zdcl",
      align: "center"
    },
    {
      label: "人员异常",
      param: "ryyc",
      align: "center"
    },
    {
      label: "车辆异常",
      param: "clyc",
      align: "center"
    },
    {
      label: "聚集异常",
      param: "jjyc",
      align: "center"
    }
  ]
};
export default options;
