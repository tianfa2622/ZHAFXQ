const options = {
  rules: {},
  formData: {
    Name: '',
    IDNumber: '',
    AccessTime: ''
  },
  form: {
    inline: true,
    size: 'small'
  },
  itemColumns: [
    {
      span: 6,
      label: '姓名：',
      prop: 'Name',
      type: 'text',
      clearable: true,
      class: ''
    },
    {
      span: 6,
      label: '身份证号：',
      prop: 'IDNumber',
      type: 'text',
      clearable: true,
      class: ''
    },
    {
      span: 7,
      label: '访问时间：',
      prop: 'AccessTime',
      type: 'daterange',
      class: '',
      clearable: true,
      pickerOptions: {
        shortcuts: [
          {
            text: '本月',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()])
            }
          },
          {
            text: '今年至今',
            onClick(picker) {
              const end = new Date()
              const start = new Date(new Date().getFullYear(), 0)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近六个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setMonth(start.getMonth() - 6)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      }
    }
  ],
  btnData: {
    span: 5,
    style: 'flex:auto;     text-align: end;',
    BtndataList: [
      {
        type: 'success',
        style: '',
        size: 'small',
        methods: 'search',
        label: '搜索'
      }
    ]
  }
}
export default options
