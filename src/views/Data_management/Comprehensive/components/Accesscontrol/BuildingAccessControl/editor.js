const fields = [
  {
    label: '姓名：',
    field: 'xm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '身份证号码：',
    field: 'gmsfzhm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '凭证号：',
    field: 'pzh',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '开门时间：',
    field: 'skRqsj',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '门磁状态：',
    field: 'mczt',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '是否通过：',
    field: 'sftgPdbz',
    type: 'select',
    options: [
      {
        label: '是',
        value: '0'
      },
      {
        label: '否',
        value: '1'
      }
    ]
  },
  {
    label: '开门方式：',
    field: 'kmfsdm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '开门结果：',
    field: 'kmjg',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '开门刷卡次数：',
    field: 'kmskcs',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '门禁时间类型：',
    field: 'mjsjlx',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '关联门禁采集设备：',
    field: 'gldmjCjsbxxbz',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '关联抓拍采集设备：',
    field: 'gldzpjCjsbxxbz',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '采集时间：',
    span: 24,
    field: 'cjsj',
    type: 'input',
    dataType: 'string'
  }
  // {
  //   label: "身份证号",
  //   field: "motorVehicle",
  //   type: "select",
  //   options: [
  //     {
  //       label: "机动车",
  //       value: 0
  //     },
  //     {
  //       label: "电动车",
  //       value: 1
  //     }
  //   ]
  // },
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
