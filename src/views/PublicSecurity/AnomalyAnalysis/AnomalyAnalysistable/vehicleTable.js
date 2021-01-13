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
      label: "异常时间",
      param: "abnormalTime",
      align: "center"
    },
    {
      label: "车牌号",
      param: "numberPlate",
      align: "center"
    },
    {
      label: "车辆品牌",
      param: "VehicleBrands",
      align: "center"
    },
    {
      label: "车辆颜色",
      param: "VehicleColor",
      align: "center"
    },
    {
      label: "是否为重点车辆",
      param: "KeyVehicle",
      align: "center",
      render: row => {
        if (row.KeyVehicle === 0) {
          return "否";
        } else if (row.KeyVehicle === 1) {
          return "是";
        }
      },
      class: row => {
        if (row.KeyVehicle === 1) {
          return "status-No";
        } else if (row.KeyVehicle === 0) {
          return "status-Yes";
        }
      }
    },
    {
      label: "异常情况",
      param: "abnormalSituation",
      align: "center"
    },
    {
      label: "处理结果",
      param: "processResult",
      align: "center"
    }
  ],
  tableOption: {
    label: "操作",
    align: "center",
    options: [
      {
        label: "处理",
        type: "primary",
        size: "mini",
        methods: "dealWith",
        style: "background-color:#363636; border-color:#363636;"
      }
    ]
  },
  // 表格数据
  tableData: [
    {
      abnormalTime: "",
      numberPlate: "湘A：LZ888",
      VehicleBrands: "JEEP牧马人",
      VehicleColor: "白",
      KeyVehicle: 0,
      abnormalSituation: "02:00-03:30游荡5栋一单元门口",
      processResult: ""
    },
    {
      abnormalTime: "",
      numberPlate: "湘A：LZ888",
      VehicleBrands: "JEEP牧马人",
      VehicleColor: "白",
      KeyVehicle: 1,
      abnormalSituation: "02:00-03:30游荡5栋一单元门口",
      processResult: ""
    },
    {
      abnormalTime: "",
      numberPlate: "湘A：LZ888",
      VehicleBrands: "JEEP牧马人",
      VehicleColor: "白",
      KeyVehicle: 0,
      abnormalSituation: "02:00-03:30游荡5栋一单元门口",
      processResult: ""
    },
    {
      abnormalTime: "",
      numberPlate: "湘A：LZ888",
      VehicleBrands: "JEEP牧马人",
      VehicleColor: "白",
      KeyVehicle: 1,
      abnormalSituation: "02:00-03:30游荡5栋一单元门口",
      processResult: ""
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
