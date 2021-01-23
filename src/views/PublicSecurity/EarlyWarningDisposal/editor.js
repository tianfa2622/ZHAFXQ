const fields = [
  {
    label: "巡查预案名称：",
    field: "name",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "关键词：",
    field: "CommunityName:",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "录入时间：",
    field: "ownersName",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "简要情况：",
    field: "Telephone",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "详细情况：",
    field: "idCard1",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "电子文件URL：",
    field: "idCard2",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "登记人姓名及电话：",
    field: "idCard3",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "处理人：",
    field: "idCard4",
    type: "input",
    dataType: "string",
    hidden: ["add"]
  },
  {
    label: "处理结果：",
    field: "idCard5",
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
