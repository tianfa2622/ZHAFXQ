const options = {
  rules: {},
  form: {
    inline: true,
    size: 'small'
  },
  itemColumns: [
    {
      span: 7,
      label: '巡查预案名称：',
      prop: 'ycyaMc',
      type: 'text',
      clearable: true,
      class: ''
    },
    {
      span: 7,
      label: '关键词：',
      prop: 'gjc',
      type: 'text',
      clearable: true,
      class: ''
    },
    {
      span: 8,
      label: '录入时间：',
      prop: 'lrsj',
      type: 'datetimerange',
      class: '',
      clearable: true
    }
  ],
  btnData: {
    span: 22,
    style: 'text-align: end;',
    BtndataList: [
      {
        type: 'success',
        style: '',
        class: 'w100',
        size: 'small',
        methods: 'search',
        label: '搜索'
      },
      {
        type: 'primary',
        class: 'w100',
        style: '',
        size: 'small',
        methods: 'add',
        label: '新增'
      }
    ]
  }
}
export default options
