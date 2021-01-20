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
      label: "停车位编号",
      param: "ParkingSpaceNumber",
      align: "center"
    },
    {
      label: "车位类型",
      param: "ParkingType",
      align: "center"
    },
    {
      label: "车位归属类型",
      param: "ParkingSpaceOwnership",
      align: "center"
    },
    {
      label: "车位所有人名称",
      param: "VehicleOwner",
      align: "center"
    },
    {
      label: "楼层号",
      param: "FloorNumber",
      align: "center"
    },
    {
      label: "数据更新时间",
      param: "DataUpdateTime",
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
        methods: "Details"
      }
    ]
  },
  // 表格数据
  tableData: [
    {
      ParkingSpaceNumber: "张三",
      ParkingType: "湘A59SU2",
      ParkingSpaceOwnership: 15571239876,
      VehicleOwner: "电动车",
      FloorNumber: "辉煌国际",
      DataUpdateTime: ""
    },
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
