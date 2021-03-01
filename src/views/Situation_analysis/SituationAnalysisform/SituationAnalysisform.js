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
      clearable: true
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
        methods: 'export',
        label: '导出'
      }
    ]
  }
}
export default options
