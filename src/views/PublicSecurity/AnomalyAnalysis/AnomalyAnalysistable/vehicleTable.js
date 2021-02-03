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
      label: "异常时间",
      param: "ycsj",
      align: "center"
    },
    {
      label: "车牌号",
      param: "jdchphm",
      align: "center"
    },
    {
      label: "车辆品牌",
      param: "zwppmc",
      align: "center"
    },
    {
      label: "车辆颜色",
      param: "jdccsysdm",
      align: "center"
    },
    {
      label: "是否为重点车辆",
      param: "cldjlx",
      align: "center",
      render: row => {
        if (row.cldjlx === "0") {
          return "否";
        } else if (row.cldjlx === "1") {
          return "是";
        }
      },
      class: row => {
        if (row.cldjlx === "1") {
          return "status-No";
        } else if (row.cldjlx === "0") {
          return "status-Yes";
        }
      }
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
