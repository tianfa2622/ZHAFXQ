const options = {
  rules: {},
  formData: {
    area: [],
    Date: ''
  },
  form: {
    inline: true,
    size: 'small'
  },
  itemColumns: [
    {
      span: 9,
      label: '',
      prop: 'area',
      type: 'area',
      level: 2
    },
    {
      span: 9,
      label: '',
      prop: 'Date',
      type: 'daterange',
      class: '',
      clearable: true,
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
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
      },
      {
        type: 'primary',
        style: '',
        size: 'small',
        methods: 'Increase',
        label: '导出'
      }
    ]
  }
}
export default options
