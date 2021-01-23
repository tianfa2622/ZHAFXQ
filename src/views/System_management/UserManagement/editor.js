const fields = [
  {
    label: "用户名：",
    field: "name",
    type: "input",
    dataType: "string"
  },
  {
    label: "姓名：",
    field: "CommunityName:",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "状态：",
    field: "ownersName",
    type: "select",
    options: [
      {
        label: "正常",
        value: 0
      },
      {
        label: "禁用",
        value: 1
      }
    ]
  },
  {
    label: "所属单位：",
    field: "Telephone",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
  },
  {
    label: "更新时间：",
    field: "idCard1",
    type: "input",
    dataType: "string",
    hidden: ["edit", "view"]
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
