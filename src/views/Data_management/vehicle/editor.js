const fields = [
  {
    label: "小区名称：",
    field: "CommunityName:",
    type: "input",
    dataType: "string"
  },
  {
    label: "车主姓名：",
    field: "ownersName",
    type: "input",
    dataType: "string"
  },
  {
    label: "车主联系电话：",
    field: "Telephone",
    type: "input",
    dataType: "string"
  },
  {
    label: "车主身份证号码：",
    field: "idCard",
    type: "input",
    dataType: "string"
  },
  {
    label: "机动车车牌号码：",
    field: "Licenseplate",
    type: "input",
    dataType: "string"
  },
  {
    label: "机动车车辆类型：",
    field: "motorVehicle",
    type: "select",
    options: [
      {
        label: "机动车",
        value: 0
      },
      {
        label: "电动车",
        value: 1
      }
    ]
  },
  {
    label: "机动车号牌种类：",
    field: "licensePlate:",
    type: "input",
    dataType: "string"
  },
  {
    label: "机动车号牌颜色：",
    field: "NumberPlateColor:",
    type: "input",
    dataType: "string"
  },
  {
    label: "中文品牌名称：",
    field: "ChineseBrandName:",
    type: "input",
    dataType: "string"
  },
  {
    label: "车辆体积(长*宽*高)：",
    field: "VehicleVolume",
    type: "input",
    dataType: "string"
  },
  {
    label: "机动车车身颜色：",
    field: "ColorCar:",
    type: "input",
    dataType: "string"
  },
  {
    label: "车辆型号：",
    field: "VehicleModel",
    type: "input",
    dataType: "string"
  },
  {
    label: "机动车简要情况：",
    field: "BriefSituation",
    type: "input",
    dataType: "string"
  },
  {
    label: "登记人姓名：",
    field: "RegistrantName",
    type: "input",
    dataType: "string"
  },
  {
    label: "登记人电话号码：",
    field: "RegistrantPhoneNumber:",
    type: "input",
    dataType: "string"
  },
  {
    label: "数据更新时间：",
    field: "DataUpdate:",
    type: "input",
    dataType: "string"
  },
  {
    label: "数据来源：",
    field: "DataSources",
    type: "input",
    dataType: "string"
  },
  {
    label: "数据状态：",
    field: "DataStatus",
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
