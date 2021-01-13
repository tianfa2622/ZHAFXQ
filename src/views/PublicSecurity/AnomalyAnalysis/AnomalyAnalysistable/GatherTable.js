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
      param: "CommunityName",
      align: "center"
    },
    {
      label: "异常报警设备信息",
      param: "AbnormalEquipment",
      align: "center"
    },
    {
      label: "聚集人数",
      param: "GatherTheNumber",
      align: "center"
    },
    {
      label: "异常情况",
      param: "abnormalSituation",
      align: "center"
    },
    {
      label: "处理结果",
      param: "processResult",
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
  },
  // 表格数据
  tableData: [
    {
      CommunityName: "扬帆小区",
      AbnormalEquipment: "扬帆小区",
      GatherTheNumber: "5",
      abnormalSituation: "02:00-03:30有多名人员聚集",
      processResult: ""
    },
    {
      CommunityName: "扬帆小区",
      AbnormalEquipment: "扬帆小区",
      GatherTheNumber: "5",
      abnormalSituation: "02:00-03:30有多名人员聚集",
      processResult: ""
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
