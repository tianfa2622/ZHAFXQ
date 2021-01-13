const options = {
  size: "small",
  CardAttributes: {
    class: "mt-10 pb-30 h-100 flex1 posi-rel over-h",
    body: "height: 100%"
  },
  HeaderCellStyle: { background: " #f2f2f2 !important", color: "#fff" },
  // 表头数据
  tableColumns: [
    {
      label: "姓名",
      param: "name",
      align: "center"
    },
    {
      label: "身份证号码",
      param: "IDCardNumber",
      align: "center"
    },
    {
      label: "联系方式",
      param: "contact",
      align: "center"
    },
    {
      label: "民族",
      param: "national",
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
      name: "张三",
      IDCardNumber: "430111198107115034",
      contact: 15571239876,
      national: "汉"
    },
    {
      name: "李四",
      IDCardNumber: "430111198107115034",
      contact: 15571239876,
      national: "汉"
    },
    {
      name: "张三",
      IDCardNumber: "430111198107115034",
      contact: 15571239876,
      national: "汉"
    },
    {
      name: "李四",
      IDCardNumber: "430111198107115034",
      contact: 15571239876,
      national: "汉"
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
