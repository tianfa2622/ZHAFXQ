const options = {
  size: "small",
  CardAttributes: {
    class: "mt-10 pb-30 h-100 flex1 posi-rel over-h",
    body: "height: 100%"
  },
  HeaderCellStyle: { background: " #f2f2f2 !important", color: "#fff" },
  // 表头数据
  tableColumns: [
    {
      label: "姓名",
      param: "xm",
      align: "center"
    },
    {
      label: "身份证号码",
      param: "zjhm",
      align: "center"
    },
    {
      label: "民族",
      param: "mzdm",
      align: "center"
    },
    {
      label: "联系方式",
      param: "lxdh",
      align: "center"
    },
    {
      label: "现住地址",
      param: "hjdzQhnxxdz",
      align: "center"
    }
  ],
  tableOption: {
    label: "操作",
    align: "center",
    options: [
      {
        label: "查看",
        type: "text",
        // size: "mini",
        methods: "toView"
      },
      {
        label: "编辑",
        type: "text",
        // size: "mini",
        methods: "editor"
      }
    ]
  }
};
export default options;
