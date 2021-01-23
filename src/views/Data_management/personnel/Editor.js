const fields = [
  {
    label: "姓名：",
    field: "CommunityName1:",
    type: "input",
    dataType: "string"
  },
  {
    label: "曾用名：",
    field: "CommunityName:",
    type: "input",
    dataType: "string"
  },
  {
    label: "性别",
    field: "sex",
    type: "select",
    options: [
      {
        label: "男",
        value: 0
      },
      {
        label: "女",
        value: 1
      }
    ]
  },
  {
    label: "国籍",
    field: "sex",
    type: "select",
    options: [
      {
        label: "中国",
        value: 0
      },
      {
        label: "美国",
        value: 1
      }
    ]
  },
  {
    label: "身份证号：",
    field: "CommunityName:",
    type: "input",
    dataType: "string"
  },
  {
    label: "民族：",
    field: "sex",
    type: "select",
    options: [
      {
        label: "汉族",
        value: 0
      },
      {
        label: "苗族",
        value: 1
      }
    ]
  },
  {
    label: "联系电话：",
    field: "ownersName",
    type: "input",
    dataType: "string"
  },
  {
    label: "学历：",
    field: "sex",
    type: "select",
    options: [
      {
        label: "本科",
        value: 0
      },
      {
        label: "大专",
        value: 1
      }
    ]
  },
  {
    label: "户口性质：",
    field: "sex",
    type: "select",
    options: [
      {
        label: "城市户口",
        value: 0
      },
      {
        label: "农村户口",
        value: 1
      }
    ]
  },
  {
    label: "籍贯：",
    field: "Telephone",
    type: "input",
    dataType: "string"
  },
  {
    label: "户籍地址：",
    field: "idCard",
    type: "input",
    dataType: "string"
  },
  {
    label: "户口类型",
    field: "motorVehicle",
    type: "select",
    options: [
      {
        label: "城镇居民户口",
        value: 0
      },
      {
        label: "农村居民户口",
        value: 1
      }
    ]
  },
  {
    label: "实际居住地：",
    field: "Licenseplate",
    type: "input",
    dataType: "string"
  },
  {
    label: "宗教信仰：",
    field: "licensePlate:",
    type: "select",
    options: [
      {
        label: "佛教",
        value: 0
      },
      {
        label: "伊斯兰教",
        value: 1
      }
    ]
  },
  {
    label: "政治面貌：",
    field: "NumberPlateColor:",
    type: "select",
    options: [
      {
        label: "群众",
        value: 0
      },
      {
        label: "中共党员",
        value: 1
      }
    ]
  },
  {
    label: "婚姻状况：",
    type: "select",
    options: [
      {
        label: "已婚",
        value: 0
      },
      {
        label: "未婚",
        value: 1
      }
    ]
  },
  {
    label: "配偶姓名：",
    field: "VehicleVolume",
    type: "input",
    dataType: "string"
  },
  {
    label: "配偶联系电话：",
    field: "ColorCar:",
    type: "input",
    dataType: "string"
  },
  {
    label: "配偶身份证号：",
    field: "VehicleModel",
    type: "input",
    dataType: "string"
  },
  {
    label: "英文名：",
    field: "BriefSituation",
    type: "input",
    dataType: "string"
  },
  {
    label: "联系电话：",
    field: "RegistrantName",
    type: "input",
    dataType: "string"
  },
  {
    label: "名下机动车号牌号码：",
    field: "RegistrantPhoneNumber:",
    type: "input",
    dataType: "string"
  },
  {
    label: "人员登记类型：",
    field: "DataSources",
    type: "select",
    options: [
      {
        label: "流动",
        value: 0
      },
      {
        label: "常住",
        value: 1
      }
    ],
    hidden: ["add", "edit"]
  },
  {
    label: "人口登记类型：",
    field: "DataStatus0",
    type: "select",
    options: [
      {
        label: "流动",
        value: 0
      },
      {
        label: "常住",
        value: 1
      }
    ],
    hidden: ["add", "edit"]
  },
  {
    label: "治安管理信息所属警务责任区：",
    field: "DataStatus1",
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
