const fields = [
  {
    label: '车牌号码：',
    field: 'cphm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '品牌：',
    field: 'zwppmc',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '颜色：',
    field: 'clys',
    type: 'input',
    dataType: 'string'
    // options: [
    //   {
    //     label: "黑色",
    //     value: "0"
    //   },
    //   {
    //     label: "白色",
    //     value: "1"
    //   }
    // ]
  },
  {
    label: '车主姓名：',
    field: 'xm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '身份证号：',
    field: 'gmsfzhm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '联系电话：',
    field: 'lxdh',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '管控事由：',
    field: 'gksy',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '当前所在地：',
    field: 'jlxxqmc',
    type: 'input',
    dataType: 'string'
  }
]
export default fields
// [
//   {
//     label: "姓名",
//     field: "username",
//     type: "input",
//     dataType: "string",
//     required: true,
//     validateTrigger: "blur",
//     // rules: [
//     //   {required: true, message: '请输入姓名', trigger: 'blur'}
//     // ],
//     hidden: ["view"]
//   },
//   {
//     label: "性别",
//     field: "sex",
//     type: "select",
//     required: true,
//     options: [
//       {
//         label: "男",
//         value: 0
//       },
//       {
//         label: "女",
//         value: 1
//       }
//     ]
//   },
//   {
//     label: "年龄",
//     field: "age",
//     type: "input",
//     dataType: "number"
//   }
// ];
