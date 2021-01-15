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
      label: "日期",
      param: "Date",
      align: "center"
    },
    {
      label: "操作内容",
      param: "OperationContent",
      align: "center"
    },
    {
      label: "操作人",
      param: "Affiliation",
      align: "center"
    }
  ],
  tableOption: {
    label: "操作",
    align: "center",
    options: [
      {
        label: "详情",
        type: "text",
        size: "mini",
        methods: "Details"
      }
    ]
  },
  // 表格数据
  tableData: [
    {
      Date: "2020年5月2日",
      OperationContent: "修改",
      Affiliation: "admin"
    }
  ],
  pagination: {
    isBackC: true,
    isShow: true,
    currentPage: 1,
    rows: 10,
    total: 20
  }
};
export default options;
