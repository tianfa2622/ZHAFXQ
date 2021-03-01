const options = {
  rules: {},
  form: {
    inline: true,
    size: 'small'
  },
  itemColumns: [
    {
      span: 19,
      style: 'text-align:end',
      label: '',
      prop: 'operationTime',
      type: 'datetime',
      class: '',
      clearable: true,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
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
    }
  ],
  btnData: {
    span: 5,
    // style: "flex:auto;     text-align: start;",
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
