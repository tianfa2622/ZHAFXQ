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
      label: "采集时间",
      param: "cjsj",
      align: "center"
    },
    {
      label: "姓名",
      param: "cjsj",
      align: "center"
    },
    {
      label: "身份证号码",
      param: "cjsj",
      align: "center"
    },
    {
      label: "凭证号",
      param: "pzh",
      align: "center"
    },
    {
      label: "开门时间",
      param: "skRqsj",
      align: "center"
    },
    {
      label: "门磁状态",
      param: "mczt",
      align: "center"
    },
    {
      label: "关联门禁采集设备",
      param: "gldmjCjsbxxbz",
      align: "center"
    },
    {
      label: "是否通过",
      param: "sftgPdbz",
      align: "center"
    },
    {
      label: "开门方式",
      param: "kmfsdm",
      align: "center"
    },
    {
      label: "开门结果",
      param: "kmjg",
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
        methods: "view",
        style: "color:rgba(26, 188, 156, 1)"
      }
    ]
  }
};
export default options;
