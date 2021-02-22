const fields = [
  {
    label: '发布类型：',
    field: 'fblx',
    type: 'select',
    options: [
      {
        label: '其他',
        value: '0'
      },
      {
        label: '机动车',
        value: '1'
      },
      {
        label: '电动车',
        value: '2'
      }
    ]
  },
  {
    label: '发布时间：',
    field: 'fbRqsj',
    type: 'datetime',
    valueFormat: 'yyyy-MM-dd HH:mm:ss',
    pickerOptions: {
      shortcuts: [
        {
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date())
          }
        },
        {
          text: '昨天',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        },
        {
          text: '一周前',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }
      ]
    }
  },
  {
    label: '发布方式：',
    field: 'fbfsdm',
    type: 'select',
    options: [
      {
        label: '网络',
        value: '0'
      },
      {
        label: '媒体',
        value: '1'
      }
    ]
  },
  {
    label: '发布内容：',
    field: 'fbnr',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '发布状态：',
    field: 'fbzt',
    type: 'select',
    options: [
      {
        label: '已发布',
        value: '0'
      },
      {
        label: '未发布',
        value: '1'
      }
    ]
  },
  {
    label: '安装地址：',
    field: 'azdzQhnxxdz',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '地球经度：',
    field: 'dqjd',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '地球纬度：',
    field: 'dqwd',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '发布人姓名：',
    field: 'fbrXm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '采集时间：',
    field: 'cjsj',
    type: 'datetime',
    valueFormat: 'yyyy-MM-dd HH:mm:ss',
    pickerOptions: {
      shortcuts: [
        {
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date())
          }
        },
        {
          text: '昨天',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        },
        {
          text: '一周前',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }
      ]
    }
  },
  {
    label: '采集系统信息：',
    span: 24,
    field: 'cjxtxxbz',
    type: 'input',
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
