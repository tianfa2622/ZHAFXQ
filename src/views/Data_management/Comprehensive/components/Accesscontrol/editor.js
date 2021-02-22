const fields = [
  {
    label: '门禁点编号：',
    field: 'mjdbh',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '门禁点名称：',
    field: 'mc',
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
    label: '行进方向：',
    field: 'xjfx',
    type: 'select',
    options: [
      {
        label: '进',
        value: '0'
      },
      {
        label: '出',
        value: '1'
      },
      {
        label: '进/出',
        value: '2'
      }
    ]
  },
  {
    label: '地球经度：',
    field: 'dqjd',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '地球纬度：',
    field: 'dqwd',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '楼栋单元：',
    field: 'lddyxxbzMc',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '登记人姓名：',
    field: 'djrXm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '登记人电话：',
    field: 'djrLxdh',
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
