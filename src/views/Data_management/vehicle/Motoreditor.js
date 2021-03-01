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
    label: '机动车车牌号码：',
    field: 'jdchphm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '机动车车辆类型：',
    field: 'jdccllxdm',
    type: 'select',
    options: [
      {
        label: '货车',
        value: '0'
      },
      {
        label: '轿车',
        value: '1'
      }
    ]
  },
  {
    label: '机动车号牌种类：',
    field: 'jdchpzldm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '机动车号牌颜色：',
    field: 'jdchpysdm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '中文品牌名称：',
    field: 'zwppmc',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '车辆长度：',
    field: 'clcd',
    type: 'input',
    dataType: 'number'
  },
  {
    label: '车辆高度：',
    field: 'clgd',
    type: 'input',
    dataType: 'number'
  },
  {
    label: '车辆宽度：',
    field: 'clkd',
    type: 'input',
    dataType: 'number'
  },
  {
    label: '车辆体积(长*宽*高)：',
    field: 'cltj',
    type: 'input',
    disabled: true,
    dataType: 'string',
    hidden: ['edit', 'add']
  },
  {
    label: '机动车车身颜色：',
    field: 'jdccsysdm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '车辆型号：',
    field: 'clxh',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '机动车简要情况：',
    field: 'jyqk',
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
