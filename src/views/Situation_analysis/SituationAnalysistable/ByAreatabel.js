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
      label: "重点人员",
      param: "KeyPersonnel",
      align: "center"
    },
    {
      label: "重点车辆",
      param: "KeyVehicle",
      align: "center"
    },
    {
      label: "人员异常",
      param: "PersonnelException",
      align: "center"
    },
    {
      label: "车辆异常",
      param: "AbnormalVehicle",
      align: "center"
    },
    {
      label: "聚集异常",
      param: "AggregationAnomaly",
      align: "center"
    }
  ],
  // 表格数据
  tableData: [
    // {
    //   CommunityName: "",
    //   KeyPersonnel: "",
    //   KeyVehicle: ""
    //   PersonnelException: "",
    //   AbnormalVehicle: "",
    //   AggregationAnomaly: "",
    // }
    {},
    {},
    {},
    {}
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
