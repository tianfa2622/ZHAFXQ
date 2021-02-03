const fields = [
  {
    label: "预警日期：",
    span: 24,
    field: "yjRqsj",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "感知预警事件类型：",
    span: 24,
    field: "gzyjsjlx",
    type: "select",
    hidden: ["edit", "view"],
    options: [
      {
        label: "1",
        value: 1
      },
      {
        label: "2",
        value: 2
      }
    ]
  },
  {
    label: "预警状态：",
    span: 24,
    field: "yjzt",
    type: "select",
    hidden: ["edit", "view"],
    options: [
      {
        label: "1",
        value: 1
      },
      {
        label: "2",
        value: 2
      }
    ]
  },
  {
    label: "采集时间：",
    span: 24,
    field: "cjsj",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "采集系统信息：",
    span: 24,
    field: "cjxtxxbz",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "处理人姓名及电话：",
    span: 24,
    field: "clrXmDh",
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
    field: "ch1Cljg",
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
