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
      param: "jlxxqmc",
      align: "center"
    },
    {
      label: "异常报警设备信息",
      param: "ycbjsbxx",
      align: "center"
    },
    {
      label: "聚集人数",
      param: "jjrs",
      align: "center"
    },
    {
      label: "异常情况",
      param: "ycqk",
      align: "center"
    },
    {
      label: "处理结果",
      param: "cljg",
      align: "center"
    }
  ],
  tableOption: {
    label: "操作",
    align: "center",
    options: [
      {
        label: "处理",
        type: "primary",
        size: "mini",
        methods: "dealWith",
        style: "background-color:#363636; border-color:#363636;"
      }
    ]
  }
};
export default options;
