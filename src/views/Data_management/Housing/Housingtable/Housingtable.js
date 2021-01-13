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
      label: "房屋编号",
      param: "HouseNumber",
      align: "center"
    },
    {
      label: "户主姓名",
      param: "Householder",
      align: "center"
    },
    {
      label: "户主身份证号码",
      param: "IDNumber",
      align: "center"
    },
    {
      label: "房屋类别",
      param: "HousingCategory",
      align: "center"
    },
    {
      label: "联系方式",
      param: "contactDetails",
      align: "center"
    },
    {
      label: "房屋地址",
      param: "HouseAddress",
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
        // size: "mini",
        methods: "toView",
        style: "color:#39c5aa"
      },
      {
        label: "编辑",
        type: "text",
        // size: "mini",
        methods: "editor",
        style: "color:#39c5aa"
      }
    ]
  },
  // 表格数据
  tableData: [
    {
      HouseNumber: "33",
      Householder: "张小刚",
      IDNumber: "430423122526254862",
      HousingCategory: "商用",
      contactDetails: "",
      HouseAddress: ""
    },
    {
      HouseNumber: "33",
      Householder: "张小刚",
      IDNumber: "430423122526254862",
      HousingCategory: "商用",
      contactDetails: "",
      HouseAddress: ""
    },
    {
      HouseNumber: "33",
      Householder: "张小刚",
      IDNumber: "430423122526254862",
      HousingCategory: "商用",
      contactDetails: "",
      HouseAddress: ""
    },
    {
      HouseNumber: "33",
      Householder: "张小刚",
      IDNumber: "430423122526254862",
      HousingCategory: "商用",
      contactDetails: "",
      HouseAddress: ""
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
