const fields = [
  {
    label: "门禁点编号：",
    field: "name",
    type: "input",
    dataType: "string"
  },
  {
    label: "门禁点名称：",
    field: "name",
    type: "input",
    dataType: "string"
  },
  {
    label: "关联门禁采集设备：",
    field: "name",
    type: "input",
    dataType: "string"
  },
  {
    label: "关联抓拍采集设备：",
    field: "name",
    type: "input",
    dataType: "string"
  },
  {
    label: "行进方向：",
    field: "CommunityName:",
    type: "select",
    options: [
      {
        label: "进",
        value: 0
      },
      {
        label: "出",
        value: 1
      },
      {
        label: "进/出",
        value: 2
      }
    ]
  },
  {
    label: "地球经度：",
    field: "ownersName",
    type: "input",
    dataType: "string"
  },
  {
    label: "地球纬度：",
    field: "Telephone",
    type: "input",
    dataType: "string"
  },
  {
    label: "楼栋单元：",
    field: "idCard1",
    type: "input",
    dataType: "string"
  },
  {
    label: "登记人姓名及电话：",
    field: "idCard2",
    type: "input",
    dataType: "string"
  }
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
