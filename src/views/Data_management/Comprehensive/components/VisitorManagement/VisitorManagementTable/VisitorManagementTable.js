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
      label: "访问时间",
      param: "AccessTime",
      align: "center"
    },
    {
      label: "姓名",
      param: "Name",
      align: "center"
    },
    {
      label: "身份证号码",
      param: "IDNumber",
      align: "center"
    },
    {
      label: "联系电话",
      param: "ContactNumber",
      align: "center"
    },
    {
      label: "机动车号牌号码",
      param: "MotorVehicleNumber",
      align: "center"
    },
    {
      label: "事由",
      param: "SubjectMatter",
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
        size: "mini",
        methods: "toView",
        style: "color:#1abc9c"
      }
    ]
  },
  // 表格数据
  tableData: [
    {
      AccessTime: "",
      Name: "张小刚",
      IDNumber: "2020-01-13",
      ContactNumber: "24",
      MotorVehicleNumber: "",
      SubjectMatter: ""
    },
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
