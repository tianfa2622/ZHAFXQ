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
      param: "CollectionTime",
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
      label: "凭证号",
      param: "VoucherNumber",
      align: "center"
    },
    {
      label: "开门时间",
      param: "OpeningHours",
      align: "center"
    },
    {
      label: "门磁状态",
      param: "DoorSensorStatus",
      align: "center"
    },
    {
      label: "关联门禁采集设备",
      param: "AcquisitionEquipment",
      align: "center"
    },
    {
      label: "是否通过",
      param: "Passed",
      align: "center"
    },
    {
      label: "开门方式",
      param: "DoorOpeningMethod",
      align: "center"
    },
    {
      label: "开门结果",
      param: "OpenResult",
      align: "center"
    }
  ],
  tableOption: {
    label: "操作",
    align: "center",
    options: [
      {
        label: "门禁记录",
        type: "text",
        size: "mini",
        methods: "record",
        style: "color:rgba(26, 188, 156, 1)"
      }
    ]
  },
  // 表格数据
  tableData: [
    {
      CollectionTime: "2020-10-1",
      Name: "张小刚",
      IDNumber: "24",
      VoucherNumber: "长沙市芙蓉区宽寓大厦",
      OpeningHours: "",
      DoorSensorStatus: "",
      AcquisitionEquipment: "",
      Passed: "",
      DoorOpeningMethod: "",
      OpenResult: ""
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