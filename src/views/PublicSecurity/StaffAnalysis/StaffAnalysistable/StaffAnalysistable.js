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
      label: "小区名称",
      param: "CommunityName",
      align: "center"
    },
    {
      label: "常住人口",
      param: "ResidentNum",
      align: "center"
    },
    {
      label: "常住人口比",
      param: "ResidentRatio",
      align: "center"
    },
    {
      label: "流动人口数",
      param: "flowNum",
      align: "center"
    },
    {
      label: "流动人口比",
      param: "flowRatio",
      align: "center"
    },
    {
      label: "重点人员数",
      param: "KeyPersonnelNum",
      align: "center"
    },
    {
      label: "重点人员比",
      param: "KeyPersonnelRatio",
      align: "center"
    }
  ],
  // 表格数据
  tableData: [{}, {}, {}],
  pagination: {
    isBackC: true,
    isShow: true,
    currentPage: 1,
    rows: 10,
    total: 20
  }
};
export default options;
