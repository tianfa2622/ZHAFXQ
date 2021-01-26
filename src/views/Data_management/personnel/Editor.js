// import { getselectOne } from "@/api/Data_management/personnel/index";
const fields = [
  {
    label: "照片：",
    span: 24,
    field: "xp",
    type: "avatar"
  },
  {
    label: "姓名：",
    field: "xm:",
    type: "input",
    dataType: "string"
  },
  {
    label: "曾用名：",
    field: "cym:",
    type: "input",
    dataType: "string"
  },
  {
    label: "性别",
    field: "xbdm",
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
    field: "gjdm",
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
    field: "djrGmsfzhm:",
    type: "input",
    dataType: "string"
  },
  {
    label: "民族：",
    field: "mzdm",
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
    field: "lxdh",
    type: "input",
    dataType: "string"
  },
  {
    label: "学历：",
    field: "xldm",
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
    field: "hkxzflydm",
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
    field: "jgssxdm",
    type: "input",
    dataType: "string"
  },
  {
    label: "户籍地址：",
    field: "hjdz",
    type: "input",
    dataType: "string"
  },
  {
    label: "户口类型",
    field: "hlxdm",
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
    field: "sjjzd",
    type: "input",
    dataType: "string"
  },
  {
    label: "宗教信仰：",
    field: "zjxydm:",
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
    field: "zzmmdm",
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
    field: "hyzkdm",
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
    field: "poXm",
    type: "input",
    dataType: "string"
  },
  {
    label: "配偶联系电话：",
    field: "poLxdh",
    type: "input",
    dataType: "string"
  },
  {
    label: "配偶身份证号：",
    field: "poGmsfzhm",
    type: "input",
    dataType: "string"
  },
  {
    label: "英文名：",
    field: "wwm",
    type: "input",
    dataType: "string"
  },
  {
    label: "联系电话：",
    field: "Lxdh",
    type: "input",
    dataType: "string"
  },
  {
    label: "名下机动车号牌号码：",
    field: "jdchphm:",
    type: "input",
    dataType: "string"
  },
  {
    label: "人员登记类型：",
    field: "rydjlx",
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
    field: "rkdjlx",
    type: "select",
    options: [
      {
        label: "流动",
        value: 2
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
    span: 24,
    field: "zaglxxssjwzrqdm",
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
