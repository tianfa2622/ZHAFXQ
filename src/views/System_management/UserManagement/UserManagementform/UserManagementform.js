const options = {
  rules: {},
  form: {
    inline: true,
    size: 'small'
  },
  itemColumns: [
    {
      span: 8,
      label: '',
      prop: 'area',
      type: 'area',
      level: 2
    },
    {
      span: 5,
      label: '用户名：',
      prop: 'userName',
      type: 'text',
      class: '',
      clearable: true
    },
    {
      span: 5,
      label: '姓名：',
      prop: 'realName',
      type: 'text',
      clearable: true,
      class: ''
    },
    {
      span: 6,
      label: '状态：',
      prop: 'state',
      type: 'select',
      class: '',
      clearable: true,
      options: [
        {
          label: '正常',
          value: '1'
        },
        {
          label: '禁用',
          value: '2'
        }
      ]
    }
  ],
  btnData: {
    span: 20,
    style: 'text-align: end;',
    BtndataList: [
      {
        type: 'success',
        style: '',
        size: 'small',
        class: 'w100',
        methods: 'search',
        label: '搜索'
      },
      {
        type: 'primary',
        style: '',
        class: 'w100',
        size: 'small',
        methods: 'add',
        label: '新增'
      }
    ]
  }
}
export default options
