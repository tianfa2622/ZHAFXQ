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
      label: "巡查预案名称",
      param: "PlanName",
      align: "center"
    },
    {
      label: "关键词",
      param: "KeyWords",
      align: "center"
    },
    {
      label: "简要情况",
      param: "BriefSituation",
      align: "center"
    },
    {
      label: "详细情况",
      param: "Details",
      align: "center"
    },
    {
      label: "录入时间",
      param: "EntryTime",
      align: "center"
    },
    {
      label: "电子文件URL",
      param: "ElectronicFileURL",
      align: "center"
    },
    {
      label: "登记人姓名以及电话",
      param: "phoneAndName",
      width: "130"
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
        methods: "dealWith",
        style: "color:#39c5aa"
      },
      {
        label: "处理结果",
        type: "text",
        size: "mini",
        methods: "dealWith",
        style: "color:#39c5aa",
        isShow: true
      }
    ]
  },
  // 表格数据
  tableData: [
    {
      PlanName: "2016-10-01 12:12:12",
      KeyWords: "张小刚",
      BriefSituation: "张小刚",
      Details: "24",
      EntryTime: "",
      ElectronicFileURL: "",
      phoneAndName: ""
    },
    {
      PlanName: "2016-10-01 12:12:12",
      KeyWords: "张小刚",
      BriefSituation: "张小刚",
      Details: "24",
      EntryTime: "",
      ElectronicFileURL: "",
      phoneAndName: ""
    },
    {
      PlanName: "2016-10-01 12:12:12",
      KeyWords: "张小刚",
      BriefSituation: "张小刚",
      Details: "24",
      EntryTime: "",
      ElectronicFileURL: "",
      phoneAndName: ""
    },
    {
      PlanName: "2016-10-01 12:12:12",
      KeyWords: "张小刚",
      BriefSituation: "张小刚",
      Details: "24",
      EntryTime: "",
      ElectronicFileURL: "",
      phoneAndName: ""
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
