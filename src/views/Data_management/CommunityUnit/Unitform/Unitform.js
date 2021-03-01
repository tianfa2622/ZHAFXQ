const options = {
  rules: {},
  form: {
    inline: true,
    size: 'small'
  },
  itemColumns: [
    {
      span: 7,
      label: '',
      prop: 'area',
      type: 'area',
      level: 2
    },
    {
      span: 5,
      label: '小区名称:',
      prop: 'xqxxbz',
      type: 'text',
      clearable: true,
      class: ''
    },
    {
      span: 5,
      label: '法人姓名：',
      prop: 'djrXm',
      type: 'text',
      clearable: true,
      class: ''
    },
    {
      span: 5,
      label: '单位名称：',
      prop: 'dwmc',
      type: 'text',
      class: '',
      clearable: true
    },
    {
      span: 7,
      label: '统一社会信用代码：',
      prop: 'tyshxydm',
      type: 'text',
      class: '',
      clearable: true,
      style: 'text-align:center'
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
        methods: 'add',
        label: '新增'
      }
    ]
  }
}
export default options
