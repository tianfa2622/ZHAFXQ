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
      label: "姓名",
      param: "personnelName",
      align: "center"
    },
    {
      label: "身份证号码",
      param: "IDCardNumber",
      align: "center"
    },
    {
      label: "是否为重点人员",
      param: "KeyPersonnel",
      align: "center",
      render: row => {
        if (row.KeyPersonnel === 0) {
          return "否";
        } else if (row.KeyPersonnel === 1) {
          return "是";
        }
      },
      class: row => {
        if (row.KeyPersonnel === 1) {
          return "status-No";
        } else if (row.KeyPersonnel === 0) {
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
        label: "处 理",
        type: "primary",
        size: "mini",
        methods: "dealWith",
        style: "background-color:#363636; border-color:#363636;",
        condition: row => {
          return row.KeyPersonnel === 0;
        }
      },
      {
        label: "未处理",
        type: "primary",
        size: "mini",
        methods: "dealWith",
        style: "background-color:#363636; border-color:#363636;",
        condition: row => {
          return row.KeyPersonnel === 1;
        }
      }
    ]
  },
  // 表格数据
  tableData: [
    {
      abnormalTime: "",
      personnelName: "张三",
      IDCardNumber: "466456862459861576",
      KeyPersonnel: 0,
      abnormalSituation: "02:00-03:30游荡5栋一单元门口",
      processResult: ""
    },
    {
      abnormalTime: "",
      personnelName: "张三",
      IDCardNumber: "466456862459861576",
      KeyPersonnel: 1,
      abnormalSituation: "02:00-03:30游荡5栋一单元门口",
      processResult: ""
    },
    {
      abnormalTime: "",
      personnelName: "张三",
      IDCardNumber: "466456862459861576",
      KeyPersonnel: 0,
      abnormalSituation: "02:00-03:30游荡5栋一单元门口",
      processResult: ""
    },
    {
      abnormalTime: "",
      personnelName: "张三",
      IDCardNumber: "466456862459861576",
      KeyPersonnel: 1,
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
