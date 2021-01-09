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
  RowStyle: { background: " #141d49 !important", color: "#fff" },
  // 表头数据
  tableColumns: [
    {
      label: "预警日期",
      param: "WarningDate"
    },
    {
      label: "感知预警事件类型",
      param: "TypesOf"
    },
    {
      label: "预警状态",
      param: "status"
    },
    {
      label: "采集时间",
      param: "AcquisitionTime"
    },
    {
      label: "采集系统信息",
      param: "information"
    },
    {
      label: "处理人姓名及电话",
      param: "nameAndPhone"
    },
    {
      label: "处理结果",
      param: "processResult"
    }
  ],
  // 表格数据
  tableData: [
    {
      WarningDate: "2016-10-01 12:12:12",
      TypesOf: "张小刚",
      status: "张小刚",
      AcquisitionTime: "24",
      information: "",
      nameAndPhone: "",
      processResult: ""
    },
    {
      WarningDate: "2016-10-01 12:12:12",
      TypesOf: "张小红",
      status: "张小红",
      AcquisitionTime: "30",
      information: "",
      nameAndPhone: "",
      processResult: ""
    },
    {
      WarningDate: "2016-10-01 12:12:12",
      TypesOf: "张小刚",
      status: "张小刚",
      AcquisitionTime: "24",
      information: "",
      nameAndPhone: "",
      processResult: ""
    },
    {
      WarningDate: "2016-10-01 12:12:12",
      TypesOf: "张小红",
      status: "张小红",
      AcquisitionTime: "30",
      information: "",
      nameAndPhone: "",
      processResult: ""
    }
  ]
};
export default options;
