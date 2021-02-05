const fields = [
  {
    label: "",
    field: "djrlbz",
    type: "image",
    style: "width: 200px; height: 200px",
    title: "设备抓拍照"
  },
  {
    label: "",
    field: "djzjzbz",
    type: "image",
    style: "width: 200px; height: 200px",
    title: "证件照"
  },
  {
    label: "姓名：",
    field: "fkxxXm",
    type: "input",
    dataType: "string"
  },
  {
    label: "身份证号码：",
    field: "fkxxGmsfzhm",
    type: "input",
    dataType: "string"
  },
  {
    label: "联系电话：",
    field: "fkxxLxdh",
    type: "input",
    dataType: "string"
  },
  {
    label: "机动车号牌号码：",
    field: "fkxxJdchphm",
    type: "input",
    dataType: "string"
  },
  {
    label: "访问房屋：",
    field: "fwFjbh",
    type: "input",
    dataType: "string"
  },
  {
    label: "事由：",
    field: "fwSy",
    type: "input",
    dataType: "string"
  },
  {
    label: "访问日期时间：",
    field: "fwRqsj",
    type: "input",
    dataType: "string"
  },
  {
    label: "访问人：",
    field: "fwXm",
    type: "input",
    dataType: "string"
  },
  {
    label: "采集设备IP地址：",
    field: "cjsbxxbz",
    type: "input",
    dataType: "string"
  },
  {
    label: "认证验证是否通过：",
    field: "rzhysftgPdbz",
    type: "select",
    options: [
      {
        label: "通过",
        value: "0"
      },
      {
        label: "未通过",
        value: "1"
      }
    ]
  },
  {
    label: "是否为关注人：",
    field: "sfgzryPdbz",
    type: "select",
    options: [
      {
        label: "是",
        value: "0"
      },
      {
        label: "否",
        value: "1"
      }
    ]
  },
  {
    label: "采集时间：",
    field: "cjsj",
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
