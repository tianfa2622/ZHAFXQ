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
      label: "用户名",
      param: "userName",
      align: "center"
    },
    {
      label: "姓名",
      param: "Name",
      align: "center"
    },
    {
      label: "所属单位",
      param: "Affiliation",
      align: "center"
    },
    {
      label: "更新时间",
      param: "UpdateTime",
      align: "center"
    },
    {
      label: "状态",
      param: "status",
      align: "center"
    }
  ],
  tableOption: {
    label: "操作",
    align: "center",
    options: [
      {
        label: "权限",
        type: "text",
        size: "mini",
        methods: "Authority"
      },
      {
        label: "禁用",
        type: "text",
        size: "mini",
        methods: "Disable",
        condition: row => {
          return row.status === "正常";
        }
      },
      {
        label: "解禁",
        type: "text",
        size: "mini",
        methods: "Disable",
        condition: row => {
          return row.status === "禁用";
        }
      }
    ]
  },
  // 表格数据
  tableData: [
    {
      userName: "RNG丶UZI",
      Name: "简自豪",
      Affiliation: "RNG电子竞技俱乐部",
      UpdateTime: "2020-6-3 14:00",
      status: "正常"
    },
    {
      userName: "RNG丶Ming",
      Name: "史森明",
      Affiliation: "RNG电子竞技俱乐部",
      UpdateTime: "2020-6-3 14:00",
      status: "禁用"
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
