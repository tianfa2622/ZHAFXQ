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
      label: "姓名",
      param: "name",
      align: "center"
    },
    {
      label: "性别",
      param: "gender",
      align: "center",
      render: row => {
        if (row.gender === 0) {
          return "男";
        } else if (row.gender === 1) {
          return "女";
        }
      },
      class: () => {
        return "";
      }
    },
    {
      label: "民族",
      param: "national",
      align: "center"
    },
    {
      label: "联系电话",
      param: "contactNumber",
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
      name: "小花生",
      gender: 0,
      national: "汉",
      contactNumber: "18627555231",
      ControlReasons: "斗殴，贩毒"
    },
    {
      name: "小花生",
      gender: 1,
      national: "汉",
      contactNumber: "18627555231",
      ControlReasons: "自制枪械"
    },
    {
      name: "小花生",
      gender: 0,
      national: "汉",
      contactNumber: "18627555231",
      ControlReasons: "斗殴，贩毒"
    },
    {
      name: "小花生",
      gender: 1,
      national: "汉",
      contactNumber: "18627555231",
      ControlReasons: "自制枪械"
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
