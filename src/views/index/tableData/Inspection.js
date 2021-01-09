const options = {
  CardAttributes: {
    // title: "设备信息",
    class: "h-100 w-100",
    // style:'over-flow: hidden',
    body: "padding:0px",
    shadow: "never"
  },
  size: "small",
  HeaderCellStyle: { background: " #333333 !important", color: "#fff" },
  RowStyle: { background: "#141d49 !important", color: "#fff" },
  // 表头数据
  tableColumns: [
    {
      label: "巡查预案名称",
      param: "PlanName"
    },
    {
      label: "关键词",
      param: "KeyWords"
    },
    {
      label: "简要情况",
      param: "BriefSituation"
    },
    {
      label: "详细情况",
      param: "Details"
    },
    {
      label: "录入时间",
      param: "EntryTime"
    },
    {
      label: "电子文件URL",
      param: "fileURL"
    },
    {
      label: "登记人姓名及电话",
      param: "nameAndPhone"
    }
  ],
  // 表格数据
  tableData: [
    {
      PlanName: "2016-10-01 12:12:12",
      KeyWords: "张小刚",
      BriefSituation: "张小刚",
      Details: "24",
      EntryTime: "",
      fileURL: "",
      nameAndPhone: ""
    },
    {
      PlanName: "2016-10-01 12:12:12",
      KeyWords: "张小红",
      BriefSituation: "张小红",
      Details: "30",
      EntryTime: "",
      fileURL: "",
      nameAndPhone: ""
    },
    {
      PlanName: "2016-10-01 12:12:12",
      KeyWords: "张小刚",
      BriefSituation: "张小刚",
      Details: "24",
      EntryTime: "",
      fileURL: "",
      nameAndPhone: ""
    },
    {
      PlanName: "2016-10-01 12:12:12",
      KeyWords: "张小刚",
      BriefSituation: "张小刚",
      Details: "24",
      EntryTime: "",
      fileURL: "",
      nameAndPhone: ""
    }
  ]
};
export default options;
