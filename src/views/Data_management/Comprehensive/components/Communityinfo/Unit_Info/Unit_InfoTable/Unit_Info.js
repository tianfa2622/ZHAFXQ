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
      label: "单元编号",
      param: "UnitNumber",
      align: "center"
    },
    {
      label: "单元名称",
      param: "UnitName",
      align: "center"
    },
    {
      label: "门户数量",
      param: "NumberOfPortals",
      align: "center"
    },
    {
      label: "建筑面积(㎡)",
      param: "constructionArea",
      align: "center"
    },
    {
      label: "地址",
      param: "Address",
      align: "center"
    }
  ],
  tableOption: {
    label: "操作",
    width: "180px",
    align: "center",
    options: [
      {
        label: "详情",
        type: "text",
        size: "mini",
        methods: "details",
        style: "color:rgba(26, 188, 156, 1)"
      },
      {
        label: "单元图片",
        type: "text",
        size: "mini",
        methods: "unitImg",
        style: "color:rgba(26, 188, 156, 1)"
      },
      {
        label: "房屋信息",
        type: "text",
        size: "mini",
        methods: "HousingInfo",
        style: "color:rgba(26, 188, 156, 1)"
      }
    ]
  },
  // 表格数据
  tableData: [
    {
      BuildingNumber: "2020-10-1",
      BuildingName: "张小刚",
      NumberOfLayers: "24",
      NumberOfHouses: "长沙市芙蓉区宽寓大厦",
      NumberOfUnits: "",
      UndergroundFloor: "",
      builtupArea: "",
      Address: ""
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
