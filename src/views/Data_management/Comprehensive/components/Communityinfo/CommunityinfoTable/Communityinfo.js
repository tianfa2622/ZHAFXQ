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
      label: "楼栋编号",
      param: "BuildingNumber",
      align: "center"
    },
    {
      label: "楼栋名称",
      param: "BuildingName",
      align: "center"
    },
    {
      label: "建筑物层数 地面 | 地下",
      param: "NumberOfLayers",
      align: "center"
    },
    {
      label: "所含房屋数量",
      param: "NumberOfHouses",
      align: "center"
    },
    {
      label: "所含单元数",
      param: "NumberOfUnits",
      align: "center"
    },
    {
      label: "地下居住层数",
      param: "UndergroundFloor",
      align: "center"
    },
    {
      label: "建筑面积(㎡)",
      param: "builtupArea",
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
        methods: "Record",
        style: "color:rgba(26, 188, 156, 1)"
      },
      {
        label: "楼栋图片",
        type: "text",
        size: "mini",
        methods: "BuildingImg",
        style: "color:rgba(26, 188, 156, 1)"
      },
      {
        label: "单元信息",
        type: "text",
        size: "mini",
        methods: "BuildingInfo",
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
