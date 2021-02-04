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
      label: "联系电话",
      param: "lxdh",
      align: "center"
    },
    {
      label: "现住地址",
      param: "sjjzdQhnxxdz",
      align: "center"
    },
    {
      label: "所有车牌号码",
      param: "jdchphm",
      align: "center"
    },
    {
      label: "所有房产小区名称",
      param: "syxqmc",
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
        // size: "mini",
        methods: "view"
      }
    ]
  }
};
export default options;
