const fields = [
  {
    label: '小区名称：',
    field: 'xqxxbz',
    type: 'select',
    options: [
      {
        label: '万家丽小区',
        value: 'xq001'
      },
      {
        label: '万丽小区',
        value: 'xq002'
      }
    ]
  },
  // {
  //   label: '车辆类别：',
  //   field: 'cllb',
  //   type: 'select',
  //   options: [
  //     {
  //       label: '机动车',
  //       value: 0
  //     },
  //     {
  //       label: '电动车',
  //       value: 1
  //     }
  //   ]
  // },
  {
    label: '车主姓名：',
    field: 'czXm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '车主联系电话：',
    field: 'czLxdh',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '车主身份证号码：',
    field: 'czGmsfzhm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '电动车车牌号码：',
    field: 'ddzxccphm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '电动自行车尺寸：',
    field: 'ddzxccc',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '中文品牌名称：',
    field: 'ddzxcpp',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '车辆长度：',
    field: 'cd',
    type: 'input',
    dataType: 'number'
  },
  {
    label: '车辆高度：',
    field: 'gd',
    type: 'input',
    dataType: 'number'
  },
  {
    label: '车辆宽度：',
    field: 'kd',
    type: 'input',
    dataType: 'number'
  },
  {
    label: '车辆体积(长*宽*高)：',
    field: 'cltj',
    type: 'input',
    dataType: 'string',
    disabled: true
    // hidden: ["edit", "add"]
  },
  {
    label: '电动车车身颜色：',
    field: 'wpysdm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '有无车牌：',
    field: 'ywcpPdbz',
    type: 'select',
    options: [
      {
        label: '有',
        value: '0'
      },
      {
        label: '无',
        value: '1'
      }
    ]
  },
  {
    label: '登记人姓名：',
    field: 'djrXm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '登记人电话号码：',
    field: 'djrLxdh',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '数据更新时间：',
    field: 'gxsj',
    type: 'input',
    dataType: 'string',
    hidden: ['edit', 'add']
  },
  {
    label: '数据来源：',
    field: 'sjly',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '数据状态：',
    // span: 24,
    field: 'sjzt',
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
