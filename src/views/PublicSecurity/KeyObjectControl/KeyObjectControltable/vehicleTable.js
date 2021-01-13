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
      label: "车牌号",
      param: "numberPlate",
      align: "center"
    },
    {
      label: "品牌",
      param: "Brand",
      align: "center"
    },
    {
      label: "车辆颜色",
      param: "VehicleColor",
      align: "center"
    },
    {
      label: "车主姓名",
      param: "OwnersName",
      align: "center"
    },
    {
      label: "管控事由",
      param: "ControlReasons",
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
        methods: "toView"
      }
    ]
  },
  // 表格数据
  tableData: [
    {
      numberPlate: "湘A：LZ888",
      Brand: "JEEP牧马人",
      VehicleColor: "白",
      OwnersName: "小花生",
      ControlReasons: "02:00-03:30游荡5栋一单元门口"
    },
    {
      numberPlate: "湘A：LZ888",
      Brand: "JEEP牧马人",
      VehicleColor: "白",
      OwnersName: "小花生",
      ControlReasons: "02:00-03:30游荡5栋一单元门口"
    },
    {
      numberPlate: "湘A：LZ888",
      Brand: "JEEP牧马人",
      VehicleColor: "白",
      OwnersName: "小花生",
      ControlReasons: "02:00-03:30游荡5栋一单元门口"
    },
    {
      numberPlate: "湘A：LZ888",
      Brand: "JEEP牧马人",
      VehicleColor: "白",
      OwnersName: "小花生",
      ControlReasons: "02:00-03:30游荡5栋一单元门口"
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
