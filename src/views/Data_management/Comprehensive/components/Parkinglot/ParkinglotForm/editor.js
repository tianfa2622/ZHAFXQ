const fields = [
  {
    label: '车辆出入口编号：',
    field: 'clcrkbh',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '使用状态：',
    field: 'dyztdm',
    type: 'select',
    options: [
      {
        label: '正在使用',
        value: '123'
      },
      {
        label: '未使用',
        value: '124'
      }
    ]
  },
  {
    label: '车辆出入口位置类型：',
    field: 'clcrkwzlx',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '车辆出入口名称：',
    field: 'mc',
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
        value: '123'
      }
    ]
  },
  {
    label: '车辆出入口车道数：',
    field: 'sl',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '车辆出入口简要情况：',
    field: 'jyqk',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '车辆出入口图片：',
    field: 'tp',
    type: 'popover',
    dataType: 'string',
    disabled: true
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
  },
  {
    label: '数据更新时间：',
    field: 'gxsj',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '数据来源：',
    field: 'sjly',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '数据状态：',
    field: 'sjzt',
    type: 'input',
    dataType: 'string',
    span: 24
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
