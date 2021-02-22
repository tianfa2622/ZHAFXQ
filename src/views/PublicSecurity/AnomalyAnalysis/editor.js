const fields = [
  {
    label: '处理人：',
    span: 24,
    field: 'clr',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '处理时间：',
    span: 24,
    disabled: true,
    field: 'clsj',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '处理结果：',
    span: 24,
    field: 'cljg',
    type: 'textarea',
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
