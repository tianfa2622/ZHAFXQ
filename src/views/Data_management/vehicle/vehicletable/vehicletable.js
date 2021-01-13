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
      label: "车主姓名",
      param: "ownerName",
      align: "center"
    },
    {
      label: "车牌号码",
      param: "LicensePlateNumber",
      align: "center"
    },
    {
      label: "联系方式",
      param: "contact",
      align: "center"
    },
    {
      label: "车辆类别",
      param: "VehicleCategory",
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
        // size: "mini",
        methods: "toView"
      },
      {
        label: "编辑",
        type: "text",
        // size: "mini",
        methods: "editor"
      }
    ]
  },
  // 表格数据
  tableData: [
    {
      ownerName: "张三",
      LicensePlateNumber: "湘A59SU2",
      contact: 15571239876,
      VehicleCategory: "电动车"
    },
    {
      ownerName: "李四",
      LicensePlateNumber: "430111198107115034",
      contact: 15571239876,
      VehicleCategory: "自行车"
    },
    {
      ownerName: "张三",
      LicensePlateNumber: "430111198107115034",
      contact: 15571239876,
      VehicleCategory: "自行车"
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