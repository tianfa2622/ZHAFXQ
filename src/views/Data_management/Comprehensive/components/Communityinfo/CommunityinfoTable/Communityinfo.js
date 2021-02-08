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
      param: "ldbh",
      align: "center"
    },
    {
      label: "楼栋名称",
      param: "mc",
      align: "center"
    },
    {
      label: "建筑物层数 地面 | 地下",
      param: "jzwcs",
      align: "center"
    },
    {
      label: "所含房屋数量",
      param: "shfwSl",
      align: "center"
    },
    {
      label: "所含单元数",
      param: "shdySl",
      align: "center"
    },
    {
      label: "地下居住层数",
      param: "dxcjzJzwcs",
      align: "center"
    },
    {
      label: "建筑面积(㎡)",
      param: "jzMjpfm",
      align: "center"
    },
    {
      label: "地址",
      param: "dzmc",
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
        methods: "view",
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
  }
};
export default options;
