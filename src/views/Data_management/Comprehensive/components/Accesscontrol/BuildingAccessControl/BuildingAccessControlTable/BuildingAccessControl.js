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
      param: "AccessControlNumber",
      align: "center"
    },
    {
      label: "姓名",
      param: "AccessControlName",
      align: "center"
    },
    {
      label: "身份证号码",
      param: "Acquisition",
      align: "center"
    },
    {
      label: "凭证号",
      param: "Capture",
      align: "center"
    },
    {
      label: "开门时间",
      param: "TravelDirection",
      align: "center"
    },
    {
      label: "门磁状态",
      param: "lng",
      align: "center"
    },
    {
      label: "关联门禁采集设备",
      param: "lat",
      align: "center"
    },
    {
      label: "是否通过",
      param: "BuildingUnit",
      align: "center"
    },
    {
      label: "开门方式",
      param: "RegistrantDH",
      align: "center"
    },
    {
      label: "开门结果",
      param: "RegistrantDH",
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
        methods: "Record",
        style: "color:rgba(26, 188, 156, 1)"
      }
    ]
  },
  // 表格数据
  tableData: [
    {
      AccessControlNumber: "2020-10-1",
      AccessControlName: "张小刚",
      Acquisition: "24",
      Capture: "长沙市芙蓉区宽寓大厦",
      TravelDirection: "",
      lng: "",
      lat: "",
      BuildingUnit: "",
      RegistrantDH: ""
    },
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
