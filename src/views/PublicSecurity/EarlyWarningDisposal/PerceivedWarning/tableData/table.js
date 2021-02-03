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
      label: "预警日期",
      param: "yjRqsj",
      align: "center"
    },
    {
      label: "感知预警事件类型",
      param: "gzyjsjlx",
      align: "center"
    },
    {
      label: "预警状态",
      param: "yjzt",
      align: "center"
    },
    {
      label: "采集时间",
      param: "cjsj",
      align: "center"
    },
    {
      label: "采集系统信息",
      param: "cjxtxxbz",
      align: "center"
    },
    {
      label: "处理人姓名及电话",
      param: "clrXmDh",
      align: "center"
    },
    {
      label: "处理结果",
      param: "ch1Cljg"
      // align: "center"
    }
  ],
  tableOption: {
    label: "操作",
    align: "center",
    options: [
      {
        label: "处理",
        type: "text",
        size: "mini",
        methods: "edit",
        style: "color:#39c5aa"
        // condition: row => {
        //   return row.status === 1;
        // }
      },
      {
        label: "处理结果",
        type: "text",
        size: "mini",
        methods: "view",
        style: "color:#39c5aa"
        // condition: row => {
        //   return row.status === 0;
        // }
      }
    ]
  }
};
export default options;
