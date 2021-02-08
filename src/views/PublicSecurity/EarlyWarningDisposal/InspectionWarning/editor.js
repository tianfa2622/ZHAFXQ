const fields = [
  {
    label: "小区：",
    span: 24,
    field: "xqxxbz",
    type: "select",
    options: [
      {
        label: "xq001",
        value: "xq001"
      },
      {
        label: "xq002",
        value: "xq002"
      },
      {
        label: "xq003",
        value: "xq003"
      },
      {
        label: "xq004",
        value: "xq004"
      }
    ],
    hidden: ["edit", "view"]
  },
  {
    label: "巡查预案名称：",
    span: 24,
    field: "ycyaMc",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "关键词：",
    span: 24,
    field: "gjc",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "录入时间：",
    span: 24,
    field: "lrsj",
    // type: "input",
    // dataType: "string",
    type: "datetime",
    valueFormat: "yyyy-MM-dd HH:mm:ss",
    hidden: ["edit", "view"]
  },
  {
    label: "简要情况：",
    span: 24,
    field: "jyqk",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "详细情况：",
    span: 24,
    field: "xxqk",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "电子文件URL：",
    span: 24,
    field: "dzwjurl",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "登记人姓名：",
    span: 24,
    field: "djrXm",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "登记人联系电话：",
    span: 24,
    field: "djrLxdh",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "处理人：",
    span: 24,
    field: "clr",
    type: "input",
    dataType: "string",
    hidden: ["add"]
  },
  {
    label: "处理结果：",
    span: 24,
    field: "cljg",
    type: "textarea",
    dataType: "string",
    hidden: ["add"]
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
];
export default fields;
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
