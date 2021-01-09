const options = {
  // 表头数据
  tableColumns: [
    {
      label: "姓名",
      param: "OnDutyName",
      width: "90",
      align: "center"
    },
    {
      label: "常用证件",
      param: "CommonDocuments",
      width: "90",
      align: "center"
    },
    {
      label: "证件号码",
      param: "CertificateNum",
      width: "90",
      align: "center"
    },
    {
      label: "性别",
      param: "gender",
      render: row => {
        if (row.gender === 0) {
          return "女";
        } else if (row.gender === 1) {
          return "男";
        }
      },
      width: "90",
      align: "center"
    },
    {
      label: "民族",
      param: "nation",
      width: "90",
      align: "center"
    },
    {
      label: "联系电话",
      param: "contactNumber",
      width: "90",
      align: "center"
    },
    {
      label: "公安检查站",
      param: "CheckpointCategory",
      width: "90",
      align: "center"
    },
    {
      label: "更新时间",
      param: "UpdateTime",
      width: "90",
      align: "center"
    }
  ],
  // 表格操作
  tableOption: {
    label: "操作",
    align: "center",
    options: [
      // {
      //   label: '编辑',
      //   type: 'primary',
      //   size: 'mini',
      //   methods: 'del',
      //   class: 'btn'
      // },
      {
        label: "删除",
        type: "danger",
        size: "mini",
        methods: "del"
      }
    ]
  },
  // 表格数据
  tableData: [
    {
      OnDutyName: "张三",
      CommonDocuments: "身份证",
      CertificateNum: "11111111111111111",
      gender: 1,
      nation: "汉族",
      contactNumber: "12345689777",
      CheckpointCategory: "哒哒哒",
      UpdateTime: "2020/12/12 12:12:12"
    },
    {
      OnDutyName: "张三",
      CommonDocuments: "身份证",
      CertificateNum: "11111111111111111",
      gender: 1,
      nation: "汉族",
      contactNumber: "12345689777",
      CheckpointCategory: "哒哒哒",
      UpdateTime: "2020/12/12 12:12:12"
    },
    {
      OnDutyName: "张三",
      CommonDocuments: "身份证",
      CertificateNum: "11111111111111111",
      gender: 0,
      nation: "汉族",
      contactNumber: "12345689777",
      CheckpointCategory: "哒哒哒",
      UpdateTime: "2020/12/12 12:12:12"
    },
    {
      OnDutyName: "张三",
      CommonDocuments: "身份证",
      CertificateNum: "11111111111111111",
      gender: 0,
      nation: "汉族",
      contactNumber: "12345689777",
      CheckpointCategory: "哒哒哒",
      UpdateTime: "2020/12/12 12:12:12"
    },
    {
      OnDutyName: "张三",
      CommonDocuments: "身份证",
      CertificateNum: "11111111111111111",
      gender: 0,
      nation: "汉族",
      contactNumber: "12345689777",
      CheckpointCategory: "哒哒哒",
      UpdateTime: "2020/12/12 12:12:12"
    },
    {
      OnDutyName: "张三",
      CommonDocuments: "身份证",
      CertificateNum: "11111111111111111",
      gender: 0,
      nation: "汉族",
      contactNumber: "12345689777",
      CheckpointCategory: "哒哒哒",
      UpdateTime: "2020/12/12 12:12:12"
    },
    {
      OnDutyName: "张三",
      CommonDocuments: "身份证",
      CertificateNum: "11111111111111111",
      gender: 1,
      nation: "汉族",
      contactNumber: "12345689777",
      CheckpointCategory: "哒哒哒",
      UpdateTime: "2020/12/12 12:12:12"
    },
    {
      OnDutyName: "张三",
      CommonDocuments: "身份证",
      CertificateNum: "11111111111111111",
      gender: 1,
      nation: "汉族",
      contactNumber: "12345689777",
      CheckpointCategory: "哒哒哒",
      UpdateTime: "2020/12/12 12:12:12"
    },
    {
      OnDutyName: "张三",
      CommonDocuments: "身份证",
      CertificateNum: "11111111111111111",
      gender: 1,
      nation: "汉族",
      contactNumber: "12345689777",
      CheckpointCategory: "哒哒哒",
      UpdateTime: "2020/12/12 12:12:12"
    }
  ]
};
export default options;
